import Head from 'next/head';
import FeaturesLayout from '../components/landingpage/layout/features';
import GettingStartedLayout from '../components/landingpage/layout/gettingstarted';
import IntroLayout from '../components/landingpage/layout/intro';
import StayProductiveLayout from '../components/landingpage/layout/stayproductive';
import TestimonialsLayout from '../components/landingpage/layout/testimonials';
import AttributesLayout from '../components/parts/layout/attributes';
import FooterLayout from '../components/parts/layout/footer';
import NavLayout from '../components/parts/layout/nav';

const Home: React.FC<React.ReactNode> = () => {
  return (
    <>
      <Head>
        <title>
          Frontend Mentor | Fylo landing page with dark theme and features grid
        </title>
        <link
          rel="shortcut icon"
          href="/images/favicon-32x32.png"
          type="image/x-icon"
        />
      </Head>
      <NavLayout />
      <main className="flex flex-col items-center overflow-hidden">
        <IntroLayout />
        <FeaturesLayout />
        <StayProductiveLayout />
        <TestimonialsLayout />
        <GettingStartedLayout />
        <FooterLayout />
        <AttributesLayout />
      </main>
    </>
  );
};

export default Home;
