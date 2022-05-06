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
                  <h3 className="font-light font-size-32 text-start ps-5">Moda de verão 2022</h3>
                  <h2 className="font-bold font-size-48 text-start ps-5 text-uppercase">você sempre moda!</h2>
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
                <h3 className="font-light font-size-32 text-start ps-5">Nova linha de tenis esportivo</h3>
                  <h2 className="font-bold font-size-48 text-start ps-5">Novo NIKE StreetRun</h2>
                  <p className="font-book font-size-18 text-start ps-5">
                    Confira as novidades deste lançamento incrível que promete conforte e segurança para você.
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
                <h3 className="font-light font-size-32 text-start ps-5">Acessórios que fazem o seu estilo</h3>
                  <h2 className="font-bold font-size-48 text-start ps-5">Novo Ryban Style Black</h2>
                  <p className="font-book font-size-18 text-start ps-5">
                    O óculos de sol e orelha de sol são os acessórios que você deve ter para seu estilo garantido.
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