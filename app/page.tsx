import Head from "next/head";
import LandingPage from "./landingPage";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Italian Alter Ego Generator</title>
        <meta
          name="description"
          content="Discover your Italian alter ego with just your name!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <LandingPage />
      </main>
    </div>
  );
}
