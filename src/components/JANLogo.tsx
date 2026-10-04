import React from 'react';

interface JANLogoProps {
  className?: string;
  variant?: 'badge' | 'full' | 'horizontal';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  lightText?: boolean;
}

export const JANLogo: React.FC<JANLogoProps> = ({
  className = '',
  variant = 'horizontal',
  size = 'md',
  lightText = true,
}) => {
  if (variant === 'badge') {
    return (
      <div className={`relative inline-block ${className}`}>
        <svg
          viewBox="0 0 500 420"
          className={
            size === 'sm'
              ? 'w-10 h-8'
              : size === 'md'
              ? 'w-14 h-12'
              : size === 'lg'
              ? 'w-24 h-20'
              : 'w-36 h-30'
          }
        >
          {/* Circular Badge Background */}
          <circle cx="250" cy="180" r="140" fill="#ffffff" stroke="#1c398e" stroke-width="8" />
          
          {/* Outer Gear Notches around Circle */}
          <g stroke="#1c398e" stroke-width="4" stroke-linecap="round">
            <line x1="250" y1="32" x2="250" y2="40" stroke-width="6" />
            <line x1="288" y1="37" x2="286" y2="45" stroke-width="6" />
            <line x1="324" y1="52" x2="320" y2="60" stroke-width="6" />
            <line x1="355" y1="75" x2="349" y2="82" stroke-width="6" />
            <line x1="380" y1="105" x2="372" y2="110" stroke-width="6" />
            <line x1="395" y1="140" x2="386" y2="143" stroke-width="6" />
            <line x1="400" y1="177" x2="391" y2="177" stroke-width="6" />
            <line x1="395" y1="214" x2="386" y2="211" stroke-width="6" />
            <line x1="380" y1="249" x2="372" y2="244" stroke-width="6" />
            <line x1="355" y1="279" x2="349" y2="272" stroke-width="6" />
            <line x1="324" y1="302" x2="320" y2="294" stroke-width="6" />
            <line x1="288" y1="317" x2="286" y2="308" stroke-width="6" />
            <line x1="250" y1="322" x2="250" y2="313" stroke-width="6" />
            <line x1="212" y1="317" x2="214" y2="308" stroke-width="6" />
            <line x1="176" y1="302" x2="180" y2="294" stroke-width="6" />
            <line x1="145" y1="279" x2="151" y2="272" stroke-width="6" />
            <line x1="120" y1="249" x2="128" y2="244" stroke-width="6" />
            <line x1="105" y1="214" x2="114" y2="211" stroke-width="6" />
            <line x1="100" y1="177" x2="109" y2="177" stroke-width="6" />
            <line x1="105" y1="140" x2="114" y2="143" stroke-width="6" />
            <line x1="120" y1="105" x2="128" y2="110" stroke-width="6" />
            <line x1="145" y1="75" x2="151" y2="82" stroke-width="6" />
            <line x1="176" y1="52" x2="180" y2="60" stroke-width="6" />
            <line x1="212" y1="37" x2="214" y2="45" stroke-width="6" />
          </g>

          {/* Inner Double Rings */}
          <circle cx="250" cy="180" r="126" fill="none" stroke="#1c398e" stroke-width="3" />
          <circle cx="250" cy="180" r="120" fill="none" stroke="#1c398e" stroke-width="1.5" />

          {/* Bold Monogram: JAN in Red (#dc2626) */}
          <g fill="#dc2626" font-family="'Times New Roman', Times, Georgia, serif" font-weight="900" text-anchor="middle">
            <text x="175" y="222" font-size="135" letter-spacing="-2">J</text>
            <text x="248" y="222" font-size="155" letter-spacing="-1">A</text>
            <text x="325" y="222" font-size="135" letter-spacing="-2">N</text>
          </g>

          {/* Ribbon Back Folds */}
          <polygon points="50,310 110,285 110,345 50,360 70,335" fill="#132560" />
          <polygon points="450,310 390,285 390,345 450,360 430,335" fill="#132560" />

          {/* Ribbon Front */}
          <path d="M 85,300 Q 250,350 415,300 L 410,355 Q 250,405 90,355 Z" fill="#203a8f" stroke="#ffffff" stroke-width="2" />

          {/* Ribbon Text */}
          <g fill="#ffffff" font-family="'Cabinet Grotesk', 'Arial Black', sans-serif" font-weight="900" font-size="20" text-anchor="middle" letter-spacing="2">
            <text x="125" y="343" font-size="16">★</text>
            <text x="250" y="346">TRANSPORT &amp; CONT.</text>
            <text x="375" y="343" font-size="16">★</text>
          </g>
        </svg>
      </div>
    );
  }

  if (variant === 'full') {
    return (
      <div className={`flex flex-col items-center text-center ${className}`}>
        {/* The Badge */}
        <div className="w-48 sm:w-56">
          <img
            src="/logo.svg"
            alt="Jabal Al Noor Transport & Contracting L.L.C official logo"
            className="w-full h-auto drop-shadow-xl"
          />
        </div>
      </div>
    );
  }

  // Variant: horizontal (Default for top bar & compact cards)
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Badge SVG Icon */}
      <div className="shrink-0 w-11 h-10 sm:w-12 sm:h-11 flex items-center justify-center">
        <svg viewBox="0 0 500 420" className="w-full h-full drop-shadow-md">
          <circle cx="250" cy="180" r="140" fill="#ffffff" stroke="#1c398e" stroke-width="8" />
          <g stroke="#1c398e" stroke-width="4" stroke-linecap="round">
            <line x1="250" y1="32" x2="250" y2="40" stroke-width="6" />
            <line x1="288" y1="37" x2="286" y2="45" stroke-width="6" />
            <line x1="324" y1="52" x2="320" y2="60" stroke-width="6" />
            <line x1="355" y1="75" x2="349" y2="82" stroke-width="6" />
            <line x1="380" y1="105" x2="372" y2="110" stroke-width="6" />
            <line x1="395" y1="140" x2="386" y2="143" stroke-width="6" />
            <line x1="400" y1="177" x2="391" y2="177" stroke-width="6" />
            <line x1="395" y1="214" x2="386" y2="211" stroke-width="6" />
            <line x1="380" y1="249" x2="372" y2="244" stroke-width="6" />
            <line x1="355" y1="279" x2="349" y2="272" stroke-width="6" />
            <line x1="324" y1="302" x2="320" y2="294" stroke-width="6" />
            <line x1="288" y1="317" x2="286" y2="308" stroke-width="6" />
            <line x1="250" y1="322" x2="250" y2="313" stroke-width="6" />
            <line x1="212" y1="317" x2="214" y2="308" stroke-width="6" />
            <line x1="176" y1="302" x2="180" y2="294" stroke-width="6" />
            <line x1="145" y1="279" x2="151" y2="272" stroke-width="6" />
            <line x1="120" y1="249" x2="128" y2="244" stroke-width="6" />
            <line x1="105" y1="214" x2="114" y2="211" stroke-width="6" />
            <line x1="100" y1="177" x2="109" y2="177" stroke-width="6" />
            <line x1="105" y1="140" x2="114" y2="143" stroke-width="6" />
            <line x1="120" y1="105" x2="128" y2="110" stroke-width="6" />
            <line x1="145" y1="75" x2="151" y2="82" stroke-width="6" />
            <line x1="176" y1="52" x2="180" y2="60" stroke-width="6" />
            <line x1="212" y1="37" x2="214" y2="45" stroke-width="6" />
          </g>
          <circle cx="250" cy="180" r="126" fill="none" stroke="#1c398e" stroke-width="3" />
          <circle cx="250" cy="180" r="120" fill="none" stroke="#1c398e" stroke-width="1.5" />
          <g fill="#dc2626" font-family="'Times New Roman', Times, Georgia, serif" font-weight="900" text-anchor="middle">
            <text x="175" y="222" font-size="135" letter-spacing="-2">J</text>
            <text x="248" y="222" font-size="155" letter-spacing="-1">A</text>
            <text x="325" y="222" font-size="135" letter-spacing="-2">N</text>
          </g>
          <polygon points="50,310 110,285 110,345 50,360 70,335" fill="#132560" />
          <polygon points="450,310 390,285 390,345 450,360 430,335" fill="#132560" />
          <path d="M 85,300 Q 250,350 415,300 L 410,355 Q 250,405 90,355 Z" fill="#203a8f" stroke="#ffffff" stroke-width="2" />
          <g fill="#ffffff" font-family="'Cabinet Grotesk', 'Arial Black', sans-serif" font-weight="900" font-size="20" text-anchor="middle" letter-spacing="2">
            <text x="125" y="343" font-size="16">★</text>
            <text x="250" y="346">TRANSPORT &amp; CONT.</text>
            <text x="375" y="343" font-size="16">★</text>
          </g>
        </svg>
      </div>

      {/* Website Name: Jabal Al Noor */}
      <div className="flex flex-col text-left">
        <span
          className={`text-lg sm:text-xl font-extrabold tracking-tight font-display whitespace-nowrap leading-none ${
            lightText ? 'text-white' : 'text-slate-900'
          }`}
        >
          Jabal Al Noor
        </span>
        <span className="text-[10px] sm:text-[11px] font-bold text-amber-400 tracking-wider uppercase mt-1 whitespace-nowrap">
          Marine Construction &amp; Contracting
        </span>
      </div>
    </div>
  );
};
