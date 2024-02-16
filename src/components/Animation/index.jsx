import React from "react";
import "./style.css"

function Animation() {
    return ( <>
    {/* <div className="custom-intro"><h1>Master Your Force</h1></div> */}
    <div className="custom-intro text-center">
        <div className="d-flex align-items-center justify-content-center">
            <h1>Master Your Force</h1>
            <img src="/assets/light-saber.png" alt="Your Image" style={{ width: '80px', marginLeft: '20px' }} />
        </div>
    </div>
       
        <div className="home-container">
            <div className="wrapper">
                <div className="scroll-text">
                    <h1>Master Your Force</h1>

                    <p><strong>Padawan:</strong></p>
                    <p>This stage represents the beginning of the journey, where the individual is 
                    learning the basics of the skill and undergoing training.</p>

                    <p><strong>Jedi Apprentice:</strong></p>
                    <p>Advancing from the Padawan stage, the individual begins to grasp more advanced 
                    concepts and techniques, guided by a mentor or teacher.</p>

                    <p><strong>Jedi Knight:</strong></p>
                    <p>At this stage, the individual has mastered the fundamental skills and is capable 
                    of using them effectively in various situations. They are more independent in their 
                    practice and may take on apprentices of their own.</p>

                    <p><strong>Jedi Master:</strong></p>
                    <p>The pinnacle of skill mastery, a Jedi Master is highly proficient in their chosen 
                    area of expertise. They not only excel in using the skill but also have the wisdom and e
                    xperience to guide others and contribute to the greater good.</p>

                    <p><strong>Jedi Grandmaster:</strong></p>
                    <p>This represents the rare few who have achieved unparalleled mastery, wisdom, and 
                    leadership in their field. They are revered for their skill, knowledge, and contributions to the Jedi Order (or in this case, to the realm of skill development).</p>
                </div>
            </div>
        </div>
    </>);
}

export default Animation;