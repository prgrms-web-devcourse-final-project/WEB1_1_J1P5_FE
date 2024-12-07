import Resizer from "react-image-file-resizer";

export const convertToWebP = (file: File) =>
  new Promise<File>((resolve) => {
    Resizer.imageFileResizer(
      file,
      500,
      500,
      "WEBP",
      90,
      0,
      (uri) => {
        resolve(uri as File);
      },
      "file"
    );
  });

