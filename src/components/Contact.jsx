import GithubIcon from "../assets/SVGs/GithubIcon"
import InstagramIcon from "../assets/SVGs/InstagramIcon"
import LinkedInIcon from "../assets/SVGs/LinkedInIcon"
import SneakyBtn from "./SneakyBtn"


const Contact = () => {
  return (
    <div id="contact" className="flex flex-col items-center justify-center m-4 py-20">
      <div className="flex justify-center items-end">
        <div className="py-4 mt-10">
          <h1 className="text-6xl font-bold">Contact.</h1>
          <h3 className="text-xl font-light w-[300px]">Get in touch with me via social media or send me an email.</h3>
          <div className="flex gap-4 py-4">
            <LinkedInIcon size={60} link="https://www.linkedin.com/in/alex-russell-info" />
            <GithubIcon size={60} link="https://github.com/ADRcodes" />
            <InstagramIcon size={60} link="https://www.instagram.com/russellria/profilecard/?igsh=aXFoaGN3OW5kN3lv" />

          </div>
        </div>
        <div>
          <img className="w-[300px]" src="src/assets/images/profilepic1.png" alt="" />
        </div>
      </div>
      <form className="flex bg-slate-100 flex-col transition-all duration-500 shadow-md hover:shadow-xl items-center justify-center p-4 rounded-2xl">
        <div className="flex gap-4">
          <div className="flex flex-col p-8 pb-0 gap-4">
            <label htmlFor="name">Name:</label>
            <input className="rounded-2xl py-2 px-4" type="text" id="name" name="name" />
            <label htmlFor="email">Email:</label>
            <input className="rounded-2xl py-2 px-4" type="email" id="email" name="email" />
          </div>
          <div className="flex flex-col p-8 pb-0 gap-2">
            <label htmlFor="message">Message:</label>
            <textarea className="rounded-2xl py-2 px-4" name="message" id="message" cols="30" rows="6"></textarea>
          </div>
        </div>


        {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Send</button> */}
        <SneakyBtn text="Send Message" link="/" />
      </form>
    </div>
  )
}

export default Contact