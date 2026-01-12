interface SectionHeaderProps {
  badge?: string;
  title: string;
  description?: string;
  centered?: boolean;
}

const SectionHeader = ({
  badge,
  title,
  description,
  centered = true,
}: SectionHeaderProps) => {
  return (
    <div className={`mb-10 md:mb-12 ${centered ? "text-center" : ""}`}>
      {badge && (
        <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-primary text-sm font-medium mb-4">
          {badge}
        </span>
      )}
      <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4 text-balance">
        {title}
      </h2>
      {description && (
        <p
          className={`text-muted-foreground text-lg max-w-2xl ${
            centered ? "mx-auto" : ""
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
