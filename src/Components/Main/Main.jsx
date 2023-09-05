import React,{useEffect} from "react";
import './Main.scss'
import img from '../../Assets/img.jpg'
import img1 from '../../Assets/img1.jpg'
import img2 from '../../Assets/img2.jpg'
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineClipboardCheck } from "react-icons/hi";

import Aos from 'aos'
import 'aos/dist/aos.css'

const Data = [
    {
        id:1,
        imgSrc:img,
        location:'New Zealand',
        grade:'CULTURAL RELAX',
        fees:'$700',
        description:'Hotel & Spa is a family-friendly hotel that offers a wide range of accommodation types, from rooms to suites. All this in the peaceful surroundings of our beautiful gardens, will make your time at (CN) an unforgettable holiday.'
    },

    {
        id:1,
        imgSrc:img1,
        location:'New York',
        grade:'Resort',
        fees:'$770',
        description:'offers you a privileged experience combining comfort and conviviality. Whether you are a backpacker, a solo traveler or with your family, our hotel with top-of-the-range service will meet all your expectations. More than just a hotel, offers you a place to live and meet people.'
    },

    {
        id:1,
        imgSrc:img2,
        location:'Canada',
        grade:'Sub Urban',
        fees:'$750',
        description:'welcomes you in a real cosmopolitan, pulsing milieu, at the same time offering peace and intimate retirement, just in the heart of the city centre. Timeless elegance tailored for the demands of our time; exceptional combination of magnificent architecture and divine cuisine, in perfect harmony. A Michelin-starred restaurant and a beautifully restored town palace joined forces for you!'
    },

   
]



const Main = () => {
     /*hook*/

     useEffect(()=>{
        Aos.init({duration: 2000})
    },[])
    return(
        <section className="main container section">
            <div className="secTitle">
                <h3 data-aos="fade-right"className="title">
                    Most visited destinations
                </h3>
            </div>

            <div className="secContent grid">
                {

                }

                {
                    Data.map(({id, imgSrc, destTitle, location, grade, fees, description})=>{
                        return(<div key={id}
                            data-aos="fade-up"
                            className="singleDestination">
                                {

                                }
                                    <div className="ImageDiv">
                                        <img src={imgSrc} alt={destTitle}/>
                                    </div>

                                    <div className="cardInfo">
                                        <h4 className="destTitle">
                                            {destTitle}
                                        </h4>
                                        <span className="continent flex">
                                            <HiOutlineLocationMarker className='icon' />
                                        </span>
                                        <span className="name">
                                            {location}
                                        </span>

                                        <div className="fees flex">
                                            <div className="grade">
                                                <span>{grade}<small>+1</small></span>
                                            </div>
                                            <div className="price">
                                                <h5>{fees}</h5>
                                            </div>
                                        </div>

                                        <div className="desc">
                                            <p>{description}</p>
                                        </div>

                                        <button className="btn flex">
                                            DETAILS <HiOutlineClipboardCheck className="icon"/>
                                        </button>
                                    </div>
                                
                            </div>
                            )
                    })
                }
            </div>
        </section>
    )
}

export default Main