import { useCallback, useEffect, useRef, useState } from 'react';
import { Nav } from '../../components/nav/Nav';
import { SideBar } from '../../components/sidebar/SideBar';
import './Home.css';

export function Home() {
    const canvasRef = useRef(null);
    const ctx = useRef(null);

    const [mouseDown, setMouseDown] = useState(false);
    const [lastPostion, setPosition] = useState({x: 0, y: 0});

    useEffect(() => {
        if (canvasRef.current) {
            ctx.current = canvasRef.current.getContent('2d');
        }
    }, []);

    const draw = useCallback((x, y) => {
        if (mouseDown) {
            ctx.current.beginPath();
            ctx.current.strokeStyle = selectedColor;
            ctx.current.lineWidth = 10;
            ctx.current.lineJoin = 'round';
            ctx.current.moveTo(lastPosition.x, lastPosition.y);
            ctx.current.lineTo(x, y);
            ctx.current.closePath();
            ctx.current.stroke();

            setPosition({x, y});
        }
    }, [lastPostion, mouseDown, selectedColor, setPosition]);


    const onMouseUp = (e) => {
        setMouseDown(false);
    };

    const onMouseDown = (e) => {
        setPosition({
            x: e.pageX,
            y: e.pageY
        })
        setMouseDown(true);
    };

    const onMouseMove = (e) => {
        draw(e.pageX, e.pageY);
    };


    return (
        <div className='home'>
            <Nav />
            <div className='content'>
                <canvas 
                    ref={canvasRef}
                    onMouseMove={onMouseMove}
                    onMouseUp={onMouseUp}
                    onMouseDown={onMouseDown}
                    onMouseLeave={onMouseUp}
                >
                    <p>Click anyhere to draw</p>
                    
                </canvas>
                
                <SideBar />
                
            </div>
            
            
        </div>
    );
}