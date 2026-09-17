"use client";

import { useState } from "react";
import { User, Lock, Eye, EyeOff, ArrowRight } from "lucide-react";
import { useCookies } from "react-cookie";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter()
  const [ _, setCookie ] = useCookies()
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ username: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!form.username || !form.password) {
      setError("Enter your username and password.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json()
      if(res.ok){
        setCookie("admin_jack",data.token)
        router.push("/admin")
      }else{
        setError(data.error)
      }
    } catch (err) {
      setError(err.message || "Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="w-full max-w-sm">
        <div className="mb-10">
          <p className="text-[#C77B4A] text-sm tracking-wide mb-2">Portfolio</p>
          <h1 className="text-3xl font-semibold">
            Welcome back
          </h1>
          <p className="text-[#8A8F98] text-sm mt-2">
            Sign in to manage your projects.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="username"
              className="block text-xs text-[#8A8F98] mb-1.5"
            >
              Username
            </label>
            <div className="relative">
              <User
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-[#5C6068]"
              />
              <input
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                value={form.username}
                onChange={handleChange}
                placeholder="yourname"
                className="w-full border border-[#242830] rounded-lg py-2.5 pl-10 pr-3 placeholder:text-[#5C6068] text-sm focus:outline-none focus:ring-2 focus:ring-[#C77B4A] focus:border-transparent transition"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label htmlFor="password" className="block text-xs text-[#8A8F98]">
                Password
              </label>
              <a
                href="/forgot-password"
                className="text-xs text-[#C77B4A] hover:text-[#DB8F5F] transition"
              >
                Forgot password?
              </a>
            </div>
            <div className="relative">
              <Lock
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-[#5C6068]"
              />
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                value={form.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full border border-[#242830] rounded-lg py-2.5 pl-10 pr-10 placeholder:text-[#5C6068] text-sm focus:outline-none focus:ring-2 focus:ring-[#C77B4A] focus:border-transparent transition"
              />
              <button
                type="button"
                onClick={() => setShowPassword((s) => !s)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#5C6068] hover:text-[#8A8F98] transition"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {error && (
            <p className="text-sm text-[#E0685A]" role="alert">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 hover:bg-[#DB8F5F] disabled:opacity-60 disabled:cursor-not-allowed text-[#0B0E11] font-medium text-sm rounded-lg py-2.5 mt-2 transition"
          >
            {loading ? "Signing in..." : "Sign in"}
            {!loading && <ArrowRight size={16} />}
          </button>
        </form>

        <p className="text-center text-xs text-[#5C6068] mt-8">
          Trouble signing in? Reach out through the contact page.
        </p>
      </div>
    </main>
  );
}