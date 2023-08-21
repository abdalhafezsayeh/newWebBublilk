/* eslint-disable react-hooks/rules-of-hooks */
import { createContext, useEffect, useRef, useState } from "react";
import AxiosInstance from "@/helper/AxiosInstance";
const initAgoraRTC = async () => {
  return (await import("agora-rtc-sdk-ng")).default;
};
const initAgoraRTM = async () => {
  return await import("agora-rtm-react");
};
let AgoraRTC, AgoraRTM;

initAgoraRTC().then((agora) => {
  AgoraRTC = agora;
});
initAgoraRTM().then((agora) => {
  AgoraRTM = agora;
});

export const CallData = createContext();

let useClient, useChannel;

function CallContext({ children }) {
  const [loading, setLoading] = useState(false);
  const [callNotifiData, setCallNotifiData] = useState({
    caller_id: "",
    caller_name: "",
    receiver_id: "",
    receiver_name: "",
  });
  const agoraEngine = useRef();
  const channel = useRef();
  const client = useRef();
  const channelParameters = useRef({
    localAudioTrack: null,
    remoteAudioTrack: null,
    remoteUid: null,
  });

  const [showCall, setShowCall] = useState(false);
  const [waitingResponse, setWaitingResponse] = useState(true);
  const [isMutedMic, setIsMutedMic] = useState(false);
  const [isMutedSpeaker, setIsMutedSpeaker] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);

  const options = ()=>{
    return {
      appId: "f5d5284da8ed4027ac53b45406eac97e",
      rtmUid: String(Math.floor(Math.random() * 2032)),
      rtcUid: Math.floor(Math.random() * 2032),
    };
  } 

  useEffect(() => {
    const startCall = async () => {
      try {
        // Create an instance of the Agora Engine
        agoraEngine.current = AgoraRTC.createClient({
          mode: "rtc",
          codec: "vp9",
        });

        await AgoraRTC.setLogLevel(4);
        // Listen for the "user-published" event to retrieve an AgoraRTCRemoteUser object.
        agoraEngine.current.on("user-published", async (user, mediaType) => {
          // Subscribe to the remote user when the SDK triggers the "user-published" event.
          await agoraEngine.current.subscribe(user, mediaType);
          // Subscribe and play the remote audio track.
          if (mediaType == "audio") {
            channelParameters.current.remoteUid = user.uid;
            // Get the RemoteAudioTrack object from the AgoraRTCRemoteUser object.
            channelParameters.current.remoteAudioTrack = user.audioTrack;
            // Play the remote audio track.
            channelParameters.current.remoteAudioTrack.play();
            setWaitingResponse(false);
          }

          // Listen for the "user-unpublished" event.
          agoraEngine.current.on("user-unpublished", (user) => {
            if (!user._audio_muted_) {
              handelLeaveCall();
              setTimeLeft(0);
            }
          });
        });
      } catch (err) {
        // console.log("\x1b[31m" + err + "\x1b[0m");
        if(err == "TypeError: Cannot read properties of undefined (reading 'createClient')"){
          initAgoraRTC().then((agora) => {
            AgoraRTC = agora;
            startCall();
          });
        }
      }
    };

    startCall();
  }, []);

  const handeSendCallNotifi = (notifiData) => {
    AxiosInstance.post("call/", notifiData)
      .then((res) => {
        setCallNotifiData(res.data.call);
      })
      .catch((err) => console.log(err));
  };

  // handel join
  const handelCall = async (notifiData , caller_id , receiver_id) => {
    try {
      useClient = await AgoraRTM.createClient("f5d5284da8ed4027ac53b45406eac97e");
      client.current = await useClient();
      useChannel = await AgoraRTM.createChannel(
        `kiro-voice-${caller_id}-${receiver_id}`
      );
      channel.current = await useChannel(client.current);
      if (!client.current && !channel.current) return;
      setLoading(true);
      // Join a channel.
      await client.current?.login({
        uid: options().rtmUid,
        token: "f5d5284da8ed4027ac53b45406eac97e",
      });
      await channel.current?.join();

      await agoraEngine.current?.join(
        options().appId,
        `kiro-voice-${caller_id}-${receiver_id}`,
        options().token || null,
        options().rtcUid
      );

      // send notification for reciver
      notifiData && handeSendCallNotifi(notifiData);
      setShowCall(true);
      setLoading(false);

      await agoraEngine.current.publish(
        (channelParameters.current.localAudioTrack =
          await AgoraRTC?.createMicrophoneAudioTrack().catch((error) => {
            console.error("Error creating microphone audio track:", error);
            return undefined;
          }))
      );
    } catch (err) {
      if (
        err.message ==
        " Error Code 102 - The client is not logged in. Cannot do the operation."
      ) {
        handelCall(notifiData , caller_id , receiver_id);
      } else {
        setLoading(false);
      }
      console.log("call catch","\x1b[31m" + err + "\x1b[0m");
    }
  };

  const handelLeaveCall = async () => {
    try {
      // Destroy the local audio track.
      await channelParameters.current?.localAudioTrack?.close();
      // Leave the channel
      await agoraEngine.current?.leave();
      await client.current?.logout();
      setShowCall(false);
      setTimeLeft(0);
      setWaitingResponse(true);
    } catch (err) {
      console.log(" leave err", err.message);
    }
  };

  const handelMuteMic = () => {
    isMutedMic
      ? (setIsMutedMic(false),
        channelParameters.current.localAudioTrack.setEnabled(true))
      : (setIsMutedMic(true),
        channelParameters.current.localAudioTrack.setEnabled(false));
  };

  const handelMuteSpeaker = () => {
    isMutedSpeaker
      ? (channelParameters.current.localAudioTrack.setVolume(parseInt(100)),
        setIsMutedSpeaker(false))
      : (channelParameters.current.localAudioTrack.setVolume(parseInt(0)),
        setIsMutedSpeaker(true));
  };

  return (
    <CallData.Provider
      value={{
        callNotifiData,
        setCallNotifiData,
        handelCall,
        handelLeaveCall,
        handelMuteMic,
        handelMuteSpeaker,
        showCall,
        waitingResponse,
        isMutedMic,
        isMutedSpeaker,
        loading,
        timeLeft,
        setTimeLeft,
      }}
    >
      {children}
    </CallData.Provider>
  );
}

export default CallContext;
