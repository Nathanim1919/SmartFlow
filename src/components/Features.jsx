import React from "react";
import AutomateSupport from "../assets/chatbot-interface.png";
import LeadGeneration from "../assets/chatbot-faster-resolution.png";
import GrowSales from "../assets/boost-conversation.png";
import FAQ from "../assets/cb-middle-2.png";
import styled from "styled-components";

export default function Features() {
  return (
    <Container>
      <h1>
        Automate your customer support and boost user satisfaction with AI
        chatbot
      </h1>
      <div>
        <div>
          <h2>Automate Support</h2>
          <p>
            With chatbots, you can automate your customer support by 24×7 and
            reduce issues managed by live agents.
          </p>
        </div>
        <div>
          <img src={AutomateSupport} alt="" />
        </div>
      </div>
      <div>
        <div>
          <h2>Qualify Leads Automatically</h2>
          <p>
            Chatbots generate more qualified leads automatically by answering
            website visitors questions, changing the replies based on user
            behavior.
          </p>
        </div>
        <div>
          <img src={LeadGeneration} alt="" />
        </div>
      </div>
      <div>
        <div>
          <h2>Grow Your Sales Conversions, 24/7</h2>
          <p>
            Deliver 24×7 instant support with chatbots to handle all customer
            queries equally to boost sales & lead generation of your business.
          </p>
        </div>
        <div>
          <img src={GrowSales} alt="" />
        </div>
      </div>
      <div>
        <div>
          <h2>Answer Your FAQS With Support Bot</h2>
          <p>
            Provide instant answers to all the support related questions and
            connect them with your knowledge base including answers to common
            customer queries or transfer them to the correct agent for
            assistance.
          </p>
        </div>
        <div>
          <img src={FAQ} alt="" />
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  display: grid;
  place-items: center;
  width: 80%;
  margin: 2rem auto;
  gap: 2rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  h1 {
   max-width: 600px;
    text-align: center;
  }

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;

    > div:nth-child(1) {
      flex: 1;
    }

    h2 {
      font-size: 2rem;
    }
  }

  > div:nth-child(3),
  > div:nth-child(5) {
    flex-direction: row-reverse;
  }

  @media screen and (max-width: 768px) {
    padding: 1rem;
    width: 90%;
    margin: auto;
    gap: 1rem;
   
    > div:nth-child(3)
    ,div:nth-child(2),
    >div:nth-child(4),
    > div:nth-child(5) {
      flex-direction: column;
    }
  }
`;
