// import styling
import styles from "./Button.module.css";

// import react node
import { ReactNode } from "react";

interface ButtonProps {
    buttonClassName?: string;
    children?: ReactNode;
    type?: "button" | "submit" | "reset"
};

const Button = ({ buttonClassName, children, type = "button" }: ButtonProps): JSX.Element => {
    return (
        <button type={type} className={buttonClassName}>
                {children}
        </button>
    );
};

export default Button;