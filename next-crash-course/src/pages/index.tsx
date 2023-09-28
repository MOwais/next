import Head from "next/head"; //for custom titles, meta tags, descriptions etc
import ArticleList from "../components/ArticleList";

export default function Home({ articles }) {
  return (
    <>
      <Head>
        <title>WebDev Newz</title>
        <meta name="keywords" content="web development, programming" />
      </Head>
      <ArticleList articles={articles} />
    </>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=6`
  );
  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};
