import Footer from "@/components/Footer";
import "@/styles/globals.css";
import "@/styles/Navbar.css";
import "@/styles/conclergerle.css";
import "@/styles/loading.css";
import 'react-calendar/dist/Calendar.css';
import Navbarr from "@/components/Navbarr";
import "animate.css";
import "react-phone-number-input/style.css";
import { Toaster } from "react-hot-toast";
import UserContext from "../context/userContext";
import CallContext from "../context/callContext";
import { Poppins } from "next/font/google";
import SocialMedia from "@/components/globalComponents/SocialMedia";
import VoiceCall from "@/components/globalComponents/VoiceCall";
import ShowCall from "@/components/globalComponents/ShowCall";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

function App({ Component, pageProps }) {
  if (Component.getLayout) {
    return (
      <UserContext>
        <CallContext>
            <main className={`${poppins.className}`}>
              <VoiceCall />
              <ShowCall />
              <Component {...pageProps} />
            </main>
        </CallContext>
      </UserContext>
    );
  }
  return (
    <>
      <UserContext>
        <CallContext>
            <main className={`${poppins.className}`}>
              <Navbarr />
              <Toaster />
              <VoiceCall />
              <ShowCall />
              <Component {...pageProps} />
              <Footer />
              <div>
                <SocialMedia />
              </div>
            </main>
        </CallContext>
      </UserContext>
    </>
  );
}

export default App;
