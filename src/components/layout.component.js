import React from "react";
import Navhead from "./navbar.component";
export default function Layout({ children }) {
  return (
    <div>
      <Navhead>

      </Navhead>
      <div style={{
        paddingTop: "66px",
      }}>
        {children}
      </div>
    </div>
  )
}