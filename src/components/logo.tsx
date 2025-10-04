import { cn } from "@/lib/utils";

interface LogoProps {
  isScrolled?: boolean;
}

const Logo = ({ isScrolled = false }: LogoProps) => {
  const brandName = "AWKWORLD";

  return (
    <div
      className={cn(
        "font-headline font-black tracking-widest",
        isScrolled ? "text-2xl" : "text-3xl"
      )}
      aria-label={`${brandName} Home`}
    >
      {brandName}
    </div>
  );
};

export default Logo;
