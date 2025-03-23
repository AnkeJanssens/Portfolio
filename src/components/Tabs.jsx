export default function Tabs() {
  return (
    <>
      <section className="mytabs_area p_120" id="studies">
        <div className="container">
          <div className="tabs_inner">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <p className="p-tab mijnstudie">Mijn Studies</p>
            </ul>
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <ul className="list">
                  <li>
                    <span></span>
                    <div className="media">
                      <div className="d-flex ml-4">
                        <p className="jaar">2016 - 2019</p>
                      </div>
                      <div className="media-body ml-5">
                        <h4>Sint-JozefSchool Mere</h4>
                        <p>
                          Tijdens mijn eerste, tweede en derde middelbaar volgde
                          ik de STEAM-richting. Deze richting combineerde
                          wetenschap, technologie, engineering, kunst en
                          wiskunde en gaf me een brede basis in analytisch en
                          creatief denken.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <span></span>
                    <div className="media">
                      <div className="d-flex ml-4">
                        <p className="jaar">2019 - 2022</p>
                      </div>
                      <div className="media-body ml-5">
                        <h4>Sint-JozefSchool Mere</h4>
                        <p>
                          In mijn vierde, vijfde en zesde middelbaar koos ik
                          voor Wetenschappen-Wiskunde. Hier verdiepte ik me
                          verder in wetenschappen en wiskunde.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <span></span>
                    <div className="media">
                      <div className="d-flex ml-4">
                        <p className="jaar">2022 - heden</p>
                      </div>
                      <div className="media-body ml-5">
                        <h4>Hogent campus aalst</h4>
                        <p>
                          Momenteel studeer ik Toegepaste Informatica met een
                          specialisatie in Software Development. Hier leer ik
                          programmeren, software ontwerpen en werken met moderne
                          technologieën om innovatieve digitale oplossingen te
                          ontwikkelen.
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
