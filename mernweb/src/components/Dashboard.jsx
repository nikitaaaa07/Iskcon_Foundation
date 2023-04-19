import React from 'react';
import { NavLink } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
          <section id="service">
          <h5 className="mb-0 fs-1 fw-bold text-center my-5 text-info">Donation</h5>
            <div className="container my-5 py-5">
            
                <div className="row mt-4">
                    <div className="col-md-4">
                    
                            <div class="card p-3">
                                <div class="card-body text-center">
                                    <img src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJmokOMM42J9qA2w5wVZVc5gupfk1_QAkJpQ&usqp=CAU"/>
                                <h5 class="card-title mb-3 fs-4 fw-bold">Become a life Patron</h5>
                                <p class="card-text leads">Rs 10000000</p>
                                </div>
                            </div>
                        </div>
                    <div className="col-md-4">
                            <div class="card p-3 ">
                                <div class="card-body text-center">
                                <img src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJmokOMM42J9qA2w5wVZVc5gupfk1_QAkJpQ&usqp=CAU"/>
                                <h5 class="card-title mb-3 fs-4 fw-bold">Charitable Donation</h5>
                                <p class="card-text leads">Rs 400000</p>
                                </div>
                            </div>
                        </div>
                    <div className="col-md-4">
                            <div class="card p-3">
                                <div class="card-body text-center">
                                <img src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJmokOMM42J9qA2w5wVZVc5gupfk1_QAkJpQ&usqp=CAU"/>
                                <h5 class="card-title mb-3 fs-4 fw-bold">Temple Donation</h5>
                                <p class="card-text leads">Rs 5999999</p>
                                </div>
                            </div>
                        </div>
                </div>
                
            </div>
        </section>
        </div>
    );
}

export default Dashboard;