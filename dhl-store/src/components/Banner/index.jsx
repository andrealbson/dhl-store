// import "bootstrap/dist/css/bootstrap.min.css";
import "../Banner/style.scss";

export const Banner = () => {
  return (
    <>
      <div className="hero">
        <div className="diagonal-hero-bg">
          <div className="stars">
            <div className="small"></div>
            <div className="medium"></div>
            <div className="big"></div>
          </div>
        </div>
        <h1 className="title-looks text-center">Moda feminina:</h1>
        <h1 className="neon" data-text="[Neon]">[Looks noturnos]</h1>
        <h3 className="btn-link-banner">
          <button className="btn btn-outline-light btn-banner">Confira as novidades</button>
        </h3>
      </div>
    </>
  );
};
export default Banner;
