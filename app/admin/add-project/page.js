"use client";

import { useState } from "react";
import {
  ArrowLeft,
  Globe,
  ImagePlus,
  Link as LinkIcon,
  Save,
  Upload,
  X,
} from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function page() {
  const [logo, setLogo] = useState(null);
  const [preview, setPreview] = useState(null);

  const [form, setForm] = useState({
    title: "",
    description: "",
    liveUrl: "",
    githubUrl: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e, type) => {
    const file = e.target.files?.[0];

    if (!file) return;

    const image = {
      file,
      url: URL.createObjectURL(file),
    };

    if (type === "logo") {
      setLogo(image);
    } else {
      setPreview(image);
    }
  };

  const removeImage = (type) => {
    if (type === "logo") {
      if (logo) URL.revokeObjectURL(logo.url);
      setLogo(null);
    } else {
      if (preview) URL.revokeObjectURL(preview.url);
      setPreview(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      ...form,
      logo,
      preview,
    });

    // Send data to your API here
  };

  return (
    <main className="min-h-screen pt-20 bg-gray-50 px-4 py-8 dark:bg-gray-950">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <button
              type="button"
              className="mb-4 flex items-center gap-2 text-sm text-gray-500 transition hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              onClick={() => window.history.back()}
            >
              <ArrowLeft size={18} />
              Back
            </button>

            <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
              Add Project
            </h1>

            <p className="mt-2 text-gray-500 dark:text-gray-400">
              Add a new project to your portfolio.
            </p>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div className="space-y-6">
            {/* Basic Information */}
            <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
              <div className="mb-6">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Project Information
                </h2>

                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  Basic information about your project.
                </p>
              </div>

              <div className="space-y-5">
                {/* Title */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Project Title
                  </label>

                  <input
                    type="text"
                    name="title"
                    value={form.title}
                    onChange={handleChange}
                    placeholder="e.g. SmartKeep"
                    required
                    className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-gray-900 focus:ring-2 focus:ring-gray-900/10 dark:border-gray-700 dark:bg-gray-950 dark:text-white dark:focus:border-white"
                  />
                </div>

                {/* Description */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Description
                  </label>

                  <textarea
                    name="description"
                    value={form.description}
                    onChange={handleChange}
                    placeholder="Describe your project, its features and technologies..."
                    rows={6}
                    required
                    className="w-full resize-none rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-gray-900 focus:ring-2 focus:ring-gray-900/10 dark:border-gray-700 dark:bg-gray-950 dark:text-white dark:focus:border-white"
                  />

                  <p className="mt-2 text-xs text-gray-400">
                    Keep the description clear and focused on the project's
                    main features.
                  </p>
                </div>
              </div>
            </section>

            {/* Images */}
            <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
              <div className="mb-6">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Project Images
                </h2>

                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  Upload a project logo and preview image.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {/* Logo */}
                <ImageUpload
                  label="Project Logo"
                  description="PNG, JPG or SVG"
                  image={logo}
                  onChange={(e) => handleImageChange(e, "logo")}
                  onRemove={() => removeImage("logo")}
                  icon={<ImagePlus size={24} />}
                  compact
                />

                {/* Preview */}
                <ImageUpload
                  label="Project Preview"
                  description="Recommended: 1200 × 800px"
                  image={preview}
                  onChange={(e) => handleImageChange(e, "preview")}
                  onRemove={() => removeImage("preview")}
                  icon={<Upload size={24} />}
                />
              </div>
            </section>

            {/* URLs */}
            <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
              <div className="mb-6">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Project Links
                </h2>

                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  Add links where visitors can view your project.
                </p>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                {/* Live URL */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Live URL
                  </label>

                  <div className="relative">
                    <Globe
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                    />

                    <input
                      type="url"
                      name="liveUrl"
                      value={form.liveUrl}
                      onChange={handleChange}
                      placeholder="https://example.com"
                      className="w-full rounded-xl border border-gray-300 bg-white py-3 pl-11 pr-4 text-sm outline-none transition placeholder:text-gray-400 focus:border-gray-900 focus:ring-2 focus:ring-gray-900/10 dark:border-gray-700 dark:bg-gray-950 dark:text-white dark:focus:border-white"
                    />
                  </div>
                </div>

                {/* Github URL */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                    GitHub URL
                  </label>

                  <div className="relative">
                    <FontAwesomeIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" icon={faGithub} />

                    <input
                      type="url"
                      name="githubUrl"
                      value={form.githubUrl}
                      onChange={handleChange}
                      placeholder="https://github.com/username/project"
                      className="w-full rounded-xl border border-gray-300 bg-white py-3 pl-11 pr-4 text-sm outline-none transition placeholder:text-gray-400 focus:border-gray-900 focus:ring-2 focus:ring-gray-900/10 dark:border-gray-700 dark:bg-gray-950 dark:text-white dark:focus:border-white"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Submit */}
            <div className="flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => window.history.back()}
                className="rounded-xl border border-gray-300 px-5 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-100 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="flex items-center gap-2 rounded-xl bg-gray-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200"
              >
                <Save size={18} />
                Save Project
              </button>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}

function ImageUpload({
  label,
  description,
  image,
  onChange,
  onRemove,
  icon,
  compact = false,
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
        {label}
      </label>

      {image ? (
        <div
          className={`relative overflow-hidden rounded-xl border border-gray-200 bg-gray-100 dark:border-gray-700 dark:bg-gray-800 ${
            compact ? "h-48" : "h-64"
          }`}
        >
          <img
            src={image.url}
            alt={label}
            className="h-full w-full object-cover"
          />

          <button
            type="button"
            onClick={onRemove}
            className="absolute right-3 top-3 rounded-lg bg-black/70 p-2 text-white backdrop-blur transition hover:bg-black"
          >
            <X size={18} />
          </button>
        </div>
      ) : (
        <label
          className={`flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-gray-300 bg-gray-50 transition hover:border-gray-400 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-950 dark:hover:border-gray-600 ${
            compact ? "h-48" : "h-64"
          }`}
        >
          <div className="mb-3 rounded-xl bg-white p-3 text-gray-500 shadow-sm dark:bg-gray-900 dark:text-gray-400">
            {icon}
          </div>

          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Click to upload
          </span>

          <span className="mt-1 text-xs text-gray-400">
            {description}
          </span>

          <input
            type="file"
            accept="image/png,image/jpeg,image/webp,image/svg+xml"
            onChange={onChange}
            className="hidden"
          />
        </label>
      )}
    </div>
  );
}