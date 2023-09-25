
import { Header } from "../../../widgets/header/index";
import "../../../app/styles/global.scss";


export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};
