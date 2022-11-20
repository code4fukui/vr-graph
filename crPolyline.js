import { cr, rgb } from "https://js.sabae.cc/aframe.js";

export const crPolyline = (pnts, parent) => {
  const line = cr("a-entity", parent);
  for (let i = 0; i < pnts.length - 1; i++) {
    const p0 = pnts[i];
    const p1 = pnts[i + 1];
    line.setAttribute("line" + (i == 0 ? "" : "__" + (i + 1)), {
      start: p0,
      end: p1,
      color: rgb(255, 0, 0),
    });
  }
};
/*
crPolyline([
  { x: 0, y: 0, z: -2 },
  { x: 1, y: 1, z: -2 },
  { x: 0, y: 2, z: -2 },
], scene);
*/
