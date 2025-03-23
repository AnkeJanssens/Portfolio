import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container text-center">
        <p className="p-tab2 mb-6 projecten">PROJECTEN</p>

        {/* Eerste project */}
        <div className="blog-card">
          <div className="blog-card-header">
            <Swiper navigation modules={[Navigation]} className="mySwiper">
              <SwiperSlide className="img-center">
                <div className="img-center">
                  <img
                    src="../../dist/splendor2.png"
                    alt="splendor 2"
                    className="blog-card-img"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="img-center">
                <div className="img-center">
                  <img
                    src="../../dist/splendor1.png"
                    alt="splendor 1"
                    className="blog-card-img"
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="blog-card-body">
            <h5 className="blog-card-title">Splendor applicatie</h5>
            <p>
              Tijdens mijn studie Toegepaste Informatica heb ik samen met drie
              medestudenten een digitale versie van Splendor gebouwd in Java met
              JavaFX voor de UI. Dit was een van mijn eerste groepsprojecten,
              waarbij we het volledige spel van scratch hebben ontwikkeld – van
              de spelmechanica tot een visueel aantrekkelijke en
              gebruiksvriendelijke interface.
            </p>
            <p>
              <strong>Gebruikte technologieën:</strong> Java, JavaFX
            </p>
          </div>
        </div>

        {/* Tweede project */}
        <div className="blog-card">
          <div className="blog-card-header">
            <Swiper navigation modules={[Navigation]} className="mySwiper">
              <SwiperSlide className="img-center">
                <div className="img-center">
                  <img
                    src="../../dist/hondentrimsalon1.png"
                    alt="hondertrimsalon 2"
                    className="blog-card-img"
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="img-center">
                  <img
                    src="../../dist/hondentrimsalon2.png"
                    alt="hondertrimsalon 1"
                    className="blog-card-img"
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="blog-card-body">
            <h5 className="blog-card-title">Hondentrimsalon Website</h5>
            <p>
              Voor dit project heb ik een complete website ontwikkeld voor een
              hondentrimsalon. De website biedt gebruikers de mogelijkheid om
              een account aan te maken, in te loggen en afspraken te plannen.
              Daarnaast kunnen gebruikers hun eigen honden toevoegen aan hun
              profiel, inclusief ras, naam en speciale verzorgingswensen. Verder
              kunnen bezoekers een overzicht bekijken van alle behandelingen,
              beschikbare rassen en de bijbehorende prijzen.
            </p>
            <p>
              Dit project heeft mij geholpen om mijn vaardigheden in
              webontwikkeling, gebruikersbeheer en databasebeheer verder te
              ontwikkelen.
            </p>
            <p>
              <strong>Gebruikte technologieën:</strong> Node.js, Vite, HTML, CSS
            </p>
          </div>
        </div>

        {/* Derde project */}
        <div className="blog-card">
          <div className="blog-card-header">
            <Swiper navigation modules={[Navigation]} className="mySwiper">
              <SwiperSlide className="img-center">
                <div className="img-center">
                  <img
                    src="../../dist/delewaeWeb1.png"
                    alt="deleware 1"
                    className="blog-card-img"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="img-center">
                <div className="img-center">
                  <img
                    src="../../dist/delewareWeb2.png"
                    alt="deleware 2"
                    className="blog-card-img"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="img-center">
                <div className="img-center">
                  <img
                    src="../../dist/delewareWeb3.png"
                    alt="deleware 3"
                    className="blog-card-img"
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="blog-card-body">
            <h5 className="blog-card-title">B2B portaal website</h5>
            <p>
              Voor Deleware hebben we een B2B portaal ontwikkeld. Daarvoor
              hebben we een website gemaakt waar je kan aanmelden, registreren,
              bestellingen raadplegen, bestelling betalen, notificaties
              raadplegen en betalingsherinneringen sturen. Dit project is op een
              agile manier uitgevoerd. We werkten in sprints, hielden dagelijks
              stand-up meetings en registreerden onze gewerkte uren in Java.
            </p>
            <p>
              <strong>Gebruikte technologieën:</strong> TypeScript, React met
              Vite, Node.js , HTML, CSS
            </p>
          </div>
        </div>

        {/* Vierde project */}
        <div className="blog-card">
          <div className="blog-card-header">
            <Swiper navigation modules={[Navigation]} className="mySwiper">
              <SwiperSlide className="img-center">
                <div className="img-center">
                  <img
                    src="../../dist/delewareApp1.png"
                    alt="hondertrimsalon 2"
                    className="blog-card-img"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="img-center">
                <div className="img-center">
                  <img
                    src="../../dist/delewareApp2.png"
                    alt="hondertrimsalon 1"
                    className="blog-card-img"
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="blog-card-body">
            <h5 className="blog-card-title">B2B portaal applicatie</h5>
            <p>
              Naast de webversie hebben we ook een desktopapplicatie ontwikkeld
              voor het B2B-portaal van Delaware. In deze applicatie kan je
              aanmelden, als admin om accounts te beheren, maar je kan hier ook
              aanmelden als verkoper om al je klanten en bestellingen te
              beheren. Dit hebben we in java geschreven met javafx voor de UI.
              Ook dit project is op een agile manier aangepakt. We werkten met
              sprints, voerden dagelijks stand-ups uit en hielden onze gewerkte
              uren bij in Java.
            </p>
            <p>
              <strong>Gebruikte technologieën:</strong> Java, JavaFX
            </p>
          </div>
        </div>
        {/* Vijfde project */}
        <div className="blog-card">
          <div className="blog-card-header">
            <Swiper navigation modules={[Navigation]} className="mySwiper">
              <SwiperSlide className="img-center">
                <div className="img-center">
                  <img
                    src="../../dist/dozerWeb1.png"
                    alt="dozer 1"
                    className="blog-card-img"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="img-center">
                <div className="img-center">
                  <img
                    src="../../dist/dozerWeb2.png"
                    alt="dozer 2"
                    className="blog-card-img"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="img-center">
                <div className="img-center">
                  <img
                    src="../../dist/dozerWeb3.png"
                    alt="dozer 3"
                    className="blog-card-img"
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="blog-card-body">
            <h5 className="blog-card-title">Dozer website</h5>
            <p>
              Voor dit project hebben we een website ontwikkeld voor Dozer, een
              buldozerbedrijf. Deze website leest duitse xml-bestanden in en en
              vertaald deze dan naar nederlandse bestellingen. Op deze website
              kan je ook je bestellingen en facturen beheren en downloaden. Ook
              kan je hier alle soorten machines bekijken en de bijhoorende
              opties. Admins kunnen hier ook inloggen en machines, opties en
              categorieen beheren. Tijdens dit project hebben we ook gewerkt op
              een agile manier waarbij er elke sprint een nieuwe ProductLead
              was.
            </p>
            <p>
              <strong>Gebruikte technologieën:</strong> C#, blazor
            </p>
          </div>
        </div>

        {/* Zes project */}
        <div className="blog-card">
          <div className="blog-card-header">
            <Swiper navigation modules={[Navigation]} className="mySwiper">
              <SwiperSlide className="img-center">
                <div className="img-center">
                  <img
                    src="../../dist/dozerApp1.png"
                    alt="dozer 1"
                    className="blog-card-img"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="img-center">
                <div className="img-center">
                  <img
                    src="../../dist/dozerApp2.png"
                    alt="dozer 2"
                    className="blog-card-img"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="img-center">
                <div className="img-center">
                  <img
                    src="../../dist/dozerApp3.png"
                    alt="dozer 3"
                    className="blog-card-img"
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="blog-card-body">
            <h5 className="blog-card-title">Dozer applicatie</h5>
            <p>
              Naast de webversie hebben we ook een android applicatie moeten
              maken zodat de verkopers met hun tablet bij de klanten kunnen
              gaan. Hierop kan je ook alle machines zien en kan je ook een pre
              offertes aanmaken. Ook hebben we er voor gezorgd dat de verkopers
              hun dat de hele applicatie ook werkt wanneer die offline is. Ook
              hier hebben we gewerkt met sprints en een ProductLead.
            </p>
            <p>
              <strong>Gebruikte technologieën:</strong> kotlin, Jetpack Compose
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
