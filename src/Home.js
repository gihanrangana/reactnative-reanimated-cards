import React from "react";

import Card from "./components/Card";

export default function Home() {

    const sampleData = [
        {heading: 'Posture Squats', subHeading: '20 Reps', img: require('../assets/Posture-Squats.jpg')},
        {heading: 'Long Plank', subHeading: '30 Seconds', img: require('../assets/Long-Plank.jpg')},
        {heading: 'Arm Sprint', subHeading: '30 Seconds', img: require('../assets/Arm-Sprint.jpg')},
        {heading: 'Back Step Lunge', subHeading: '20 Reps each legs', img: require('../assets/Back-Step-Lunge.jpg')},
        {heading: 'Shoulder Push Ups', subHeading: '15 Reps', img: require('../assets/Shoulder-Push-Ups.jpg')},
        {heading: 'Glute Leg Lifts', subHeading: '15 Reps Each Leg', img: require('../assets/Glute-Leg-Lifts.jpg')},
        {heading: 'Reverse Plank', subHeading: '30 Seconds', img: require('../assets/Reverse-Plank.jpg')},
        {heading: 'Step Ups', subHeading: '10 Reps Each Leg', img: require('../assets/Step-Ups.jpg')},
        {heading: 'Side Plank Lifts', subHeading: '20 Reps each side', img: require('../assets/Side-Plank-Lifts.jpg')},
    ];

    return (
        <div>
            {
                sampleData.map((item,i) => {
                    return(
                        <Card key={i} data={item} />
                    )
                })
            }
        </div>
    );
}