import NavBar from "../Navbar";
import Footer from "../Footer";

export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      <main className='mt-20 min-h-[calc(100vh-5rem-3.5rem)] bg-lightGrey'>
        {children}
      </main>
      <Footer />
    </>
  );
}
