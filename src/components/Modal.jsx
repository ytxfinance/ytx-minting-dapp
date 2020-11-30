import React, {useRef, useEffect} from 'react';
import styled from 'styled-components';
import { Button } from './index';

export const Modal = ({
    modalState,
    children
}) => {
    const modalRef = useRef();
    const [isModalOpen, setIsModalOpen] = modalState;

    useEffect(() => {
        const listener = (event) => {
            if(!modalRef.current || modalRef.current.contains(event.target)){
                return;
            } else {
                setIsModalOpen(false);
            }
        }

        document.addEventListener('mousedown', listener);
        document.addEventListener('touchstart', listener);

        return () => {
            document.removeEventListener('mousedown', listener);
            document.removeEventListener('touchstart', listener);
        };
    }, [modalRef, isModalOpen, setIsModalOpen]);
    
     return (
            <ModalDiv show={isModalOpen} ref={modalRef}>
                {children}
                <Button onClick={() => setIsModalOpen(false)} margin='auto 0 0 auto'>Close</Button>
            </ModalDiv>
        )
}

const ModalDiv = styled.div`
    z-index: 99;
    display: ${props => props.show ? 'flex' : 'none'};
    padding: 20px;
    flex-direction: column;
    position: absolute;
    left: calc(50% - 250px);
    top: calc(50% - 250px);
    width: 250px;
    height: 250px;
    border: 2px solid black;
    background-color: white;
`