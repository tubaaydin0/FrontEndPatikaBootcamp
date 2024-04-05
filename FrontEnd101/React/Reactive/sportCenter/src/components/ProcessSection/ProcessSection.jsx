import React from 'react';


const ProcessSection = () => {
    return (
        <section id="process" className="container">
            <div className="row d-flex justify-content-center process-content">
                <button id="course" className="py-3 col-sm-12 col-md-3 mb-3"><span>325</span>Course</button>
                <button id="workOut" className="py-3 col-sm-12 col-md-3 mb-3"><span>405</span>Work Out</button>
                <button id="workingHour" className="py-3 col-sm-12 col-md-3 mb-3"><span>305</span>Working Hour</button>
                <button id="happyClient" className="py-3 col-sm-12 col-md-3 mb-3"><span>705</span>Happy Client</button>
            </div>
        </section>
    );
};

export default ProcessSection;
