import React from "react";

export default function TaskCard({ task, xp }: { task: string; xp: number }) {
  return (
    <div className="border rounded p-3 mb-2 bg-slate-900">
      <h3 className="font-bold">{task}</h3>
      <span className="text-sm text-cyan-300">+{xp} XP</span>
    </div>
  );
}
