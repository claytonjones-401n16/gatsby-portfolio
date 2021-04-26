import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
// import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';

const Header = () => {
  const { hero } = useContext(PortfolioContext);
  const { name, subtitle, cta } = hero;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="hero" className="jumbotron">
      <Container>
        <Zoom
          right={isDesktop}
          bottom={isMobile}
          duration={1000}
          delay={250}
          distance="30px"
          cascade
        >
          <div>
            <h1 className="hero-title">
              <span className="text-color-main">{name || 'Your Name'}</span>
              {/* <br /> */}
            </h1>
            <p className="hero-sub-title">{subtitle || "I'm the Unknown Developer."}</p>
            <p className="hero-cta">
              <span className="cta-btn cta-btn--hero">
                <Link to="about" smooth duration={1000}>
                  {cta || 'Know more'}
                </Link>
              </span>
            </p>
          </div>
        </Zoom>
        {/* <Zoom right={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
          <p className="hero-cta">
            <span className="cta-btn cta-btn--hero">
              <Link to="about" smooth duration={1000}>
                {cta || 'Know more'}
              </Link>
            </span>
          </p>
        </Zoom> */}
      </Container>
    </section>
  );
};

export default Header;
