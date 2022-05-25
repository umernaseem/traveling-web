// import React from 'react';
// //import '../../App.css';
// import './service.css';
// import service1 from '../../image/service1.png';
// import service2 from '../../image/service2.png';
// import service3 from '../../image/service3.png';
// import service4 from '../../image/service4.jpeg';
// import service5 from '../../image/service5.jpeg';
// import service6 from '../../image/service6.png';
// import Card from './Card';
// import Displayicon from './Displayicon';
// export default function Services(props) {
  // const handleClick=()=>{
  // return(
  //   {Card}
  //   );
  // }

  // const data = [
  //   {
  //     id: 1,  
  //     icon: service1,
  //     title: "Get Best Prices",
  //     subTitle:
  //       "Pay through our application and save thousands and get amazing rewards.",
  //   },
  //   {
  //     id:2,
  //     icon: service2,
  //     title: "Covid Safe",
  //     subTitle:
  //       "We have all the curated hotels that have all the precaution for a covid safe environment.",
  //   },
  //   { 
  //     id:3,
  //     icon: service3,
  //     title: "Flexible Payment",
  //     subTitle:
  //       " Enjoy the flexible payment through our app and get rewards on every payment.",
  //   },
  //   { 
  //     id:4,
  //     icon: service4,
  //     title: "Find The Best Near You",
  //     subTitle:
  //       "Find the best hotels and places to visit near you in a single click.",
  //   },
  //   { id:5,
  //     icon: service5,
  //     title: "Hotel Booking",
  //     subTitle:
  //       "Find the best hotels and places to visit near you in a single click.",
  //   },
  //   { id:6,
  //     icon: service6,
  //     title: "Airline Booking",
  //     subTitle:
  //       "Find the best hotels and places to visit near you in a single click.",
  //   }
  // ];
//    return (
    
//       <>
//       <div>
//         <h1 className='headclass'>

//           OUR TRAVEL SERVICES
//         </h1>


//       </div>
    

//     <section id="services">
//       {props.details.map((service, index) => {
        
//         return (
//           <>
//           <div className="service" >
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

//     </>

//    );
// }
import React from 'react';
import './services.css';
import ServiceSection from './ServiceSection';
import service1 from '../../image/service1.png';
import service2 from '../../image/service2.png';
import service3 from '../../image/service3.png';
import service4 from '../../image/service4.png';
import Footer from '../Footer';

const Services = () => {
    return (
      <>
        <div className='parentServiceSection'>
            <ServiceSection icon={service1} 
            title="Get Best Prices" 
            subTitle="Pay through our application and save thousands and get amazing rewards."></ServiceSection>

            <ServiceSection icon={service2} 
            title="Covid Safe" 
            subTitle="We have all the curated hotels that have all the precaution for a covid safe environment."></ServiceSection>

            <ServiceSection icon={service3} 
             title="Flexible Payment"
              subTitle="Enjoy the flexible payment through our app and get rewards on every payment."></ServiceSection>

            <ServiceSection icon={service4} 
            title="Find The Best Near You" 
            subTitle="Find the best hotels and places to visit near you in a single click."></ServiceSection>
        </div>
        <Footer/>
        </>
    )
}

export default Services

