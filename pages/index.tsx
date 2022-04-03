import FeaturesLayout from '../components/landingpage/layout/features';
import GettingStartedLayout from '../components/landingpage/layout/gettingstarted';
import IntroLayout from '../components/landingpage/layout/intro';
import StayProductiveLayout from '../components/landingpage/layout/stayproductive';
import TestimonialsLayout from '../components/landingpage/layout/testimonials';
import FooterLayout from '../components/parts/layout/footer';
import NavLayout from '../components/parts/layout/nav';

const Home: React.FC<React.ReactNode> = () => {
  return (
    <div className="flex flex-col items-center overflow-hidden">
      <NavLayout />
      <IntroLayout />
      <FeaturesLayout />
      <StayProductiveLayout />
      <TestimonialsLayout />
      <GettingStartedLayout />
      <FooterLayout />
    </div>
  );
};

export default Home;
