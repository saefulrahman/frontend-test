import React, { Fragment, FC } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";
import moment from "moment";
import { Article } from "pages/LandingPage";

interface AllPostsProps {
  items: Article[];
}
const AllPosts: FC<AllPostsProps> = ({ items }) => {
  return (
    <section className="container">
      <div className="featured-post">
        <h2>
          <span>All Posts</span>
        </h2>
        <div className="row">
          {items.map((article) => (
            <div className="col-lg-4 d-flex align-items-stretch mb-4">
              <Card>
                <a href={article.url} title="{article.title}">
                  <CardImg top src={article.urlToImage} alt={article.title} width="336" height="190" />
                </a>
                <CardBody>
                  <div className="date">{moment(article.publishedAt).format("MMMM D, Y")}</div>
                  <CardTitle tag="h3">
                    <a href={article.url} title={article.title}>
                      {article.title}
                    </a>
                  </CardTitle>
                  <CardText>{article.description}</CardText>
                </CardBody>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default AllPosts;
