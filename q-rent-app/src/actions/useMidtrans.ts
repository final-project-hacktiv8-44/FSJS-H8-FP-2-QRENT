import { useEffect } from 'react';

const useMidtrans = (url: string) => {
  useEffect(() => {
    const script = document.createElement('script');

    script.src = url;
    script.async = true;
;
    const myMidtransClientKey = 'SB-Mid-client-tSrNr5V_HLdte9Yy';
    script.setAttribute('data-client-key', myMidtransClientKey);

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, [url]);
};

export default useMidtrans;