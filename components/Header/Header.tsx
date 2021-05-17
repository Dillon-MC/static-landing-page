const Header: Function = (): JSX.Element => {

    const scrollToSection: Function = (sectionId: string) => {
        const section: HTMLElement = document.querySelector('#'+sectionId);
 
        section.scrollIntoView({behavior: "smooth"});
    }

    return (
        <div id="header">
            <button className="headerButton" onClick={(): void => scrollToSection('Home_aboveTheFoldContent__1bWeQ')}>
                Home
            </button>
            <button className="headerButton" onClick={(): void => scrollToSection('About_aboutSectionContainer__HE-2-')}>
                About
            </button>
            <button className="headerButton" onClick={(): void => scrollToSection('Signup_signupSectionContainer__7-q78')}>
                Signup
            </button>
        </div>
    );
}

export default Header;