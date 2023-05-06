import "./customInput.style.css";

const CustomInput = (props)=> {
    return (
        <div className={`${props.size}`}>
            {props.text}
            <input
                placeholder={props.placeholder}
                length={props.length}
                type={props.type}
            />
        </div>
    )
}

export default CustomInput;