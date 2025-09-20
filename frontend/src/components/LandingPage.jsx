import React from "react";
import slide1 from "../assets/images/slide1.png";
import slide2 from "../assets/images/slide2.png";
import slide3 from "../assets/images/slide3.png";

function LandingPage() {
  return (
    <div id="landingCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="4000">
      {/* Indicadores */}
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#landingCarousel" data-bs-slide-to="0" className="active" aria-current="true"></button>
        <button type="button" data-bs-target="#landingCarousel" data-bs-slide-to="1"></button>
        <button type="button" data-bs-target="#landingCarousel" data-bs-slide-to="2"></button>
      </div>

      {/* Slides */}
      <div className="carousel-inner">
        {/* Slide 1 */}
        <div className="carousel-item active">
          <img src={slide1} className="d-block w-100 vh-100 object-fit-cover" alt="slide1" />
          <div className="carousel-caption d-flex flex-column justify-content-center h-100">
            <h1 className="fw-bold text-dark">Bienvenido a <span className="text-pastel-pink">Desde la Calma</span></h1>
            <p className="lead text-dark">Una plataforma hecha con calma y propósito.</p>
            <a href="#conocenos" className="btn btn-pastel-orange btn-lg mt-3">
              Conócenos
            </a>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="carousel-item">
          <img src={slide2} className="d-block w-100 vh-100 object-fit-cover" alt="slide2" />
          <div className="carousel-caption d-flex flex-column justify-content-center h-100">
            <h1 className="fw-bold text-dark">Minimalista y <span className="text-pastel-green">Potente</span></h1>
            <p className="lead text-dark">Diseñado para ofrecer lo esencial sin distracciones.</p>
            <a href="#conocenos" className="btn btn-pastel-blue btn-lg mt-3">
              Conócenos
            </a>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="carousel-item">
          <img src={slide3} className="d-block w-100 vh-100 object-fit-cover" alt="slide3" />
          <div className="carousel-caption d-flex flex-column justify-content-center h-100">
            <h1 className="fw-bold text-dark">Hecho con <span className="text-pastel-orange">React</span> y <span className="text-pastel-pink">DRF</span></h1>
            <p className="lead text-dark">Backend sólido, frontend moderno.</p>
            <a href="#conocenos" className="btn btn-pastel-green btn-lg mt-3">
              Conócenos
            </a>
          </div>
        </div>
      </div>

      {/* Controles */}
      <button className="carousel-control-prev" type="button" data-bs-target="#landingCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon"></span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#landingCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon"></span>
      </button>
    </div>
  );
}

export default LandingPage;
