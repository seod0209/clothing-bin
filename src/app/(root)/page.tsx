import ErrorBoundary from '@/components/ErrorBoundary';
import Main from '@/components/main';

// https://nextjs.org/docs/app/building-your-application/upgrading/app-router-migration#step-4-migrating-pages
const Page = () => {
  return (
    <ErrorBoundary>
      <Main />
    </ErrorBoundary>
  );
};
export default Page;
