import React, { useEffect, useState, Fragment, FC } from "react";
import axios from "axios";

import Header from "parts/Header";
import TopHeadlines from "parts/TopHeadlines";
import AllPosts from "parts/AllPosts";
import Footer from "parts/Footer";

//Set Interface
export interface Article {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: Date;
}

const LandingPage: FC = (props) => {
  const [headlines, setHeadlinesList] = useState<Article[]>([]);
  const [allPosts, setAllPostsList] = useState<Article[]>([]);

  //Set Document Title
  useEffect(() => {
    document.title = "Eigen News";
  }, []);

  //Get API Top Headlines
  useEffect(() => {
    axios.get("https://newsapi.org/v2/top-headlines?country=id&pageSize=3&apiKey=8d227da4ad3a4ebe823c51f7a599c140").then((response) => {
      console.log(response.data.articles);
      setHeadlinesList(response.data.articles);
    });
  }, []);

  //Get API All Posts
  useEffect(() => {
    axios.get("https://newsapi.org/v2/everything?q=teknologi&pageSize=9&sortBy=publishedAt&apiKey=8d227da4ad3a4ebe823c51f7a599c140").then((response) => {
      console.log(response.data.articles);
      setAllPostsList(response.data.articles);
    });
  }, []);
  return (
    <Fragment>
      <Header />
      <main>
        <TopHeadlines items={headlines} />
        <AllPosts items={allPosts} />
      </main>
      <Footer />
    </Fragment>
  );
};
export default LandingPage;
