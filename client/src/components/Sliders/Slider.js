import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "./slider.css"
import AOS from 'aos'

function Slider() {
    AOS.init({
        duration: 800,
        offset:150,
    });
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
    <>
          
            <div className='sliderarea' >
                <h1 className='facutlyheading'data-aos="fade-in">OUR FACULTY STAFF-</h1>
                <Carousel responsive={responsive}
               pauseOnHover={false}
                autoPlay={true}
                showDots={true}
                autoPlaySpeed={3000}
                infinite={true}>
                    <div>
                        <div className="card"  data-aos="zoom-in">
                            <h2 className='heading'>Sanjeev Jain</h2>
                            <p className='content'>Head of Maths, physics. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea autem sed necessitatibus, repudiandae dolorem enim a laborum, optio ducimus, unde delectus assumenda.</p>
                        </div>
                    </div>
                    <div>
                        <div className="card"  data-aos="zoom-in">
                            <h2 className='heading'>Riya Rai</h2>
                            <p className='content'>Head of Maths, physics. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea autem sed necessitatibus, repudiandae dolorem enim a laborum, optio ducimus, unde delectus assumenda.</p>
                        </div>
                    </div>
                    <div>
                        <div className="card" data-aos="zoom-in" >
                            <h2 className='heading'>Veenita Mehta</h2>
                            <p className='content'>Head of Maths, physics. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea autem sed necessitatibus, repudiandae dolorem enim a laborum, optio ducimus, unde delectus assumenda.</p>
                        </div>
                    </div>
                    <div>
                        <div className="card"  data-aos="zoom-in">
                            <h2 className='heading'>Jiya Jay</h2>
                            <p className='content'>Head of Maths, physics. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea autem sed necessitatibus, repudiandae dolorem enim a laborum, optio ducimus, unde delectus assumenda.</p>
                        </div>
                    </div>
                    <div>
                        <div className="card"  data-aos="zoom-in">
                            <h2 className='heading'>Harry Loie</h2>
                            <p className='content'>Head of Maths, physics. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea autem sed necessitatibus, repudiandae dolorem enim a laborum, optio ducimus, unde delectus assumenda.</p>
                        </div>
                    </div>

                </Carousel>;
                </div >
            </>
            )
}

            export default Slider
