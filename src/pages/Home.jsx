import About from "../components/About"
import Contact from "../components/Contact"
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
      <Contact />
    </div>
  )
}

export default Home