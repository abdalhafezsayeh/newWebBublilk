/* eslint-disable @next/next/no-img-element */
import React from "react";
import Container from "./globalComponents/Container";
import Link from "next/link";

function Footer() {
  return (
    <>
      <div
        style={{
          backgroundImage: "url(/footer.png)",
        }}
        className="relative bg-contain min-h-fit pt-5 hidden md:block"
      >
        {/* Content  */}
        <div className="relative z-20 text-black">
          <Container className="flex flex-col justify-between">
            <div className="grid grid-cols-[30%_auto_auto_auto]">
              {/* Logo  */}
              <div className="w-full h-36 m-auto sm:m-0 flex flex-col gap-3">
                <img
                  src="/logo.webp"
                  alt="Taxi saint julien en genevois Cab saint julien en genevois Hopital saint julien en genevois"
                  className="object-contain"
                  width={100}
                  height={100}
                />
                <p className="text-text ">
                  Lorem ipsum dolor sit amet consectetur. Mi nibh venenatis in
                  suscipit turpis enim cursus vulputate amet. Lobortis mi platea
                  aliquam senectus tempus mauris neque.
                </p>
                <div className="w-full flex items-center gap-3">
                  <Link
                    href="https://www.facebook.com/kirolimovtctaxi"
                    target="_blank"
                  >
                    <img
                      src="./sidbar/facebook.png"
                      alt="facebook Kiro Travel"
                    />
                  </Link>

                  <Link
                    href="https://www.instagram.com/kirotravelpaysdegex/"
                    target="_blank"
                  >
                    <img
                      src="./sidbar/instagram.png"
                      alt="instagram Kiro Travel"
                    />
                  </Link>

                  <Link
                    href="https://api.whatsapp.com/send/?phone=%2B33644915310&text&type=phone_number&app_absent=0"
                    target="_blank"
                  >
                    <img
                      src="./sidbar/whatsapp.png"
                      alt="whatsapp Kiro Travel"
                    />
                  </Link>
                </div>
              </div>
              {/* Services */}
              <div>
                <h3 className="text-text mb-3 text-lg font-semibold">Website Links</h3>
                <ul className="text-sm">
                  <li className="hover:text-secondary duration-150 py-1 cursor-pointer text-text-light">
                    <Link href="/taxi-aeroport-geneve-gare">
                      AÉROPORT & GARE – VTC Taxi
                    </Link>
                  </li>
                  <li className="hover:text-secondary duration-150 py-1 cursor-pointer text-text-light">
                    <Link href="/transport-business-solutions-entreprise">
                      BUSINESS & SOLUTIONS ENTREPRISE
                    </Link>
                  </li>
                  <li className="hover:text-secondary duration-150 py-1 cursor-pointer text-text-light">
                    <Link href="/Louer-une-voiture">MISE À DISPOSITION</Link>
                  </li>
                  <li className="hover:text-secondary duration-150 py-1 cursor-pointer text-text-light">
                    <Link href="/evenements-prives">EVENEMENTS PRIVÉS</Link>
                  </li>
                  <li className="hover:text-secondary duration-150 py-1 cursor-pointer text-text-light">
                    <Link href="/chauffeurs-taxi-pour-enfants">
                      CHAUFFEURS POUR ENFANTS
                    </Link>
                  </li>
                  <li className="hover:text-secondary duration-150 py-1 cursor-pointer text-text-light">
                    <Link href="/Circuits">CIRCUITS TOURISTIQUES</Link>
                  </li>
                  <li className="hover:text-secondary duration-150 py-1 cursor-pointer text-text-light">
                    <Link href="/media">MEDIA</Link>
                  </li>
                </ul>
              </div>
              {/* DESTINATIONS */}
              <div>
                <h3 className="text-text mb-3 text-lg font-semibold">DESTINATIONS</h3>
                <ul className="text-sm">
                  <li className="hover:text-secondary duration-150 py-1 cursor-pointer text-text-light">
                    <Link href="/taxi-saint-genis-pouilly">
                      Saint-Genis-Pouilly
                    </Link>
                  </li>
                  <li className="hover:text-secondary duration-150 py-1 cursor-pointer text-text-light">
                    <Link href="/taxi-ferney-voltaire-hotel">
                      Ferney-Voltaire
                    </Link>
                  </li>
                  <li className="hover:text-secondary duration-150 py-1 cursor-pointer text-text-light">
                    <Link href="taxi-divonne-les-bains">Divonne-Les-Bains</Link>
                  </li>
                </ul>
              </div>
              {/* CONDITIONS D&apos;UTILISATIONS */}
              <div>
                <h3 className="text-text mb-3 text-lg font-semibold">Others</h3>
                <ul className="text-sm">
                  <li className="hover:text-secondary duration-150 py-1 cursor-pointer text-text-light">
                    <Link href="/contact-us">CONTACT US</Link>
                  </li>
                  <li className="hover:text-secondary duration-150 py-1 cursor-pointer text-text-light">
                    <Link href="/conditions-dutilisations">
                      CONDITIONS D&apos;UTILISATIONS
                    </Link>
                  </li>
                  <li className="hover:text-secondary duration-150 py-1 cursor-pointer text-text-light">
                    <Link href="/politique-de-confidentialite">
                      POLITIQUE DE CONFIDENTIALITÉ
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-[#DFDFDF] mt-8 flex justify-center items-center py-2 text-text-light">
              <p className="text-sm sm:text-base">
                Copyright &#169; 2023{" "}
                <em>
                  <strong>KiroTravel</strong>
                </em>
              </p>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}

export default Footer;
