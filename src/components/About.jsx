

const About = () => {
  return (
    <section className="flex items-center pt-2 md:pt-10 pb-2">
      <div className="container mx-auto px-4 md:px-8 grid lg:grid-cols-2 gap-8 items-center">
        {/* Left Column: Text Content */}
        <div className="space-y-6">
          <div className="flex justify-center pb-4">
            <img
              src="images/profile-with-background.png"
              alt="Alex Russell"
              className="w-48 h-48 md:w-[350px] md:h-[250px] block lg:hidden object-cover rounded-full"
            />
          </div>
          <div>
            <span className="text-primary-600 font-semibold uppercase tracking-wide">
              Engineer & Innovator
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
              Empowering Social Enterprises <br className="hidden md:block" />
              through Technology &amp; Innovation
            </h1>
          </div>

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
        <div className="flex justify-center">
          <img
            src="images/profile-with-background.png"
            alt="Alex Russell"
            className="w-[300px] h-[300px] hidden lg:block object-cover rounded-ss-[50%] rounded-ee-[50%] rounded-es-[200px] rounded-se-[200px]"
          />
        </div>
      </div>
    </section>


  )
}

export default About