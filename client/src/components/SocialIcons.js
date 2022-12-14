import React from "react";
import { SocialIcon } from "react-social-icons";

const SocialIcons = () => {
  return (
    <div className="flex justify-between p-4">
      <SocialIcon
        url="https://www.facebook.com/carolyn.ollarte.98"
        target="_blank"
      />
      <SocialIcon url="https://twitter.com/clryyy" target="_blank" />
      <SocialIcon url="https://www.instagram.com/clyrxsm/" target="_blank" />
      <SocialIcon
        url="https://www.carolynp.ollarte@gmail.com"
        target="_blank"
      />
    </div>
  );
};

export default SocialIcons;
