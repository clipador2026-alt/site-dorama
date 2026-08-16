'use client';

type Props = {
  title: string;
  coordinates: string;
  googleMapsUrl?: string;
};

export default function StreetViewEmbed({ title, coordinates }: Props) {
  const streetViewUrl = `https://www.google.com/maps/@?api=1&map_action=pano&query=${encodeURIComponent(coordinates)}`;

  return (
    <a
      href={streetViewUrl}
      target="_blank"
      rel="noreferrer"
      className="street-button"
      aria-label={`Abrir Street View de ${title}`}
    >
      👀 Ver na vida real ↗
    </a>
  );
}
