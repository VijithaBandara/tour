import React from "react";
import './main.css'
import img from '../../Assets/img(1).jpg'
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
    return(
        <section className="main container section">
            <div className="secTitle">
                <h3 className="title">
                    Most visited destinations
                </h3>
            </div>

            <div className="secContent grid">
                {

                }

                {
                    Data.map(({id, imgSrc, destTitle, location, grade, fees, description})=>{
                        return(<div key={id}
                            className="singleDestination">
                                {
                                    <div className="ImageDiv">
                                        <img src={} alt=""/>
                                    </div>
                                }
                            </div>
                            )
                    })
                }
            </div>
        </section>
    )
}

export default Main