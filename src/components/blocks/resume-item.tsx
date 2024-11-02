import { cn, formatDate } from "@/lib/utils";
import { Public_Sans } from "next/font/google";
import Image from "next/image";

const publicSans = Public_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export default function ResumeItem({ data }: { data: any }) {
  const {
    title,
    month,
    year,
    isPresent,
    endedMonth,
    endedYear,
    subtitle,
    location,
    stack,
    descriptions,
    img,
    icon: Icon,
  } = data;

  const { date, duration } = formatDate({
    month,
    year,
    isPresent,
    endedMonth,
    endedYear,
  });

  return (
    <div
      className={cn(
        publicSans.className,
        "flex flex-col gap-4 text-body md:text-body-desktop"
      )}
    >
      <div className="flex flex-row gap-4">
        <div className="flex flex-col gap-2 items-center">
          <div className="bg-background md:bg-transparent border border-border md:border-terminal-fg/15 h-12 w-12 rounded-xl flex-shrink-0 overflow-hidden flex items-center justify-center">
            {img && (
              <Image
                src={img}
                alt={title}
                width={256}
                height={256}
                className="h-full"
              />
            )}
            {Icon && <Icon className="md:text-terminal-fg" />}
          </div>
          <div className="bg-border md:bg-terminal-fg/10 w-[1px] flex-grow" />
        </div>
        <div className="flex flex-col">
          {/* Title */}
          <div className="flex flex-wrap gap-x-2 text-foreground md:text-terminal-fg">
            <h3 className="font-bold">{title}</h3>{" "}
            <span className="font-light opacity-80">{date}</span>{" "}
            <span className="font-extralight opacity-60">{duration}</span>
          </div>
          {/* Subtitle */}
          <div className="flex flex-wrap gap-x-2 md:text-small-desktop">
            <b className="font-medium whitespace-nowrap">{subtitle}</b>{" "}
            <span className="font-light opacity-75 tracking-wide">
              {location}
            </span>
          </div>
          {/* Stacks */}
          {stack && (
            <div className="flex flex-wrap gap-1 mt-1">
              {stack.map((item, index) => (
                <StackItem key={"item-" + index}>{item}</StackItem>
              ))}
            </div>
          )}
          {/* Description */}
          <p className="flex flex-col gap-1 mt-2 text-foreground/70 dark:text-foreground/50 md:text-terminal-fg/70 font-light">
            {descriptions.map((desc, index) => (
              <span className="text-small tracking-wide" key={"desc-" + index}>
                - {desc}
              </span>
            ))}
          </p>
        </div>
      </div>
      <div></div>
    </div>
  );
}

const StackItem = ({ children }) => (
  <div className="bg-transparent border border-border md:border-terminal-fg/25 rounded-full text-small py-1 px-2">
    {children}
  </div>
);
