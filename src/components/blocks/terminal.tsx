import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";
import { Fira_Code } from "next/font/google";

const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

interface TerminalProps extends HTMLMotionProps<"div"> {
  className?: string;
  children?: React.ReactNode;
}

const Terminal = ({ className, children, ...motionProps }: TerminalProps) => {
  return (
    <motion.div
      layout
      layoutId="terminal-layout"
      className={cn(
        "bg-terminal-bg/50 w-full rounded-xl border-border border h-[520px] flex flex-col backdrop-blur-md shadow-xl z-[5]",
        className
      )}
      {...motionProps}
    >
      {/*  title  */}
      <div className="flex items-center gap-2 p-2">
        <div className="rounded-full h-3 w-3 bg-[#FF5D5A]" />
        <div className="rounded-full h-3 w-3 bg-[#F5C350]" />
        <div className="rounded-full h-3 w-3 bg-[#65CD57]" />
      </div>
      {/* terminal wrapper */}
      <div
        className={`w-full flex-grow py-2 px-4 text-body text-terminal-fg ${firaCode.className} flex flex-col gap-[0.125rem] overflow-y-scroll`}
      >
        {/*  content */}
        {children}
      </div>
    </motion.div>
  );
};

export default Terminal;
