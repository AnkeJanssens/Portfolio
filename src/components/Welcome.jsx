export default function Welcome() {
  return (
    <>
      <section className="welcome_area p_120" id="aboutMe">
        <div className="container">
          <div className="row welcome_inner">
            <div className="col-lg-6">
              <div className="welcome_text">
                <h4>Over mezelf</h4>
                <p>
                  Ik ben een leergierige en ambitieuze laatstejaarsstudent
                  Toegepaste Informatica aan HOGENT Campus Aalst gespecialiseerd
                  in Software Development. Ik heb een sterk analytisch inzicht
                  en een focus op het creëren van gebruiksvriendelijke
                  oplossingen. Daarnaast ben ik sportief en gedreven, mijn
                  passie voor hockey heeft me belangrijke vaardigheden
                  bijgebracht op het gebied van teamwork, communicatie en
                  doorzettingsvermogen. Ik streef ernaar om voortdurend te
                  groeien en nieuwe kennis op te doen en ik werk nauwkeurig en
                  met toewijding aan alles wat ik onderneem.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="tools_expert">
                <div className="skill_main">
                  <div className="skill_item">
                    <h4>
                      Backend <span className="counter">85</span>%
                    </h4>
                    <div className="progress_br">
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-valuenow="85"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="skill_item">
                    <h4>
                      Frondend <span className="counter">90</span>%
                    </h4>
                    <div className="progress_br">
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-valuenow="90"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="skill_item">
                    <h4>
                      Database <span className="counter">90</span>%
                    </h4>
                    <div className="progress_br">
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-valuenow="90"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="skill_item">
                    <h4>
                      Analyse <span className="counter">75</span>%
                    </h4>
                    <div className="progress_br">
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-valuenow="75"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="skill_item">
                    <h4>
                      Testing <span className="counter">70</span>%
                    </h4>
                    <div className="progress_br">
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-valuenow="70"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
