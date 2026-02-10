import React from "react";

export default function PerfumeLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <div className="relative">
      {modal}
      {children}
    </div>
  );
}