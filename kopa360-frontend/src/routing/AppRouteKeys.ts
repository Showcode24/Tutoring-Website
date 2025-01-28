enum AppRouteKeys {
  root = "/",
  findTutor = "/find-Tutor",
  postJob = "/post-job",
  browseProjects = "/browse-projects",
  hireHelp = "/hire-help",
  findWork = "/find-work",
  waysToEarn = "/ways-to-earn",
  directContracts = "/direct-contracts",
  gettingPaid = "/getting-paid",
  whyUpwork = "/why-kopa360",
  successStories = "/success-stories",
  reviews = "/reviews",
  howToHire = "/how-to-hire",
  whatsNew = "/whats-new",
  featureUpdates = "/feature-updates",
  events = "/events",
  blog = "/blog",
  pricing = "/pricing",
  signup = "/sign-up",
  register = "/register",
  login = "/login",
  tutorDashboard = "/tutor-dashboard",
  parentDashboard = "/parent-dashboard",
  tutorRegistration = "/tutor-registration",
  parentRegistration = "/parent-registration"
}

export type AppRouteType = {
  label: string;
  role: string;
};

export const AppRouteMap: { [key in AppRouteKeys]: AppRouteType } = {
  "/": {
    label: "Home | Kopa360",
    role: "none",
  },
  "/find-Tutor": {
    label: "Find Tutor",
    role: "none",
  },
  "/post-job": {
    label: "Post a Job and Hire a Pro",
    role: "none",
  },
  "/browse-projects": {
    label: "Browse and Buy Projects",
    role: "none",
  },
  "/hire-help": {
    label: "Let Us Help You Hire",
    role: "none",
  },
  "/find-work": {
    label: "Find Work",
    role: "none",
  },
  "/ways-to-earn": {
    label: "Ways to Earn",
    role: "none",
  },
  "/direct-contracts": {
    label: "Direct Contracts",
    role: "none",
  },
  "/getting-paid": {
    label: "Getting Paid",
    role: "none",
  },
  "/why-kopa360": {
    label: "Why Kopa360",
    role: "none",
  },
  "/success-stories": {
    label: "Success Stories",
    role: "none",
  },
  "/reviews": {
    label: "Reviews",
    role: "none",
  },
  "/how-to-hire": {
    label: "How to Hire",
    role: "none",
  },
  "/whats-new": {
    label: "What's New",
    role: "none",
  },
  "/feature-updates": {
    label: "Feature Updates",
    role: "none",
  },
  "/events": {
    label: "Events",
    role: "none",
  },
  "/blog": {
    label: "Blog",
    role: "none",
  },
  "/pricing": {
    label: "Pricing",
    role: "none",
  },
  "/sign-up": {
    label: "Sign Up",
    role: "none",
  },
  "/register": {
    label: "Register",
    role: "none",
  },
  "/login": {
    label: "Login",
    role: "none",
  },
  "/tutor-dashboard": {
    label: "Tutor Dashboard",
    role: "none",
  },
  "/parent-dashboard": {
    label: "Parent Dashboard",
    role: "none",
  },
  "/tutor-registration": {
    label: "Tutor Registration",
    role: "none",
  },
  "/parent-registration": {
    label: "Parent Registration",
    role: "none",
  }
};

export default AppRouteKeys;
