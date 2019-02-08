import React from 'react';
import { Parallax, ParallaxLayer } from 'react-spring/addons';
import Section from '../StyledComponents/Section';
import FloatingText from '../StyledComponents/FloatingText';
import Polaroid1 from '../../assets/images/polaroid-1.png';
import Polaroid2 from '../../assets/images/polaroid-2.png';
import timesquare from '../../assets/images/time-square.png';

const imagesStyles = {
  position: "absolute"
}

const ParallaxSection = () => {

  return(
    <Section style={{height: "1314px"}} backgroundColor={"#80E8FF"}>

          <FloatingText style={{ position: 'absolute', left: '5%', top: "10%" }}>In the 70’s the disco is <br/> literally Exploding</FloatingText>

          <img style={{...imagesStyles, zIndex: "2", top: "20%", right: "30%"}} src={Polaroid1}/>

          <img style={{...imagesStyles, zIndex: "2" , top: "50%", left: "30%"}} src={Polaroid2}/>

          <img style={{...imagesStyles, zIndex: "1", right: "0px", top: "45%",  transform: "translateY(-50%)"}} src={timesquare}/>

          <FloatingText style={{ position: 'absolute', right: '5%', textAlign: 'right', top: "45%"}}>
            And New York is  <br /> viewed like a  <br /> paradise by all the american people
          </FloatingText>




          
          <FloatingText style={{ position: 'absolute', left: '5%', bottom: "10%"}}>But... at the other side of new york ...</FloatingText>

    </Section>
  )
}

export default ParallaxSection
