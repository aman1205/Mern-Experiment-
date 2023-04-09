import React from 'react'
import axios from 'axios'
import "../styles/Homepage.css"
import DetailExperiment from './DetailExperiment'
const HomePage = () => {


  return (
   <>

   <div className='heading'>
        <div className="list">
        <h1>List of All Experiments</h1>

        </div>
   </div>
   <div className="container">
            <div className="image">
                <img src="https://i.insider.com/639cdd940675db0018b3478b?width=700" width="500px" height="300px" alt="" />
             </div>


          <div className="name">
              <h3>NAme Aman</h3>
          </div>

         <div className="description">
                <h4>Description:</h4>
                 <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, modi illum quas quia necessitatibus doloremque recusandae officiis non natus unde?</p>
         </div>

        <div className="subject">
            <h3>SuBject: Bio </h3>
            <h4>Diffculty Level:</h4>
        </div>
        <div className="more-button">
            <button  className='read-button'>Read More</button>
        </div>
   </div>

   </>
  )
}

export default HomePage
