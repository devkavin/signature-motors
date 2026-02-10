export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-200">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 md:grid-cols-3 md:px-6">
        <div>
          <h3 className="text-lg font-semibold">Signature Motors</h3>
          <p className="mt-3 text-sm text-slate-400">Premium car dealership in Colombo focused on transparent pricing, verified vehicles, and quick financing support.</p>
        </div>
        <div>
          <h4 className="font-semibold">Social</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-400">
            <li><a href="https://www.facebook.com" className="hover:text-white">Facebook</a></li>
            <li><a href="https://www.instagram.com" className="hover:text-white">Instagram</a></li>
            <li><a href="https://www.linkedin.com" className="hover:text-white">LinkedIn</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Legal & Attributions</h4>
          <p className="mt-3 text-sm text-slate-400">Vehicle photos sourced from Unsplash photographers under the Unsplash License. 3D scene built with Three.js, @react-three/fiber, and @react-three/drei environment presets.</p>
          <p className="mt-2 text-sm text-slate-400">© {new Date().getFullYear()} Signature Motors. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
