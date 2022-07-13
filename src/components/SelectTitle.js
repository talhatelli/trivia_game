import React from "react";

export default function SelectTitle(props) {
  const {icineYazilacakSey} = props;

  return (
    <div
      style={{
        fontSize: 20,
        color: "red/",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "gray",
      }}>
      {icineYazilacakSey}
    </div>
  );
}
