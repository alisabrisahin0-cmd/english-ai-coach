import React from "react";

export default function WeeklyTracker({ week }: { week: string[] }) {
  return (
    <div className="mt-4 bg-slate-800 p-4 rounded">
      <h3 className="font-bold mb-2">Haftalık Takip</h3>
      <ul className="text-slate-300">
        {week.map((day, i) => (
          <li key={i}>{day}</li>
        ))}
      </ul>
    </div>
  );
}
