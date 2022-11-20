import { cr, rgb, asset } from "https://js.sabae.cc/aframe.js";
import { crPolyline } from "./crPolyline.js";

export const showGraph = (f, orgpos, scale, zscale) => {
  const scene = cr("a-scene");
  scene.setAttribute("background", "color:" + rgb(0, 0, 0));
  scene.setAttribute("renderer", "colorManagement: true;");
  document.body.appendChild(scene);

  const pushLine = (pnts, x, y) => {
    const z = f(x * scale, y * scale) * zscale;
    pnts.push({ x: x + orgpos.x, y: z + orgpos.y, z: y + orgpos.z });
  };

  const step = .05;
  for (let x = -1; x <= 1; x += step) {
    const pnts = [];
    for (let y = -1; y <= 1; y += step) {
      pushLine(pnts, x, y);
    }
    crPolyline(pnts, scene);
  }
  for (let y = -1; y <= 1; y += step) {
    const pnts = [];
    for (let x = -1; x <= 1; x += step) {
      pushLine(pnts, x, y);
    }
    crPolyline(pnts, scene);
  }
};
