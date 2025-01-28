import Footer from "../components/Footer";
import Header from "../components/Header";

const Layout = ({ children }: { children: any }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
