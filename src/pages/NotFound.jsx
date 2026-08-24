import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="max-w-content mx-auto px-5 md:px-8 py-24 text-center">
      <p className="eyebrow text-teal mb-4">404</p>
      <h1 className="font-display font-semibold text-3xl text-ink">This route doesn't exist.</h1>
      <p className="mt-3 text-inkgrey font-body">The page you're looking for may have moved.</p>
      <Link
        to="/"
        className="mt-8 inline-flex items-center gap-2 bg-ink text-paper font-body text-sm font-medium px-6 py-3 rounded-full hover:bg-teal transition-colors"
      >
        Back to Home
      </Link>
    </div>
  );
}
