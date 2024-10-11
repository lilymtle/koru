"use client"

// import styling
import styles from "./FloatingButton.module.css";

// import component
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

// import hook
import useScrollButton from '@/hooks/useScrollButton';

// import util
import { handleScrollToTop } from '@/utils/handleScrollToTop';

const FloatingButton = () => {
    const showFloatingButton = useScrollButton();

    return (
        <>
            {showFloatingButton && (
                <div
                className={styles.btn}
                onClick={handleScrollToTop}>
                    <ArrowUpwardIcon
                        sx={{color: "#FFFFFF"}} />
                </div>
            )}
        </>
    );
};

export default FloatingButton;