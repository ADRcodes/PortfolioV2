import About from "../components/About"
import Contact from "../components/Contact"
import ImageSlider from "../components/IconSlider"
import Projects from "../components/projects/Projects"
// import StickyTop from "../components/stickyTop/StickyTop"
import Nav from "../components/Nav"
// import AnimatedHeader from "../components/animatedHeader/AnimatedHeader"
// import AnimatedNavBar from "../components/animatedNavBar/AnimatedNavBar"



const Home = () => {

  const menuItems = [
    { label: "Playground", link: "/playground", comingSoon: true },
    { label: "Blog", link: "/blog", comingSoon: true },
  ];


  return (
    <div>
      <Nav menuItems={menuItems} />
      <About />
      <ImageSlider />
      <Projects />
      <Contact />
    </div>
  )
}

export default Home