import React from 'react';

const PurchaseSection = () => {
    return (
        <section id="purchase" className="middle-area">
            <div className="container pb-4">
                <div className="row justify-content-center">
                    <div className="title-classes text-center mt-5">
                        <h3>PURCHASE FROM US</h3>
                        <div className="linear"></div>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est sapiente quisquam praesentium? Deleniti maxime ratione.</p>
                    </div>
                </div>

                <div className="row purchase-list d-flex justify-content-center mt-5 text-center mr-3">
                    <div className="card col-md-4 px-0 card-style mb-1" style={{ width: "13rem", height: "22rem" }}>
                        <img src="./src/assets/purchase1.jpg" className="card-img-top" alt="puchase img" />
                        <div className="card-body">
                            <p className="card-text" style={{ lineHeight: "0%" }}>Kettlebell / 5kg</p>
                            <p className="purchase-price"><span>89,995</span>/59,995</p>
                            <div className="shopping-card"><img src="./src/assets/shopping-cart.png" alt="shopping cart" width="15rem" height="14rem" /> <p className="purchase-price">Add to Cart</p></div>

                        </div>
                    </div>

                    <div className="card col-md-4 px-0 card-style mb-1" style={{ width: "13rem", height: "22rem" }}>
                        <img src="./src/assets/purchase2.jpg" className="card-img-top" alt="puchase img" />
                        <div className="card-body">
                            <p className="card-text" style={{ lineHeight: "0%" }}>Treadmill</p>
                            <p className="purchase-price"><span>89,995</span>/599,995</p>
                            <div className="shopping-card"><img src="./src/assets/shopping-cart.png" alt="shopping cart" width="15rem" height="14rem" /> <p className="purchase-price">Add to Cart</p></div>

                        </div>
                    </div>

                    <div className="card col-md-4 px-0 card-style mb-1" style={{ width: "13rem", height: "22rem" }}>
                        <img src="./src/assets/purchase3.jpg" className="card-img-top" alt="puchase img" />
                        <div className="card-body">
                            <p className="card-text" style={{ lineHeight: "0%" }}>Adjustable Dumbbell</p>
                            <p className="purchase-price"><span>89,995</span>/599,995</p>
                            <div className="shopping-card"><img src="./src/assets/shopping-cart.png" alt="shopping cart" width="15rem" height="14rem" /> <p className="purchase-price">Add to Cart</p></div>

                        </div>
                    </div>

                    <div className="card col-md-4 px-0 card-style mb-1" style={{ width: "13rem", height: "22rem" }}>
                        <img src="./src/assets/purchase4.jpg" className="card-img-top" alt="puchase img" />
                        <div className="card-body">
                            <p className="card-text" style={{ lineHeight: "0%" }}>Kettlebell / 5kg</p>
                            <p className="purchase-price"><span>89,995</span>/599,995</p>
                            <div className="shopping-card"><img src="./src/assets/shopping-cart.png" alt="shopping cart" width="15rem" height="14rem" /> <p className="purchase-price">Add to Cart</p></div>

                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default PurchaseSection;
