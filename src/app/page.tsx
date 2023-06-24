"use client";
import React from 'react';
import SpeechToText from '@/components/SpeechToText';
import { SpeechProvider } from '@speechly/react-client';

const App = () => {
  return (
    // @ts-ignore
    <SpeechProvider appId={process.env.NEXT_PUBLIC_SPEECHLY_API_KEY} language="en-US">
      <SpeechToText />
    </SpeechProvider>
  );
};

export default App;
