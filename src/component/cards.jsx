import React from 'react'
import '../css/cards.css'

function carts({ course }) {
    const { id, img, title, des, date, price } = course



    const tutar = ' TL'


    return (


        <div className='mian-container'>

            <div className='card'>
                <h2>{title}</h2>
                <img src={img} alt="" className='card-img ' />
                <p className='card-details'>{des}</p>
                <h3 className='card-date'>{date}</h3>
                <h3 className='card-date'> {price}<span>{tutar}</span></h3>


            </div>

        </div >


    )
}

export default carts