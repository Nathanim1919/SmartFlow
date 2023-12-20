import React from "react";
import styled from "styled-components";
import { FaFacebookF,FaInstagram,FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <Container>
      {/* Navigation Links */}
      <div>
        <ul>
          <li>Products</li>
          <li>Services</li>
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <ul>
          <Link><FaFacebookF/></Link>
          <Link to={'https://www.instagram.com/ette_ch/'} target="_blank"><FaInstagram/></Link>
          <Link to={'https://www.linkedin.com/company/100646677/admin/feed/posts/'} target="_blank"><FaLinkedinIn/></Link>
        </ul>
      </div>

      <div>
        <p>copyright&#169; 2023 smart flow Ai automation agency</p>
      </div>
    </Container>
  );
}

export default Footer;



const Container = styled.div`
    display: grid;
    align-items: end;
    background-color: #333;
    color: #fff;
    padding: 2rem;

    >div:nth-child(2){
        place-self: center;
        font-weight: lighter;
        font-size: .9rem;
        color: #ddd;
    }

    >div:nth-child(1){
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        gap: 4rem;

        ul{
            display: flex;
            align-items: center;
            justify-content: space-around;
            align-items: center;
            gap: 1rem;
            list-style-type: none;

            >*{
                cursor: pointer;
                color: #fff;

                &:hover{
                    color: #9d9999;
                }
            }
        }
    }
`