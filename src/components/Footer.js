import React, {useRef} from 'react';
import styled from 'styled-components';
import NavigationButton from './NavigationButton';
import NavigationModal from './NavigationModal';
import Portal from './Portal';

const PositionFooter = styled.footer `{
  position: fixed;
  text-align: center;
  margin: 0 auto;
  transform: translateX(-50%) translateY(-50%);
  left: 50%;
  bottom: -6rem;
}
`;

const Footer = () => {

  const modalRef1 = useRef();

  return (
    <PositionFooter>
      <NavigationButton modalRef={() => modalRef1.current.openModal()} />
      <Portal>
        <NavigationModal ref={modalRef1} />
      </Portal>
    </PositionFooter>
  )
}

export default Footer;