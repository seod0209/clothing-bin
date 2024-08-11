import { Suspense, lazy } from 'react';

import { ModalUIProvider } from '@/components/common/modal/context/ModalProvider';

import Main from '@/components/main';
import SearchAddress from '@/components/search-address';

// Lazy load components
const Loading = lazy(() => import('./loading'));

// https://nextjs.org/docs/app/building-your-application/upgrading/app-router-migration#step-4-migrating-pages
export default async function Page() {
  return (
    <ModalUIProvider>
      <Main>
        <SearchAddress currAddress={currAddress} setCurrAddress={handleCurrentMarker} />
        <Suspense fallback={<Loading />}></Suspense>
      </Main>
    </ModalUIProvider>
  );
}
