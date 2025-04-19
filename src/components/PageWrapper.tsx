import { ReactNode } from "react";

export function PageWrapper({ children }: { children: ReactNode }) {
  return (
    <div>
      <div className="min-h-dvh bg-gradient-to-b from-cyan-200 to-white to-[60vh]">
        {children}
      </div>
    </div>
  );
}
