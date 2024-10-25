import { useNavigate, useParams } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';
import { IPost, IPostForm } from '../../types';
import axiosAPI from '../../axiosAPI.ts';
import AddForm from '../../components/AddForm/AddForm.tsx';
import Loader from '../../components/UI/Loader/Loader.tsx';

const EditPost = () => {

  const [postEdit, setPostEdit] = useState<IPost>();
  const paramsEdit = useParams<{idPost: string}>();
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);

  const fetchPostEdit = useCallback(async (id:string) => {

    try {
      setLoading(true);
      const response: {data: IPost} = await axiosAPI<IPost>(`posts/${id}.json`);
      console.log(response);

      if (response.data) {
        setPostEdit(response.data);
      }
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }

  }, []);

  useEffect(() => {
    if (paramsEdit.idPost) {
      void fetchPostEdit(paramsEdit.idPost);
    }
  },[paramsEdit.idPost, fetchPostEdit]);

  const submitForm = async (post: IPostForm) => {

    try {
      if (paramsEdit.idPost) {
        setLoading(true);
        await axiosAPI.put(`posts/${paramsEdit.idPost}.json`,{... post} );
        navigate("/");
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }

  };

  console.log(postEdit);

  return (
    <>
      {loading ?<Loader/> :
      <>
        {postEdit ?
          <>
            <AddForm post={postEdit} submitForm={submitForm}/>
          </>
          :
          null
        }
      </>
      }
    </>
  );
};

export default EditPost;