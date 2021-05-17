import React from 'react';
import Image from 'next/image';

interface IStyleProps {
    styles: {
        aboutSectionContainer: string,
        imageContainer: string,
        image: string,
        imageLink: string,
        paragraph: string,
        pottedPlants1Image: string,
        pottedPlants2Image: string
    }
}

const AboutSectionContainer: Function = ({styles}: IStyleProps): JSX.Element => {
    return (
        <div id={styles.aboutSectionContainer}>
            <hr className="sectionSeperator" />
            {/* PARAGRAPH 1 */}
            <p className={styles.paragraph}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Quasi numquam perferendis illo voluptatum ut dolores consectetur.
                Sapiente ad ullam quos maxime placeat, 
                numquam aperiam eligendi praesentium velit odit ut recusandae!
                <br/>
                <hr/>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Commodi eum blanditiis voluptatum odit, 
                sunt dolore beatae itaque non inventore, 
                facilis veritatis aliquid nam deleniti, 
                ducimus sint? Voluptatum iusto quia obcaecati.
            </p>
            <div className={`${styles.imageContainer} ${styles.pottedPlants1Image}`}>
                <a className={styles.imageLink} href="https://unsplash.com/photos/46xWt_kBFDw">bady abbas/unsplash</a>
            </div>

            {/* PARAGRAPH 2 */}
            <p className={styles.paragraph}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Quasi numquam perferendis illo voluptatum ut dolores consectetur.
                Sapiente ad ullam quos maxime placeat, 
                numquam aperiam eligendi praesentium velit odit ut recusandae!
            </p>
            <div className={`${styles.imageContainer} ${styles.pottedPlants2Image}`}>
                <a className={styles.imageLink} href="https://unsplash.com/@ashhkabash">Ashley Busenbark/unsplash</a>
            </div>
        </div>
    );
}

export default AboutSectionContainer;