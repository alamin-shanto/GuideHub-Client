"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export default function DashboardRedirect() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (loading) return;

    if (!user) {
      router.replace("/login");
      return;
    }

    if (user.role === "admin") router.replace("/dashboard/admin");
    else if (user.role === "guide") router.replace("/dashboard/guide");
    else router.replace("/dashboard/tourist");
  }, [loading, user, router]);

  return (
    <div className="text-center py-20 text-gray-500">
      Loading your dashboard…
    </div>
  );
}
