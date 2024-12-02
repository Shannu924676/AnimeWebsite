import React from 'react'
import { Link } from 'react-router-dom'

const RCard = ({ all }) => {
    return (
            <div className='card'>
                <div className='cardImg'>
                    <img src={all.images.jpg.image_url} alt=''></img>
                </div>
                <h1>{all.title}</h1>
            </div>
    )
}

export default RCard