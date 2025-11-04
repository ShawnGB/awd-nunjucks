import data from "./data.json";
import dayjs from "dayjs";

interface Post {
  title: string;
  image: string;
  author: string;
  createdAt: number;
  teaser: string;
  content: string;
}

const getPosts = (): (Omit<Post, "createdAt"> & {
  createdAt: string;
  id: string;
})[] => {
  return data.map((post: Post, index: number) => {
    return {
      ...post,
      createdAt: dayjs.unix(post.createdAt).format("MMMM DD, YYYY") as string,
      id: (index + 1).toString(),
    };
  });
};

export { getPosts };
