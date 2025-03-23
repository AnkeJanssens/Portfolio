import "../../css/responsive.css";

export default function HomeBanner() {
  return (
    <section className="home_banner_area" id="home">
      <div className="container box_1620">
        <div className="banner_inner d-flex align-items-center">
          <div className="banner_content">
            <div className="media">
              <div className="d-flex">
                <img src="../../dist/o-removebg-preview.png" alt="" />
              </div>
              <div className="media-body">
                <div className="personal_text">
                  <h6>
                    <span className="personal_helloWorld">Hello World</span>, ik
                    ben
                  </h6>
                  <h3>Anke Janssens</h3>
                  <h4>Student toegepaste informatica</h4>
                  <p>
                    Ik ben een laatstejaarsstudent Toegepaste Informatica aan
                    HOGENT Campus Aalst gespecialiseerd in Software Development.
                  </p>
                  <ul className="list basic_info">
                    <li>
                      <a>
                        <i className="lnr lnr-calendar-full"></i> 19 Februari,
                        2004
                      </a>
                    </li>
                    <li>
                      <a>
                        <i className="lnr lnr-envelope"></i>
                        ankejanssens2004@gmail.com
                      </a>
                    </li>
                    <li>
                      <a>
                        <i className="lnr lnr-home"></i> Aalst
                      </a>
                    </li>
                  </ul>
                  <ul className="list personal_social">
                    <li>
                      <a href="https://www.linkedin.com/in/anke-janssens-888488330/">
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
