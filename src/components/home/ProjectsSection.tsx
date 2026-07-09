import ProjectScrollAnimation from "../animations/ProjectScrollAnimation";

const IMG_MOBILE = "/agenio/assets/images/mobile-card.png";
const SHAPE_TL = "/agenio/assets/images/portfolio/shape-top-left.svg";
const SHAPE_TR = "/agenio/assets/images/portfolio/shape-top-right.svg";

export default function ProjectsSection() {
  return (
    <section className="tgt-project-area" data-node-id="48:404">
      <ProjectScrollAnimation />
      <div className="tgt-project-inner border-1">
        <div className="tgt-project-space" aria-hidden />

        <div className="tgt-project-floating">
          <div className="tgt-project-title-area">
            <p className="tgt-sub-title bg-white">OUR VISION</p>
            <h2 className="tgt-section-title font-secondary font-semibold text-[#030712]">
              Every project we take on
              <br />
              <span className="tgt-project-title-inline">
                starts{" "}
                <span className="tgt-project-title-img">
                  <img src={IMG_MOBILE} width={147} height={83} alt="" className="tgt-vision-img" />
                </span>{" "}
                with a deep
              </span>
              <br />
              understanding of goals
            </h2>
            <p className="tgt-project-title-desc tgt-body-muted">
              We&apos;re a full-service digital agency that combines innovation, creativity, and technology to build
              powerful brands, websites, and mobile applications. We create scalable digital solutions that not only
              look exceptional but also drive growth, engagement, and lasting business success.
            </p>
          </div>
        </div>

        <div className="tgt-project-pin">
          <div className="tgt-project-video-wrapper">
            <div className="tgt-project-slide feature-project">
              <div className="tgt-project-slide-image image-area">
                <img src={IMG_MOBILE} alt="" className="video-img" />
                <img src={SHAPE_TL} alt="" className="shape top-left-shape" />
                <img src={SHAPE_TR} alt="" className="shape top-right-shape" />
              </div>

              <div className="tgt-project-slide-content slide-content">
                <div className="tgt-project-intro product-intro">
                  <div className="tgt-project-intro-top top">
                    <h3 className="tgt-project-intro-title">Nova Mobile App</h3>
                    <p className="tgt-project-intro-desc desc">
                      We streamlined user flows, refreshed the visual language, and introduced accessibility-focused
                      design components to improve usability.
                    </p>
                  </div>
                  <div className="bottom">
                    <ul className="tgt-project-intro-stats">
                      <li>
                        <h3>40%</h3>
                        <p>Faster completion</p>
                      </li>
                      <li>
                        <h3>+25%</h3>
                        <p>Faster completion</p>
                      </li>
                      <li>
                        <h3>4.8</h3>
                        <p>Star rating</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="tgt-project-scroll-runway" aria-hidden />
      </div>
    </section>
  );
}
