import { UnsplashImage } from "@/models/unsplash-image";

interface PageProps {
  params: { topic: string };
  // searchParams: { [key: string]: string | string[] | undefined},
}

export default async function Page({ params: { topic } }: PageProps) {
  const response = await fetch(
    `https://api.unsplash.com/photos/random?query=${topic}&count=30&client_id=${process.env.UNSPLASH_ACCESS_KEY}`
  );
  const images: UnsplashImage;

  return <div>{topic}</div>;
}
