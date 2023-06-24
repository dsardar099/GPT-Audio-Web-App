"use client";
import React, { useEffect, useState } from "react";
import { useSpeechContext } from "@speechly/react-client";
import { getResponse } from "@/helpers/common";
import ListeningAnimation from "./ListeningAnimation";
import AnalyzingAnimation from "./AnalyzingAnimation";
import SpeakingAnimation from "./SpeakingAnimation";

const SpeechToText = () => {
  const { listening, segment, attachMicrophone, start, stop } =
    useSpeechContext();
  const [data, setData] = useState("");
  const [showSpeaking, setShowSpeaking] = useState(false);
  const [showAnalyzing, setShowAnalyzing] = useState(false);

  useEffect(() => {
    (async () => {
      if (segment && listening) {
        if (segment.isFinal) {
          setShowAnalyzing(true);
          await stop();
          const join =
            "\n Human: " +
            segment.words.map((w) => w.value).join(" ") +
            "\n AI: ";
          const newData = data + join;
          generateResponseAndSpeak(newData);
        }
      }
    })();
  }, [segment]);

  const generateResponseAndSpeak = async (prompt: string) => {
    const response = await getResponse(prompt);
    const newData = prompt + response;
    // @ts-ignore
    window.responsiveVoice.speak(response, "US English Female", {
      onstart: () => {
        setShowAnalyzing(false);
        setShowSpeaking(true);
      },
      onend: () => {
        setShowSpeaking(false);
      },
    });
    setData(newData);
  };

  const handleClick = async () => {
    if (listening) {
      await stop();
    } else {
      await attachMicrophone();
      await start();
    }
  };

  return (
    <div className="flex w-screen h-screen">
      <div className="mx-auto my-auto">
        {listening ? (
          <ListeningAnimation />
        ) : showAnalyzing ? (
          <AnalyzingAnimation />
        ) : showSpeaking ? (
          <SpeakingAnimation />
        ) : (
          <button
            onClick={handleClick}
            className="rounded-full w-20 h-20 bg-blue-500 text-white text-xl"
          >
            Start
          </button>
        )}
      </div>
    </div>
  );
};

export default SpeechToText;
