import React, { useRef, useEffect } from "react";
import Lottie from "react-lottie";
import { useNavigate, useLocation } from "react-router-dom";
import animationData from "../animation/9757-welcome.json";

const App = () => {
  const navigate = useNavigate();

  return (
    <Lottie
      options={{
        loop: true,
        autoplay: true,
        animationData,
      }}
      height={700}
      width={400}
      // isStopped={this.state.isStopped}
      // isPaused={this.state.isPaused}
    />

    // <LottieView
    //   ref={anim}
    //   source={require("")}
    //   loop
    // />
  );
};
export default App;
