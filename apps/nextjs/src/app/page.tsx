import { api } from "~/trpc/server";

export const runtime = "edge";

export default function HomePage() {
  // You can await this here if you don't want to show Suspense fallback below
  const posts = api.post.all();

  return <main className="container h-screen py-16"></main>;
}
