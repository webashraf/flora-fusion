import LightGallery from "lightgallery/react";

import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lightgallery.css";

// import "lightgallery/scss/lg-zoom.scss";
// import "lightgallery/scss/lightgallery.scss";

import CommonHeading from "@/shared/CommonHeading/CommonHeading";
import { TProduct } from "@/types/types";
import lgZoom from "lightgallery/plugins/zoom";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Gallery = ({ products }: { products: TProduct | any }) => {
  console.log(products);
  // const onInit = () => {
  //   console.log("lightGallery has been initialized");
  // };
  return (
    <div className="App section-margin-top">
      <CommonHeading
        title="Image Gallery"
        subTitle="A Visual Journey Through Our Plant Collection"
      />
      <LightGallery
        plugins={[lgZoom]}
        mode="lg-fade"
        pager={false}
        thumbnail={true}
        galleryId={"nature"}
        // autoplayFirstVideo={false}
        elementClassNames={"gallery"}
        mobileSettings={{
          controls: true,
          showCloseIcon: false,
          download: true,
          rotate: false,
        }}
      >
        {products?.slice(0, 16).map((product: TProduct) => (
          <a
            key={product._id}
            data-lg-size="1000-800"
            data-pinterest-text="Pin it2"
            data-tweet-text="lightGallery slide  2"
            className="gallery__item"
            data-src={product.imageURL}
            data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@therawhunter' >Massimiliano Morosinotto </a></h4><p> Location - <a href='https://unsplash.com/s/photos/tre-cime-di-lavaredo%2C-italia'>Tre Cime di Lavaredo, Italia</a>This is the Way</p>"
          >
            <img
              className="img-responsive inline w-[25%] h-[400px] object-cover"
              src={product.imageURL}
            />
          </a>
        ))}
      </LightGallery>
    </div>
  );
};

export default Gallery;
