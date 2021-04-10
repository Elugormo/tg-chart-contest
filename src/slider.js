import { css } from "./utils";


const HEIGHT = 40;
const DPI_HEIGHT = HEIGHT * 2;

export function sliderChart(root, data, DPI_WIDTH) {
  const WIDTH = DPI_WIDTH / 2;
  const canvas = root.querySelector("canvas");
  const ctx = canvas.getContext("2d");
  css(canvas, {
    width: WIDTH + "px",
    height: HEIGHT + "px",
  });

  canvas.width = DPI_WIDTH;
  canvas.height = DPI_HEIGHT;
}
