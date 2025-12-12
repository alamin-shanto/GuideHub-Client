"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import DashboardStatCard from "@/components/DashboardStatCard";
import API from "@/lib/api";

type GuideStats = {
  activeListings: number;
  upcomingTours: number;
  earnings: number;
  recentActivity: string[];
};

export default function GuideDashboard() {
  const { user } = useAuth();
  const [stats, setStats] = useState<GuideStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStats() {
      if (!user) return; // ✅ FIXED: Null check INSIDE async function

      try {
        const res = await API.get(`/guide/stats/${user.id}`);
        setStats(res.data);
      } catch (e) {
        console.error("Failed to load guide stats", e);
      } finally {
        setLoading(false);
      }
    }

    loadStats();
  }, [user]);

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">
        Guide Panel — {user?.name}
      </h1>

      <p className="text-gray-600 dark:text-gray-300 mb-8">
        Manage your tours, bookings & earnings.
      </p>

      {/* Stats */}
      {loading ? (
        <p className="text-gray-600 dark:text-gray-300">Loading stats...</p>
      ) : stats ? (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          <DashboardStatCard
            title="Active Listings"
            value={stats.activeListings}
            href="/dashboard/listings"
            icon={<span>📍</span>}
          />

          <DashboardStatCard
            title="Upcoming Tours"
            value={stats.upcomingTours}
            href="/dashboard/bookings"
            icon={<span>🧭</span>}
          />

          <DashboardStatCard
            title="Earnings"
            value={`$${stats.earnings}`}
            href="/dashboard/earnings"
            icon={<span>💰</span>}
          />
        </div>
      ) : (
        <p className="text-red-500">Failed to load stats.</p>
      )}

      {/* Recent Activity */}
      <section>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
          Recent Activity
        </h2>

        <div className="bg-white dark:bg-gray-800 mt-4 p-5 rounded-xl shadow">
          {!stats || stats.recentActivity.length === 0 ? (
            <p className="text-gray-500 dark:text-gray-300 text-sm">
              No recent activity yet.
            </p>
          ) : (
            <ul className="text-sm space-y-3">
              {stats.recentActivity.map((item, idx) => (
                <li key={idx} className="text-gray-700 dark:text-gray-300">
                  • {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </div>
  );
}
