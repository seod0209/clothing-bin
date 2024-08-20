import { Close, Overlay, Content, Title, Description } from '@radix-ui/react-dialog';
import styled from 'styled-components';

const StyledDialogOverlay = styled(Overlay)`
  position: fixed;
  inset: 0;
  z-index: 100;
  background: rgba(0, 0, 0, 0.6);
  animation: fade-in 0.2s ease-out;
  &.data-[state='closed'] {
    animation: fade-out 0.2s ease-in;
  }
`;

const StyledDialogContent = styled(Content)`
  position: fixed;
  left: 50%;
  top: 50%;
  z-index: 102;
  transform: translate(-50%, -50%);
  display: grid;
  width: 100%;
  max-width: 20rem;
  gap: 1rem;
  border: 1px solid #e0e0e0;
  background: #ffffff;
  padding: 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  animation: zoom-in 0.2s ease-out;
  &.data-[state='closed'] {
    animation: zoom-out 0.2s ease-in;
  }
  @media (prefers-color-scheme: dark) {
    border-color: #333;
    background: #ffffff;
  }
`;

const StyledDialogHeader = styled.div`
  display: flex;
  flex-direction: column;
  space-y: 0.375rem;
  text-align: center;
  @media (min-width: 640px) {
    text-align: left;
  }
`;

const StyledDialogFooter = styled.div`
  display: flex;
  flex-direction: column-reverse;
  @media (min-width: 640px) {
    flex-direction: row;
    justify-content: flex-end;
    gap: 0.5rem;
  }
`;

const StyledDialogTitle = styled(Title)`
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 1.5;
  letter-spacing: -0.01562em;
`;

const StyledDialogDescription = styled(Description)`
  font-size: 0.875rem;
  color: #6b7280;
  @media (prefers-color-scheme: dark) {
    color: #9ca3af;
  }
`;

const StyledDialogClose = styled(Close)`
  position: absolute;
  right: 1rem;
  top: 1rem;
  border-radius: 0.125rem;
  opacity: 0.7;
  transition: opacity 0.2s ease;
  &:hover {
    opacity: 1;
  }
  &:focus {
    outline: none;
    ring: 2px solid #333;
  }
  @media (prefers-color-scheme: dark) {
    background: #333;
    color: #ccc;
  }
`;

export {
  StyledDialogOverlay,
  StyledDialogClose,
  StyledDialogContent,
  StyledDialogHeader,
  StyledDialogFooter,
  StyledDialogTitle,
  StyledDialogDescription,
};
