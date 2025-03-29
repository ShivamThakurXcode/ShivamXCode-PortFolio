interface SectionTitleProps {
  title: string;
}

export default function SectionTitle({ title }: SectionTitleProps) {
  return (
    <div className="mb-6 ">
      <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
        {title}
      </h2>
      <div className="w-12 h-1 bg-gradient-to-r from-primary to-primary/30 mt-2 rounded-full animate-pulse"></div>
    </div>
  );
}
