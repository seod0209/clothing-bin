'use client';

import { ReactNode } from 'react';

import { Dialog, DialogContent } from '../dialog';

interface CommonModalProps {
  isOpen: boolean;

  children?: ReactNode;

  onClose: () => void;
}

const CommonModal = ({ isOpen, onClose, children = undefined }: CommonModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="common-dialog">{children}</DialogContent>
    </Dialog>
  );
};

export default CommonModal;
