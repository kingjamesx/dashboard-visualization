import React from 'react';
import user from '../images/buyer.png';
import {useState,useEffect } from 'react';
import './pagination.css';
import {Table} from './Table';
const Dashboard = () => {
    const [data,setData]= useState([])

    useEffect(()=>{
        const getdata=async ()=>{
            const url = "https://jsonplaceholder.typicode.com/todos";
            const options = {
              method: "GET",
              headers: {
                Accept: "application/json",
                // mode: "same-origin"
              }
            };
            fetch(url, options)
              .then((response) => response.json())
              .then((data) => {
                setData(data);
              });
}
      getdata()
    },[])
    

  return (
    <section className='layout'>
    <nav className='nav'>
        <h1 className='logo'>iTodo</h1>
        <span><img src={user} alt="" /></span>
         <p className='user-name'>Darell Steward</p>
          <p className='user-role'>student</p>
          <ul className='navlist'>
            <li>Overview</li>
            <li>Savings</li>
            <li>Activity</li>
            <li>Profile</li>
            <li>Settings</li>
          </ul>
          <ul className='navlist'>
            <li>Support</li>
            <li>Settings</li>
            <li>Theme <span>toggle</span></li>
          </ul>
          <span className='logout'>
            <p>Logout</p>
          </span>
    </nav>
    <section>
         <header className='header'>
            <h1 className='header-h1'>Hello Steward 👋</h1>
            <select name="" id="" className='select'>
                <option value="">choose account</option>
            </select>

         </header>
         <Table data={data} />
  

  
    </section>
    </section>
  )
}

export default Dashboard