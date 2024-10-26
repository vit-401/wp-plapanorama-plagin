import React, { useRef } from 'react';
import styles from './styles.module.scss';

const Card = ({ withBorder, title, description, image }) => {
    const cardRef = useRef(null);

    const handleMouseMove = (e) => {
        const card = cardRef.current;
        if (card) {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            card.style.setProperty("--mouse-x", `${x}px`);
            card.style.setProperty("--mouse-y", `${y}px`);
        }
    };
    return (
        <div
            className={`${styles.card}`}
            ref={cardRef}
            onMouseMove={handleMouseMove}
        >
            <div className={`${withBorder ? styles.withBorder : ""}`}></div>
            <div className={styles.imageWrap}>
                <img src={image } alt={title} />
            </div>
            <div className={styles.infoWrap}>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Card;
