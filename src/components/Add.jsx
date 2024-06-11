import axios from 'axios'
import React, { useState } from 'react'
import Navbar from './Navbar'

const Add = () => {
        const[data,setData]=useState(
        {
            "ecode":"",
        "name":"",
        "designation":"",
        "salary":""
        }
    )

    const inputHandler=(event) => {
        setData({...data,[event.target.name]:event.target.value})
    }

    const readValue=() => {
        console.log(data)
        axios.post("http://localhost:8080/add",data).then(
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
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">EMPLOYEE CODE</label>
                            <input type="text" className="form-control" name='ecode' value={data.ecode} onChange={inputHandler}/>
                        </div>

                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">NAME</label>
                            <input type="text" className="form-control" name='name' value={data.name} onChange={inputHandler}/>
                        </div>
                        

                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">DESIGNATION</label>
                            <input type="text" className="form-control" name='designation' value={data.designation} onChange={inputHandler}/>
                        </div>

                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">SALARY</label>
                            <input type="text" className="form-control" name='salary' value={data.salary} onChange={inputHandler}/>
                        </div>

                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <button className="btn btn-success" onClick={readValue}>SUCCESS</button>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Add