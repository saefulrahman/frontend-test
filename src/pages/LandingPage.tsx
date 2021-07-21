import React, { useEffect, useState, Fragment, FC } from "react";
import axios from "axios";

import Header from "parts/Header";
import TopHeadlines from "parts/TopHeadlines";
import AllPosts from "parts/AllPosts";
import Footer from "parts/Footer";

export interface Article {
  // title: string;
  // description: string;
  // urlToImage: string;
  // publishedAt: Date;
  id: number;
  userId?: number;
  title: string;
  body: string;
  articles: [];
}
// export type ArticleList = Article[];

const LandingPage: FC = (props) => {
  const [articles, setArticleList] = useState<Article[]>([]);
  // const [articles, setArticleList] = useState<ArticleList>();

  useEffect(() => {
    axios.get<Article[]>("https://jsonplaceholder.typicode.com/posts").then((response) => {
      console.log(response.data);
      setArticleList(response.data);
    });
  }, []);
  return (
    <Fragment>
      <Header />
      <main>
        <TopHeadlines items={articles} />
        <AllPosts />
      </main>
      <Footer />
    </Fragment>
  );
};
export default LandingPage;
