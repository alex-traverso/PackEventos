import NavBar from "../Navbar";
import Footer from "../Footer";

export default function Layout({ children }) {
  return (
    <div>
      <NavBar />
      <main className='mt-20'>{children}</main>
      <Footer />
    </div>
  );
}
