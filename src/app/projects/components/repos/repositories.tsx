"use client";

import { Button } from "@/components/ui/button";
import {
  Code2Icon,
  CodeIcon,
  CurlyBracesIcon,
  ExternalLink,
  GitForkIcon,
  StarIcon,
} from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface RepositoryProps {
  name: string;
  language: string;
  description: string;
  url: string;
  demo?: string;
  owner: string;
  repo: string;
}

interface RepoStats {
  stars: number;
  forks: number;
}

export default function Repository({
  name,
  language,
  description,
  url,
  demo,
  owner,
  repo,
}: RepositoryProps) {
  const [stats, setStats] = useState<RepoStats>({ stars: 0, forks: 0 });

  useEffect(() => {
    async function fetchRepoStats() {
      try {
        const response = await fetch(`/api/github?owner=${owner}&repo=${repo}`);
        const data = await response.json();
        setStats(data);
      } catch (error) {
        console.error("Error fetching repository stats:", error);
      }
    }

    fetchRepoStats();
  }, [owner, repo]);

  return (
    <div className="relative">
      {/* Shadow/Background div */}
      <div className="absolute inset-0 rounded-xl dark:bg-[rgb(202,202,202)] bg-black" />

      {/* Main content div */}
      <motion.div
        className="relative border border-border rounded-xl p-4 w-full flex flex-col gap-8 justify-between bg-background h-full"
        whileHover={{ y: -10 }}
        transition={{ duration: 0.1 }}
      >
        <div>
          <div className="flex flex-row gap-2 items-center text-foreground/80">
            <div className="flex justify-center items-center border border-border rounded-lg h-8 w-8">
              <Code2Icon size={20} className="text-foreground/80" />
            </div>
            <h2 className="text-h4">{name}</h2>
          </div>
          <span className="flex flex-row gap-1 text-small items-center text-foreground/70 mt-2">
            <CodeIcon size={12} />
            {language}
          </span>
          <p className="mt-2 text-body text-foreground/80">{description}</p>
        </div>
        <div className="mt-2 flex flex-wrap justify-between items-center">
          <div className="flex flex-row gap-4 text-body text-foreground/80">
            <span className="flex flex-row gap-1 items-center">
              <StarIcon size={14} />
              {stats.stars}
            </span>
            <span className="flex flex-row gap-1 items-center">
              <GitForkIcon size={14} />
              {stats.forks}
            </span>
          </div>
          <div className="flex flex-row gap-2 text-body">
            <Button
              size="sm"
              variant="ghost"
              className="flex flex-row gap-1 items-center"
              onClick={() => window.open(url, "_blank", "noopener,noreferrer")}
            >
              <CurlyBracesIcon />
              Code
            </Button>
            {demo && (
              <Button
                size="sm"
                className="flex flex-row gap-1 items-center"
                onClick={() =>
                  window.open(demo, "_blank", "noopener,noreferrer")
                }
              >
                <ExternalLink />
                Demo
              </Button>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
