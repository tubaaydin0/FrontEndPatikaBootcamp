import React from 'react';

const TrainersSection = () => {
    return (
        <section id="trainers" className="middle-area">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="title-classes text-center mt-5">
                        <h3>OUR BEST TRAINERS</h3>
                        <div className="linear"></div>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est sapiente quisquam praesentium? Deleniti maxime ratione.</p>
                    </div>
                </div>

                <div className="trainers-img">
                    <div className="images1 mb-5">
                        <img src="./src/assets/trainer1.jpg" alt="" />
                        <div className="images2"></div>
                        <div className="images3"></div>
                        <div className="info">
                            <p>Hande Soy <br /> <span style={{ fontSize: "0.8vw", textAlign: "center" }}>Cardio Traineer</span></p>
                        </div>
                    </div>

                    <div className="images1 mb-5">
                        <img src="./src/assets/trainer2.jpg" alt="" />
                        <div className="images2"></div>
                        <div className="images3"></div>
                        <div className="info">
                            <p>Mert Taner <br /> <span style={{ fontSize: "0.8vw", textAlign: "center" }}>Cardio Traineer</span></p>
                        </div>
                    </div>

                    <div className="images1 mb-5">
                        <img src="./src/assets/trainer3.jpg" alt="" />
                        <div className="images2"></div>
                        <div className="images3"></div>
                        <div className="info">
                            <p>Jane Doe <br /> <span style={{ fontSize: "0.8vw", textAlign: "center" }}>Cardio Traineer</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrainersSection;
