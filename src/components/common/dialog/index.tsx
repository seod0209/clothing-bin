'use client';

import { forwardRef, ElementRef, ComponentPropsWithoutRef, HTMLAttributes } from 'react';
import { Root, Trigger, Portal, Overlay, Content, Description, Title } from '@radix-ui/react-dialog';

import {
  StyledDialogOverlay,
  StyledDialogContent,
  StyledDialogHeader,
  StyledDialogFooter,
  StyledDialogTitle,
  StyledDialogDescription,
} from './styled';

const Dialog = Root;

const DialogTrigger = Trigger;

const DialogPortal = Portal;

const DialogOverlay = forwardRef<ElementRef<typeof Overlay>, ComponentPropsWithoutRef<typeof Overlay>>(
  ({ className, ...props }, ref) => <StyledDialogOverlay ref={ref} className={className} {...props} />,
);
DialogOverlay.displayName = StyledDialogOverlay.displayName;

const DialogContent = forwardRef<ElementRef<typeof Content>, ComponentPropsWithoutRef<typeof Content>>(
  ({ className, children, ...props }, ref) => (
    <DialogPortal>
      <DialogOverlay />
      <StyledDialogContent ref={ref} className={className} {...props}>
        <StyledDialogDescription>{children}</StyledDialogDescription>
      </StyledDialogContent>
    </DialogPortal>
  ),
);
DialogContent.displayName = StyledDialogContent.displayName;

const DialogHeader = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => (
  <StyledDialogHeader className={className} {...props} />
);
DialogHeader.displayName = 'DialogHeader';

const DialogFooter = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => (
  <StyledDialogFooter className={className} {...props} />
);
DialogFooter.displayName = 'DialogFooter';

const DialogTitle = forwardRef<ElementRef<typeof Title>, ComponentPropsWithoutRef<typeof Title>>(
  ({ className, ...props }, ref) => <StyledDialogTitle ref={ref} className={className} {...props} />,
);
DialogTitle.displayName = Title.displayName;

const DialogDescription = forwardRef<ElementRef<typeof Description>, ComponentPropsWithoutRef<typeof Description>>(
  ({ className, ...props }, ref) => <StyledDialogDescription ref={ref} className={className} {...props} />,
);
DialogDescription.displayName = Description.displayName;
DialogDescription.displayName = Description.displayName;

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
};
