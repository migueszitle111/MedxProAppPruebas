"use client";
import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";

import HeadComponents from "./components/HeadComponents";
import SubMenu from "./components/Submenu";
import Navbar from "./components/Navbar";
import CardsList from "./components/CardsList";
import BannerPublicitarios from "./components/BannerPublicitario";
import FooterComponents from "./components/FooterComponents";
import LandingPage from "./components/LandingPage";

const Home = () => {
  const { data: session, status } = useSession();
  const isAdmin = session?.user?.roles === "admin";

  // 👉 Esto garantiza que la lógica solo corre en el cliente
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null; // ⛔️ No renderiza nada hasta que esté en el cliente

  if (status === "loading") {
    return (
      <>
        <HeadComponents />
       <div className="fixed top-0 left-0 w-full h-full z-[9999]">
  <video
    src="/assets/LandingPage/Videos/cierrevoz.mp4"
    autoPlay
    muted
    loop
    className="w-full h-full object-cover"
  />
</div>

      </>
    );
  }

  return (
    <>
      <HeadComponents />
      <div className="Conteiner">
        {!session ? (
          <LandingPage />
        ) : (
          <>
            <SubMenu />
            {isAdmin && (
              <div className="max-w-3xl mx-auto p-4">
                <Navbar />
              </div>
            )}
            <CardsList />
            <BannerPublicitarios />
          </>
        )}
        <FooterComponents />
      </div>
    </>
  );
};

export default Home;
