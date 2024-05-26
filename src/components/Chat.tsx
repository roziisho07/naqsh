"use client";
import React from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import logo from "./ui/img/NaqshLogo.png";

export default function Chat() {
  return (
    <FloatingWhatsApp
      phoneNumber="+923419825949"
      accountName="Roziisho"
      avatar="https://res.cloudinary.com/dbtqrbhh6/image/upload/e_background_removal/b_rgb:333B4C/f_png,e_improve,e_sharpen/v1716322099/profile_qste9r.png"
    />
  );
}
