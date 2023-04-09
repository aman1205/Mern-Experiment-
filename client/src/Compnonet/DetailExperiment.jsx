import React from 'react'
import "../styles/detailsexp.css"
const DetailExperiment = () => {
  return (
   <>
    <div className="details-con">
       


        <div className="exp-image">
            <img src="https://i.insider.com/639cdd940675db0018b3478b?width=700" width="500px" height="300px" alt="" />
            
        </div>

        <div className="name-exp">
            <h1>Name of Experiment</h1>
        </div>

        <div className="exp-description">
            <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic sequi voluptas expedita cupiditate, placeat corrupti iste temporibus nisi eum doloremque ratione, asperiores molestiae molestias, earum perferendis commodi est unde.</h5>
        </div>

        <div className="type">
            <div className="exp-subject">
                    <p>Subject:Chemistry</p>
            </div>
            <div><p>Diffculty Level:5</p></div>
        </div>

        <div className="exp-material">
            <div className="mat">
                <h5>Materials Required</h5>

        <table class="styled-table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Quantiy</th>
                </tr>
            </thead>
                    <tbody>
                        <tr>
                            <td>Dom</td>
                            <td>6000</td>
                        </tr>
                        <tr class="active-row">
                            <td>Melissa</td>
                            <td>5150</td>
                        </tr>       
    
                    </tbody>
        </table>
        </div>
     
        </div>

        

        <div className="instruction">
            <h6 htmlFor="instru">Instructions</h6>
            <ol className='instru'>
                <li><p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></li>
                <li><p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></li>
                <li><p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></li>
            </ol>
        </div>

        <div className="exp-safety">
            <h6>Safety Precaution</h6>
            <ol>
                <li><p className='safety'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi, quis?</p></li>
            </ol>
        </div>

    </div>

   </>
  )
}

export default DetailExperiment
