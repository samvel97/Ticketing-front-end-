import React from "react";
import { Header } from "./partials/Header.comp";
import { Footer } from "./partials/Footer.comp";
import {MenuBar} from "./partials/navbar/nav-bar"
import './style.css'
export const DefaultLayout = ({ children }) => {
  return (
    <>
    <div className="default-layout">
      <header className="header mb-2">
        <Header />
      </header>

    <div className='conteiner'>
      <MenuBar className='bar'/>
      <main className="main" >{children}</main>
    </div>

      <footer className="footer">
        <Footer />
      </footer>
    </div>
    </>
  );
};
