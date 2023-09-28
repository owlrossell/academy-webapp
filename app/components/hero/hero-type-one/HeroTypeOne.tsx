import styles from './hero-type-one.module.css';
import ReactMarkdown from "react-markdown";
import {CSSTransition, SwitchTransition} from "react-transition-group";
import {useEffect, useState} from "react";

interface HeroElement {
    title: string,
    images: string[],
}

interface HeroTypeOneProps {
    heroElement: HeroElement,
}

const HeroTypeOne = ({heroElement}: HeroTypeOneProps) => {
    const {title, images} = heroElement;
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((currentIndex) => (currentIndex + 1) % images.length);
        }, 10000);
        return () => {
            clearInterval(intervalId);
        }
    }, [images])

    return (
        <main className={`container ${styles.main}`}>
            <SwitchTransition
                mode={'out-in'}
            >
                <CSSTransition
                    key={images[currentIndex]}
                    classNames={'fade'}
                    timeout={200}
                >
                    <div className={styles.image}>
                        <img src={images[currentIndex]} alt="Hero"/>
                    </div>
                </CSSTransition>
            </SwitchTransition>
            <ReactMarkdown children={title}/>
        </main>
    );
}
export default HeroTypeOne;