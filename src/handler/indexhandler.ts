import { Request, Response } from "express";
import { getPosts } from "../db/db";

const indexHandler = (req: Request, res: Response) => {
  res.setHeader("content-type", "text/html");
  res.render("blog/blogpost.njk");
};

const testHandler = (req: Request, res: Response) => {
  const posts = getPosts();

  res.json(posts);
};

export { indexHandler, testHandler };
