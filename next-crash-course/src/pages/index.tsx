import Head from "next/head"; //for custom titles, meta tags, descriptions etc
import ArticleList from "../components/ArticleList";
import { server } from "../../config";

interface Article {
  articles: {
    body: string;
    title: string;
    id: number;
    userId: number;
  }[];
}

function Home({ articles }: Article) {
  return <ArticleList articles={articles} />;
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/articles`);
  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};

export default Home;
