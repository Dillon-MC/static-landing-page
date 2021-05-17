import Head from 'next/head';
import Header from '../components/Header/Header';
import MessageBox from '../components/MessageBox/MessageBox';
import AboutSectionContainer from '../components/AboutSectionContainer/AboutSectionContainer';
import SignupSectionContainer from '../components/SignupSectionContainer/SignupSectionContainer';
import homeStyles from '../styles/Home.module.css';
import aboutStyles from '../styles/About.module.css';
import signupStyles from '../styles/Signup.module.css';

const Home: Function = (): JSX.Element => {
  return (
    <div>
      <Head>
        <title>Static Landing Page</title>
        <meta name="language" lang="en-us" />
        <meta name="description" content="Static landing page created using NextJS" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <div id={homeStyles.aboveTheFoldBackgroundImage}></div>
      <div id={homeStyles.aboveTheFoldContent}>
        <Header />
        <MessageBox />
        <h1 id={homeStyles.landingPageTitle}>Landing Page</h1>
      </div>

      {/* ABOUT SECTION */}
      <AboutSectionContainer styles={aboutStyles} />

      {/* SIGNUP SECTION */}
      <SignupSectionContainer styles={signupStyles} />

      <footer>&copy;<a href="https://github.com/Dillon-MC">Dillon 2021</a></footer>
    </div>
  );
}

export default Home;
