import { Menu } from "lucide-react";

export default function IconMenu({ size = 24, className = "" }: { size?: number; className?: string }) {
  return <Menu size={size} className={className} />;
}
