import { useEffect, useRef, useState } from "react";

interface PortraitPhotoProps {
  src: string;
  alt: string;
  className?: string;
}

/** Draws the cutout onto a canvas and erases a radial falloff centered on the
 * face (destination-out), so the photo dissolves into the page instead of
 * ending in a hard, sticker-like edge. This is what actually sells "blended
 * with the background" — no cutout is clean enough at 100% opacity to read as
 * part of the page; fading the edges away is what does it. */
export function PortraitPhoto({ src, alt, className }: PortraitPhotoProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(false);
    const img = new Image();
    img.onload = () => {
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext("2d");
      if (!canvas || !ctx) return;

      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      ctx.drawImage(img, 0, 0);

      const cx = canvas.width / 2;
      const cy = canvas.height * 0.36;
      const gradient = ctx.createRadialGradient(
        cx, cy, canvas.width * 0.22,
        cx, cy, canvas.width * 0.72,
      );
      gradient.addColorStop(0, "rgba(0,0,0,0)");
      gradient.addColorStop(0.5, "rgba(0,0,0,0.08)");
      gradient.addColorStop(1, "rgba(0,0,0,1)");

      ctx.globalCompositeOperation = "destination-out";
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = "source-over";
      setLoaded(true);
    };
    img.onerror = () => setLoaded(true);
    img.src = src;
  }, [src]);

  return (
    <canvas
      ref={canvasRef}
      role="img"
      aria-label={alt}
      className={className}
      style={{ opacity: loaded ? 1 : 0, transition: "opacity 0.7s ease" }}
    />
  );
}
