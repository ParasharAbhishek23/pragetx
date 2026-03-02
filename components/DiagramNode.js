export default function DiagramNode({ label, className, variant = 'default' }) {
  return (
    <div
      className={`select-none rounded-lg px-3 py-2 text-sm leading-none transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border-white/80 ${className}`}
      data-variant={variant}
    >
      {label}
    </div>
  );
}
