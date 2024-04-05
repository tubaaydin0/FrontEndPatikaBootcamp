import React, { useEffect, useState } from 'react';


const ClassesSection = () => {
    const [content, setContent] = useState({
        title: "OUR CLASSES",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est sapiente quisquam praesentium? Deleniti maxime ratione.",
        image: "./src/assets/yoga.jpg",
        why: "Why are your Yoga?",
        when: "When comes Yoga Your Time?"
    });

    useEffect(() => {
        const ourClasses = document.querySelector("#classes");
        ourClasses.addEventListener("click", handleClick);

        return () => {
            ourClasses.removeEventListener("click", handleClick);
        };
    }, []);

    const handleClick = (e) => {
        if (e.target.id === "yoga") {
            setContent({
                title: "Why are your Yoga?",
                description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A magnam officia voluptates vitae, perferendis quos, eum nihil illum amet sed qui cupiditate dolore fugit expedita eos ex. Porro, libero possimus?",
                image: "./src/assets/yoga.jpg",
                why: "Why are your Yoga?",
                when: "When comes Yoga Your Time?"
            });
        } else if (e.target.id === "group") {
            setContent({
                title: "Why are your Group?",
                description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A magnam officia voluptates vitae, perferendis quos, eum nihil illum amet sed qui cupiditate dolore fugit expedita eos ex. Porro, libero possimus?",
                image: "./src/assets/group.webp",
                why: "Why are your Group?",
                when: "When comes Group Your Time?"
            });
        } else if (e.target.id === "solo") {
            setContent({
                title: "Why are your Solo?",
                description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A magnam officia voluptates vitae, perferendis quos, eum nihil illum amet sed qui cupiditate dolore fugit expedita eos ex. Porro, libero possimus?",
                image: "./src/assets/solo.jpg",
                why: "Why are your Solo?",
                when: "When comes Solo Your Time?"
            });
        } else if (e.target.id === "stretching") {
            setContent({
                title: "Why are your Stretching?",
                description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A magnam officia voluptates vitae, perferendis quos, eum nihil illum amet sed qui cupiditate dolore fugit expedita eos ex. Porro, libero possimus?",
                image: "./src/assets/stret.webp",
                why: "Why are your Stretching?",
                when: "When comes Stretching Your Time?"
            });
        }
    };

    return (
        <section id="classes" className="middle-area bgGradient">
            <div className="container pb-5">
                <div className="row justify-content-center">
                    <div className="col-12 title-classes text-center mt-5">
                        <h3>{content.title}</h3>
                        <div className="linear"></div>
                        <p>{content.description}</p>
                    </div>
                </div>
                <div className="row classes-buttons-frame py-4">
                    <div className="col-md-3 col-sm-6 col-xs-6 mb-3">
                        <div className="btn1">
                            <button id="yoga" className="py-2 px-4">Yoga</button>
                            <div className="btn1-bottom"></div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-6 mb-3">
                        <div className="btn1">
                            <button id="group" className="py-2 px-4">Group</button>
                            <div className="btn1-bottom"></div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-6 mb-3">
                        <div className="btn1 btn-solo">
                            <button id="solo" className="py-2 px-4">Solo</button>
                            <div className="solo-bottom"></div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-6 mb-3">
                        <div className="btn1 btn-stretching">
                            <button id="stretching" className="py-2 px-4">Stretching</button>
                            <div className="stretching-bottom"></div>
                        </div>
                    </div>
                </div>
                <div id="classes-content" className="row d-flex container mx-auto">
                    <div className="classes-text col-xs-12 col-md-6">
                        <h5>{content.why}</h5>
                        <p>{content.description}</p>
                        <br /><h5><span>{content.when}</span></h5>
                        <p>Saturday-Sunday: 8:00am-10:00am</p>
                        <p>Monday-Tuesday: 10:00am-12:00pm</p>
                        <p>Wednesday-Friday: 3:00pm-6:00pm</p>
                    </div>
                    <img className="img-fluid col-xs-12 col-md-6" src={content.image} alt="yoga" />
                </div>
            </div>
        </section>
    );
};

export default ClassesSection;
