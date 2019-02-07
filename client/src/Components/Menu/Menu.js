import React from 'react';
import { Link } from 'react-router-dom';
import withConsumer from '../../Higher-Order-Components/withConsumer';
import { Transition, Trail, animated } from 'react-spring';
import MenuOverlay from '../StyledComponents/MenuOverlay';
import MenuItem from '../StyledComponents/MenuItem';
import MenuContainer from '../StyledComponents/MenuContainer';

const styles = {
  position: 'fixed',
  zIndex: '998',
  backgroundColor: '#000000',
  width: "100vh",
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  color: '#fff'
};

const MenuitemInnerStyles = {
  position: 'absolute',
  bottom: 10,
  fontSize: 25
};

class Menu extends React.Component {
  render() {
    const { path, context } = this.props;

    const show = context.menuIsActive;

    return (
      <Transition
        items={show}
        from={{ ...styles, height: '0vh' }}
        enter={{ ...styles, height: '100vh' }}
        leave={{ ...styles, height: '0vh' }}>

      >
          {
            show =>
              show && (props => 
                <MenuOverlay style={{ ...props}}>
                  <MenuContainer>
                    {context.state.eras.map((era, index) => (
                      <Link
                        key={index}
                        onClick={context.toggleMenu}
                        to={`${path}/episodes/${era.section_slug}/${era.section_id}`}
                      >
                        <MenuItem background={era.section_bgimage}>
                          <p style={{...MenuitemInnerStyles}}>{era.section_title}</p>
                        </MenuItem>

                      </Link>
                    ))} 

                    <Link 
                      onClick={context.toggleMenu}
                      to={`${path}/hall-of-fame`}>

                        <MenuItem background={Frame}>
                          <p style={{
                            ...MenuitemInnerStyles, 
                            textAlign: "center",
                            width: "100%",
                            bottom: "50%"
                            }}>The hall of fame</p>
                        </MenuItem>

                    </Link>

                  </MenuContainer>
                </MenuOverlay>
              )
          }
      </Transition>
    );
  }
}

export default withConsumer(Menu);
