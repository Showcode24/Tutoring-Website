import { Route, Routes, useLocation } from "react-router";
import AppRouteKeys from "./AppRouteKeys";
import Home from "../pages/home";
import FindTalent from "../pages/find-talent";
import PostJob from "../pages/post-job";
import BrowseProjects from "../pages/browse-projects";
import HireHelp from "../pages/hire-help";
import FindWork from "../pages/find-work";
import WaysToEarn from "../pages/ways-to-earn";
import DirectContracts from "../pages/direct-contracts";
import GettingPaid from "../pages/getting-paid";
import WhyKopa360 from "../pages/why-kopa360";
import SuccessStories from "../pages/success-stories";
import Reviews from "../pages/reviews";
import HowToHire from "../pages/how-to-hire";
import WhatsNew from "../pages/whats-new";
import FeatureUpdates from "../pages/feature-updates";
import Events from "../pages/events";
import Blog from "../pages/blog";
import Pricing from "../pages/pricing";
import NotFound from "../pages/not-found";
import SignUpOption from "../pages/sign-up";
import SignupForm from "../components/Register";
import Login from "../pages/login";


const AppRoutes = () => {
  const location = useLocation();
  return (
    <Routes key={location.pathname} location={location}>
      <Route path={AppRouteKeys.root} element={<Home />} />
      <Route path={AppRouteKeys.findTalent} element={<FindTalent />} />
      <Route path={AppRouteKeys.postJob} element={<PostJob />} />
      <Route path={AppRouteKeys.browseProjects} element={<BrowseProjects />} />
      <Route path={AppRouteKeys.hireHelp} element={<HireHelp />} />
      <Route path={AppRouteKeys.findWork} element={<FindWork />} />
      <Route path={AppRouteKeys.waysToEarn} element={<WaysToEarn />} />
      <Route path={AppRouteKeys.directContracts} element={<DirectContracts />} />
      <Route path={AppRouteKeys.gettingPaid} element={<GettingPaid />} />
      <Route path={AppRouteKeys.whyUpwork} element={<WhyKopa360 />} />
      <Route path={AppRouteKeys.successStories} element={<SuccessStories />} />
      <Route path={AppRouteKeys.reviews} element={<Reviews />} />
      <Route path={AppRouteKeys.howToHire} element={<HowToHire />} />
      <Route path={AppRouteKeys.whatsNew} element={<WhatsNew />} />
      <Route path={AppRouteKeys.featureUpdates} element={<FeatureUpdates />} />
      <Route path={AppRouteKeys.events} element={<Events />} />
      <Route path={AppRouteKeys.blog} element={<Blog />} />
      <Route path={AppRouteKeys.pricing} element={<Pricing />} />
      <Route path={AppRouteKeys.signup} element={<SignUpOption />} />
      <Route path={AppRouteKeys.register} element={<SignupForm />} />
      <Route path={AppRouteKeys.login} element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
