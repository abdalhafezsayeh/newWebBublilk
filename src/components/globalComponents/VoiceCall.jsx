import React, { useContext, useEffect, useState } from "react";
import Container from "./Container";
import { HiSpeakerWave, HiSpeakerXMark } from "react-icons/hi2";
import { BsFillMicMuteFill, BsMicFill } from "react-icons/bs";
import { MdCallEnd } from "react-icons/md";
import { Puff } from "react-loader-spinner";
import { Howl } from "howler";
import { CallData } from "@/context/callContext";
import { UserData } from "@/context/userContext";

function VoiceCall() {
  const { data } = useContext(UserData)
  const {
    callNotifiData,
    handelLeaveCall,
    handelMuteMic,
    handelMuteSpeaker,
    showCall,
    waitingResponse,
    isMutedMic,
    isMutedSpeaker,
    loading,
    timeLeft,
    setTimeLeft
  } = useContext(CallData);

  // start handel call timer

  function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  }

  useEffect(() => {
    let timerId;
    if (!waitingResponse) {
      timerId = setInterval(
        () => setTimeLeft((prevTimeLeft) => prevTimeLeft + 1),
        1000
      );
    } else {
      clearInterval(timerId);
    }
    return () => clearInterval(timerId);
  }, [setTimeLeft, waitingResponse]);

  if (loading) {
    return (
      <div className="animate_animated animate_fadeIn h-[100svh] flex justify-center items-center w-full fixed z-[60] top-0 left-0 bg-[#1010109c]">
        <Puff
          height="80"
          width="80"
          radius={1}
          color="#02bf02"
          ariaLabel="puff-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    );
  }

  if (!showCall) return;

  return (
    <>
      <div className="animate_animated animate_fadeIn h-[100svh] pt-14 flex flex-col justify-between items-center gap-3 w-full fixed z-[60] top-0 left-0 bg-[#1010109c] ">
        <Container className="bg-white rounded-lg my-0 flex justify-between items-center gap-2 py-4 px-2">
          <h3 className="font-medium tracking-normal">
            {data.id == callNotifiData.caller_id ? callNotifiData.receiver_name : callNotifiData.caller_name}
          </h3>

          <strong className="text-blue-500">{formatTime(timeLeft)}</strong>
        </Container>

        {waitingResponse && (
          <div className="w-full flex flex-col items-center gap-y-4">
            <Puff
              height="80"
              width="80"
              radius={1}
              color="#02bf02"
              ariaLabel="puff-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
            <SoundPlayer />
            <p className="text-white font-medium tracking-wider text-center px-4">
              Please Wating For Accept Your Call
            </p>
          </div>
        )}

        <div className="relative flex justify-between items-center h-20 w-full bg-white px-3">
          <div className="absolute left-1/2 -translate-x-1/2 top-[calc(0px-35.5px)] border-8 border-[#1010109c] bg-white rounded-full">
            <button
              onClick={handelLeaveCall}
              className="w-14 h-14 bg-[#FC015B] rounded-full text-2xl text-white flex justify-center items-center"
            >
              <MdCallEnd />
            </button>
          </div>

          <span
            onClick={handelMuteSpeaker}
            className="cursor-pointer w-8 h-8 rounded-full bg-[#CDCDCD85] text-[#A4A4A4] flex justify-center items-center"
          >
            {isMutedSpeaker ? <HiSpeakerXMark /> : <HiSpeakerWave />}
          </span>

          <p className="text-[#103A10] text-sm pt-8">Your call is secure</p>

          <span
            onClick={handelMuteMic}
            className="cursor-pointer w-8 h-8 rounded-full bg-[#CDCDCD85] text-[#A4A4A4] flex justify-center items-center"
          >
            {isMutedMic ? <BsFillMicMuteFill /> : <BsMicFill />}
          </span>
        </div>
      </div>
    </>
  );
}

export default VoiceCall;

const SoundPlayer = () => {
  useEffect(() => {
    // Initialize the sound player here
    const sound = new Howl({
      src: ["/dialPhoneTone.wav"], // Replace with the path to your sound file
      autoplay: true,
      loop: true,
      volume: 0.5,
    });

    return () => {
      // Clean up the sound player when the component is unmounted
      sound.stop();
      sound.unload();
    };
  }, []);

  return null; // Since this component doesn't render anything, return null
};