import React, { useState, useEffect } from 'react';

const BMICalculator = () => {
    const [height, setHeight] = useState(0);
    const [weight, setWeight] = useState(0);
    const [bmiResult, setBmiResult] = useState(0);

    useEffect(() => {
        const ucgen = document.querySelector("section #bmiCalculator .bmi-img2");

        const heightInput = document.querySelector("#height");
        const weightInput = document.querySelector("#weight");

        heightInput.addEventListener("input", () => {
            setHeight(heightInput.value);
            calculateBMI();
        });

        weightInput.addEventListener("input", () => {
            setWeight(weightInput.value);
            calculateBMI();
        });

        const calculateBMI = () => {
            let bmi = (weight / ((height / 100) * (height / 100)));
            if (height <= 0 || weight <= 0) {
                bmi = 0;
            }

            if (bmi > 0 && bmi < 18.5) {
                ucgen.style.left = 18 + "%";
            } else if (bmi >= 18.5 && bmi <= 24.9) {
                ucgen.style.left = 34 + "%";
            } else if (bmi >= 25 && bmi <= 29.9) {
                ucgen.style.left = 50 + "%";
            } else if (bmi >= 30 && bmi <= 34.9) {
                ucgen.style.left = 67 + "%";
            } else if (bmi >= 35) {
                ucgen.style.left = 90 + "%";
            } else {
                ucgen.style.left = 0 + "%";
            }

            setBmiResult(bmi);
        };
    }, []);

    return (
        <section id="bmiCalculator">
            <div className="container pt-3">
                <div className="row justify-content-center d-flex bmi-content">
                    <div className="col-xs-12 col-md-6">
                        <h2>BMI Calculator</h2>
                        <p>
                            Contrary to popular belief, Lorem ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45BC, making it over 2000 years old.
                            <br /><br />
                            Contrary to popular belief, Lorem ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45BC, making it over 2000 years old.
                        </p>
                        <form action="#" method="post">
                            <div><input type="number" id="height" name="height" placeholder="Your Height" /> cm</div>
                            <div className="input-right"> <input type="number" id="weight" name="weight" placeholder="Your Weight" /> kg</div>
                        </form>
                    </div>

                    <div className="bmi-img1 col-xs-12 col-md-6 mb-3">
                        <p className="mb-0" style={{ marginLeft: "40%" }}>Your BMI</p>
                        <img src="./src/assets/bmi-index.jpg" alt="bmi-index" width="400px" />
                        <div className="bmi-img2"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BMICalculator;
