// import styling
import styles from "./Button.module.css";

interface ButtonProps {
    bgcolor?: string;
    textColor?: string;
    className?: string;
}

const Button = ({  }) => {
    return (
        <button type="submit" className={`rounded-3xl px-4 py-2`}>
            <p className="text-white font-bold uppercase">
                Submit
            </p>
        </button>
    );
};

export default Button;