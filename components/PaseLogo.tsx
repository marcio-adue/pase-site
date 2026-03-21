import React from "react";

interface PaseLogoProps {
  className?: string;
  textColor?: string;
  brainLeftColor?: string;
  brainRightColor?: string;
  subtitleColor?: string;
  showSubtitle?: boolean;
}

export default function PaseLogo({
  className = "",
  textColor = "#345667",
  brainLeftColor = "#7CA18B",
  brainRightColor = "#345667",
  subtitleColor = "#7CA18B",
  showSubtitle = true,
}: PaseLogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Brain SVG */}
      <svg
        width="48"
        height="48"
        viewBox="0 0 100 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Left hemisphere */}
        <path
          d="M48 40 C48 40 46 10 28 10 C14 10 4 22 4 34 C4 42 8 48 14 52 C10 54 8 58 8 62 C8 70 16 76 26 76 C34 76 40 72 44 66 C46 62 48 56 48 40Z"
          stroke={brainLeftColor}
          strokeWidth="3.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Left internal lines */}
        <path d="M20 24 C24 20 30 22 32 28" stroke={brainLeftColor} strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M14 38 C18 34 26 36 28 42" stroke={brainLeftColor} strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M20 56 C24 52 32 54 34 60" stroke={brainLeftColor} strokeWidth="2.5" fill="none" strokeLinecap="round" />
        {/* Center connector */}
        <line x1="48" y1="30" x2="52" y2="30" stroke={brainLeftColor} strokeWidth="2.5" strokeLinecap="round" />
        <line x1="48" y1="40" x2="52" y2="40" stroke={brainLeftColor} strokeWidth="2.5" strokeLinecap="round" />
        <line x1="48" y1="50" x2="52" y2="50" stroke={brainRightColor} strokeWidth="2.5" strokeLinecap="round" />
        {/* Right hemisphere */}
        <path
          d="M52 40 C52 40 54 10 72 10 C86 10 96 22 96 34 C96 42 92 48 86 52 C90 54 92 58 92 62 C92 70 84 76 74 76 C66 76 60 72 56 66 C54 62 52 56 52 40Z"
          stroke={brainRightColor}
          strokeWidth="3.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Right internal lines */}
        <path d="M80 24 C76 20 70 22 68 28" stroke={brainRightColor} strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M86 38 C82 34 74 36 72 42" stroke={brainRightColor} strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M80 56 C76 52 68 54 66 60" stroke={brainRightColor} strokeWidth="2.5" fill="none" strokeLinecap="round" />
      </svg>

      {/* Text */}
      <div className="flex flex-col leading-none">
        <span
          className="font-bold tracking-wider text-3xl"
          style={{ color: textColor, fontFamily: "'Noto Serif', serif" }}
        >
          PASE
        </span>
        {showSubtitle && (
          <span
            className="text-xs tracking-widest uppercase mt-0.5"
            style={{ color: subtitleColor }}
          >
            Salud Mental Empresarial
          </span>
        )}
      </div>
    </div>
  );
}
