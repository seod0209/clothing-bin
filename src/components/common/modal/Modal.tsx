import React, { useRef, useContext, PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

import { ModalUIContext } from './context/ModalProvider';

const ModalBackground = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  background-color: rgba(51, 51, 51, 0.09);
  backdrop-filter: blur(9px);

  z-index: 100;
`;

const ModalContainer = styled.div`
  display: grid;
  place-items: center;
  width: 400px;
  height: 600px;
  background-color: white;
  border-radius: 10px;

  @media screen and (max-width: 768px) {
    width: 90%;
    height: 90vh;
  }
`;

const Modal: React.FC<PropsWithChildren> = ({ children = undefined }) => {
  const { setOpenModal } = useContext(ModalUIContext)!;
  const modalRef = useRef<HTMLDivElement | null>(null);
  const closeModal = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (modalRef.current === e.target) {
      setOpenModal(false);
    }
  };
  return createPortal(
    <ModalBackground className={'modalBackground'} onClick={(e) => closeModal(e)} ref={modalRef}>
      <ModalContainer>{children}</ModalContainer>
    </ModalBackground>,
    document.body,
  );
};

export default Modal;
