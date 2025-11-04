import data from "./data.json";

interface Post {
  title: string;
  image: string;
  author: string;
  createdAt: number | Date;
  teaser: string;
  content: string;
}

const getPosts = (): Post[] => {
  const posts = data.map((post: Post) => {
    return {
      ...post,
      createdAt: new Date(post.createdAt),
    };
  });

  if (!posts) return [];

  return posts;
};

export { getPosts };
