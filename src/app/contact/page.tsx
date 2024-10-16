// import styling
import Button from "@/components/Button/Button";
import styles from "./contact.module.css";

const ContactPage = () => {
    return (
        <section className={styles["contact"]}>
            <div className="w-full flex flex-col gap-4 p-4 md:p-20">
                <h1 className="text-4xl md:text-6xl text-gray-600 font-bold self-center leading-snug">
                    Contact
                </h1>
            </div>

            <section className={styles["contact__form"]}>
                <form>
                    <label>
                        <p className="text-sm text-white font-bold uppercase mb-1">
                            Name
                        </p>
                        <input 
                            className={styles["contact__input"]}
                            type="text"
                            placeholder="What's your name?"
                        />
                    </label>
                    
                    <label>
                        <p className="text-sm text-white font-bold uppercase mb-1">
                            Email
                        </p>
                        <input 
                            className={styles["contact__input"]}
                            type="email"
                            placeholder="And your email address?"
                        />
                    </label>

                    <label>
                        <p className="text-sm text-white font-bold uppercase mb-1">
                            Message
                        </p>
                        <textarea
                            className={styles["contact__textarea"]}
                            placeholder="Share your thoughts or questions"
                        />
                    </label>

                    <Button 
                        buttonClassName="w-full bg-white text-sm text-gray-500 font-bold uppercase border border-white rounded-3xl px-4 py-2 cursor-pointer hover:bg-transparent hover:text-white hover:border-white hover:border-solid duration-500" 
                        >
                            Let's start a conversation!
                    </Button>

                </form>
            </section>
        </section>
    );
};

export default ContactPage;