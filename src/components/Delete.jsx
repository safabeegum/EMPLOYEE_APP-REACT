import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const Delete = () => {
    const[data,setData]=useState(
        {
            "name":""
        }
    )

    const inputHandler=(event)=>{
        setData({...data, [event.target.name]:event.target.value})
    }

    const readValue=()=>{
        console.log(data)
        axios.post("",data).then(
            (response) => {
                console.log(response.data)
                if (response.data.status=="success") {
                    alert("Successfully Added")
                } else {
                    alert("Error")
                }
            }
        ).catch().finally()
    }
  return (
    <div>
        <Navbar/>
        <div className="container">
            <div className="row g-3">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">NAME</label>
                    <input type="text" className="form-control" name='name' value={data.name} onChange={inputHandler}/>
                </div>

                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button className="btn btn-danger" onClick={readValue}>DELETE</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Delete