"use client"

// import component
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

// import hook
import useScrollButton from '@/app/hooks/useScrollButton';

// import util
import { handleScrollToTop } from '@/app/utils/handleScrollToTop';

const FloatingButton = () => {
    const showFloatingButton = useScrollButton();

    return (
        <>
            {showFloatingButton && (
                <div
                className="floating-button"
                onClick={handleScrollToTop}>
                    <ArrowUpwardIcon
                        sx={{color: "#FFFFFF"}} />
                </div>
            )}
        </>
    );
};

export default FloatingButton;