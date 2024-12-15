

const About = () => {
  return (
    <section className="min-h-[90vh] flex items-center pt-10 pb-2">
      <div className="container mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-8 items-center">
        {/* Left Column: Text Content */}
        <div className="space-y-6">
          <span className="text-primary-600 font-semibold uppercase tracking-wide">
            Engineer & Innovator
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
            Empowering Social Enterprises <br className="hidden md:block" />
            through Technology &amp; Innovation
          </h1>
          <p className="text-gray-700 text-base md:text-lg">
            I’m a mechanical engineer turned software developer, focused on using
            tech and creative problem-solving to drive social impact and business growth.
            Let’s work together to make a positive difference.
          </p>
          <div className="flex space-x-4">
            <a
              href="#projects"
              className="btn-primary"
            >
              View My Work
            </a>
            {/* <a
              href="#about"
              className="inline-block px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-200 transition"
            >
              Learn More
            </a> */}
          </div>
        </div>

        {/* Right Column: Personal Photo */}
        <div className="flex order-1 justify-center">
          <img
            src="src/assets/images/profile-with-background.png"
            alt="Alex Russell"
            className="w-48 h-48 hidden md:block md:w-[350px] md:h-[350px] object-cover rounded-full"
          />
        </div>
      </div>
    </section>


  )
}

export default About