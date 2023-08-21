import AxiosInstance from "@/helper/AxiosInstance";
import { useRouter } from "next/router";
import { createContext, useEffect, useState } from "react";

export const UserData = createContext();
function UserContext({ children }) {
  const router = useRouter();

  const [data, setData] = useState();
  const [walletPrice, setWalletPrice] = useState(0);
  const [isActiveTrip, setIsActiveTrip] = useState(false);
  const [activeTrip, setActiveTrip] = useState(null);
  const [reqId, setReqId] = useState(null);
  const [dataTripeFromFindRide, setDataTripeFromFindRide] = useState({});
  const [dataOfferAcceptDriverFromUser, setDataOfferAcceptDriverFromUser] =
    useState({});
  const [flagUserNotLoginInDesktop, setFlagUserNotLoginInDesktop] =
    useState(false);

  useEffect(() => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    const formattedDate = `${year}-${month}-${day}`;

    const token = localStorage.getItem("KiroTravel_User");
    if (token) {
      AxiosInstance.get("me/", {
        headers: { Authorization: `Bearer ${JSON.parse(token)}` },
      })
        .then((res) => {
          setWalletPrice(res?.data["wallet_amount "]);
          setData(res?.data?.user);
          setIsActiveTrip(res?.data.is_active_trip);
          if (
            res.data.is_active_trip &&
            res.data?.active_trip.date == formattedDate
          ) {
            if (router.pathname == "/detailsTrip") return;
            // setFlagWhenUserSendBookingFindDriver(res.data?.active_trip?.Request_id)
            // router.push(`/acceptOffer?reqId=${res.data?.active_trip.id}`)
          }
        })
        .catch((err) => {
          if (err?.response?.data.code == "token_not_valid") {
            localStorage.removeItem("KiroTravel_User");
            location.replace("/signIn");
          }
          setData(false);
        });
    }
  }, []);

  const setUserData = (newData) => {
    setData(newData);
  };

  const setFlagWhenUserSendBookingFindDriver = (newData) => {
    setReqId(newData);
  };

  const setDataTheOfferFromDriverWhenUserClickAccept = (newData) => {
    setDataOfferAcceptDriverFromUser(newData);
  };

  const handelsetDataTripeFromFindRide = (newData) => {
    setDataTripeFromFindRide(newData);
  };

  const handelSetFlagUserNotLoginInDesktop = () => {
    setFlagUserNotLoginInDesktop(!flagUserNotLoginInDesktop);
  };

  return (
    <UserData.Provider
      value={{
        data,
        walletPrice,
        setWalletPrice,
        setUserData,
        isActiveTrip,
        setIsActiveTrip,
        activeTrip,
        reqId,
        setFlagWhenUserSendBookingFindDriver,
        dataOfferAcceptDriverFromUser,
        setDataTheOfferFromDriverWhenUserClickAccept,
        dataTripeFromFindRide,
        handelsetDataTripeFromFindRide,
        handelSetFlagUserNotLoginInDesktop,
        flagUserNotLoginInDesktop,
      }}
    >
      {children}
    </UserData.Provider>
  );
}

export default UserContext;
