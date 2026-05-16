import React from "react";
import Dashboard from "../components/Dashboard";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white p-8">
      <h1 className="text-4xl font-bold mb-6">English AI Coach</h1>
      <Dashboard />
      <p className="mt-6 text-slate-300">
        Demo dashboard ve görevler interaktif olarak çalışıyor.
      </p>
    </main>
  );
}
