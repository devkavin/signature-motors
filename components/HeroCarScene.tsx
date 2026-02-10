"use client";

const SKETCHFAB_EMBED_URL =
  "https://sketchfab.com/models/e6500dd6bfe849678e56e5a8299c547b/embed?autostart=1&ui_infos=0&ui_controls=1&ui_stop=0&ui_watermark=0&preload=1";

export default function HeroCarScene() {
  return (
    <div className="h-full w-full bg-slate-950">
      <iframe
        title="Ferrari Portofino 2018 3D model"
        src={SKETCHFAB_EMBED_URL}
        className="h-full w-full border-0"
        allow="autoplay; fullscreen; xr-spatial-tracking"
        allowFullScreen
      />
    </div>
  );
}
