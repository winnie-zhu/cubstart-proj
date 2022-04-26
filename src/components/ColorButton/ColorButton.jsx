import "./ColorButton.css"

export function ColorButton(props) {
    return(
        <li id={"btn" + props.n}>
            <button style={{backgroundColor: props.color}} />
        </li>
    );
}