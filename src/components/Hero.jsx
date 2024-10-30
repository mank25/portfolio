import { LuImport } from "react-icons/lu"
import benson from "../assets/profile.jpg"

const Hero = () => {
  return (
    <section>
        <div className="flex flex-col items-center justify-center">
            <h1 className="mt-16 overflow-hidden text-[12vw] font-semibold uppercase leading-none">
                Mayank <br/> Sharma
            </h1>
            <div className="mt-8">
                <a href="/Mayank-Sharma.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                    className="flex items-center rounded-xl bg-lime-300 p-2 px-3 font-sans font-medium text-black hover:bg-lime-400">
                        <span>Resume.pdf</span>
                        <LuImport className="ml-2"/>
                    </a>
            </div>
            <div className="w-full">
                <img src={benson} alt="Mayank Sharma" className="mt-8 h-96 w-full object-cover"/>
            </div>
        </div>
    </section>
  )
}

export default Hero
