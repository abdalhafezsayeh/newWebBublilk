import Container from "@/components/globalComponents/Container";
import React, { useState } from "react";
import { BsCheckCircle } from "react-icons/bs";

function Notification() {

  return (
    <Container className="h-screen flex flex-col mt-16 gap-y-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-x-2">
          <span className="font-semibold text-[15px]">Notifications</span>
          <select className="border-none outline-none bg-transparent text-gray-300">
            <option value="all"    className="bg-[#515669] text-white">all</option>
            <option value="Unread" className="bg-[#515669] text-white">Unread</option>
            <option value="Unseen" className="bg-[#515669] text-white">Unseen</option>
          </select>
        </div>

        <span className="flex items-center gap-x-2 text-[15px]">
          Mark all as read
          <BsCheckCircle size={18}/>
        </span>
      </div>

      <div className="w-full p-2 py-4 rounded-lg bg-white shadow-lg flex flex-col gap-y-3 overflow-y-auto h-[calc(100vh-110px)]">
        {/* card */}
        <NotificationCard />
        <NotificationCard />
        <NotificationCard />
      </div>
    </Container>
  );
}

export default Notification;

const NotificationCard = () => {
  const [showAllMessage, setShowAllMessage] = useState(false);

  const toogelShowAllMessage = () => {
    setShowAllMessage((prev) => (prev == "line-clamp-2" ? "" : "line-clamp-2"));
  };
  return (
    <div className="relative flex flex-col gap-y-2 border-b-2 p-4">
      <span className="w-3 h-3 rounded-full absolute top-1 left-1 border-2 border-[#4299E1] bg-[#90CDF4]"></span>
      <h2 className="font-semibold">Ride together , save together </h2>
      <p className={`text-[#A6ADB7] ${showAllMessage} duration-300`} onClick={toogelShowAllMessage}>
        Order Kirotravel wherever you go and enjoy a safe, fast and reliable
        ride ....... Order Kirotravel wherever you go and enjoy a safe, fast and
        reliable ride .......
      </p>
      <span className="text-[#A6ADB7]">Yesterday at 11:42 PM</span>
    </div>
  );
};
