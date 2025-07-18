import Header from "@/components/section/HomeSection/header";
import { client } from "@/sanity/lib/client";

type Livestream = {
  _id: string;
  title: string;
  videoUrl: string;
  description: string;
  isLive: boolean;
};

export default async function LiveStream() {
  const livestream = await client.fetch<Livestream>(
    `*[_type == "livestream" && isLive == true][0]`
  );

  return (
    <section className="min-h-screen flex items-center justify-center flex-col p-8 bg-primary text-white">
      <Header />
      {livestream ? (
        <>
          <h1 className="text-3xl font-bold mb-4">{livestream.title}</h1>
          <p className="mb-6">{livestream.description}</p>
          <div className="w-full max-w-3xl aspect-video">
            <iframe
              src={livestream.videoUrl}
              width="100%"
              height="100%"
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </>
      ) : (
        <p>No livestream is currently active.</p>
      )}
    </section>
  );
}
