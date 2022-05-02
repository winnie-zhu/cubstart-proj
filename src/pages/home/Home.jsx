import { useCallback, useEffect, useRef, useState } from 'react';
import { Nav } from '../../components/nav/Nav';
import { ColorButton, getColor } from '../../components/colorbutton/ColorButton';
import { Icon } from '@iconify/react';

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
    }

    const onMouseUp = (e) => {
        setMouseDown(false);
    }

    const onMouseMove = (e) => {
        draw(e.pageX, e.pageY);
    }

    const clear = () => {
        console.log("trash");
        ctx.current.clearRect(0, 0, ctx.current.canvas.width, ctx.current.canvas.height);
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
                    onMouseLeave={onMouseUp}
                    onMouseMove={onMouseMove}
                    onMouseUp={onMouseUp}
                    
                />                    
               
                
                <ul className="sidebar-container">
                    <ColorButton/>
                    <li>
                        <button id='trash' onClick={clear}><Icon icon="bx:trash" color="#545454" height="42"/></button>
                    </li>
                </ul>
                
            </div>
            
            
        </div>
    );
}