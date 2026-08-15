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

  /*
   * Versão sem API Key.
   *
   * O Google Maps aceita URLs públicas do Street View no formato:
   * /maps/@?api=1&map_action=pano&viewpoint=LAT,LNG
   *
   * Atenção: o Google pode bloquear a exibição dessa página dentro de
   * iframe dependendo das políticas atuais do Maps. Se isso acontecer,
   * não é um erro do seu site; a incorporação oficial garantida exige
   * a Google Maps Embed API.
   */
  const streetViewUrl =
    `https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=${encodeURIComponent(
      coordinates
    )}&heading=0&pitch=0&fov=90`;

  return (
    <div className="street-view-shell">
      <button
        type="button"
        className="street-button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
      >
        👀 {open ? 'Fechar Street View' : 'Ver na vida real'}
      </button>

      {open && (
        <div className="street-view-panel">
          <div className="street-view-header">
            <div>
              <span>STREET VIEW · 360°</span>
              <strong>{title}</strong>
            </div>

            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noreferrer"
            >
              ↗ Abrir no Google Maps
            </a>
          </div>

          <iframe
            title={`Street View de ${title}`}
            src={streetViewUrl}
            loading="lazy"
            allowFullScreen
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            referrerPolicy="strict-origin-when-cross-origin"
            className="street-view-frame"
          />
        </div>
      )}
    </div>
  );
}
