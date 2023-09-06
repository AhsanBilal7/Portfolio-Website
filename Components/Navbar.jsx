import logo from "../images/logo.svg";
import Image from "next/image";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import navstyle from "../styles/Navbar.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import hamicon from "../images/hamburger.png";
import crossicon from "../images/close.png";
function NavbarComp() {
  const router = useRouter();

  const [menuVisible, setMenuVisible] = useState(false);
  const [icondis, seticondis] = useState(true);
  const [crossdis, setcrossdis] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
    seticondis(!icondis);
    setcrossdis(!crossdis);
  };

  return (
    <>
      <Navbar
        data-bs-theme="light"
        className={`${navstyle.main} "justify-content-evenly bg-white"`}
      >
        <Container
          style={{ alignItems: "flex-start" }}
          className={`${navstyle.mobcontainer}`}
        >
          <Link href="/" passHref>
            <div className={navstyle.logoImage}>
              <Image alt="Logo" src={logo} width={200} />
            </div>
          </Link>

          {/* ----------------------------------------------------------- */}

          {/* Add a Navbar component for mobile view */}
          <Navbar expand="md" className="d-md-none">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse
              className="d-flex flex-column"
              id="basic-navbar-nav"
            >
              {icondis && (
                <div>
                  <Image
                    src={hamicon}
                    alt="icon"
                    width={30}
                    height={30}
                    onClick={toggleMenu}
                  />
                </div>
              )}
              {crossdis && (
                <div>
                  <Image
                    src={crossicon}
                    alt="icon"
                    width={30}
                    height={30}
                    onClick={toggleMenu}
                  />
                </div>
              )}
              {menuVisible && (
                <div className={navstyle.divlinks}>
                  <Nav className="flex-column">
                    <Link href="/" passHref>
                      <Nav.Link
                        className={
                          router.pathname === "/" ? navstyle.activeLink : ""
                        }
                      >
                        Home
                      </Nav.Link>
                    </Link>
                    <Link href="/projects" passHref>
                      <Nav.Link
                        className={
                          router.pathname === "/projects"
                            ? navstyle.activeLink
                            : ""
                        }
                      >
                        Projects
                      </Nav.Link>
                    </Link>
                    <Link href="/education" passHref>
                      <Nav.Link
                        className={
                          router.pathname === "/education"
                            ? navstyle.activeLink
                            : ""
                        }
                      >
                        Education
                      </Nav.Link>
                    </Link>
                    <Link href="/experience" passHref>
                      <Nav.Link
                        className={
                          router.pathname === "/experience"
                            ? navstyle.activeLink
                            : ""
                        }
                      >
                        Experience
                      </Nav.Link>
                    </Link>
                    <Link href="/contactUs" passHref>
                      <Nav.Link
                        className={
                          router.pathname === "/contactUs"
                            ? navstyle.activeLink
                            : ""
                        }
                      >
                        Contact Us
                      </Nav.Link>
                    </Link>
                  </Nav>
                </div>
              )}
            </Navbar.Collapse>
          </Navbar>
          {/* ----------------------------------------------------------- */}

          <nav className="d-none d-md-flex flex-wrap">
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
