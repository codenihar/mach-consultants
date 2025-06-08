import multer from "multer";

const storage = multer.diskStorage({
  destination: "./public/uploads",
  filename: (_req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

export const upload = multer({ storage });

export const runMiddleware = (req: Request, fn: Function) =>
  new Promise((resolve, reject) => {
    fn(req, (result: any) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
