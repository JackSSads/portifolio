import Footer from "../Footer/Footer";
import Navbar from "../NavBar/NavBar";
import Baseboard from "../Baseboard/Baseboard";

const Layout = ({ children }) => {
    return (
        <div>
            <div id="top"></div>
            <Navbar>
            </Navbar>
            <main>
                {children}
            </main>
            <Baseboard></Baseboard>
            <Footer></Footer>
        </div>
    );
};

export default Layout;