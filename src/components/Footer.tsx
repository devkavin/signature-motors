export function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-slate-950 text-slate-200">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 text-sm md:grid-cols-3">
        <div>
          <h3 className="font-semibold text-white">Signature Motors</h3>
          <p>Trusted premium pre-owned dealership in Colombo, Sri Lanka.</p>
        </div>
        <div>
          <h3 className="font-semibold text-white">Links</h3>
          <ul className="space-y-1">
            <li><a href="https://facebook.com" className="underline">Facebook</a></li>
            <li><a href="https://instagram.com" className="underline">Instagram</a></li>
            <li><a href="#" className="underline">Privacy Policy</a></li>
            <li><a href="#" className="underline">Terms of Use</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-white">Attributions</h3>
          <p>Vehicle photos sourced from Unsplash photographers under the Unsplash License.</p>
          <p>3D hero scene built procedurally with Three.js, @react-three/fiber, and @react-three/drei using preset environment maps.</p>
        </div>
      </div>
      <p className="border-t border-slate-800 py-3 text-center text-xs">© {new Date().getFullYear()} Signature Motors. All rights reserved.</p>
    </footer>
  );
}
