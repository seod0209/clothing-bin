import { ReactNode } from 'react';

import GNB from '@/components/common/gnb';

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <main className="root_main">
      <GNB />
      <div className="root_div">
        <section className="root_section">
          <div className="root_children_layout">{children}</div>
        </section>
      </div>
    </main>
  );
};

export default RootLayout;
