import React from "react";
import { Outlet } from "react-router-dom";

const courses = [
  { id: 1, name: "python" },
  { id: 2, name: "javascript" },
  { id: 3, name: "c++" },
];

function PricingsPage() {
  return (
    <div>
      <div className="title">All Pricing page</div>
      <div style={{ textAlign: "center" }}>this is the Pricing page</div>
      <div
        style={{ height: "100px", width: "100%", backgroundColor: "violet" }}
      >
        this component is in the all pricings page
      </div>
      <Outlet />
    </div>
  );
}

export default PricingsPage;
