import { cn } from "@/lib/utils";

interface LogoProps {
  isScrolled?: boolean;
}

const Logo = ({ isScrolled = false }: LogoProps) => {
  const brandName = "AWKWARD";

  return (
    <div
      className={cn(
        "font-headline font-bold tracking-wider group",
        "relative inline-block cursor-pointer transition-all duration-300",
        isScrolled ? "text-xl" : "text-2xl"
      )}
      aria-label="AWKWARD Home"
    >
      <span className="sr-only">{brandName}</span>
      <div className="flex" aria-hidden="true">
        {brandName.split("").map((char, i) => (
          <span
            key={i}
            className="inline-block transition-all duration-500 ease-in-out group-hover:[&:nth-child(2)]:translate-y-[-0.2em] group-hover:[&:nth-child(4)]:-translate-x-[0.1em] group-hover:[&:nth-child(5)]:translate-y-[0.15em] group-hover:[&:nth-child(7)]:-translate-y-[0.1em] group-hover:tracking-widest"
          >
            {char}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Logo;
