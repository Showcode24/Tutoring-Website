// import ClientSection from "../components/ClientSection";
import HeroSection from "../components/HeroSection";
import SignupPage from "../components/About";
import WhyChooseUs from "../components/WhyChooseUs";
import Layout from "../Layouts/Layout";
import HowItWorks from "../components/ParentOnboarding";
import GetStarted from "../components/TutorOnboarding";

const Home = () => {
  return (
    <>
      <Layout>
        <HeroSection />
        {/* <ClientSection /> */}
        <WhyChooseUs />
        <HowItWorks />
        <GetStarted />
        <SignupPage />
      </Layout>
    </>
  )
}
export default Home;