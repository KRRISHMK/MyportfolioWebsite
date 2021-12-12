import React, { Component } from "react";
import "./whatsapp.css";

export default class WhatsApp extends Component {
  render() {
    return (
      <div>
        <a
          href="https://api.whatsapp.com/send?phone=+919994171573&text=Hello%21%21%21%20%20%20Krrish."
          class="float"
          target="_blank"
          rel="noreferrer"
        >
          <img
            class="my-float"
            src="https://img.icons8.com/color/48/000000/whatsapp--v3.png"
            alt="whatapp"
          />
        </a>
      </div>
    );
  }
}
