import { Request, Response } from "express";

const indexHandler = (req: Request, res: Response) => {
  res.setHeader("content-type", "text/html");
  res.render("blog/blogpost.njk");
};

export { indexHandler };
