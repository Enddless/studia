import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import TitleSection from "../../components/Title/Title";
import BigCalendar from "./components/Calendar";


import css from "./styles.module.scss";

const DashboardPage = () => {
  return (
    <>
      <Header />
      <section className={css.container}>
        <TitleSection title="Расписание" />
        <div className={css.dashboard}>
          <BigCalendar />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default DashboardPage;
