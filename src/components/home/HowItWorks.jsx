/* eslint-disable @next/next/no-img-element */
import Container from "../globalComponents/Container";

function HowItWorks() {

  return (
    <div className="py-14 hidden sm:block">
      <p className="text-center text-[24px] font-[700] text-[#1E1E1E] my-6">How Kiro Travel works ?</p>
      <Container>
        <div className="flex justify-between gap-2 flex-col lg:flex-row">

          <div className="text-center">
            <img className="m-auto" src="/phone_1.png" alt="" />
            <span className="w-8 h-8 leading-8 my-2 rounded-md bg-main text-white font-bold inline-block">1</span>
            <h3 className="text-[18px] font-[700] text-[#1E1E1E] my-3">Past a ride</h3>
            <p className="text-[14px] text-center text-[#1E1E1E] w-[90%] m-auto">Enter your departure and destination, date and time of departure, and the number of passengers and luggage items.</p>
          </div>

          <div className="text-center">
            <img className="m-auto" src="/phone_2.png" alt="" />
            <span className="w-8 h-8 leading-8 my-2 rounded-md bg-main text-white font-bold inline-block">2</span>
            <h3 className="text-[18px] font-[700] text-[#1E1E1E] my-3">Compare and book</h3>
            <p className="text-[14px] text-center text-[#1E1E1E] w-[90%] m-auto">Review available booking options - you can start an auction to get quotes from our drivers or book instantly at the price displayed.</p>
          </div>


          <div className="text-center">
            <img className="m-auto" src="/phone_3.png" alt="" />
            <span className="w-8 h-8 leading-8 my-2 rounded-md bg-main text-white font-bold inline-block">3</span>
            <h3 className="text-[18px] font-[700] text-[#1E1E1E] my-3">Have a good trip !</h3>
            <p className="text-[14px] text-center text-[#1E1E1E] w-[90%] m-auto">Keep an eye on your booking and complete your trip when the time comes. The provider is paid after the trip is completed.</p>
          </div>

        </div>
      </Container>
      <a href="#addRequest" className="w-[180px] h-[36px] bg-secondary rounded-lg text-white m-auto flex justify-center items-center mt-10">Post a trip request</a>
    </div>
  );
}

export default HowItWorks;
