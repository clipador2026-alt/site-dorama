type Props = {
  title: string;
  coordinates: string;
};

export default function StreetViewEmbed({ title, coordinates }: Props) {
  const streetViewUrl = `https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=${encodeURIComponent(
    coordinates
  )}&heading=0&pitch=0&fov=90`;

  return (
    <a
      href={streetViewUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="street-button"
      aria-label={`Abrir Street View de ${title}`}
    >
      👀 Ver na vida real ↗
    </a>
  );
}
