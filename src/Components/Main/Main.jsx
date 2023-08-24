import React,{useEffect} from "react";
import './Main.scss'
import img from '../../Assets/img(1).jpg'
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineClipboardCheck } from "react-icons/hi";

import Aos from 'aos'
import 'aos/dist/aos.css'

const Data = [
    {
        id:1,
        imgSrc:img,
        destTitle: 'Bora Bora',
        location:'New Zealand',
        grade:'CULTURAL RELAX',
        fees:'$700',
        description:'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.'
    },

    {
        id:1,
        imgSrc:img,
        destTitle: 'Bora Bora',
        location:'New Zealand',
        grade:'CULTURAL RELAX',
        fees:'$700',
        description:'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.'
    },

    {
        id:1,
        imgSrc:img,
        destTitle: 'Bora Bora',
        location:'New Zealand',
        grade:'CULTURAL RELAX',
        fees:'$700',
        description:'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.'
    },

    {
        id:1,
        imgSrc:img,
        destTitle: 'Bora Bora',
        location:'New Zealand',
        grade:'CULTURAL RELAX',
        fees:'$700',
        description:'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.'
    },

    {
        id:1,
        imgSrc:img,
        destTitle: 'Bora Bora',
        location:'New Zealand',
        grade:'CULTURAL RELAX',
        fees:'$700',
        description:'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.'
    },

    {
        id:1,
        imgSrc:img,
        destTitle: 'Bora Bora',
        location:'New Zealand',
        grade:'CULTURAL RELAX',
        fees:'$700',
        description:'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.'
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

                                        <button className="btn flex"></button>
                                            DETAILS <HiOutlineClipboardCheck className="icon"/>
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