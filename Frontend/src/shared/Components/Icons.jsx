import * as RemixIcons from "@remixicon/react";

export default function Icon({
  name,
  size = 20,

  className = "",
}) {
  const IconComponent = RemixIcons[name];

  if (!IconComponent) {
    console.warn(`Remix Icon "${name}" does not exist.`);
    return null;
  }

  return <IconComponent size={size} className={className} />;
}
