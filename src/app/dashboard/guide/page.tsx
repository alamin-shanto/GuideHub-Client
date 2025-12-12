"use client";

import { useAuth } from "@/context/AuthContext";
import SummaryCard from "../listings/page";

export default function GuideDashboard() {
  const { user } = useAuth();

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-2">Guide Panel — {user?.name}</h1>
      <p className="text-gray-600 mb-8">Manage your tours and bookings.</p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <SummaryCard
          title="Active Listings"
          value={4}
          href="/dashboard/listings"
        />
        <SummaryCard
          title="Upcoming tours"
          value={3}
          href="/dashboard/bookings"
        />
        <SummaryCard
          title="Earnings"
          value="$1,240"
          href="/dashboard/earnings"
        />
      </div>

      <section>
        <h2 className="text-xl font-semibold">Recent activity</h2>
        <div className="bg-white dark:bg-gray-800 mt-4 p-4 rounded-lg shadow-sm">
          <ul className="text-sm space-y-2">
            <li>• New booking for “Old Dhaka Walk”</li>
            <li>• Price updated on “Chittagong Day Tour”</li>
            <li>• New message from a tourist</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
