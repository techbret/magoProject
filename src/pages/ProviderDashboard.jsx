import React from "react";
import StickyNavbar from "../components/StickyNavBar";
import { UserAuth } from "../context/AuthContext";

export default function ProviderDashboard() {
  const { user } = UserAuth();

  return (
    <div>
      <p>{user.firstName}</p>
      <br />
      <p>{user.lastName}</p>
      <br />
      <p>{user.email}</p>
      <br />
      <StickyNavbar />
    </div>
  );
}
