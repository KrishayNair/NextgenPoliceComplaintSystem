import React from "react";
import styled from "styled-components";
import { About } from "../styles";
import Toggle from "./Toggle";
import { AnimateSharedLayout } from "framer-motion";
import { useScroll } from "./useScroll";
import { scrollReveal } from "../animation";

const FaqSection = () => {
  const [element, controls] = useScroll();
  return (
    <Faq
      variants={scrollReveal}
      ref={element}
      animate={controls}
      initial="hidden"
    >
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title="What's E-Cell?">
          <div className="answer">
            <p>
              Rajiv Gandhi Institute of Technology's Entrepreneurship Cell is a
              student body aiming to explore mainstream Entrepreneurship and
              promote the startup culture among all the students.
            </p>
          </div>
        </Toggle>
        <Toggle title="What do we do?">
          <div className="answer">
            <p>
              Through various programs and seminars, we make sure each and every
              individual inclined towards entrepreneurship gets a detailed
              overview and guidance.{" "}
            </p>
          </div>
        </Toggle>
        <Toggle title="What we offer?">
          <div className="answer">
            <p>
              We have a network of many industrial professionals, corporates and
              Entrepreneurs.{" "}
            </p>
            <p>
              We provide networking opportunities to all the students linked
              with us. Under IIC of RGIT, potential startups would be grown
              under an incubation centre along with funding opportunities!
            </p>
          </div>
        </Toggle>
        <Toggle title="Why RGIT's E-Cell?">
          <div className="answer">
            <p>
              RGIT'S E-Cell provides an unmatchable and just the right support,
              motivation and guidance one needs to excel and grow his/her
              startup. We provide an environment where students can learn,
              connect and grow in the direction of becoming job creators.
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </Faq>
  );
};

const Faq = styled(About)`
  display: block;
  background-color: black;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

export default FaqSection;
