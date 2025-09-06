export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-slate-400">
        © {new Date().getFullYear()} Soumen Roy. All rights reserved.
      </div>
    </footer>
  );
}
