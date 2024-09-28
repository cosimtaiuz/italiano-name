import Head from "next/head";
import LandingPageENG from "./landingPageENG";
export default function Home() {
  return (
    <div>
      <Head>
        <title>American Alter Ego Generator</title>
        <meta
          name="description"
          content="Discover your American alter ego with just your name!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <LandingPageENG />
      </main>
    </div>
  );
}
