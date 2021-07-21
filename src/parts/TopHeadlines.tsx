import React, { Fragment, FC } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

import { Article } from "pages/LandingPage";

interface TopHeadlinesProps {
  items: Article[];
}

const TopHeadlines: FC<TopHeadlinesProps> = ({ items }) => {
  return (
    <Fragment>
      <section className="container">
        <div className="featured-post">
          <h2>
            <span>Top Headlines</span>
          </h2>
          <div className="row">
            {items.map((article) => (
              <div className="col-lg-4 d-flex align-items-stretch mb-4">
                <Card>
                  <a href="" title="{article.title}">
                    <CardImg top src={article.title} alt={article.title} />
                  </a>
                  <CardBody>
                    <div className="date">
                      {article.id} <span className="dot"></span> Kompas.Com
                    </div>
                    <CardTitle tag="h3">
                      <a href="" title={article.title}>
                        {article.title}
                      </a>
                    </CardTitle>
                    <CardText>{article.body}</CardText>
                  </CardBody>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Fragment>
  );
};
export default TopHeadlines;
