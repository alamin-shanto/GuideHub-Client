"use client";

import Link from "next/link";
import React from "react";

type Props = {
  title: string;
  value: number | string;
  href?: string;
  icon?: React.ReactNode; // ← FIXED
};

export default function DashboardStatCard({ title, value, href, icon }: Props) {
  const content = (
    <div className="p-5 rounded-xl bg-white dark:bg-gray-800 shadow hover:shadow-md transition">
      <div className="flex items-center gap-3">
        {icon && <div className="text-2xl">{icon}</div>}

        <div>
          <h3 className="text-sm text-gray-500 dark:text-gray-400">{title}</h3>

          <div className="text-2xl font-bold mt-1 text-gray-900 dark:text-white">
            {value}
          </div>
        </div>
      </div>
    </div>
  );

  return href ? <Link href={href}>{content}</Link> : content;
}
