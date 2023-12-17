import React, { useState, useRef } from "react";
import videoUrl from "../assets/about.mp4";
import styled from "styled-components";
import { FaPlay } from "react-icons/fa";

export default function About() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const playVideo = () => {
    setIsPlaying(true);
    videoRef.current.play();
  };

  return (
    <Container>
      <div className="video">
        <div className={`overlay ${isPlaying ? "hidden" : ""}`}>
          <div className="circle" onClick={playVideo}>
            <div className="inner">
              <FaPlay />
            </div>
          </div>
        </div>
        <video
          ref={videoRef}
          autoPlay={false}
          width="640"
          height="360"
          controls
          onEnded={() => setIsPlaying(false)}
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div>
        <h1>About us</h1>
        <p>
          SmartFlow is a cutting-edge AI Automation Agency committed to
          transforming businesses through innovative solutions. With a focus on
          intelligent chatbots, we specialize in empowering sales and enhancing
          customer support services. Our tailored AI technology aims to
          streamline processes, boost efficiency, and elevate overall business
          performance. At SmartFlow, we bring expertise and dedication to
          provide businesses with the tools they need to thrive in the era of
          automation. Join us on the journey to harness the power of AI for
          smarter, more efficient operations.
        </p>
        <button>Book a Demo</button>
      </div>
    </Container>
  );
}

const Container = styled.div`
  width: 80%;
  margin: 5rem auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;

  .video {
    position: relative;

    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.4);
      z-index: 10;
      display: grid;
      place-items: center;
      backdrop-filter: blur(6px);

      .circle {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        background-color: #9696ff5a;
        display: grid;
        place-items: center;
        cursor: pointer;
        transition: all 0.4s ease-in-out;

        &:hover {
          width: 120px;
          height: 120px;
        }
        &:hover .inner {
          width: 90px;
          height: 90px;
        }

        .inner {
          transition: all 0.6s ease-in-out;
          display: grid;
          place-items: center;
          width: 70px;
          height: 70px;
          border-radius: 50%;
          background-color: #9696ffc7;

          > * {
            font-size: 2.3rem;
            color: #fff;
          }
        }
      }
    }
    .hidden {
      display: none;
    }
    video {
      width: 100%;
      height: 100%;
    }
  }

  button {
    background-color: blue;
    color: #fff;
    padding: 0.6rem 1em;
    border: none;
    border-radius: 5px;
    box-shadow: 0 12px 34px rgba(0, 0, 0, 0.3);
    cursor: pointer;


    &:hover{
      color: #333;
      background-color: #fff;

    }
  }
`;
