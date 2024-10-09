import React, { useState } from 'react';
import './AboutUs.css';

const AboutUs = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleReadMore = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="about-container">
            <div className="about-content" data-aos="zoom-in">
                <img 
                    src="./src/assets/images/qwer.png" 
                    alt="About Us" 
                    className="about-image" 
                />
                <div className="text">
                    <h1>About Us</h1>
                    <p>
                        Caliber’s Nova Academy is a premier Coaching institution for professional courses in commerce like BBA, BCCA, B. Com and MBA.
                        Started in the year 2007 by Mr. Pankaj Agrawal and Mr. Rahul Rai has been instrumental in mentoring thousands of students and helping them achieve their professional goals. We at Accounting Academy believe that our students have tremendous capabilities and it's our job to guide and help them understand their potential. 
                        {isExpanded ? (
                            <span>
                                Our philosophy is to provide the best classroom lectures and prepare them for real-life challenges by providing not just academic knowledge but also practical applications. Owing to our experienced faculties, we are able to support every student for a bright future and successful career. We have high expectations of our students, staff, and teachers, ensuring that each student completing their course has ample opportunities for shaping their future.
                            </span>
                        ) : (
                            <span>
                                {` ... ${"Read More"}`}
                            </span>
                        )}
                    </p>
                    {isExpanded && (
                        <>
                            <h1>GIVE YOUR CHILD</h1>
                            <p>
                                The Best Start
                                Caliber's Nova is one of the leading commerce institutes which covers entire commerce courses including XI-XII, B. Com, BBA, BCCA, MBA, M. Com, MCM along with Spoken English, Personality Development, and Employability Training.
                            </p>
                            <h1>WHY SHOULD YOU JOIN CALIBER'S NOVA</h1>
                            <ol>
                                <li>Making students capable for the last 15 years.</li>
                                <li>Teaching in a student-oriented style.</li>
                                <li>Courses Aligned by Nagpur University.</li>
                                <li>Improved performance at colleges.</li>
                                <li>Motivational Seminars for aimless students.</li>
                                <li>Creating a stress-free and positive environment.</li>
                            </ol>
                            <h1>MISSION</h1>
                            <p>Our mission is to inculcate confidence in the students to bring out the best results in the form of academic output. We provide excellent learning facilities, individual attention, and care to convert weaknesses into strengths.</p>
                            <h1>TRAINING AND PLACEMENTS</h1>
                            <p>
                                "Caliber's Scholars" is a new venture and a dream project of our leading organization "Caliber’s Nova". It includes not just placement solutions but also training in employability, work ethics, and professionalism.
                            </p>
                        </>
                    )}
                    <button onClick={toggleReadMore} className="read-more-button">
                        {isExpanded ? "Read Less" : "Read More..."}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
