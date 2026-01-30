import React from "react";

const Button = ({ children, onClick }: any) => {
  return (
    <button
      onClick={onClick}
      className="bg-linear-to-t from-[#301A3A] to-[#442155] text-[#ECEDEE] text-sm rounded-3xl px-4 py-2 hover:bg-purple-700 transition duration-200"
    >
      {children}
    </button>
  );
};

export default Button;
