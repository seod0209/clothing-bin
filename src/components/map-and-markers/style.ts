import styled from 'styled-components';

import Theme from '@/styles/theme';

const MarkersAndMapContainer = styled.div`
  position: relative;
  ${Theme.common.flexCenter};
  width: 100%;
  height: 100%;

  background-color: #ebedeb;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const MapBox = styled.div`
  width: 100%;
  height: 72vh;

  @media screen and (max-width: 768px) {
    height: 70vh;
  }
`;

const Location = styled.div`
  z-index: 100;
  position: absolute;
  top: 5%; /* Center vertically */
  left: 50%; /* Center horizontally */
  transform: translate(-50%, -50%);

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  width: 200px;
  height: 32px;
  text-align: center;
  border-radius: 30px;
  background: white;
  box-shadow: 8px 6px 49px -1px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 8px 6px 49px -1px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 8px 6px 49px -1px rgba(0, 0, 0, 0.75);

  cursor: pointer;

  @media screen and (max-width: 768px) {
    top: 8%; /* Center vertically */
  }
`;

export { MarkersAndMapContainer, MapBox, Location };
