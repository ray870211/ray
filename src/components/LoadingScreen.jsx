/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "../sass/components/loading-screen.sass";
function LoadingScreen() {
  const [loading, setLoading] = useState(false);

  setTimeout(() => {
    setLoading(true);
  }, 8000);
  if (!loading) {
    return <div className='loadingScreen mb-5'></div>;
  } else {
    return null;
  }
}
export default LoadingScreen;
