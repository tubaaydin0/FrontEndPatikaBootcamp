import React from 'react';

const ContactSection = () => {
    return (
        <section id="contact" className="middle-area">
            <div className="container pb-5 mb-4">
                <div className="row justify-content-center">
                    <div className="title-classes text-center mt-5">
                        <h3>CONTACT US</h3>
                        <div className="linear"></div>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est sapiente quisquam praesentium? Deleniti maxime ratione.</p>
                    </div>
                </div>

                <div className="row mt-4 pt-5 contact-all d-flex justify-content-between">
                    <div className="contact col-sm-12 col-md-6">
                        <div className="contact-info">
                            <div className="mobil-info">
                                <h6>Mobile Number</h6>
                                <p>+135 773 321 44 42</p>
                            </div>
                            <div className="mail-info">
                                <h6>Email Address</h6>
                                <p>demo@demo.com</p>
                            </div>
                        </div>

                        <div className="form-space">
                            <h4>Make An Appointment</h4>
                            <form action="#" method="post">
                                <input type="text" id="name" name="name" placeholder="Your Name" /><br />
                                <input type="text" id="email" name="email" placeholder="Your Email" /><br />
                                <textarea id="msg" name="msg" rows="4" cols="50" placeholder="Your Message"></textarea>
                            </form>
                        </div>
                    </div>

                    <div className="map col-sm-12 col-md-6">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3060.8288483592796!2d32.68863367580043!3d39.9004640715273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d3385f42300a95%3A0xa549453f4c7ca275!2zR29yZGlvbiBBbMSxxZ92ZXJpxZ8gTWVya2V6aQ!5e0!3m2!1str!2str!4v1706834891805!5m2!1str!2str" width="400" height="300" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
