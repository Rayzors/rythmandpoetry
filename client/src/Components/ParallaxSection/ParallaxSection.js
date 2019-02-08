import React from 'react';
import { Parallax, ParallaxLayer } from 'react-spring/addons';
import Section from '../StyledComponents/Section';
import FloatingText from '../StyledComponents/FloatingText';

const ParallaxSection = () => {

  return(
    <Section style={{height: "1314px"}} backgroundColor={"#80E8FF"}>

          <FloatingText style={{ position: 'absolute', left: '5%', top: "10%" }}>In the 70’s the disco is <br/> literally Exploding</FloatingText>

          <FloatingText style={{ position: 'absolute', right: '5%', textAlign: 'right', top: "45%"}}>
            And New York is  <br /> viewed like a  <br /> paradise by all the american people
          </FloatingText>
          
          <FloatingText style={{ position: 'absolute', left: '5%', bottom: "10%"}}>But... at the other side of new york ...</FloatingText>

    </Section>
  )
}

export default ParallaxSection
