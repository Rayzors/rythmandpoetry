import React, { Component } from 'react'
import { Transition } from 'react-spring'
import { 
    ModalContainer, 
    ModalOverlay, 
    ModalCard, 
    ModalCardImage, 
    ModalCloser,
    ModalTitle,
    ModalContent
} from '../../Components/StyledComponents/HallOfFame'
class Modal extends Component {

    createMarkup = markup => {
        return({__html: markup})
    }

    render() {
        const { modalOpened, artist, close } = this.props
        const styles = {
            position: 'fixed',
            zIndex: '997',
            backgroundColor: '#FFE47F',
            width: '100vw',
            color: '#fff',
            top: 0
        }
        return (
            <Transition
            items={modalOpened}
            from={{ ...styles, height: '0vh' }}
            enter={{ ...styles, height: '100vh' }}
            leave={{ ...styles, height: '0vh' }}
            >
            {(modalOpened) =>
                modalOpened && ((props) => {
                
                return (
                <ModalOverlay style={{ ...props }}>
                    <ModalContainer>
                        <ModalCard>
                            <ModalCloser onClick={ () => close() }>
                                <span>Close</span>
                            </ModalCloser>
                            <ModalCardImage 
                                unlocked={true} 
                                src={ artist.artist_cover } 
                            />
                        </ModalCard>
                        <ModalTitle> { artist.artist_name } </ModalTitle>
                        <ModalContent>
                            <p dangerouslySetInnerHTML={ this.createMarkup( artist.artist_content ) }/>
                        </ModalContent>
                    </ModalContainer>
                </ModalOverlay>
                )}
                )
            }
            </Transition>
        )
    }
}


export default Modal