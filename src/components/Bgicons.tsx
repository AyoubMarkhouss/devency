import React from "react";
import Image from "next/image";
const Bgicons = () => {
  return (
    <div>
      <Image
        alt="bg"
        src="/bgicon.png"
        height={2000}
        width={2000}
        className="w-screen scale-150 md:scale-100"
      />
    </div>
  );
};

export default Bgicons;
