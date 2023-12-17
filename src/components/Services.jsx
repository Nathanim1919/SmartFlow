import React from "react";
import ImageUrl from "../assets/cb-interface.png";
import styled from "styled-components";

export default function Services() {
  return (
    <Container>
      <h1>What Chatbots can do?</h1>

      <div>
        <div className="sub-container">
          <div>
            <h2>Boost Customer Satisfaction</h2>
            <p>
              Bots easily interpret customer’s queries and offer quick replies
              that make them satisfied. Getting their basic questions answered
              immediately by a chatbot improves your customers’ satisfaction.
            </p>
          </div>
          <div>
            <h2>Book Your Sales Meetings</h2>
            <p>
              With your chatbots connect to your sales team’s to check
              availability and book meetings automatically once the lead is
              qualified.
            </p>{" "}
          </div>
          <div>
            <h2>Deliver Best Conversational Experience</h2>
            <p>
              Bots respond accurately to the inputs of the customers and deliver
              authentic conversational experience. Route chats to a human rep at
              the right time in order to deliver humanized support to the
              complex queries.
            </p>
          </div>
          <div>
            <h2>Humanize Your Chatbot Support</h2>
            <p>
              Bots can provide answer flawlessly and offer smart solutions by
              interpreting customers queries easily. If bots are unable to
              understand any query it will be routed to the best human
              representative.
            </p>
          </div>
        </div>

        <div>
          <img src={ImageUrl} alt="" />
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  width: 80%;
  margin: 5rem auto;
  display: grid;
  place-items: center;
  gap: 2rem;

  > div {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    place-items: center;
    flex-direction: column;
    align-items: center;
    text-align: center;

    h2 {
      font-size: 1.8rem;
    }

    p{
        opacity: .6;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    > div {
        display: grid;
        gap: 2rem;
      > * {
        display: flex;
        flex-direction: column;
        text-align: left;
        >*{
            margin: 0;
        }
      }
    }
  }
`;
