// src/components/ui/card.jsx
import React from "react";

export function Card({ children, className = "" }) {
  return (
    <div className={`bg-white dark:bg-zinc-900 rounded-2xl shadow-md p-4 ${className}`}>
      {children}
    </div>
  );
}

export function CardContent({ children, className = "" }) {
  return (
    <div className={`text-sm text-gray-800 dark:text-gray-100 ${className}`}>
      {children}
    </div>
  );
}

