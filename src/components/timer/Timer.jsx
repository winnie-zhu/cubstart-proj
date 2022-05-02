import { useRef, useState } from "react";

export function Timer() {
    const intervalRef = useRef(null);
    const [timer, setTimer] = useState('00:00:00');

    const getTimeRemaining = (endTime) => {
        const total = Date.parse(endTime) - Date.parse(new Date()); 
        const seconds = Math.floor((total/1000) % 60);
        const minutes = Math.floor((total/1000/60) % 60);
        const hours = Math.floor((total/1000*60*60)%24);
        return {
            hours, minutes, seconds
        }; 
    };

    return (
        <>
        </>
    );
}