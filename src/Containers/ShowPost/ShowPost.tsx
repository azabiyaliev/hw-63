import { NavLink, useParams, } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';
import { IPost } from '../../types';
import axiosAPI from '../../axiosAPI.ts';
import { Card, CardActions, CardContent } from '@mui/material';
import Typography from '@mui/material/Typography';
import dayjs from 'dayjs';
import Button from '@mui/material/Button';
import { Grid } from '@mui/joy';
import Loader from '../../components/UI/Loader/Loader.tsx';

const ShowPost = () => {

  const [post, setPost] = useState<IPost>();
  const params = useParams<{idPost: string}>();
  const [loading, setLoading] = useState(false);

  const fetchPost = useCallback(async (id:string) => {
    try {
      setLoading(true);
      const response: {data: IPost} = await axiosAPI<IPost>(`posts/${id}.json`);
      if (response.data) {
        setPost({...response.data, id: id});
      }
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (params.idPost) {
      void fetchPost(params.idPost);
    }
  },[params.idPost, fetchPost]);

  return (
    <>
      {loading ? <Loader/> :
      <>
        {post ? <>
          <Grid>
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography variant="body2">{dayjs(post.date).format('D MMMM YYYY, HH:mm')}</Typography>
                <Typography sx={{fontSize: 30, ms: 0, ps: 0}} variant="body2">{post.title}</Typography>
                <Typography variant="body2">{post.description}</Typography>
              </CardContent>
              <CardActions>
                <Button to={`/posts/${post.id}/edit`} size="small" component={NavLink}>Refactor</Button>
                <Button to={`/posts/`} size="small" component={NavLink}>Delete</Button>
              </CardActions>
            </Card>
          </Grid>
        </>: null }
      </>}
    </>
  );
};

export default ShowPost;