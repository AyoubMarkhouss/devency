import React from "react";

import { Button } from "react-scroll";
import Uparrow from "./icons/Uparrow";
const Scrolltop = () => {
  if (typeof document !== "undefined") {
    const totopElements = document.getElementsByClassName("top");

    window.onscroll = () => {
      
      const totop = totopElements[0] as HTMLElement;

      if (
        document.body.scrollTop > 200 ||
        document.documentElement.scrollTop > 200
      ) {
        totop.classList.remove("hidden");
      } else {
        totop.classList.add("hidden");
      }
    };
  }

  return (
    <>
      <Button
        to="Home"
        smooth
        offset={-100}
        className="top hidden fixed z-50 bottom-5 right-7"
      >
        <Uparrow className="h-10 w-10 fill-lightviolet" />
      </Button>
    </>
  );
};

export default Scrolltop;
