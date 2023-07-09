import React from "react"
import Heading from "../common/heading/Heading"
import "./about.css"
import { homeAbout } from "../../dummydata"
import Awrapper from "./Awrapper"

// home page partie 2
export default function AboutCard() {
  return (
    <>
    <section className='aboutHome'>
      <div className='container flexSB'>
        <div className='left row'>
          <img src='./images/Opinion-cuate.png' alt='' />
        </div>
        <div className='right row'>
          <Heading subtitle='MOTIVATIONS' title='Bénéficier de trouver une opportunité de stage ' />
          <div className='items'>
            {homeAbout.map((val) => {
              return (
                <div className='item flexSB'>
                  <div className='img'>
                    <img src={val.cover} alt='' />
                  </div>
                  <div className='text'>
                    <h2>{val.title}</h2>
                    <p>{val.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
    <Awrapper />
  </>
)
}