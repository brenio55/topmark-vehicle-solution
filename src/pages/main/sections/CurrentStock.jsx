import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
// new Splide( '.splide' ).mount( { AutoScroll } );

import '@splidejs/splide/css';
import Car from './CurrentStock/Car';

import { useState, useEffect } from 'react';

function CurrentStock(){
    const [carPerPage, setCarPerPage] = useState(4);
    const [width, setWidth] = useState(window.innerWidth)

    useEffect(() => {
        const updateWindowDimensions = () => {
          const newWidth = window.innerWidth;
          setWidth(newWidth);
          console.log('updating width');
        };
      
        window.addEventListener("resize", updateWindowDimensions);
        return () => {
          window.removeEventListener("resize", updateWindowDimensions);
        };
      }, []);
      
      useEffect(() => {
        if ((width >= 320) && (width < 600)) {
          setCarPerPage(1);
        } else if ((width >= 600) && (width < 1150)) {
          setCarPerPage(3);
        } else if ((width >= 1150) && (width < 1368)) {
          setCarPerPage(4);
        }
      }, [width]);
      
      console.log('width = ' + width);
      console.log('carPerPage = ' + carPerPage);

    return (
        <>
           <section className="currentStockDIV">
                <h2 className='titleDefault'>CURRENT STOCK</h2>

                <span className='line'></span>
                <span className='line'></span>
                
                <Splide aria-label="My Favorite Images"
                    options={{
                        type   : 'loop',
                        drag   : 'free',
                        focus  : 'center',
                        perPage: carPerPage,
                        autoScroll: {
                          speed: 0.4,
                        },
                        gap: '8px'
                    }}
                    extensions={{ AutoScroll }}
                >
                    <SplideSlide>
                        <Car carSrc="img/cars/car1.webp"
                             carName="BMW M4"
                             carPrice="0,000"
                        />
                    </SplideSlide>
                    <SplideSlide>
                        <Car carSrc="img/cars/car2.webp"
                             carName="BMW 7 Series"
                             carPrice="0,000"
                        />
                    </SplideSlide>
                    <SplideSlide>
                        <Car carSrc="img/cars/car3.webp"
                             carName="BMW Z4 "
                             carPrice="0,000"
                        />
                    </SplideSlide>
                    <SplideSlide>
                        <Car carSrc="img/cars/car4.webp" 
                             carName="BMW M3"
                             carPrice="0,000"
                        />
                    </SplideSlide>
                </Splide>

                <a href="/showroom"><button type='button' className="buttonDefault exploreMore">EXPLORE MORE</button></a>
           </section>

           
        </>
    )
}

export default CurrentStock