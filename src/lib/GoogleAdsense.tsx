import { FC } from 'react';
import Script from 'next/script';

type Props = {
  pId?: string;
};

const GoogleAdsense: FC<Props> = ({ pId = undefined }) => {
  if (process.env.NODE_ENV !== 'production') return null;
  if (!pId) return null;

  return (
    <Script
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-${pId}`}
      crossOrigin="anonymous"
      strategy="afterInteractive"
    ></Script>
  );
};

export default GoogleAdsense;
