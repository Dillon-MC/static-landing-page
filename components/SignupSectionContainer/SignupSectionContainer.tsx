interface IStyleProps {
    styles: {
        signupSectionContainer: string,
        signupForm: string,
        signupFormParagragh: string,
        sectionSeperator: string,
        submitFormButton: string
    }
}

const SignupSectionContainer: Function = ({styles}: IStyleProps): JSX.Element => {
    return (
        <div id={styles.signupSectionContainer}>
            <hr className="sectionSeperator" />
            <form id={styles.signupForm}>
                <h2>Signup to be notified</h2>
                <input type="text" placeholder="name.." maxLength={80} name="nameInput"/>
                <input type="text" placeholder="email@example.com" maxLength={100} name="emailInput"/>
                <hr />
                <p id={styles.signupFormParagragh}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Cum in facere magnam culpa repellat vitae cumque eligendi veritatis nobis harum libero, 
                    velit, blanditiis eius consequatur dolorum cupiditate aliquam error ducimus!
                </p>
                <button id={styles.submitFormButton}>Submit</button>
            </form>
        </div>
    );
}

export default SignupSectionContainer;