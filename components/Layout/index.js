import NavBar from "../Navbar";
import Footer from "../Footer";
import SocialMedia from "../SocialMedia";

export default function Layout({ children }) {
  return (
    <div>
      <NavBar />
      <SocialMedia />
      <main className='mt-20'>{children}</main>
      <Footer />
    </div>
  );
}
