import React, { Fragment, FC, useEffect } from "react";

import Header from "parts/Header";

import Footer from "parts/Footer";

const DetailPage: FC = (props) => {
  //Set Document Title
  useEffect(() => {
    document.title = "Instagram Kenalkan Tool untuk Kontrol Konten Sensitif";
  }, []);

  return (
    <Fragment>
      <Header />
      <main>
        <div id="post" className="post">
          <div className="container">
            <article className="post-body">
              <h1 className="title">Instagram Kenalkan Tool untuk Kontrol Konten Sensitif</h1>
              <div className="date">July 21, 2021</div>
              <div className="featured-image">
                <img
                  src="https://cdn0-production-images-kly.akamaized.net/2Su_QBZr2eJDZoUBO4S8G2exAHM=/673x379/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/1376420/original/039062100_1476703223-Instagram.jpg"
                  alt=""
                />
              </div>
              <div className="content">
                <p>
                  Liputan6.com, Jakarta - Facebook memperkenalkan pengaturan baru yang memungkinkan pengguna membatasi seberapa banyak konten sensitif muncul di tab Explore Instagram mereka. Menurut
                </p>
                <p>Facebook, pengaturan Sensitive Content Control ini akan memungkinkan pengguna melihat lebih sedikit atau lebih banyak dari beragam tipe konten-konten sensitif.</p>
                <p>Facebook memberikan tiga opsi pilihan kepada pengguna dalam mengatur konten-konten sensitif yang mungkin ditampilkan atau tidak ditampilkan di tab Explore Instagram.</p>
                <p>Ketiga pilihan tersebut adalah "Allow/izinkan", "Limit/batasi" sebagai pengaturan default, dan "Limit Even More/Lebih dibatasi".</p>
                <p>
                  Mengutip The Verge, Rabu (21/7/2021), pada laman dukungan untuk Sensitive Content Control, Instagram mengatakan, konten sensitif dapat mencakup unggahan yang menjurus ke arah
                  seksual, kekerasan, atau konten yang mempromosikan hal-hal seperti penggunaan tembakau atau obat-obatan.
                </p>
              </div>
            </article>
          </div>
        </div>
      </main>
      <Footer />
    </Fragment>
  );
};
export default DetailPage;
