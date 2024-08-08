export function getBackgroundStyle(color: string) {
  return {
    background: `linear-gradient(to bottom, ${color} 0%, transparent 100%)`,
    backdropFilter: 'blur(2xl)',
  };
}
