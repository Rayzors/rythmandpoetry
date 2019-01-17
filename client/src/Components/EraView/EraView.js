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

      <ParallaxLayer>
        <EraViewInfo className="EraView__info">
          <div className="EraView__current" >{props.current} / {props.length}</div>
          <EraViewCurrent className="EraView"/>
          <h1 className="EraView__title" >{props.name}</h1>
          <DashLine />
          <p className="EraView__subTitle">{props.section_subtitle}</p>
        </EraViewInfo>
      </ParallaxLayer>

      <ParallaxLayer>
        <p>Lol</p>
      </ParallaxLayer>

    </Fragment>
  )
}

export default EraView;