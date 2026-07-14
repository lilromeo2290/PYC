#!/usr/bin/env bash
# ─────────────────────────────────────────────────────────────────────────────
# push-to-github.sh — Commit & push the PYC Club project to GitHub.
#
# Reads the GitHub PAT from /home/z/my-project/.github-token (gitignored),
# injects it into the remote URL temporarily, pushes, then strips it back out
# so the token is never persisted in .git/config.
#
# Usage:
#   ./push-to-github.sh                       # auto message: "Update <date>"
#   ./push-to-github.sh "your commit message" # custom message
#   ./push-to-github.sh "msg" --no-edit       # skip worklog append
#
# Exit codes: 0 success · 1 token missing · 2 push failed
# ─────────────────────────────────────────────────────────────────────────────
set -euo pipefail

PROJECT_DIR="/home/z/my-project"
TOKEN_FILE="${PROJECT_DIR}/.github-token"
REPO_URL="https://github.com/lilromeo2290/PYC.git"
BRANCH="main"
WORKLOG="${PROJECT_DIR}/worklog.md"
NO_EDIT_WORKLOG="false"

# Parse args
COMMIT_MSG="${1:-}"
shift || true
if [[ "${1:-}" == "--no-edit" ]]; then NO_EDIT_WORKLOG="true"; fi

if [[ -z "$COMMIT_MSG" ]]; then
  COMMIT_MSG="Update PYC Club website — $(date -u '+%Y-%m-%d %H:%M UTC')"
fi

cd "$PROJECT_DIR"

# ─── 1. Load token ─────────────────────────────────────────────────────────
if [[ ! -f "$TOKEN_FILE" ]]; then
  echo "ERROR: Token file not found at $TOKEN_FILE"
  echo "Create it with:  echo 'ghp_xxx' > $TOKEN_FILE && chmod 600 $TOKEN_FILE"
  exit 1
fi

TOKEN="$(tr -d '[:space:]' < "$TOKEN_FILE")"
if [[ -z "$TOKEN" ]]; then
  echo "ERROR: Token file is empty."
  exit 1
fi

# Quick validity check (does NOT log the token)
echo "→ Verifying token…"
HTTP_CODE=$(curl -sS -o /dev/null -w "%{http_code}" \
  -H "Authorization: token ${TOKEN}" \
  https://api.github.com/user)
if [[ "$HTTP_CODE" != "200" ]]; then
  echo "ERROR: GitHub rejected the token (HTTP $HTTP_CODE)."
  echo "       Generate a new PAT at https://github.com/settings/tokens"
  echo "       (scopes needed: repo, workflow) and write it to $TOKEN_FILE."
  exit 1
fi
echo "  ✓ Token valid."

# ─── 2. Configure remote with token (transient) ────────────────────────────
echo "→ Configuring remote with token…"
git remote set-url origin "https://x-access-token:${TOKEN}@github.com/lilromeo2290/PYC.git"

# Always restore the clean URL on exit, even on failure
cleanup() {
  git -C "$PROJECT_DIR" remote set-url origin "$REPO_URL" 2>/dev/null || true
}
trap cleanup EXIT

# ─── 3. Stage + commit ─────────────────────────────────────────────────────
echo "→ Staging changes…"
git add -A

if git diff --cached --quiet; then
  echo "  ℹ Nothing to commit (working tree clean). Pushing anyway to sync…"
else
  echo "→ Committing: \"$COMMIT_MSG\""
  git commit -m "$COMMIT_MSG" --no-verify
fi

# ─── 4. Append to worklog BEFORE pushing ───────────────────────────────────
if [[ "$NO_EDIT_WORKLOG" == "false" ]]; then
  echo "→ Appending push record to worklog…"
  {
    echo ""
    echo "---"
    echo "## Push — $(date -u '+%Y-%m-%d %H:%M:%S UTC')"
    echo ""
    echo "- **Commit message:** $COMMIT_MSG"
    echo "- **Branch:** $BRANCH"
    echo "- **Author:** $(git config user.name) <$(git config user.email)>"
    echo "- **Commit SHA:** $(git rev-parse HEAD)"
    echo "- **Files changed:** $(git show --stat --oneline HEAD | tail -1)"
    echo "- **Repository:** https://github.com/lilromeo2290/PYC"
    echo ""
    echo "### Summary of changes in this push"
    echo ""
    echo '```'
    git show --stat --oneline HEAD | head -40
    echo '```'
  } >> "$WORKLOG"

  git add "$WORKLOG"
  git commit -m "worklog: record push $(date -u '+%Y-%m-%d %H:%M UTC')" --no-verify || true
fi

# ─── 5. Push ───────────────────────────────────────────────────────────────
echo "→ Pushing to origin/$BRANCH…"
if git push -u origin "$BRANCH" 2>&1; then
  echo ""
  echo "✓ Push successful."
  echo "  View at: https://github.com/lilromeo2290/PYC/commits/main"
  exit 0
else
  echo ""
  echo "✗ Push failed. Check the error above."
  exit 2
fi
