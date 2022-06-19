import React from 'react';
import { gsap } from 'gsap';

import Context from '../context/Context';

import paw from '../images/paw.png';
import { useTransition } from 'react';


const PawPrints = () => {   
    const { selectBreed } = React.useContext(Context);
    
    const pawContainer = React.useRef();
    const children = gsap.utils.selector(pawContainer);
    const tl = React.useRef();    

    React.useLayoutEffect(() => {
      tl.current = gsap.timeline({ delay: 1, repeat: -1 }) 
       .to(children('.paw_6R'), { opacity: 1, duration: 3, runBackwards: true,  delay: 0 })
       .to(children('.paw_6L'), { opacity: 1, duration: 3, runBackwards: true,  delay: -2.7 }) 
       .to(children('.paw_5L'), { opacity: 1, duration: 3, runBackwards: true,  delay: -2.7 })   
       .to(children('.paw_5R'), { opacity: 1, duration: 3, runBackwards: true, delay: -2.7 })
       .to(children('.paw_4R'), { opacity: 1, duration: 3, runBackwards: true,  delay: -2.7 })
       .to(children('.paw_4L'), { opacity: 1, duration: 3, runBackwards: true,  delay: -2.7 })
       .to(children('.paw_3L'), { opacity: 1, duration: 3, runBackwards: true,  delay: -2.7 }) 
       .to(children('.paw_3R'), { opacity: 1, duration: 3, runBackwards: true,  delay: -2.7 })             
       .to(children('.paw_2R'), { opacity: 1, duration: 3, runBackwards: true,  delay: -2.7 })       
       .to(children('.paw_2L'), { opacity: 1, duration: 3, runBackwards: true,  delay: -2.7 })
       .to(children('.paw_1L'), { opacity: 1, duration: 3, runBackwards: true,  delay: -2.7 })
       .to(children('.paw_1R'), { opacity: 1, duration: 3, runBackwards: true,  delay: -2.7 }) 

       if(selectBreed) tl.current.kill()

       return () => {
        tl.current.kill();
       }
    }, [children, selectBreed])      
   
   

    return (
       <div className='containerPaw' ref={pawContainer}>
         <img className='paw_1L paws' src={paw} alt='paw'/>
         <img className='paw_2R paws' src={paw} alt='paw'/>
         <img className='paw_3L paws'src={paw} alt='paw'/>
         <img className='paw_4R paws'src={paw} alt='paw'/>
         <img className='paw_5L paws'src={paw} alt='paw'/>
         <img className='paw_6R paws'src={paw} alt='paw'/>
         <img className='paw_6L paws' src={paw} alt='paw'/>
         <img className='paw_5R paws'src={paw} alt='paw'/>
         <img className='paw_4L paws'src={paw} alt='paw'/>
         <img className='paw_3R paws'src={paw} alt='paw'/>
         <img className='paw_2L paws'src={paw} alt='paw'/>
         <img className='paw_1R paws' src={paw} alt='paw'/>
       </div>      
    )
}

export default PawPrints;