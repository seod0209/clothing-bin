import { useState } from 'react';

import { ModalUIProvider } from '@/components/common/modal/context/ModalProvider';
import Main from '@/components/main';

// https://nextjs.org/docs/app/building-your-application/upgrading/app-router-migration#step-4-migrating-pages
export default async function Page() {
  return (
    <ModalUIProvider>
      <Main />
    </ModalUIProvider>
  );
}
