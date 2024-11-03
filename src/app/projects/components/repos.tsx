import Section from "@/components/section";
import Repository from "./repos/repositories";
import { repositories } from "@/lib/data";
import { Button } from "@/components/ui/button";

export default function Repos() {
  return (
    <Section className="items-start">
      <div className="flex flex-wrap items-end justify-between gap-4 w-full">
        <h1 className="text-h2 font-extrabold md:text-h1-desktop">
          Featured Repositories
        </h1>
        <Button
          size="sm"
          onClick={() => (window.location.href = "https://github.com/gisketch")}
        >
          {" "}
          View GitHub
        </Button>
      </div>
      <div className="grid grid-cols-1 w-full md:grid-cols-2 gap-4 mt-8 md:mt-12">
        {repositories.map((repo, index) => (
          <Repository key={`repo-${index}`} {...repo} />
        ))}
      </div>
    </Section>
  );
}
