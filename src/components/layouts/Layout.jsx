import Footer from "./Footer";
import Header from "./Header";
import {ReactSVG} from 'react-svg'
import Sidebar from "../utils/Sidebar";

const Layout = ({ children }) => {
    return (
        <div className="wrapper relative">
            <Header />
            <Sidebar/>
            {children}
            <Footer />
        </div>
    );
}

export default Layout;