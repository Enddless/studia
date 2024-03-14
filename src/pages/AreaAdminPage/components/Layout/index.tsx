import classNames from "classnames";
import AboutSettings from "./components/About";
import ContactsSettings from "./components/Contacts";
import ControlUsers from "./components/Control-users";
import DashboardSettings from "./components/Dashboard";
import Halls from "./components/Halls";

import LegalInformation from "./components/Information";
import News from "./components/News";
import Personal from "./components/Personal";
import PriceSettings from "./components/Price";
import ReviewSettings from "./components/Review";
import SettingsAll from "./components/SettingsAll";

import css from "./styles.module.scss";
interface IActiveButtonProps {
  isActiveButton: string;
}

function Layout({ isActiveButton }: IActiveButtonProps) {
  const classNamesList = classNames(css.layout, {
    [css.overlay] : isActiveButton === "contacts"
  })
  return (
    <div className={classNamesList}>
      {isActiveButton === "about" && <AboutSettings />}
      {isActiveButton === "news" && <News />}
      {isActiveButton === "halls" && <Halls />}
      {isActiveButton === "personal" && <Personal />}
      {isActiveButton === "information" && <LegalInformation />}
      {isActiveButton === "price" && <PriceSettings/>}
      {isActiveButton === "dashboard" && <DashboardSettings />}
      {isActiveButton === "reviews" && <ReviewSettings />}
      {isActiveButton === "contacts" && <ContactsSettings />}
      {isActiveButton === "control-users" && <ControlUsers />}
      {isActiveButton === "settings" && <SettingsAll />}
    </div>
  );
}

export default Layout;
