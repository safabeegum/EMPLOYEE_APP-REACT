import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'

const View = () => {
    const[data,changeData]=useState([])

    const fetchData= () => {
        axios.get("http://localhost:8080/view").then((response)=>
            {
                console.log(response.data)
                changeData(response.data)
            }
        ).catch().finally()
    }

    useEffect(() => {fetchData()},[])
  return (
    <div>
        <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <table class="table table-bordered border-primary">
                <thead>
    <tr>
      <th scope="col">EMPLOYEE CODE</th>
      <th scope="col">NAME</th>
      <th scope="col">DESIGNATION</th>
      <th scope="col">SALARY</th>
    </tr>
  </thead>
    {
        data.map(
            (value,index) => {
                return <tbody>
                <tr>
                  <td>{value.ecode}</td>
                  <td>{value.name}</td>
                  <td>{value.designation}</td>
                  <td>{value.salary}</td>
                </tr>
              </tbody>
            }
        )
    }
</table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default View