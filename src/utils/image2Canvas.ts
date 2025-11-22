export const image2Canvas = (
  img: HTMLImageElement,
  options?: { width: number; height: number }
): HTMLCanvasElement => {
  // canvas绘制图片元素方法
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d")!;
  const width = options?.height || img.width;
  const height = options?.height || img.height;
  // canvas绘制
  canvas.width = width;
  canvas.height = height;
  // 画布清除
  context.clearRect(0, 0, width, height);
  // 绘制图片到canvas
  if (options) {
    context.drawImage(img, 0, 0, options.width, options.height);
  } else {
    context.drawImage(img, 0, 0);
  }

  return canvas;
};
