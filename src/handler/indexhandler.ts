import { Request, Response } from "express";
import { getPosts } from "../db/db";

const indexHandler = (req: Request, res: Response) => {
  const posts = getPosts();
  const { id } = req.params;

  if (!id) return res.render("blog/bloglisting.njk", { posts });

  const post = getPosts().find((post) => post.id === id);

  if (!post) return res.status(404).send("Post not found");

  res.render("blog/blogpost.njk", { post });
};
export { indexHandler };
