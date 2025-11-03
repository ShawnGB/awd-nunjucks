import { Request, Response } from "express";

const indexHandler = (req: Request, res: Response) => {
  res.send("Hello Again");
};

export { indexHandler };
