import React from "react";
import { DashboardComponent } from "./Dashboard";
import { auth } from "@/lib/auth/auth";
import { redirect } from "next/navigation";

const Dashboard = async () => {
  const session = await auth();
  if (!session) redirect("/signin");

  return <DashboardComponent />;
};

export default Dashboard;
