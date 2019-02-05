import React, { Fragment } from 'react';
import EraViewInfo from '../EraView/EraViewInfo';
import EraViewCurrent from '../EraView/EraViewCurrent';
import DashLine from '../DashLine/DashLine';
import { ParallaxLayer } from 'react-spring/addons';
import { Link } from 'react-router-dom';

const EraView = (props) => {
  return (
    <Fragment>
      <ParallaxLayer
        offset={props.current - 1}
        speed={0}
        onWheel={(e) => props.handleWheel(e, props.current)}
        style={{ zIndex: '1' }}
      >
        <EraViewInfo className="EraView__info" style={{ zIndex: '3' }}>
          <div className="EraView__current">
            {props.current} / {props.length}
          </div>
          <EraViewCurrent className="EraView" />
          <h1
            className="EraView__title"
            dangerouslySetInnerHTML={{ __html: props.section_title }}
          />
          <DashLine />
          <p className="EraView__subTitle">{props.section_subtitle}</p>
          <Link to={`/g/episodes/${props.section_slug}/${props.section_id}`}>Visiter</Link>
        </EraViewInfo>
      </ParallaxLayer>

      <ParallaxLayer
        offset={props.current - 1}
        speed={0}
        onWheel={(e) => props.handleWheel(e, props.current)}
        className="EraView__bgImageContainer"
      >
        <div
          style={{ backgroundImage: `url(${props.section_bgimage})` }}
          className="EraView__bgImage"
        />
      </ParallaxLayer>
    </Fragment>
  );
};

export default EraView;
