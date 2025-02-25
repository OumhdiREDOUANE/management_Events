import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

import "./NavBar.css";
function NavBar() {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [scrolled, setScrolled] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleClick = (e) => {
    e.preventDefault(); // Prevents redirection
    console.log("Hello!");
    setIsOpen(!isOpen);
  };

  return (
    <>
      {isMobile ? (
        <nav className={isOpen ? "navOpen" : ""}>
          <img src="/dist/img/logo.png" id="logo" alt="" srcset="" />

          <div
            id="button"
            className={isOpen ? "close" : ""}
            onClick={handleClick}
          >
            <div id="icon">
              <span class="lines"></span>
            </div>
          </div>
          {isOpen ? (
            <div id="container">
              <div id="content">
                <input
                  type="text"
                  className="menu-search-input"
                  name="keyword"
                  placeholder="Search Events"
                />
                <i class="fas fa-search search-icon" id="iconInputSerche"></i>

                <button type="submit" class="btn btn-primary">
                  Search
                  <i class="fas fa-search search-icon" id="iconSerche"></i>
                </button>
              <div id="navbar">
                <ul>
                  <div className="dropdown">
                    <button
                      className="btn dropdown-toggle"
                      id="dropdownMenuButton"
                      data-bs-toggle="dropdown"
                      style={{ color: scrolled ? "#697088" : "" }}
                    >
                      what's on
                    </button>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <a className="dropdown-item" href="#">
                        الخيار 1
                      </a>
                      <a className="dropdown-item" href="#">
                        الخيار 2
                      </a>
                      <a className="dropdown-item" href="#">
                        الخيار 3
                      </a>
                    </div>
                  </div>
                  <div className="dropdown">
                    <button
                      className="btn dropdown-toggle"
                      id="dropdownMenuButton"
                      data-bs-toggle="dropdown"
                      style={{ color: scrolled ? "#697088" : "" }}
                    >
                      when
                    </button>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <a className="dropdown-item" href="#">
                        الخيار 1
                      </a>
                      <a className="dropdown-item" href="#">
                        الخيار 2
                      </a>
                      <a className="dropdown-item" href="#">
                        الخيار 3
                      </a>
                    </div>
                  </div>

                  <div className="dropdown">
                    <button
                      className="btn dropdown-toggle"
                      id="dropdownMenuButton"
                      data-bs-toggle="dropdown"
                      style={{ color: scrolled ? "#697088" : "" }}
                      >
                      where
                    </button>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton"
                      >
                      <a className="dropdown-item" href="#">
                        الخيار 1
                      </a>
                      <a className="dropdown-item" href="#">
                        الخيار 2
                      </a>
                      <a className="dropdown-item" href="#">
                        الخيار 3
                      </a>
                    </div>
                  </div>
                  <div className="dropdown">
                    <button
                      className="btn dropdown-toggle"
                      id="dropdownMenuButton"
                      data-bs-toggle="dropdown"
                      style={{ color: scrolled ? "#697088" : "" }}
                    >
                      what's on enjoy
                    </button>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <a className="dropdown-item" href="#">
                        الخيار 1
                      </a>
                      <a className="dropdown-item" href="#">
                        الخيار 2
                      </a>
                      <a className="dropdown-item" href="#">
                        الخيار 3
                      </a>
                    </div>
                  </div>
                </ul>
          </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </nav>
      ) : (
        <nav
          className="nav"
          style={{
            backgroundColor: scrolled ? "white" : "",

            position: "fixed",
            transition: "background-color 0.5s ease-in,  transform 0.3s ease",
            zIndex: 11,
            transform: scrolled ? "translateY(0)" : "",
          }}
        >
          <ul id="ul1">
            <li>
              <img src="/dist/img/logo.png" id="logo" alt="" srcset="" />
            </li>
            <div className="dropdown">
              <button
                className="btn dropdown-toggle"
                id="dropdownMenuButton"
                data-bs-toggle="dropdown"
                style={{ color: scrolled ? "#697088" : "" }}
              >
                what's on
              </button>
              <div
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                <a className="dropdown-item" href="#">
                  الخيار 1
                </a>
                <a className="dropdown-item" href="#">
                  الخيار 2
                </a>
                <a className="dropdown-item" href="#">
                  الخيار 3
                </a>
              </div>
            </div>
            <div className="dropdown">
              <button
                className="btn dropdown-toggle"
                id="dropdownMenuButton"
                data-bs-toggle="dropdown"
                style={{ color: scrolled ? "#697088" : "" }}
              >
                when
              </button>
              <div
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                <a className="dropdown-item" href="#">
                  الخيار 1
                </a>
                <a className="dropdown-item" href="#">
                  الخيار 2
                </a>
                <a className="dropdown-item" href="#">
                  الخيار 3
                </a>
              </div>
            </div>

            <div className="dropdown">
              <button
                className="btn dropdown-toggle"
                id="dropdownMenuButton"
                data-bs-toggle="dropdown"
                style={{ color: scrolled ? "#697088" : "" }}
              >
                where
              </button>
              <div
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                <a className="dropdown-item" href="#">
                  الخيار 1
                </a>
                <a className="dropdown-item" href="#">
                  الخيار 2
                </a>
                <a className="dropdown-item" href="#">
                  الخيار 3
                </a>
              </div>
            </div>
            <div className="dropdown">
              <button
                className="btn dropdown-toggle"
                id="dropdownMenuButton"
                data-bs-toggle="dropdown"
                style={{ color: scrolled ? "#697088" : "" }}
              >
                what's on enjoy
              </button>
              <div
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                <a className="dropdown-item" href="#">
                  الخيار 1
                </a>
                <a className="dropdown-item" href="#">
                  الخيار 2
                </a>
                <a className="dropdown-item" href="#">
                  الخيار 3
                </a>
              </div>
            </div>
          </ul>
          <ul id="ul2" className={isFocused ? "focused" : ""}>
            <li>
              <a href="#" style={{ color: scrolled ? "#697088" : "" }}>
                login
              </a>
              /{" "}
              <a href=" #" style={{ color: scrolled ? "#697088" : "" }}>
                singup
              </a>{" "}
            </li>
            <li style={{ color: scrolled ? "#697088" : "" }}>ع</li>
            <li className="lastLi">
              <input
                type="search"
                name=""
                id="serche"
                placeholder="seche Event"
                style={{ backgroundColor: scrolled ? "#f3f6fb" : "" }}
                onFocus={() => setIsFocused(true)} // عند التركيز
                onBlur={() => setIsFocused(false)}
              />
              <i class="fas fa-search search-icon"></i>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
}
export default NavBar;
