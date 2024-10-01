import { useRef } from 'react';

import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
    const container = useRef();
    useGSAP(
      () => {
        const tl = gsap.timeline({
              scrollTrigger: {
                  trigger: ".two",
                  start: "0% 95%",
                  end: "70% 50%",
                  scrub: true,
                //   markers: true,
              }
          });

          tl.to("#fanta", {
              top: "130%",
              left: "0%"
          }, 'orange')
          .to("#orange-cut", {
              top: "160%",
              left: "23%"
          }, 'orange')
          .to("#orange", {
              width: "12%",
              top: "185%",
              right: "10%"
          }, 'orange')
        
          const tl2 = gsap.timeline({scrollTrigger:{
            trigger: ".three",
            start: "0% 95%",
            end: "20% 50%",
            scrub: true,
        }})
        
        tl2.from(".lemon1",{
            rotate: "-90deg",
            left: "-100%",
            top: "110%"
        }, 'ca')
        tl2.from("#cocacola",{
            rotate: "-90deg",
            top: "110%",
            left: "-10%",
        }, 'ca')
        
        tl2.from("#pepsi",{
            rotate: "90deg",
            top: "110%",
            left: "10%",
        }, 'ca')
        
        tl2.to("#fanta",{
            width:"35%",
            top: "223%",
            left: "33%",
            delay:0.6,
        }, 'ca')  
      },
      { scope: container }
    );
    return (
        <div ref={container} className='bg-orange-400'>
            <Navbar/>
            <Hero/>
            <About/>
            <Products/>
        </div>
    );
}