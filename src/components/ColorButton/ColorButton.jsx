import "./ColorButton.css"

export function ColorButton(props) {
    
    return(
        <li id={props.color+ "-btn"}>
            <button 
                style={{backgroundColor: props.hex}}/>
        </li>
    );
}