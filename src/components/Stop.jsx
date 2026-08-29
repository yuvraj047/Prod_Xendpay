// A numbered "stop" marker — styled as a station on the rail line rather
// than a generic 01/02 badge, used wherever the source content is a
// genuine numbered sequence (Why Us, Developer Experience steps).
export default function Stop({ index, color = "amber" }) {
  const ring = color === "teal" ? "border-teal" : "border-amber";
  const dot = color === "teal" ? "bg-teal" : "bg-amber";
  return (
    <div className={`flex items-center justify-center w-9 h-9 rounded-full border ${ring} shrink-0`}>
      <span className={`w-1.5 h-1.5 rounded-full ${dot} mr-1.5`} />
      <span className="font-mono text-xs text-basetext">{String(index).padStart(2, "0")}</span>
    </div>
  );
}
