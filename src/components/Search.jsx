import React, { useEffect, useState } from 'react';
import './style.css';
import FoodData from "./FoodData";
import { Form } from 'react-bootstrap';
import Cards from './Cards';

const Search = () => {

    const [fdata, setFdata] = useState(FoodData);

    const [copyData, setCopData] = useState([]);

    const changeData = (e) =>{
        const getChangeData = e.toLowerCase();
        if(getChangeData === ""){
            setCopData(fdata);
        }else{
            const filtredData = copyData.filter((ele,k)=>{
                return ele.rname.toLowerCase().match(getChangeData);
            });
            setCopData(filtredData);
        }
    }

    useEffect(()=>{
        setTimeout(()=>{
            setCopData(FoodData);
        },2000)
    });


    return (
        <>
            <div className="container d-flex justify-content-between align-items-center">
                <h1 className='zommato'>Zommato</h1>
                <h2 style={{ color: "#1b1464", cursor: "pointer" }} className='mt-3'>Search Filter App</h2>
            </div>

            <Form className='d-flex justify-content-center align-items-center mt-3'>
                <Form.Group className='mx-2 col-lg-4'>
                    <Form.Control type='text' placeholder='Search Restaurant' onChange={(e) => changeData(e.target.value)} />
                </Form.Group>
                <button className='btn text-light btn-danger'>Submit</button>
            </Form>

            <section className='item_section mt-4 container'>
                <h2 className='px-4' style={{ fontWeight: "400" }}>Restaurants in Maharashtra Open now</h2>
                <div className="row mt-2 d-flex justify-content-around align-items-center">
                    {copyData && copyData.length ? <Cards data={copyData} /> : "Loading..."}
                </div>
            </section>

        </>

    )
}

export default Search
