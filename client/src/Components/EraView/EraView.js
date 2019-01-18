import React, {Fragment} from 'react'
import Wrapper from '../Wrapper/Wrapper'
import EraViewInfo from '../EraView/EraViewInfo'
import EraViewCurrent from '../EraView/EraViewCurrent'
import DashLine from '../DashLine/DashLine';
import { Parallax, ParallaxLayer } from 'react-spring/addons';
import './EraView.css'

const EraView = (props) => {
  return (
    <Fragment>

      <ParallaxLayer offset={props.current - 1} speed={0} style={{cursor: 'pointer'}} onClick={props.onClick} style={{zIndex: '1', backgroundColor: props.section_bgcolor}}>
        <EraViewInfo className="EraView__info" style={{zIndex: '3'}}>
          <div className="EraView__current" >{props.current} / {props.length}</div>
          <EraViewCurrent className="EraView"/>
          <h1 className="EraView__title" dangerouslySetInnerHTML={{ __html: props.name }}>{/*props.name*/}</h1>
          <DashLine />
          <p className="EraView__subTitle">{props.section_subtitle}</p>
        </EraViewInfo>
      </ParallaxLayer>

      <ParallaxLayer offset={props.current - 1} speed={0.4} onClick={props.onClick} style={{zIndex: '2', 
          right: '33%',}}>
        <div
        style={{
          backgroundImage: `url(https://via.placeholder.com/500)`,
          backgroundSize: 'cover',
          width: '600px',
          height: '600px',
          position: 'relative',
          transform: 'rotate(-5deg)',
          left: '-50%'
        }}
        >

        </div>
      </ParallaxLayer>

    </Fragment>
  )
}

export default EraView;