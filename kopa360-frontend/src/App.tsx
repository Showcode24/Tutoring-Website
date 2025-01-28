// import './App.css'
import { BrowserRouter, useLocation } from "react-router-dom";
import './styles/global.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import AppRoutes from './routing/AppRoutes';
import { useEffect } from 'react';
import { AppRouteMap } from './routing/AppRouteKeys';

function usePageTitle() {
  const location = useLocation();

  useEffect(() => {
    const currentRoute = AppRouteMap[location.pathname as keyof typeof AppRouteMap];
    if (currentRoute) {
      document.title = currentRoute.label;
    } else {
      document.title = "Clearly Care";
    }
  }, [location]);
}

function App() {


  return (
    <>
      <BrowserRouter>
        <PageTitleWrapper>
          <AppRoutes />
        </PageTitleWrapper>
      </BrowserRouter>
    </>
  )
}
function PageTitleWrapper({ children }: { children: React.ReactNode }) {
  usePageTitle();
  return <>{children}</>;
}
export default App
