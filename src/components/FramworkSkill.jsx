
import React, { useEffect, useRef, useState } from 'react';
import '../App.css';

const NeomorphismProgressBar = ({ targetProgress }) => {
    const progressCircleRef = useRef(null);
    const [progress, setProgress] = useState(0);
    const radius = 65;
    const circumference = 2 * Math.PI * radius;

    useEffect(() => {
        const progressCircle = progressCircleRef.current;
        progressCircle.style.strokeDasharray = `${circumference}`;
        progressCircle.style.strokeDashoffset = `${circumference}`;

        const updateProgress = () => {
            setProgress((prevProgress) => {
                const newProgress = Math.min(prevProgress + 1, targetProgress);
                return newProgress;
            });
        };

        const progressInterval = setInterval(updateProgress, 20);

        return () => {
            clearInterval(progressInterval);
        };
    }, [circumference, targetProgress]);

    useEffect(() => {
        const progressCircle = progressCircleRef.current;
        const offset = circumference - (progress / 100) * circumference;
        progressCircle.style.strokeDashoffset = offset;
    }, [progress, circumference]);

    return (
        <div className="progress-container">

            <div className="progress-circle">
                
                <svg width="150" height="150" viewBox="0 0 150 150" className='svg-i'>
                    <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" style={{ stopColor: 'purple', stopOpacity: 1 }} />
                            <stop offset="100%" style={{ stopColor: 'red', stopOpacity: 1 }} />
                        </linearGradient>
                    </defs>
                    <circle className="background-circle" cx="75" cy="75" r="65"></circle>
                    <circle
                        ref={progressCircleRef}
                        className="progress-circle"
                        cx="75"
                        cy="75"
                        r="65"
                    ></circle>
                </svg>
                <div className="progress-inner">
                    <div className="progress-value">
                        {progress}%
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default NeomorphismProgressBar;