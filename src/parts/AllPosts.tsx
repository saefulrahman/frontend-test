import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

export default function AllPosts() {
  return (
    <section className="container">
      <div className="featured-post">
        <h2>
          <span>All Posts</span>
        </h2>
        <div className="row">
          <div className="col-lg-4 d-flex align-items-stretch mb-4">
            <Card>
              <a href="" title="Judul">
                <CardImg top src="https://saefulrahman.my.id/blog/cara-menggunakan-ssh-di-github/images/ssh-github_hu7f2c31cb17c6b91aa8599714a1cd3d05_53714_335x170_resize_q75_box.jpg" alt="" />
              </a>
              <CardBody>
                <div className="date">
                  July 12, 2021 <span className="dot"></span> Kompas.Com
                </div>
                <CardTitle tag="h3">
                  <a href="" title="Judul ">
                    Cara Menggunakan SSH di Github
                  </a>
                </CardTitle>
                <CardText>Dengan menggunakan protokol SSH, Kamu bisa terhubung dan remote ke server secara jarak jauh. Lewat kunci SSH Kamu bisa terhubung dan akses ke server t...</CardText>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
