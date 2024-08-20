'use client';

import { ReactNode } from 'react';

import { Dialog, DialogContent, DialogTitle } from '../dialog';

interface ModalLayoutProps {
  isOpen: boolean;

  title: string;

  children?: ReactNode;

  onClose: () => void;
}

const ModalLayout = ({ isOpen, title, onClose, children = undefined }: ModalLayoutProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="common-dialog">
        <DialogTitle>{title}</DialogTitle>
        {children}
        {undefined}
      </DialogContent>
    </Dialog>
  );
};

export default ModalLayout;
