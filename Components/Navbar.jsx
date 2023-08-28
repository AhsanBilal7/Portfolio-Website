import logo from "../images/logo.svg";
import Image from "next/image";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import navstyle from "../styles/Navbar.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
function NavbarComp() {
  const router = useRouter();

  return (
    <>
      <Navbar
        data-bs-theme="light"
        className={`${navstyle.main} "justify-content-evenly bg-white"`}
      >
        <Container className={navstyle.container}>


          <Link href="/" passHref>
            <div className={navstyle.logoImage}>
              <Image alt="Logo" src={logo} width={200}/>
            </div>
          </Link>



          <nav className="d-flex flex-wrap">

{/* ////////////////////////////////// */}
            <Link href="/" passHref>
              <p
                className={`${navstyle.link} ${
                  router.pathname === "/" ? navstyle.activeLink : ""
                } ml-30 `}
              >
                Home
              </p>
            </Link>
{/* ////////////////////////////////// */}
            <Link href="/projects" passHref>
              <p 
                className={`${navstyle.link} ${
                  router.pathname === "/projects" ? navstyle.activeLink : ""
                }`}
              >
                {console.log(router.pathname)}
                Projects
              </p>
            </Link>
{/* ////////////////////////////////// */}
            <Link href="/education" passHref>
              <p 
                className={`${navstyle.link} ${
                  router.pathname === "/education" ? navstyle.activeLink : ""
                }`}
              >
                {console.log(router.pathname)}
                Education
              </p>
            </Link>
{/* ////////////////////////////////// */}
            <Link href="/experience" passHref>
              <p 
                className={`${navstyle.link} ${
                  router.pathname === "/experience" ? navstyle.activeLink : ""
                }`}
              >
                {console.log(router.pathname)}
                Experience
              </p>
            </Link>
{/* ////////////////////////////////// */}
            <Link href="/contactUs" passHref>
              <p 
                className={`${navstyle.link} ${
                  router.pathname === "/contactUs" ? navstyle.activeLink : ""
                }`}
              >
                {console.log(router.pathname)}
                Contact Us
              </p>
            </Link>
{/* ////////////////////////////////// */}

          </nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarComp;
