import React from "react"
import HtmlIcon from "../assets/SVGs/HtmlIcon"
import CssIcon from "../assets/SVGs/CssIcon"
import JavascriptIcon from "../assets/SVGs/JavascriptIcon"
import ReactIcon from "../assets/SVGs/ReactIcon"
import GithubIcon from "../assets/SVGs/GithubIcon"
import GitIcon from "../assets/SVGs/GitIcon"
import SassIcon from "../assets/SVGs/SassIcon"
import VSCodeIcon from "../assets/SVGs/VSCodeIcon"
import TailwindIcon from "../assets/SVGs/TailwindIcon"
import ViteIcon from "../assets/SVGs/ViteIcon"
import NodeIcon from "../assets/SVGs/NodeIcon"
import AxiosIcon from "../assets/SVGs/AxiosIcon"

const ImageSlider = () => {
  const iconSize = 50

  const images = [
    <HtmlIcon key="html" size={iconSize} />,
    <CssIcon key="css" size={iconSize} />,
    <JavascriptIcon key="javascript" size={iconSize} />,
    <ReactIcon key="react" size={iconSize} />,
    <GithubIcon label=" " key="github" size={iconSize} />,
    <GitIcon key="git" size={iconSize} />,
    <SassIcon key="sass" size={iconSize} />,
    <VSCodeIcon key="vscode" size={iconSize} />,
    <TailwindIcon key="tailwind" size={iconSize} />,
    <ViteIcon key="vite" size={iconSize} />,
    <NodeIcon key="node" size={iconSize} />,
    <AxiosIcon key="axios" size={iconSize} />,
  ]

  return (
    <div className="flex items-center justify-center">
      <div className="w-[200%] h-[120px] relative overflow-hidden">
        <div className="w-[200%] flex items-center mt-4 h-20 justify-around absolute left-0 animate gap-[100px]">
          {images.map((image, index) => (
            <div
              key={index}
              className="flex animate2  justify-center items-start">
              {image}
            </div>
          ))}
          {images.map((image, index) => (
            <div
              key={index}
              className="flex animate2 justify-center items-start">
              {image}
            </div>
          ))}
          {images.map((image, index) => (
            <div
              key={index}
              className="flex animate2 justify-center items-start">
              {image}
            </div>
          ))}
          {images.map((image, index) => (
            <div
              key={index}
              className="flex animate2 justify-center items-start">
              {image}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ImageSlider
