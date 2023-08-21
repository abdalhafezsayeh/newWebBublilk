import Loading from "@/components/globalComponents/Loading";
import BackButton from "@/components/pwa/BackButton";
import AddBalance from "@/components/pwa/wallet/AddBalance";
import TransferToAnotherWallet from "@/components/pwa/wallet/TransferToAnotherWallet";
import AxiosInstance from "@/helper/AxiosInstance";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { VscDiffAdded } from "react-icons/vsc";

function UserWallet() {
  const [showprice, setShowPrice] = useState(true);

  useEffect(() => {
    const price = localStorage.getItem("kiroTravel_show_Price");
    if (price == null) {
      localStorage.setItem("kiroTravel_show_Price", "true");
    } else if (price == "false") {
      setShowPrice(false);
    }
  }, []);

  const handeltoogelShowPrice = () => {
    showprice
      ? (localStorage.setItem("kiroTravel_show_Price", "false"),
        setShowPrice(false))
      : (localStorage.setItem("kiroTravel_show_Price", "true"),
        setShowPrice(true));
  };

  const [showAddBalance, setShowAddBalance] = useState(false);
  const handelToogelShowBalance = useCallback(() => {
    setShowAddBalance((prev) => !prev);
  }, []);

  // get wallet Data
  const [walletData, setWalletData] = useState({ error: null, data: {} });
  const [loadingWallet, setWalletLoading] = useState(false);

  useEffect(() => {
    setWalletLoading(true);
    const signal = new AbortController()
      AxiosInstance.get("wallet/", {signal: signal.signal})
      .then((res) => {
        if (res.data.message == "Wallet retrieved successfully") {
          setWalletData({ error: null, data: res.data?.wallet[0] });
        }
      })
      .catch((err) => {
        if(err?.response?.data.message == "Wallet not found , Add Fund to create one"){
          setWalletData({ error: "no fund yet", data: {} });
        }
        else
          setWalletData({ error: 'true', data: {} });
      })
      .finally(() => setWalletLoading(false));

      return () => {
        signal.abort();
      }
  }, []);

  // start transfer
  const [showTransfer, setShowTransfer] = useState(false);
  const handelToogelTransfer = useCallback(() => {
    setShowTransfer((prev) => !prev);
  }, []);

  if (loadingWallet) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <Loading width={"50px"} height={"50px"} />
      </div>
    );
  }

  return (
    <>
      <BackButton />

      {walletData.error !== 'true' && walletData.data && (
        <div className="px-4 pt-14 flex svh max-h-screen overflow-hidden flex-col gap-y-6 relative">
          {walletData.error == 'no fund yet' && 
            <span className="text-white text-center w-full rounded-lg py-2 px-3 bg-red-600">
              Your Wallet is not Yet Created , Add Fund To Create One Automatically
            </span>
          }
          {/* start visa card */}
          <div className="w-full h-36 relative rounded-xl overflow-hidden bg-gradient-to-bl drop-shadow-[0_0_25px_#a5a5a578] from-[#4285F4] to-[#34A853]">
            <Image
              alt="noise"
              src="/noise.png"
              width={100}
              height={100}
              className="absolute top-0 left-0 w-full h-full opacity-20"
            />

            <div className="w-full p-4 h-full flex justify-between items-center z-10 relative">
              <div className="h-full w-1/2 flex flex-col gap-y-4 justify-around">
                <h3 className="text-white font-semibold text-base">
                  Kiro Cash
                </h3>
                <h3 className="text-[#103A10] font-semibold text-lg">
                  EUR {showprice ? walletData?.data?.balance ? walletData?.data?.balance +  " €" : "0" : "****"}
                </h3>
              </div>

              <div className="h-full w-1/2 flex flex-col justify-between items-end pb-3">
                <button
                  onClick={handelToogelShowBalance}
                  className="bg-white flex justify-around items-center rounded-full py-2 px-1 w-full text-sm text-[#103A10]"
                >
                  <span className="text-lg">+</span>
                  Add Funds
                </button>

                <button
                  onClick={handeltoogelShowPrice}
                  className={`w-8 h-4 relative ${
                    showprice ? "bg-[#8ABFF0]" : "bg-[#808080]"
                  } rounded-full`}
                >
                  <span
                    className={`absolute top-0 duration-300 w-4 h-4 rounded-full bg-white`}
                    style={{right:showprice ? "1px" : "calc(100% - 16px)"}}
                  />
                </button>
              </div>
            </div>
          </div>
          {/* finish visa card */}

          {/* transfer money */}
          <div className="w-full flex flex-col gap-y-4">
            <h2 className="font-bold text-lg">Transfer</h2>

            <button
              onClick={handelToogelTransfer}
              className="flex items-center gap-x-3 text-[#00A1DF]"
            >
              <VscDiffAdded className="text-lg" />
              Transfer To Another Wallet
            </button>
          </div>

          {showAddBalance && (
            <AddBalance
              showAddBalance={showAddBalance}
              handelToogelShowBalance={handelToogelShowBalance}
            />
          )}

          {showTransfer && (
            <TransferToAnotherWallet
              showTransfer={showTransfer}
              handelToogelTransfer={handelToogelTransfer}
            />
          )}
        </div>
      )}
    </>
  );
}

export default UserWallet;
