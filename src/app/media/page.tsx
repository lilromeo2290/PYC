"use client";

import * as React from "react";
import {
  Upload,
  Images,
  CheckCircle2,
  XCircle,
  Loader2,
  FolderOpen,
  ArrowRight,
} from "lucide-react";
import { Navbar } from "@/components/pyc/navbar";
import { Footer } from "@/components/pyc/footer";
import { FloatingActions } from "@/components/pyc/floating-actions";
import { useScrollReveal } from "@/components/pyc/use-scroll-reveal";
import { PYCButton } from "@/components/pyc/button";
import { cn } from "@/lib/utils";

const CATEGORIES = [
  { value: "events", label: "Events" },
  { value: "community", label: "Community" },
  { value: "education", label: "Education" },
  { value: "health", label: "Health" },
  { value: "environment", label: "Environment" },
];

interface UploadResult {
  name: string;
  path: string;
  size: number;
}

interface FileStatus {
  file: File;
  status: "pending" | "uploading" | "success" | "error";
  message?: string;
  result?: UploadResult;
}

export default function MediaPage() {
  useScrollReveal();
  const [selectedFiles, setSelectedFiles] = React.useState<FileStatus[]>([]);
  const [category, setCategory] = React.useState("events");
  const [uploading, setUploading] = React.useState(false);
  const [galleryStats, setGalleryStats] = React.useState<{
    total: number;
    counts: Record<string, number>;
  } | null>(null);
  const [dragActive, setDragActive] = React.useState(false);
  const inputRef = React.useRef<HTMLInputElement>(null);

  // Fetch current gallery stats
  const fetchStats = React.useCallback(async () => {
    try {
      const res = await fetch("/api/upload");
      if (res.ok) {
        const data = await res.json();
        setGalleryStats(data);
      }
    } catch {
      // ignore
    }
  }, []);

  React.useEffect(() => {
    fetchStats();
  }, [fetchStats]);

  const handleFiles = (files: FileList | null) => {
    if (!files) return;
    const newFiles: FileStatus[] = Array.from(files)
      .filter((f) => f.type.startsWith("image/"))
      .map((f) => ({ file: f, status: "pending" as const }));
    setSelectedFiles((prev) => [...prev, ...newFiles]);
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    handleFiles(e.dataTransfer.files);
  };

  const removeFile = (index: number) => {
    setSelectedFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const uploadAll = async () => {
    if (selectedFiles.length === 0) return;
    setUploading(true);

    const formData = new FormData();
    formData.append("category", category);

    const pendingFiles = selectedFiles.filter((f) => f.status === "pending");
    for (const fileStatus of pendingFiles) {
      formData.append("files", fileStatus.file);
    }

    // Mark all as uploading
    setSelectedFiles((prev) =>
      prev.map((f) => (f.status === "pending" ? { ...f, status: "uploading" } : f))
    );

    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (res.ok && data.success) {
        // Mark all as success
        setSelectedFiles((prev) =>
          prev.map((f, i) => {
            const result = data.images?.[i];
            return {
              ...f,
              status: "success" as const,
              message: result ? `${result.size}KB` : "Uploaded",
              result,
            };
          })
        );
        fetchStats();
      } else {
        setSelectedFiles((prev) =>
          prev.map((f) => ({
            ...f,
            status: "error" as const,
            message: data.error || "Upload failed",
          }))
        );
      }
    } catch (err) {
      setSelectedFiles((prev) =>
        prev.map((f) => ({
          ...f,
          status: "error" as const,
          message: "Network error",
        }))
      );
    } finally {
      setUploading(false);
    }
  };

  const clearAll = () => {
    setSelectedFiles([]);
  };

  const pendingCount = selectedFiles.filter((f) => f.status === "pending").length;
  const successCount = selectedFiles.filter((f) => f.status === "success").length;
  const errorCount = selectedFiles.filter((f) => f.status === "error").length;

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        {/* Hero banner */}
        <section className="relative isolate overflow-hidden bg-[#0B1130] py-20 md:py-28">
          <div
            aria-hidden
            className="absolute inset-0 -z-10"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 30%, rgba(39,65,181,0.55) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(212,175,55,0.25) 0%, transparent 45%)",
            }}
          />
          <div className="section-pad relative text-center">
            <div className="reveal inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#E8C766]">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              Media Manager
            </div>
            <h1 className="reveal reveal-delay-1 mt-6 font-display text-4xl font-extrabold leading-tight text-white md:text-5xl lg:text-6xl">
              Upload <span className="text-gold">Gallery Images</span>
            </h1>
            <p className="reveal reveal-delay-2 mt-5 max-w-2xl mx-auto text-lg text-white/75">
              Upload photos directly to the PYC Club gallery from your browser.
              Images are automatically optimized and added to the gallery.
            </p>
          </div>
        </section>

        {/* Upload section */}
        <section className="bg-surface py-16 md:py-24">
          <div className="section-pad">
            <div className="mx-auto max-w-4xl">
              {/* Gallery stats */}
              {galleryStats && (
                <div className="reveal mb-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
                  <div className="rounded-2xl bg-white border border-[#E3E8F2] p-4 text-center shadow-premium">
                    <p className="font-display text-2xl font-extrabold text-brand">
                      {galleryStats.total}
                    </p>
                    <p className="text-xs text-[#5A6485] uppercase tracking-wider">
                      Total
                    </p>
                  </div>
                  {CATEGORIES.map((cat) => (
                    <div
                      key={cat.value}
                      className="rounded-2xl bg-white border border-[#E3E8F2] p-4 text-center shadow-premium"
                    >
                      <p className="font-display text-2xl font-extrabold text-[#0E1530]">
                        {galleryStats.counts[cat.value] || 0}
                      </p>
                      <p className="text-xs text-[#5A6485] uppercase tracking-wider">
                        {cat.label}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {/* Category selector */}
              <div className="reveal mb-6">
                <label className="block text-sm font-semibold text-[#0E1530] mb-2">
                  Select Category
                </label>
                <div className="flex flex-wrap gap-2">
                  {CATEGORIES.map((cat) => (
                    <button
                      key={cat.value}
                      onClick={() => setCategory(cat.value)}
                      className={cn(
                        "rounded-full px-5 py-2 text-sm font-semibold transition-all",
                        category === cat.value
                          ? "bg-brand text-white shadow-premium"
                          : "bg-white text-[#5A6485] border border-[#E3E8F2] hover:bg-brand-soft/10 hover:text-brand"
                      )}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Drop zone */}
              <div
                onDragEnter={handleDrag}
                onDragOver={handleDrag}
                onDragLeave={handleDrag}
                onDrop={handleDrop}
                onClick={() => inputRef.current?.click()}
                className={cn(
                  "reveal relative cursor-pointer rounded-3xl border-2 border-dashed p-12 text-center transition-all",
                  dragActive
                    ? "border-brand bg-brand-soft/10"
                    : "border-[#E3E8F2] bg-white hover:border-brand/40 hover:bg-surface"
                )}
              >
                <input
                  ref={inputRef}
                  type="file"
                  multiple
                  accept="image/jpeg,image/png,image/webp"
                  className="hidden"
                  onChange={(e) => handleFiles(e.target.files)}
                />
                <div className="inline-flex size-16 items-center justify-center rounded-2xl brand-gradient text-white shadow-premium mb-4">
                  <Upload className="size-8" />
                </div>
                <h3 className="font-display text-xl font-bold text-[#0E1530]">
                  Drop images here or click to browse
                </h3>
                <p className="mt-2 text-sm text-[#5A6485]">
                  Supports JPG, PNG, WebP — up to 10MB per file
                </p>
                <p className="mt-1 text-xs text-[#5A6485]/70">
                  Images are automatically resized to 1200px and compressed
                </p>
              </div>

              {/* Selected files */}
              {selectedFiles.length > 0 && (
                <div className="reveal mt-6">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-display text-lg font-bold text-[#0E1530]">
                      {selectedFiles.length} file{selectedFiles.length === 1 ? "" : "s"} selected
                    </h4>
                    <div className="flex gap-2">
                      <button
                        onClick={clearAll}
                        className="text-sm text-[#5A6485] hover:text-red-600 transition-colors"
                      >
                        Clear all
                      </button>
                    </div>
                  </div>

                  {/* File list */}
                  <div className="space-y-2 max-h-64 overflow-y-auto thin-scroll rounded-2xl bg-white border border-[#E3E8F2] p-3">
                    {selectedFiles.map((fileStatus, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 rounded-xl bg-surface p-3"
                      >
                        {/* Thumbnail */}
                        <div className="size-12 rounded-lg overflow-hidden bg-[#E3E8F2] shrink-0">
                          <img
                            src={URL.createObjectURL(fileStatus.file)}
                            alt={fileStatus.file.name}
                            className="h-full w-full object-cover"
                          />
                        </div>

                        {/* File info */}
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-[#0E1530] truncate">
                            {fileStatus.file.name}
                          </p>
                          <p className="text-xs text-[#5A6485]">
                            {(fileStatus.file.size / 1024).toFixed(0)}KB
                            {fileStatus.message && ` · ${fileStatus.message}`}
                          </p>
                        </div>

                        {/* Status icon */}
                        <div className="shrink-0">
                          {fileStatus.status === "pending" && (
                            <span className="text-xs text-[#5A6485]">Pending</span>
                          )}
                          {fileStatus.status === "uploading" && (
                            <Loader2 className="size-5 text-brand animate-spin" />
                          )}
                          {fileStatus.status === "success" && (
                            <CheckCircle2 className="size-5 text-green-600" />
                          )}
                          {fileStatus.status === "error" && (
                            <XCircle className="size-5 text-red-600" />
                          )}
                        </div>

                        {/* Remove button */}
                        {fileStatus.status === "pending" && (
                          <button
                            onClick={() => removeFile(index)}
                            className="text-[#5A6485] hover:text-red-600 transition-colors"
                            aria-label="Remove file"
                          >
                            <XCircle className="size-5" />
                          </button>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Upload button */}
                  {pendingCount > 0 && (
                    <div className="mt-4 flex items-center justify-between">
                      <p className="text-sm text-[#5A6485]">
                        {pendingCount} file{pendingCount === 1 ? "" : "s"} ready to upload to{" "}
                        <strong className="text-brand">
                          {CATEGORIES.find((c) => c.value === category)?.label}
                        </strong>
                      </p>
                      <PYCButton
                        onClick={uploadAll}
                        disabled={uploading}
                        variant="primary"
                        size="lg"
                      >
                        {uploading ? (
                          <>
                            <Loader2 className="size-4 animate-spin" />
                            Uploading...
                          </>
                        ) : (
                          <>
                            <Upload className="size-4" />
                            Upload {pendingCount} Image{pendingCount === 1 ? "" : "s"}
                          </>
                        )}
                      </PYCButton>
                    </div>
                  )}

                  {/* Success message */}
                  {successCount > 0 && pendingCount === 0 && !uploading && (
                    <div className="mt-4 rounded-2xl bg-green-50 border border-green-200 p-4 text-center">
                      <CheckCircle2 className="size-8 text-green-600 mx-auto mb-2" />
                      <p className="font-semibold text-green-800">
                        {successCount} image{successCount === 1 ? "" : "s"} uploaded successfully!
                      </p>
                      <p className="text-sm text-green-700 mt-1">
                        The gallery has been updated.{" "}
                        <a href="/gallery" className="underline font-semibold">
                          View Gallery
                        </a>
                      </p>
                    </div>
                  )}

                  {/* Error message */}
                  {errorCount > 0 && (
                    <div className="mt-4 rounded-2xl bg-red-50 border border-red-200 p-4 text-center">
                      <XCircle className="size-8 text-red-600 mx-auto mb-2" />
                      <p className="font-semibold text-red-800">
                        {errorCount} upload{errorCount === 1 ? "" : "s"} failed
                      </p>
                      <p className="text-sm text-red-700 mt-1">
                        Please try again or contact support.
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* Tips */}
              <div className="reveal mt-8 rounded-2xl bg-brand-gradient-soft border border-brand/10 p-6">
                <h4 className="font-display text-base font-bold text-[#0E1530] mb-3">
                  Upload Tips
                </h4>
                <ul className="space-y-2 text-sm text-[#5A6485]">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-4 text-brand mt-0.5 shrink-0" />
                    Images are automatically resized to 1200px wide and compressed to ~150KB
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-4 text-brand mt-0.5 shrink-0" />
                    Select the appropriate category before uploading
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-4 text-brand mt-0.5 shrink-0" />
                    You can upload multiple images at once (drag and drop or select multiple)
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-4 text-brand mt-0.5 shrink-0" />
                    After uploading, visit the{" "}
                    <a href="/gallery" className="text-brand font-semibold underline">
                      Gallery page
                    </a>{" "}
                    to see your photos
                  </li>
                </ul>
              </div>

              {/* View Gallery CTA */}
              <div className="reveal mt-8 text-center">
                <PYCButton asChild variant="outline" size="lg">
                  <a href="/gallery">
                    <FolderOpen className="size-4" />
                    View Full Gallery
                    <ArrowRight className="size-4" />
                  </a>
                </PYCButton>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
