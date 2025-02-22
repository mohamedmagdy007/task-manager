import React, { Suspense } from "react";

import Header from "../components/Header/Header";

function DefaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={`flex flex-col min-h-screen bg-gray-100 duration-300  gap-2  ml-auto`}
    >
      <Header />
      <Suspense>
        <div className="animate-fade-out">{children}</div>
      </Suspense>
    </div>
  );
}

export default DefaultLayout;
