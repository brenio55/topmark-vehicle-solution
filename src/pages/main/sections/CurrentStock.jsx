import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
// new Splide( '.splide' ).mount( { AutoScroll } );

import '@splidejs/splide/css';
import Car from './CurrentStock/Car';


function CurrentStock(){
    return (
        <div>
           <div className="currentStockDIV">
                <h2>CURRENT STOCK</h2>

                <Splide aria-label="My Favorite Images"
                    options={{
                        type   : 'loop',
                        drag   : 'free',
                        focus  : 'center',
                        perPage: 4,
                        autoScroll: {
                          speed: 0.4,
                        },
                        gap: '8px'
                    }}
                    extensions={{ AutoScroll }}
                >
                    <SplideSlide>
                        <Car carSrc="src\img\cars\car1.png"
                             carName="BMW M4"
                             carPrice="0,000"
                        />
                    </SplideSlide>
                    <SplideSlide>
                        <Car carSrc="src\img\cars\car2.png"
                             carName="BMW 7 Series"
                             carPrice="0,000"
                        />
                    </SplideSlide>
                    <SplideSlide>
                        <Car carSrc="src\img\cars\car3.png"
                             carName="BMW Z4 "
                             carPrice="0,000"
                        />
                    </SplideSlide>
                    <SplideSlide>
                        <Car carSrc="src\img\cars\car4.png" 
                             carName="BMW M3"
                             carPrice="0,000"
                        />
                    </SplideSlide>
                </Splide>
           </div>

           
        </div>
    )
}

export default CurrentStock