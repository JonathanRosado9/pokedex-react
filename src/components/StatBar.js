import React from "react";

export default function StatBar({ number, color = "#fff", total }) {
  let width = Math.round((number / 255) * 100);
  if (total) {
    width = Math.round((number / 720) * 100);
  }
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <div
        style={{ width: `${width}%`, height: "100%", backgroundColor: color }}
      ></div>
    </div>
  );
}
