export interface IPostForm {
  title: string;
  description: string;
  date: string;
}

export interface IPost {
  id: string;
  title: string;
  description: string;
  date: string;
}

export interface IPostAPI {
  [id: string]: IPost;
}
