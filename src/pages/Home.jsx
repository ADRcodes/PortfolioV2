import About from "../components/About"
import Contact from "../components/Contact"
import ExperienceTimeline from "../components/experienceTimeline.jsx/ExperienceTimeline"
import ImageSlider from "../components/IconSlider"
import Projects from "../components/projects/Projects"
import StickyTop from "../components/StickyTop/StickyTop"

const Home = () => {
  return (
    <div>
      <StickyTop />
      <About />
      <ImageSlider />
      <Projects />
      {/* <ExperienceTimeline /> */}
      <Contact />
    </div>
  )
}

export default Home