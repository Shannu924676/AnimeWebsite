import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ all }) => {
    return (
        <Link to={`/anime/${all.title}`}>
            <div className='card'>
                <div className='cardImg'>
                    <img src={all.images.jpg.image_url} alt=''></img>
                </div>

                <h1>{all.title}</h1>
            </div>
        </Link>
    )
}

export default Card