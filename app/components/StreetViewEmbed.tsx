'use client';

import { useState } from 'react';

type Props = {
  title: string;
  coordinates: string;
  googleMapsUrl: string;
};

export default function StreetViewEmbed({
  title,
  coordinates,
  googleMapsUrl,
}: Props) {
  const [open, setOpen] = useState(false);
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_API_KEY;

  const streetViewUrl = apiKey
    ? `https://www.google.com/maps/embed/v1/streetview?key=${encodeURIComponent(
        apiKey
      )}&location=${encodeURIComponent(
        coordinates
      )}&heading=0&pitch=0&fov=90`
    : "";

  return (
    <div className="street-view-shell">
      <button
        type="button"
        className="street-button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
      >
        👀 {open ? "Fechar Street View" : "Ver na vida real"}
      </button>

      {open && (
        <div className="street-view-panel">
          <div className="street-view-header">
            <div>
              <span>STREET VIEW · 360°</span>
              <strong>{title}</strong>
            </div>
            <a href={googleMapsUrl} target="_blank" rel="noreferrer">
              ↗ Abrir no Google Maps
            </a>
          </div>

          {streetViewUrl ? (
            <iframe
              title={`Street View de ${title}`}
              src={streetViewUrl}
              loading="lazy"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
              className="street-view-frame"
            />
          ) : (
            <div className="street-view-setup">
              <strong>Street View</strong>
              <p>
                Configure a variável NEXT_PUBLIC_GOOGLE_MAPS_EMBED_API_KEY
                para ativar o Street View dentro do site.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
