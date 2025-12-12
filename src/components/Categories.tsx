"use client";
import Link from "next/link";

const cats = [
  { id: "food", name: "Food & Drinks", icon: "🥘" },
  { id: "history", name: "History & Culture", icon: "🏛️" },
  { id: "photo", name: "Photography", icon: "📷" },
  { id: "night", name: "Nightlife", icon: "🌃" },
];

export default function Categories() {
  return (
    <div className="py-10">
      <h2 className="text-3xl font-bold mb-6">Categories</h2>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {cats.map((c) => (
          <Link
            key={c.id}
            href={`/explore?category=${c.id}`}
            className="group flex flex-col items-center gap-3 px-5 py-4 
                       bg-white dark:bg-slate-900 rounded-xl shadow-sm 
                       hover:shadow-md transition-all duration-150 
                       border border-gray-100 dark:border-slate-800 
                       hover:-translate-y-1 cursor-pointer"
          >
            {/* Icon bubble */}
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center text-3xl 
                         bg-linear-to-br from-indigo-500/10 to-indigo-600/20
                         group-hover:scale-110 transition-transform duration-150"
            >
              {c.icon}
            </div>

            {/* Category name */}
            <span className="font-medium text-gray-800 dark:text-gray-100 text-center text-sm sm:text-base">
              {c.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
