import ClientSection from "../components/ClientSection";
import HeroSection from "../components/HeroSection";
import SignupPage from "../components/About";
import SignupChoice from "../components/SignupChoice";
import WhyChooseUs from "../components/WhyChooseUs";
import Layout from "../Layouts/Layout";

const Home = () => {
  return (
    <>
      <Layout>
        <HeroSection />
        <SignupPage />
        <ClientSection />
        <WhyChooseUs />
        <SignupChoice />
      </Layout>
    </>
  )
}
export default Home;