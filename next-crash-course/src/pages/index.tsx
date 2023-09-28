import Head from "next/head"; //for custom titles, meta tags, descriptions etc

export default function Home() {
  return (
    <>
      <Head>
        <title>WebDev Newz</title>
        <meta name="keywords" content="web development, programming" />
      </Head>
      <h1>Welcome to Next</h1>
    </>
  );
}
