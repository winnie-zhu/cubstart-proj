import { useCallback, useEffect, useRef, useState } from 'react';
import { Nav } from '../../components/nav/Nav';
import { SideBar } from '../../components/sidebar/SideBar';
import { getColor } from '../../components/colorbutton/ColorButton';
import './Home.css';

export function Home() {
    const canvasRef = useRef(null);
    const ctx = useRef(null);

    const [mouseDown, setMouseDown] = useState(false);
    const [lastPosition, setPosition] = useState({
        x: 0, 
        y: 0
    });

    useEffect(() => {
        if (canvasRef.current) {
            ctx.current = canvasRef.current.getContext('2d');
        }
    }, []);

    const draw = useCallback((x, y) => {
        console.log("in draw: "+ mouseDown);
        if (mouseDown) {
            ctx.current.beginPath();
            ctx.current.strokeStyle = getColor();
            ctx.current.lineWidth = 10;
            ctx.current.lineJoin = 'round';
            ctx.current.moveTo(lastPosition.x, lastPosition.y);
            ctx.current.lineTo(x, y);
            ctx.current.closePath();
            ctx.current.stroke();
            console.log("drawing");
            setPosition({x, y});
        }
    }, [lastPosition, mouseDown, setPosition]);

    const onMouseDown = (e) => {
        setPosition({
            x: e.pageX,
            y: e.pageY
        });
        setMouseDown(true);
        console.log("mouse down: " + mouseDown);
    }

    const onMouseUp = (e) => {
        setMouseDown(false);
    }

    const onMouseMove = (e) => {
        console.log(e.pageX + ", " + e.pageY);
        draw(e.pageX, e.pageY);
    }


    return (
        <div className='home'>
            <Nav />
            <div className='content'>
                <canvas 
                    ref={canvasRef}
                    height={window.innerHeight}
                    width={window.innerWidth}
                    onMouseDown={onMouseDown}
                    onMouseUp={onMouseUp}
                    onMouseLeave={onMouseUp}
                    onMouseMove={onMouseMove}
                    // onMouseMove={onMouseMove}
                    // onMouseUp={onMouseUp}
                    // onMouseDown={onMouseDown}
                    // onMouseLeave={onMouseUp}
                />                    
               
                
                <SideBar />
                
            </div>
            
            
        </div>
    );
}