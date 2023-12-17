import React from "react";
import FAQ from "../assets/cb-icon1.svg";
import Appoint from "../assets/cb2-icon5.svg";
import Human from "../assets/cb2-icon3.svg";
import styled from "styled-components";

function ChatbotsType() {
  return (
    <Container>
      <h1>Scale Your Customer Support</h1>
      <div>
        <div>
          <div>
            <img src={FAQ} alt="" />
          </div>
          <h2>Support FAQs</h2>
          <p>
            Train your bots with the frequently asked support related queries by
            the customers. Engage your customers with bots and make chat
            conversations quick and effective.
          </p>
        </div>
        <div>
          <div>
            <img src={Appoint} alt="" />
          </div>
          <h2>Appointment</h2>
          <p>
            Ease appointment booking for your customers without human
            intervention by deploying chatbots. Help them to self schedule and
            enhances your overall customer experience.
          </p>
        </div>
        <div>
          <div>
            <img src={Human} alt="" />
          </div>
          <h2>Human Handover</h2>
          <p>
            Let your bots handle the basic and repetitive queries and route the
            complex conversations to the right agent/department to deliver
            faster responses in the first contact.
          </p>
        </div>
      </div>
    </Container>
  );
}

export default ChatbotsType;

const Container = styled.div`
  display: grid;
  place-items: center;
  width: 80%;
  margin: 4rem auto;
  gap: 2rem;

  > div {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    place-items: center;
    gap: 2rem;

    > div {
      > div:nth-child(1) {
        transform: scale(0.8);
      }
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      place-items: center;
      flex-direction: column;
      align-items: center;
      text-align: center;

      
      > * {
        margin: 0.4rem;
      }
    }
  }

`;
