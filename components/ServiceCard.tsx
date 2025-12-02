import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export function ServiceCard({
  title,
  description,
  icon: Icon,
}: ServiceCardProps) {
  return (
    <div className="group relative">
      <div className="flex flex-col md:flex-row gap-6 md:gap-10 py-10 md:py-12 border-t border-white/10">
        {/* Icon */}
        <div className="shrink-0">
          <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl border border-cyan-400/50 bg-cyan-400/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-cyan-400/20 transition-colors duration-300">
            <Icon
              className="w-10 h-10 md:w-12 md:h-12 text-cyan-400"
              strokeWidth={1.5}
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 space-y-3">
          <h3 className="text-2xl md:text-3xl font-medium text-foreground">
            {title}
          </h3>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
