"use client";
import React from "react";
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

  // Mientras carga la sesión
  if (status === "loading") {
    return (
      <>
        <HeadComponents />
        <div className="flex items-center justify-center h-screen">
          <p className="text-white">Cargando...</p>
        </div>
      </>
    );
  }

  return (
    <>
      {/* Header siempre sticky */}
      <HeadComponents />

      {/* Espacio arriba igual al header */}
      <div className="Conteiner">
        {!session ? (
          /* Usuario no autenticado → LandingPage solo imágenes + botón */
          <LandingPage />
        ) : (
          /* Usuario autenticado → menú principal */
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

        {/* Footer siempre visible */}
        <FooterComponents />
      </div>
    </>
  );
};

export default Home;
