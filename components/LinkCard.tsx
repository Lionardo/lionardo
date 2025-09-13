import { ArrowUpRight } from "lucide-react";
import React from "react";

export interface LinkItem {
  title: string;
  url: string;
  description?: string;
  accentColor?: string; // optional per-link accent
}

export default function LinkCard({
  title,
  url,
  description,
  accentColor,
}: LinkItem) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-xl border border-neutral-800 bg-neutral-900/80 hover:bg-neutral-800/80 backdrop-blur-sm px-5 py-4 transition hover:shadow-md hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/70"
      style={accentColor ? { borderColor: accentColor } : undefined}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="font-medium text-sm flex items-center gap-2">
            {title}
          </h3>
          {description && (
            <p className="mt-1 text-xs text-neutral-400 leading-snug">
              {description}
            </p>
          )}
        </div>
        <ArrowUpRight className="w-4 h-4 text-neutral-500 transition group-hover:text-[#2a080a]" />
      </div>
    </a>
  );
}
