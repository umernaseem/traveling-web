import React from 'react'
import Footer from '../Footer';


function Contactus() {
return(
    <>
    <div>
        <section className='py-4 bg-info'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-4 my-auto'>
                        <h4>Contactus</h4>

                    </div>
                    <div className='col-md-8 my-auto'>
                        <h6 className='float-end'>
                            Home / Contactus
                        </h6>
                    </div>
                </div>
            </div>
        </section>
       <section className='section'> 
             <div className='container'>
                 <div className='card shadow'>
                        <div className='card-body'>
                            <div className='row'>
                                <div className='col-md-6 border-start'>
                                    <h6>Contact Form</h6>
                                    <hr/>
                                    <div className='form-group'>
                                        <label className="mb-1">Full Name</label>
                                        <input type="text" className="form-control" placeholder="Enter Full Name"/>

                                    </div>
                                    <div className='form-group'>
                                        <label className="mb-1">Email Address</label>
                                        <input type="text" className="form-control" placeholder="Enter Full Name"/>

                                    </div>
                                    <div className='form-group'>
                                        <label className="mb-1">Phone Number</label>
                                        <input type="text" className="form-control" placeholder="Enter Full Name"/>

                                    </div>
                                    <div className='form-group'>
                                        <label className="mb-1">Message</label>
                                        <textarea row="3" className="form-control" placeholder="type message..."></textarea>

                                    </div>
                                    <div className='form-group py-3'>
                                    
                                        <button type="button" className="btn btn-primary shadow w-100">send message</button>
                                    </div>

                                </div>
                                <div className='col-md-6 border-start'>
                                    <h5 className='main-heading'> Address Information</h5>
                                    <div className='underline'></div>
                                    <p>
                                        Address
                                    </p>
                                    <p>
                                        Phone number:
                                    </p>
                                    <p>
                                        Email:
                                    </p>

                                </div>

                            </div>

                         </div>

                 </div>

            </div>
       </section>
    </div>
    <Footer/>
    </>



);

}
export default Contactus;