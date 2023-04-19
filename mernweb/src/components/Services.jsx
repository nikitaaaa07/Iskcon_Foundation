import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
    return (
        <div>
            <section id="service">
                <div className="container my-5 py-5">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="fs-5 text-center mb-0">Our Services</h3>
                            <h1 className="display-6 text-center mb-4">Our <b>Awesome</b>Services</h1>
                            <hr className="w-25 mx-auto" />
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-4">
                                <div class="card p-3">
                                    <div class="card-body text-center">
                                        <i className="fa fa-mobile fa-4x mb-4 text-primary"></i>
                                        <a href="https://www.iskcon.org/activities/sunday-open-house.php">
                                            <h5 class="card-title mb-3 fs-4 fw-bold">Sunday Open House</h5>
                                        </a>
                            
                                        <p class="card-text leads">Every Sunday is a celebration at an ISKCON temple. With delicious multi-course vegetarian meals, music, dance and spiritual discussion, the guests can experience the world’s oldest cultural tradition. The programme provides an opportunity to learn about the lifestyle and culture of those who practice Bhakti Yoga.</p>
                                    </div>
                                </div>
                            

                        </div>


                        <div className="col-md-4">
                            <div class="card p-3 ">
                                <div class="card-body text-center">
                                    <i className="fa logo1.png fa-4x mb-4 text-primary"></i>
                                    <a href="https://iskconnews.org/">
                                        <h5 class="card-title mb-3 fs-4 fw-bold">NEWS</h5>
                                    </a>
                                    <p class="card-text leads">Narayani Devi Dasi Initiates Her First Diksa Disciple
                                    GBC Amends and Affirms Law Allowing Vaisnavis To Initiate.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div class="card p-3">
                                <div class="card-body text-center">
                                    <i className="fa fa-users fa-4x mb-4 text-primary"></i>
                                    <a href="https://www.iskcon.org/beliefs/bhakti-yoga.php">
                                        <h5 class="card-title mb-3 fs-4 fw-bold">Bhakti Yoga</h5>
                                    </a>
                                    <p class="card-text leads">Yoga is more than just a physical exercise. The word “yoga” comes from the Sanskrit root Yuj which means to link up with, or combine. Bhakti is derived from the Sanskrit word bhaj, which means – loving service. Bhakti-yoga means to connect to the Supreme by means of loving devotional service</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-4">
                            <div class="card p-3">
                                <div class="card-body text-center">
                                    <i className="fa fa-laptop fa-4x mb-4 text-primary"></i>
                                    <a href="https://www.iskcon.org/resources/bhakti-music.php">
                                         <h5 class="card-title mb-3 fs-4 fw-bold">Bhakti Music</h5>

                                    </a>
                                    <p class="card-text leads">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div class="card p-3 ">
                                <div class="card-body text-center">
                                    <i className="fa fa-file-code-o fa-4x mb-4 text-primary"></i>
                                    <a href="https://www.iskcon.org/activities/arts.php">
                                        <h5 class="card-title mb-3 fs-4 fw-bold">Arts</h5>
                                    </a>
                                    <p class="card-text leads">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div class="card p-3">
                                <div class="card-body text-center">
                                    <i className="fa fa-star-half-o fa-4x mb-4 text-primary"></i>
                                    <a href="https://www.iskcon.org/about-us/mission.php">
                                         <h5 class="card-title mb-3 fs-4 fw-bold">Mission</h5>
                                    </a>
                                    <p class="card-text leads">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}

export default Services;