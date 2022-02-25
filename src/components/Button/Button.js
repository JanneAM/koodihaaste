import "./Button.css"

const Button = ({
    onClick, buttonName
}) => {
    return (
        <button className="ui-button" onClick={onClick}>{buttonName}</button>
    );
};

export default Button;