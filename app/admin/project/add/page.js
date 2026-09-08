"use client";

import { useState } from "react";
import { ArrowLeft, Globe, ImagePlus, Link as LinkIcon, Save, Upload, X } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { CldUploadButton } from "next-cloudinary";
import Image from "next/image";


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

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send data to your API here
    try {
      const req = await fetch("/api/project", {
        method: "POST",
        body: JSON.stringify({ ...form, logo, preview })
      })
      if (req.ok) {
        alert("project added success!")
      } else {
        alert("faild to add project!")
      }
    } catch (err) {
      console.log(err.message)
    }
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

            <section>
              <CldUploadButton uploadPreset="project-images"
                onSuccess={(result, { widget }) => {
                  console.log('Upload successful:', result);
                  widget.close();
                }}
                onError={(error, { widget }) => {
                  console.error('Upload error:', error);
                }}
              >
                Upload Files
              </CldUploadButton>
            </section>

            {/* MY IMAGE UPLOAD SECTION */}
            <section className=" shadow-md rounded-2xl border border-gray-200 p-5">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-400">Project Images</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">Upload a project logo and preview image.</p>
              <div className="grid grid-cols-2 gap-10 mt-8">
                {/* Logo image  */}
                <div>
                  <p className="text-sm font-medium my-2">Project Logo</p>
                  <CldUploadButton
                    onSuccess={(result, { widget }) => {
                      console.log('Upload successful:', result);
                      setLogo(result.info.url)
                      widget.close();
                    }}
                    onError={(error, { widget }) => {
                      console.error('Upload error:', error);
                    }}
                    className="w-full h-50 border-2 border-dashed border-gray-300 hover:border-gray-400 bg-gray-100 hover:bg-gray-300 transition duration-500 rounded-2xl flex justify-center items-center overflow-hidden" uploadPreset="project-images">
                    {
                      !logo && (
                        <div className="flex flex-col justify-center items-center">
                          <div className="h-12 w-12 flex justify-center items-center border text-gray-500 border-gray-400 rounded-xl"><ImagePlus /></div>
                          <h4 className="text-xs font-medium mt-3">Click to upload</h4>
                          <p className="text-xs text-gray-400">PNG, JPG or SVG</p>
                        </div>
                      )
                    }
                    {logo && <Image className="h-full w-full" src={logo} height={400} width={400} alt="logo" />}
                  </CldUploadButton>
                </div>
                {/* Preview Image */}
                <div>
                  <p className="text-sm font-medium my-2">Project Preview</p>
                  <CldUploadButton
                    onSuccess={(result, { widget }) => {
                      console.log('Upload successful:', result);
                      setPreview(result.info.url)
                      widget.close();
                    }}
                    onError={(error, { widget }) => {
                      console.error('Upload error:', error);
                    }}
                    className="w-full h-50 border-2 border-dashed border-gray-300 hover:border-gray-400 bg-gray-100 hover:bg-gray-300 transition duration-500 rounded-2xl flex justify-center items-center overflow-hidden" uploadPreset="project-images">
                    {
                      !preview && (
                        <div className="flex flex-col justify-center items-center">
                          <div className="h-12 w-12 flex justify-center items-center border text-gray-500 border-gray-400 rounded-xl"><ImagePlus /></div>
                          <h4 className="text-xs font-medium mt-3">Click to upload</h4>
                          <p className="text-xs text-gray-400">PNG, JPG or SVG</p>
                        </div>
                      )
                    }
                    {preview && <Image className="h-full w-full" src={preview} height={400} width={400} alt="logo" />}
                  </CldUploadButton>
                </div>
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

