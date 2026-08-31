import { Building, Gauge, Plug, Sparkles, Square, Truck, Wrench } from "lucide-react";

const icons: Record<string, React.ComponentType<{ className?: string }>> = {
  wrench: Wrench,
  sparkles: Sparkles,
  gauge: Gauge,
  plug: Plug,
  truck: Truck,
  square: Square,
  building: Building,
};

export function ServiceIcon({ icon, className = "" }: { icon: string; className?: string }) {
  const Icon = icons[icon] ?? Wrench;
  return <Icon className={className} aria-hidden="true" />;
}
