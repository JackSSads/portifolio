import Footer from "../Footer/Footer";
import Navbar from "../NavBar/NavBar";

const Layout = ({ children }) => {
    return (
        <div>
            <div id="top"></div>
            <Navbar>
            </Navbar>
            <main>
                {children}
            </main>
            <Footer></Footer>
        </div>
    );
};

export default Layout;