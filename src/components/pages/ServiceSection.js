// import React from 'react'

// function Displayicon(props){

//     return(
//           <section id="services">
//       {props.details.map((service, index) => {
        
//         return (
//           <>
//           <div className="service"  >
//             <ul className="icon"  >
          
//             <img src={service.icon} alt=""  />
            
            
//             </ul>
           
            
//             <h3>{service.title}</h3>
//             {/* <p>{service.subTitle}</p> */}
            
//           </div>
          
          
          

          
//           </>
//         );
//       })}
//     </section>




//     );
// }
// export default Displayicon;
import React from 'react';
import './ServiceSection.css';

const ServiceSection = ({ icon, title, subTitle }) => {
    return (
        <div className='serviceSection'>
            <div className="service">
                <div className="icon">
                    <img src={icon} alt="" />
                </div>

                <h3> {title} </h3>
                <p> {subTitle} </p>
            </div>
        </div>
    )
}

export default ServiceSection