import AddForm from "../../components/AddForm/AddForm.tsx";
import { IPostForm } from "../../types";
import axiosAPI from "../../axiosAPI.ts";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Loader from "../../components/UI/Loader/Loader.tsx";

const NewPost = () => {
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const submitForm = async (post: IPostForm) => {
    try {
      setLoading(true);
      await axiosAPI.post("posts.json", { ...post });
      navigate("/");
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  return <>{loading ? <Loader /> : <AddForm submitForm={submitForm} />}</>;
};

export default NewPost;
