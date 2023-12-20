import React from "react";
import heroTop from "../assets/cb-hero-top.png";
import styled from "styled-components";
import { GrFormNextLink } from "react-icons/gr";

export default function CalltoAction() {
  return (
    <Container>
      <div>
        <div>
          <h1>Join the AI revolution today!</h1>
          <p>
            Unleash the power of artificial intelligence for your business. We
            are looking forward to discussing your specific requirements and
            crafting a customized solution to boost your business.
          </p>
          <button>Start Now<GrFormNextLink/></button>
        </div>
        <div>
          <img src={heroTop} alt="" />
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  background-color: #3527fd;
  margin-bottom: 3rem;
  padding: 2rem 0;
  color: #fff;
>div{
  width: 70%;
  margin: auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 5rem;

  @media screen and (max-width:768px){
    width: 90%;
    flex-direction: column;
  }

  
  div:nth-child(1){
    width: 70%;
    button{
      padding: 0.6rem 1.2rem;
      background-color: #fff;
      border: none;
      border-radius: 5px;
      color: #333;
      cursor: pointer;
      box-shadow: 0 12px 43px rgba(0,0,0,.2);
      border: 2px solid #fff;
      font-weight: 800;
      display: flex;
      align-items: center;
      gap: 1rem;
      font-size: 1rem;

      &:hover{
        color: #fff;
        background-color: transparent;
      }
    }
  }

  img{
    width:100%;
    height:100%;

  }

}
`;
