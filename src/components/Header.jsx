import React, { useState } from "react";
import styled from "styled-components";
import { IoMdClose } from "react-icons/io";
import { LuMenu } from "react-icons/lu";

const Header = () => {
  const [isNavOpen, setNavOpen] = useState(false);
  const toggleNav = () => setNavOpen(!isNavOpen);

  return (
    <Container isNavOpen={isNavOpen}>
      <div className="logo">
        <h2>smartFlow</h2>
      </div>

      <div
        className="navbar"
        style={{
        transition:"all .5s ease-in-out",
        }}
      >
        <div className="close-icon" onClick={toggleNav}>
          <IoMdClose />
        </div>
        <ul>
          <li>Products</li>
          <li>Services</li>
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>

        <div className="btns">
          {/* <button>Log in</button>
          <button>Sign up</button> */}
          <button>Book a Demo</button>
        </div>
      </div>
      <div className="menubar" onClick={toggleNav}>
        <LuMenu />
      </div>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid #eee;
  box-shadow: 0 4px 6px -2px rgba(0, 0, 0, 0.1);

  .menubar {
    display: none;
  }
  .navbar,
  .navbar ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;

    .close-icon {
      display: none;
    }

    li {
      list-style-type: none;
      cursor: pointer;

      &:hover {
        opacity: 0.6;
      }
    }
  }

  .btns {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;

    > * {
      background-color: #007fff;
      color: #fff;
      padding: 0.5rem 1rem;
      outline: none;
      cursor: pointer;
      box-shadow: 0 8px 13px rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      border: 1x solid #007fff;
    }

    > *:nth-child(1) {
      font-weight: 700;
      color: #333;
      background-color: transparent;
    }
  }

  @media screen and (max-width: 968px) {
    .menubar {
      display: grid;
      font-size: 2rem;
      cursor: pointer;
    }
    .navbar {
      position: fixed;
      width: 100%;
      height: 100vh;
      flex-direction: column;
      justify-content: center;
      background-color: #ffffff;
      top: 0;
      transform: ${({ isNavOpen }) => (isNavOpen ? "translateY(0%)" : "translateY(-100%)")};

      .close-icon {
        display: grid;
        position: absolute;
        top: 1rem;
        right: 1rem;
        font-size: 2rem;
        cursor: pointer;
      }
      ul {
        flex-direction: column;
        align-items: flex-start;
      }

      .btns {
        flex-direction: column;

        > * {
          flex: 1;
          width: 100%;
        }
      }
    }
  }
`;
