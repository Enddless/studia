
import Notifications from "./components/Notifications";
import ChangePassword from "./components/Password";
import OnlineRecovery from "./components/Recovery";
import WriteReview from "./components/Review";
import Settings from "./components/Settings";
import Tickets from "./components/Tickets/index";


interface IActiveButtonProps {
  currentButton: string;
}

function Layout({ currentButton }: IActiveButtonProps) {
  return (
    <>
      {currentButton === "settings" && <Settings />}
      {currentButton === "tickets" && <Tickets />}
      {currentButton === "notifications" && <Notifications />}
      {currentButton === "record" && <OnlineRecovery />}
      {currentButton === "changepass" && <ChangePassword />}
      {currentButton === "review" && <WriteReview />}
    </>
  );
}

export default Layout;
