interface LeadershipCardProps {
  name: string;
  title: string;
  bio?: string;
}

export function LeadershipCard({ name, title, bio }: LeadershipCardProps) {
  return (
    <div className="w-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-8 md:p-10 lg:p-12">
      <div className="space-y-4">
        <div>
          <h3 className="text-3xl md:text-4xl font-normal text-foreground mb-2">
            {name}
          </h3>
          <p className="text-lg md:text-xl font-light">{title}</p>
        </div>
        {bio ? (
          <>
            <div className="h-px bg-neutral-800" />
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed whitespace-pre-line">
              {bio}
            </p>
          </>
        ) : null}
      </div>
    </div>
  );
}
