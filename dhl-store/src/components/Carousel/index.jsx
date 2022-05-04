import "bootstrap/dist/css/bootstrap.min.css";
import "../Carousel/style.scss";
import { Carousel } from "react-bootstrap";

export const SlideCarousel = () => {
  return (
    <>
      <div className="content-carousel-home">
        <Carousel controls={false} fade={true} keyboard={true} touch={true}>
          <Carousel.Item className="carousel-img-01">
            <Carousel.Caption>
              <div className="flex-carousel">
                <div className="content-carousel-01">
                  <h3 className="font-light font-size-32 text-start ps-5">Complete your look with</h3>
                  <h2 className="font-bold font-size-48 text-start ps-5">New Men's Accessories</h2>
                  <p className="font-book font-size-18 text-start ps-5">
                    Veja as novidades do verão e descubra como você pode
                  </p>
                </div>
                <div className="image-carousel"></div>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="carousel-img-02">
            <Carousel.Caption>
              <div className="flex-carousel">
                <div className="content-carousel-02">
                <h3 className="font-light font-size-32 text-start ps-5">Complete seu visual com</h3>
                  <h2 className="font-bold font-size-48 text-start ps-5">New Men's Accessories</h2>
                  <p className="font-book font-size-18 text-start ps-5">
                    Veja as novidades do verão e descubra como você pode
                  </p>
                </div>
                <div className="image-carousel">Olklk</div>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="carousel-img-03">
            <Carousel.Caption>
              <div className="flex-carousel">
                <div className="content-carousel-03">
                <h3 className="font-light font-size-32 text-start ps-5">Complete your look with</h3>
                  <h2 className="font-bold font-size-48 text-start ps-5">New Men's Accessories</h2>
                  <p className="font-book font-size-18 text-start ps-5">
                    Veja as novidades do verão e descubra como você pode
                  </p>
                </div>
                <div className="image-carousel">Olklk</div>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
};
export default SlideCarousel;