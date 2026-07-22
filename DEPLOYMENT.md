# PYC Club Website — Webuzo VPS Deployment Guide

This guide walks you through deploying the Progressive Youth Club website to a Webuzo VPS server.

## Prerequisites

- A Webuzo VPS with SSH access
- Node.js 18+ installed on the VPS (via Webuzo or manually)
- PM2 process manager installed
- Your domain pointed to the VPS IP address
- GitHub access to pull the repository

---

## Step 1: Install Node.js on the VPS (if not already installed)

### Via Webuzo Control Panel:
1. Log into Webuzo admin panel
2. Go to **App Manager → Node.js**
3. Install Node.js LTS (v20+)

### Via SSH (alternative):
```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs
```

Verify installation:
```bash
node --version  # Should show v20.x.x
npm --version   # Should show 10.x.x
```

## Step 2: Install PM2 (Process Manager)

```bash
sudo npm install -g pm2
```

Verify:
```bash
pm2 --version
```

## Step 3: Set Up the Project Directory

```bash
# Create directory for the app (adjust path as needed for your Webuzo setup)
mkdir -p /home/pycclub/public_html
cd /home/pycclub/public_html

# Create logs directory
mkdir -p /home/pycclub/logs
```

## Step 4: Clone the Repository

```bash
cd /home/pycclub/public_html

# Clone the repo
git clone https://github.com/lilromeo2290/PYC.git .
```

If you get a "directory not empty" error, the folder may have default Webuzo files. Remove them first:
```bash
rm -rf /home/pycclub/public_html/*
git clone https://github.com/lilromeo2290/PYC.git .
```

## Step 5: Configure Environment

```bash
# Copy the example env file
cp .env.example .env

# Edit the .env file
nano .env
```

Update these values:
```
NODE_ENV="production"
PORT=3000
NEXT_PUBLIC_SITE_URL="https://yourdomain.com"
```

Save and exit (Ctrl+O, Enter, Ctrl+X).

## Step 6: Install Dependencies

```bash
cd /home/pycclub/public_html
npm install
```

This may take 2-5 minutes.

## Step 7: Build the Production Version

```bash
npm run build
```

This creates the `.next` folder with the optimized production build. Should take 1-2 minutes.

## Step 8: Start the App with PM2

```bash
# Start the app
pm2 start ecosystem.config.cjs

# Save PM2 process list (so it restarts on reboot)
pm2 save

# Enable PM2 to start on boot
pm2 startup
```

Follow the instructions PM2 prints out (it will ask you to run a sudo command).

## Step 9: Verify the App is Running

```bash
# Check PM2 status
pm2 status

# Check logs for errors
pm2 logs pyc-club

# Test the app locally
curl http://localhost:3000
```

You should see HTML output. If you see an error, check the logs:
```bash
pm2 logs pyc-club --lines 50
```

## Step 10: Configure Nginx Reverse Proxy (via Webuzo)

Webuzo uses Nginx. You need to proxy requests from port 80/443 to port 3000.

### Option A: Via Webuzo Panel
1. Log into Webuzo
2. Go to **Webuzo Addons → Nginx**
3. Add a new server block for your domain
4. Add this location block:
```nginx
location / {
    proxy_pass http://127.0.0.1:3000;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_cache_bypass $http_upgrade;
}
```

### Option B: Via SSH
```bash
# Create Nginx config
nano /etc/nginx/conf.d/pycclub.conf
```

Add:
```nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }

    # Serve static files directly for better performance
    location /_next/static/ {
        alias /home/pycclub/public_html/.next/static/;
        expires 365d;
        access_log off;
    }

    location /gallery/ {
        alias /home/pycclub/public_html/public/gallery/;
        expires 30d;
        access_log off;
    }
}
```

Test and reload Nginx:
```bash
sudo nginx -t
sudo systemctl reload nginx
```

## Step 11: Install SSL Certificate (Let's Encrypt)

### Via Webuzo:
1. Go to **Webuzo → SSL**
2. Select your domain
3. Click **Install Let's Encrypt SSL**

### Via SSH:
```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
```

## Step 12: Final Verification

1. Visit `https://yourdomain.com` in your browser
2. The PYC Club website should load
3. Test all pages: Home, About Us, Gallery, Contact, etc.
4. Check that images load correctly

---

## Updating the Website

When you make changes and push to GitHub, update the VPS:

```bash
cd /home/pycclub/public_html

# Pull latest changes
git pull origin main

# Install any new dependencies
npm install

# Rebuild
npm run build

# Restart the app
pm2 restart pyc-club
```

Or use the deploy script:
```bash
npm run deploy
```

## Useful Commands

```bash
# Check app status
pm2 status

# View logs
pm2 logs pyc-club

# Restart app
pm2 restart pyc-club

# Stop app
pm2 stop pyc-club

# Monitor resources
pm2 monit

# Reload Nginx after config changes
sudo systemctl reload nginx
```

## Troubleshooting

### App won't start
```bash
pm2 logs pyc-club --lines 50
```
Check for missing dependencies or build errors.

### 502 Bad Gateway
The app isn't running. Check:
```bash
pm2 status
pm2 restart pyc-club
```

### Images not loading
Make sure the `public/gallery/` folder exists and has images:
```bash
ls -la /home/pycclub/public_html/public/gallery/events/
```

### Port already in use
Change the port in `.env` and `ecosystem.config.cjs`, then restart:
```bash
pm2 restart pyc-club
```

### Permission issues
```bash
sudo chown -R pycclub:pycclub /home/pycclub/public_html
```

---

## File Structure on VPS

```
/home/pycclub/
├── public_html/          # Your app lives here
│   ├── .next/            # Built production files
│   ├── public/           # Static assets (images, logos)
│   │   └── gallery/      # Gallery images
│   ├── src/              # Source code
│   ├── ecosystem.config.cjs  # PM2 config
│   ├── .env              # Environment variables
│   └── package.json
└── logs/                 # PM2 logs
    ├── out.log
    └── err.log
```

## Need Help?

If you encounter issues, check:
1. PM2 logs: `pm2 logs pyc-club`
2. Nginx error log: `sudo tail -f /var/log/nginx/error.log`
3. Node version: `node --version` (must be 18+)
4. Disk space: `df -h`
