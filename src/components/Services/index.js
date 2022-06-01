import React from "react";
import Icon1 from "../../images/planimg.jpg";
import Icon2 from "../../images/todo.png";
import Icon3 from "../../images/app.jpg";
import {
  ServicesContainer,
  ServicesH1,
  ServicesH2,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesP,
} from "./ServicesElements";

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Reduce expenses</ServicesH2>
          <ServicesP>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis
            veritatis aut enim doloremque sit beatae.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Virtual Offices</ServicesH2>
          <ServicesP>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis
            veritatis aut enim doloremque sit beatae.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Premium Benefits</ServicesH2>
          <ServicesP>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis
            veritatis aut enim doloremque sit beatae.
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
