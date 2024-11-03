import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const owner = searchParams.get("owner");
  const repo = searchParams.get("repo");

  try {
    const response = await fetch(
      `https://api.github.com/repos/${owner}/${repo}`,
      {
        headers: {
          Accept: "application/vnd.github.v3+json",
        },
        next: { revalidate: 3600 }, // Cache for 1 hour
      }
    );
    const data = await response.json();

    return NextResponse.json({
      stars: data.stargazers_count,
      forks: data.forks_count,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Error fetching repository data", msg: error?.message },
      { status: 500 }
    );
  }
}
