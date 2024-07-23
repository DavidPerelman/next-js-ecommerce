import { ReactNode } from "react";

export function nav({ children }: { children: ReactNode }) {
  return (
    <nav className="bg-primay text-primay-foreground flex justify-center px-4">
      {children}
    </nav>
  );
}
