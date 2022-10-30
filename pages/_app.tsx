import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ResultProvider } from 'lib/contexts'
import { useState } from 'react';
import { Result } from 'lib/types';

export default function App({ Component, pageProps }: AppProps) {
  const [result, setResult] = useState<Result | null>(null);
  return (
    <ResultProvider value={{ result, setResult }}>
      <Component {...pageProps} />
    </ResultProvider>
  )
}
