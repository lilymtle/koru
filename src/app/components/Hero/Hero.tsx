// import components
import Link from "next/link";
import Header from "../Header/Header";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { Box } from "@mui/material";

const Hero = () => {
    return (
        <section className="hero p-4">
            <div className="hero-container md:flex md:flex-row">
                <Header />
                
                <div className="hero-content h-full flex flex-col justify-around">

                    <div className="herow-wrapper">
                        <h1 className="text-3xl font-bold text-center text-white mb-8">
                            Rooted in <span className="uppercase">reflection</span>, blossoming in <span className="uppercase">growth</span>.
                        </h1>

                        <h2 className="text-md text-center mb-8">
                            Koru connects you  to the Māori concept of growth and renewal,
                            inviting daily reflections to foster gratitude and mindfulness.
                        </h2>

                        <div className="hero-cta flex flex-row justify-center gap-4 mb-8">
                            <Link href="/register">
                                <p className="hero-btn--beige">
                                    Register
                                </p>
                            </Link>

                            <Link href="/about">
                                <p className="hero-btn--camel-brown">
                                    Learn More
                                </p>
                            </Link>
                        </div>
                    </div>

                    <Box
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        padding={2}
                    >
                        <Link href="#main">
                            <ArrowDownwardIcon 
                                className="wiggle"
                                sx={{fontSize: 30, color: "#FFFFFF"}} />
                        </Link>
                    </Box>
                </div>
            </div>
        </section>
    );
};

export default Hero;