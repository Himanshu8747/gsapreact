import cocacola from '../assets/cocacola.png'
import pepsi from '../assets/pepsi.png'

const Products = () => {
    return (
      <div className="three flex flex-wrap items-center justify-center gap-[5vw] w-full h-screen bg-gradient-to-br from-yellow-300 to-orange-500">
        <div className="card relative flex items-center justify-center flex-col gap-[2vh] w-[25vw] h-[70vh] mt-[15vh] rounded-[20px] bg-white">
          <img id="cocacola" className="absolute top-[-15%] left-[50%] w-[55%] translate-x-[-50%] transition-all duration-500 ease-out" src={cocacola} alt=""/>
          <h1 className="mt-[40vh] text-[3vw]">CocaCola</h1>
          <button className="text-[1vw] rounded-[50px] border-none text-white bg-[rgb(255,149,0)] py-[1vw] px-[2vw]">Buy Now</button>
        </div>
        <div className="card relative flex items-center justify-center flex-col gap-[2vh] w-[25vw] h-[70vh] mt-[15vh] rounded-[20px] bg-white">
          <h1 className="mt-[40vh] text-[3vw]">Fanta</h1>
          <button className="text-[1vw] rounded-[50px] border-none text-white bg-[rgb(255,149,0)] py-[1vw] px-[2vw]">Buy Now</button>
        </div>
        <div className="card relative flex items-center justify-center flex-col gap-[2vh] w-[25vw] h-[70vh] mt-[15vh] rounded-[20px] bg-white">
          <img id="pepsi" className="absolute top-[-15%] left-[50%] w-[78%] translate-x-[-50%] transition-all duration-500 ease-out" src={pepsi} alt=""/>
          <h1 className="mt-[40vh] text-[3vw]">Pepsi</h1>
          <button className="text-[1vw] rounded-[50px] border-none text-white bg-[rgb(255,149,0)] py-[1vw] px-[2vw]">Buy Now</button>
        </div>
      </div>
    )
  }
  
  export default Products;