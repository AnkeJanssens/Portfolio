import HomeBanner from "../components/HomeBanner.jsx";
import Welcome from "../components/Welcome.jsx";
import Tabs from "../components/Tabs.jsx";
import Projects from "../components/Projects.jsx";

export default function Home() {
  return (
    <>
      <HomeBanner />
      <Welcome />
      <Tabs />
      <Projects />
    </>
  );
}
