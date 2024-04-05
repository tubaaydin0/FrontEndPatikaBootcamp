import React from 'react';

const ReviewSection = () => {
    return (
        <section id="review" className="middle-area">
            <div className="container pb-5">
                <div className="row justify-content-center">
                    <div className="title-classes text-center mt-5">
                        <h3>REVIEW CLIENT</h3>
                        <div className="linear"></div>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est sapiente quisquam praesentium? Deleniti maxime ratione.</p>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="review-all col-md-6">
                        <div className="review-person">
                            <img src="./src/assets/client1.jpg" alt="review person" />
                            <div className="review-person-info">
                                <h5>Diet Expert</h5>
                                <p>CFO</p>
                            </div>
                        </div>

                        <div className="review-box-left px-4 mb-5">
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem porro, consequatur reiciendis molestias blanditiis voluptatibus id repellendus veritatis voluptatem labore, earum, atque at delectus hic accusamus officia!</p>

                            <div className="frame-left"></div>
                            <div className="frame-right"></div>
                        </div>
                    </div>

                    <div className="review-all col-md-6">
                        <div className="review-person">
                            <img src="./src/assets/client2.jpg" alt="review person" />
                            <div className="review-person-info">
                                <h5>Cardio Trainer</h5>
                                <p>CEO</p>
                            </div>
                        </div>

                        <div className="review-box-right px-4 mb-5">
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem porro, consequatur reiciendis molestias blanditiis voluptatibus id repellendus veritatis voluptatem labore, earum, atque at delectus hic accusamus officia!</p>

                            <div className="inner frame-left"></div>
                            <div className="inner frame-right"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ReviewSection;
