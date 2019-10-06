import React, { useState, useEffect, useRef } from "react";
import { fabric } from "fabric";
import openSocket from "socket.io-client";
import Peer from "simple-peer";
function App() {
  let socket = openSocket("http://localhost:8080");
  const canvas = new fabric.Canvas("canvas", {
    height: window.innerHeight / 2,
    width: window.innerWidth,
    isDrawingMode: true
  });
  socket.on("rdraw", ({ data }) => {
    console.log();
    canvas.loadFromJSON(data);
  });
  canvas.on("mouse:move", options => {
    socket.emit("draw", { data: JSON.stringify(canvas) });
  });
  return <div></div>;
}

export default App;
