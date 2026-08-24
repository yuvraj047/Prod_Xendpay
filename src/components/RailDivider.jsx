export default function RailDivider({ className = "" }) {
  return (
    <div className={`flex items-center gap-3 ${className}`} aria-hidden="true">
      <span className="w-2 h-2 rounded-full bg-amber shrink-0" />
      <span className="rail-rule flex-1" />
      <span className="w-2 h-2 rounded-full bg-teal shrink-0" />
    </div>
  );
}
