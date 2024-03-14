import About from "./components/About/About";
import Contacts from "./components/Contacts/Contacts";
import Prices from "./components/Prices/Prices";
import StaffPage from "./components/BlockStaff";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import MainReviews from "./components/Reviews/Reviews";
import { useAppDispatch } from "../../services/type-service";
import { mainPageData } from "../../store/thunk/mainPage";
import { useEffect } from "react";
import Banners from "./components/Banners";

const MainPage = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(mainPageData());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Banners />
      <About />
      <StaffPage />
      <Prices />
      <MainReviews />
      <Contacts />
      <Footer />
    </>
  );
};

export default MainPage;
