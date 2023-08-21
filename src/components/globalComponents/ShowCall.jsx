import { CallData } from "@/context/callContext";
import React, { useContext, useEffect, useState } from "react";
import { MdOutlineCallEnd } from "react-icons/md";
import { TbPhoneCall } from "react-icons/tb";
import Pusher from "pusher-js";
import { UserData } from "@/context/userContext";
import AxiosInstance from "@/helper/AxiosInstance";
import { Howl } from 'howler';

function ShowCall() {
  const { data } = useContext(UserData);
  const {
    callNotifiData,
    setCallNotifiData,
    handelCall,
    handelLeaveCall,
    showCall,
  } = useContext(CallData);
  const [showNotifi, setShowNotifi] = useState(false);
  const [dataFromPusher, setDataFromPusher] = useState({});

  useEffect(() => {
    let channel
    if(!showCall){
      // initialize Pusher with your app key and cluster
      const pusher = new Pusher("3f793d158f437cb59363", {
        cluster: "eu",
      });
      // subscribe to the private channel for the authenticated user
      const channel = pusher.subscribe("call");
      // bind to the event triggered by the server
      channel.bind("new-call", (newData) => {
        // console.log("pusher new call >>>>", newData);
        if (newData.receiver_id == data?.id) {
          setCallNotifiData({ ...newData, id: newData.call_id });
          setDataFromPusher(newData)
          setTimeout(() => {
            setShowNotifi(true);
          }, 0);
        }
      });
      
    }
    else{
      channel?.unsubscribe("call");
      channel?.unbind_all();
      channel?.disconnect();
    }
    return () => {
      channel?.unsubscribe("call");
      channel?.unbind_all();
      channel?.disconnect();
    };
  }, [data, setCallNotifiData, showCall]);

  useEffect(() => {
    // initialize Pusher with your app key and cluster
    const pusher = new Pusher("3f793d158f437cb59363", {
      cluster: "eu",
    });
    // subscribe to the private channel for the authenticated user
    const pusherChannel = pusher.subscribe("call-action");
    // bind to the event triggered by the server
    pusherChannel.bind("call-action", (newData) => {
      // console.log(newData);
      if (newData.call.rejected && newData.call.caller_id == data?.id) {
        handelLeaveCall();
      }
    });

    return () => {
      pusherChannel?.unsubscribe("call-action");
      pusherChannel?.unbind_all();
      pusherChannel?.disconnect();
    };
  }, [data, handelLeaveCall]);

  const handelAcceptCall = async () => {
    setShowNotifi(false);
    await handelCall(null , dataFromPusher.caller_id , dataFromPusher.receiver_id);
  };

  const handelRejectCall = () => {
    const sendData = {
      id: callNotifiData.id,
      rejected: true,
    };
    AxiosInstance.put("call/update/", sendData)
      .then((res) => {
        setShowNotifi(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (!showNotifi) return;

  return (
    <>
      <SoundPlayer />
      <div className="fixed z-[60] top-2 left-1/2 -translate-x-1/2 flex items-center justify-center w-full">
        <div className="flex flex-row  items-center justify-between bg-white shadow-lg p-5 rounded-2xl  w-[92%] animate__animated animate__bounceInDown">
          <div className="flex gap-2 items-center">
            <p className="bg-mobileMain rounded-full w-10 h-10 text-center leading-10 text-white font-bold">
              {callNotifiData.caller_name.slice(0, 1)}
            </p>
            <p>{callNotifiData?.caller_name}</p>
          </div>

          <div className="flex gap-3">
            <span
              onClick={handelAcceptCall}
              className="text-mobileMain border-[1px] border-mobileMain w-7 h-7  flex justify-center items-center rounded-full cursor-pointer"
            >
              <TbPhoneCall size={20} />
            </span>
            <span
              onClick={handelRejectCall}
              className="text-red-500 border-[1px] border-red-500 w-7 h-7  flex justify-center items-center rounded-full cursor-pointer"
            >
              <MdOutlineCallEnd size={20} />
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShowCall;

const SoundPlayer = () => {
  useEffect(() => {
    // Initialize the sound player here
    const sound = new Howl({
      src: ["/ringtoneMusic.wav"], // Replace with the path to your sound file
      autoplay: true,
      loop: true,
    });

    return () => {
      // Clean up the sound player when the component is unmounted
      sound.stop();
      sound.unload();
    };
  }, []);

  return null; // Since this component doesn't render anything, return null
};
