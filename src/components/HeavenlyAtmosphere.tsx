const bubbles = Array.from({ length: 26 }, (_, i) => ({
  id: i,
  size: 18 + ((i * 29) % 110),
  left: `${(i * 17 + 3) % 96}%`,
  delay: `${(i * 0.85) % 14}s`,
  duration: `${12 + (i % 9) * 2.4}s`,
  drift: `${-18 + ((i * 13) % 36)}px`,
}));

const floatingBubbles = [
  { id: 'f1', size: 86, left: '6%', top: '18%', delay: '0s' },
  { id: 'f2', size: 54, left: '78%', top: '12%', delay: '1.2s' },
  { id: 'f3', size: 120, left: '84%', top: '46%', delay: '0.4s' },
  { id: 'f4', size: 42, left: '14%', top: '62%', delay: '2s' },
  { id: 'f5', size: 70, left: '48%', top: '72%', delay: '1.6s' },
  { id: 'f6', size: 36, left: '32%', top: '24%', delay: '0.8s' },
  { id: 'f7', size: 96, left: '62%', top: '8%', delay: '2.4s' },
  { id: 'f8', size: 48, left: '88%', top: '78%', delay: '1s' },
];

const sparkles = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  left: `${(i * 19 + 8) % 94}%`,
  top: `${(i * 27 + 6) % 88}%`,
  delay: `${(i * 0.6) % 6}s`,
  size: 4 + (i % 4) * 2,
}));

const HeavenlyAtmosphere = () => {
  return (
    <div className="heavenly-atmosphere" aria-hidden="true">
      <div className="heavenly-photo" />
      <div className="heavenly-wash" />
      <div className="heavenly-caustics" />

      <div className="heaven-bubbles">
        {bubbles.map((bubble) => (
          <span
            key={bubble.id}
            className="heaven-bubble"
            style={{
              width: bubble.size,
              height: bubble.size,
              left: bubble.left,
              animationDelay: bubble.delay,
              animationDuration: bubble.duration,
              ['--bubble-drift' as string]: bubble.drift,
            }}
          />
        ))}
        {floatingBubbles.map((bubble) => (
          <span
            key={bubble.id}
            className="heaven-bubble-float"
            style={{
              width: bubble.size,
              height: bubble.size,
              left: bubble.left,
              top: bubble.top,
              animationDelay: bubble.delay,
            }}
          />
        ))}
      </div>

      <div className="water-ribbon water-ribbon-left" />
      <div className="water-ribbon water-ribbon-right" />
      <div className="water-ribbon water-ribbon-mid" />

      <div className="heaven-sparkles">
        {sparkles.map((sparkle) => (
          <span
            key={sparkle.id}
            className="heaven-sparkle"
            style={{
              left: sparkle.left,
              top: sparkle.top,
              width: sparkle.size,
              height: sparkle.size,
              animationDelay: sparkle.delay,
            }}
          />
        ))}
      </div>

      <svg className="water-wave water-wave-back" viewBox="0 0 1440 320" preserveAspectRatio="none">
        <path
          fill="rgba(37, 99, 199, 0.16)"
          d="M0,192L48,176C96,160,192,128,288,133.3C384,139,480,181,576,197.3C672,213,768,203,864,170.7C960,139,1056,85,1152,80C1248,75,1344,117,1392,138.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
      </svg>
      <svg className="water-wave water-wave-front" viewBox="0 0 1440 320" preserveAspectRatio="none">
        <path
          fill="url(#goldWater)"
          d="M0,224L60,208C120,192,240,160,360,165.3C480,171,600,213,720,218.7C840,224,960,192,1080,165.3C1200,139,1320,117,1380,106.7L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        />
        <defs>
          <linearGradient id="goldWater" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="rgba(37, 99, 199, 0.22)" />
            <stop offset="50%" stopColor="rgba(212, 175, 55, 0.18)" />
            <stop offset="100%" stopColor="rgba(125, 211, 252, 0.2)" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default HeavenlyAtmosphere;
