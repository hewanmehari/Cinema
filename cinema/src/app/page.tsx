"use client";
import React, { useState } from "react";
import MovieDashboard from "./movie/page";
import Footer from "./footer/page";
import SignInPage from "./signInPage";

export default function Home() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div>
      {!loggedIn ? (
        <SignInPage onSignIn={() => setLoggedIn(true)} />
      ) : (
        <>
          <MovieDashboard />
          <Footer />
        </>
      )}
    </div>
  );
}