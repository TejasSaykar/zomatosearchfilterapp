import React from 'react'
import { Card } from 'react-bootstrap';
import "./style.css"

const Cards = ({ data }) => {
    return (
        <>
            {
                data.map((ele, k) => {
                    return (
                        <Card key={k} style={{ width: "22rem", border: "none" }} className='mb-3 hove'>
                            <Card.Img className='cd' src={ele.imgdata} alt='Food Image' />
                            <div className="card_body">

                                <div className="upper_data d-flex justify-content-between align-items-center">
                                    <h4 className='mt-2'>{ele.rname}</h4>
                                    <span>{ele.rating}⁎</span>
                                </div>

                                <div className="lower_data d-flex justify-content-between">
                                    <h5>{ele.address}</h5>
                                    <span>{ele.price}</span>
                                </div>

                            </div>
                        </Card>
                    )
                })
            }

        </>
    )
}

export default Cards
