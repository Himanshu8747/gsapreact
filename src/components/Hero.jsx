import orangeCut from '../assets/orange2.png'
import fanta from '../assets/fanta.png'
import orange from '../assets/orange.webp'

const Hero = () => {
    return (
      <div className="one flex items-center justify-center w-full h-screen">
        <h1 className="text-[25vw] font-sans text-white">FANTA</h1>
        <img id="orange-cut" src={orangeCut} alt="" className="absolute top-[10%] left-[32%] w-[15%] z-[1]" />
        <img id="fanta" src={fanta} alt="" className="absolute w-[40%] z-[2]" />
        <img id="orange" src={orange} alt="" className="absolute top-[55%] right-[30%] w-[20%] z-[3]" />
      </div>
    )
  }
  
  export default Hero;