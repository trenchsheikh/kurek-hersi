"use client";

import { cn } from "@/lib/utils";
import React from "react";

interface PillProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  active?: boolean;
}

export function Pill({ children, className, active, ...props }: PillProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium transition-colors",
        active 
          ? "bg-primary text-primary-foreground" 
          : "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
