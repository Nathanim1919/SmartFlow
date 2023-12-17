import React from "react";
import styled from "styled-components";

export default function Status() {
  return (
    <Container>
      <div>
        <h1>30%</h1>
        <p>
          customer service costs can be reduced by deploying a conversational AI
          chatbot.
        </p>
      </div>
      <div>
        <h1>90%</h1>
        <p>
          of healthcare & banking queries are effectively answered by chatbots.
        </p>
      </div>
      <div>
        <h1>68%</h1>
        <p>of conversations are completely handled by chatbots.</p>
      </div>
      <div>
        <h1>70%</h1>
        <p>
          of customers prefer chatbots for receiving instant responses to
          service related inquiries.
        </p>
      </div>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  margin: 5rem auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  background-color: #fcfbfb;
  padding:2rem 0;

  >*{
    max-width: 250px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    padding: 1rem 2rem;
    border-right: 1px solid #eee;
    text-align: center;

    h1{
        font-size: 3rem;
    }

    >*{
        margin: 0;
    }
  }


  @media screen and (max-width:500px){
    >*{
        background-color: #fff;
        border: 1px solid #eee;
        margin: 1rem 0;
    }
  }
`;
