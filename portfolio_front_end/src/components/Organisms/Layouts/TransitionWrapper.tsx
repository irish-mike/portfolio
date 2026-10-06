import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

const TransitionWrapper = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location]);

  return (
    <div key={location.key} className="route-transition">
      <Outlet />
    </div>
  );
};

export default TransitionWrapper;
