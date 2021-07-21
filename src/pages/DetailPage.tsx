import React, { Fragment, FC } from "react";

import Header from "parts/Header";

import Footer from "parts/Footer";

const DetailPage: FC = (props) => {
  return (
    <Fragment>
      <Header />
      <main>Article</main>
      <Footer />
    </Fragment>
  );
};
export default DetailPage;
