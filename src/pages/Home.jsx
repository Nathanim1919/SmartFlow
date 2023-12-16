import React from "react";
import heroImage from '../assets/cb-interface.png';
import styled from "styled-components";

export default function Home() {
  return (
    <Container>
      <div>
        <h1>Empower Your Business with AI-Powered Solutions</h1>
        <p>
          <span className="highlight">SmartFlow</span> is an AI Automation Agency dedicated to enhancing your business. We specialize in crafting intelligent chatbots that empower your sales and elevate your customer support services through advanced AI technology.
        </p>
        <button>Book a Demo</button>
      </div>

      <div className="image">
        <img src={heroImage} alt="" />
      </div>
    </Container>
  );
}

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    place-items: center;
    gap: 3rem;
    width: 80%;
    margin: auto;
    padding: 2rem;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        animation:animate infinite alternate linear 5s;
    }

    button{
        padding: 0.6rem 1rem;
        background-color: #007FFF;
        color: #fff;
        font-weight: 800;
        border: none;
        cursor: pointer;
        box-shadow: 0 12px 34px rgba(0,0,0,.2);
        border: 1px solid #007FFF;

        &:hover{
            background-color: transparent;
            color: #333;
        }
    }


    @keyframes animate {
        0%{
            transform: scale(.9);
        }
        100%{
            transform: scale(1);
        }
    }

    h1{
        font-size: 2.5rem;
    }


    @media screen and (max-width:700px){
        h1{
            font-size: 1.8rem;
        }
    }
`
