import { useCallback, useEffect, useState } from 'react';
import axiosAPI from '../../axiosAPI.ts';
import { IPost, IPostAPI } from '../../types';
import { Card, CardActions, CardContent } from '@mui/material';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import { Grid } from '@mui/joy';
import dayjs from 'dayjs';
import Loader from '../../components/UI/Loader/Loader.tsx';

const Home = () => {

  const [posts, setPosts] = useState<IPost[]>([]);
  const [loading, setLoading] = useState<boolean>(false);


  const fetchData = useCallback(async () => {

    try {
      setLoading(true);
      const response: {data: IPostAPI} = await axiosAPI<IPostAPI>('posts.json');
      if (response.data) {
        const postsFromAPI = Object.keys(response.data).map(postKey => {
          return {
            ...response.data[postKey],
            id: postKey,
          };
        });
        setPosts(postsFromAPI);
      }
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }

  },[]);

  useEffect(() => {
    void fetchData();
  }, [fetchData]);
  return (
    <>
      {loading ? <Loader/> :
        <>
          {posts.length === 0 ? <p className="text-center fs-1">No posts</p> :
            <Grid container spacing={2}>
              {posts.map((post) => (
                <Grid key={post.id}>
                  <Card sx={{ minWidth: 275, maxWidth: 500 }}>
                    <CardContent>
                      <Typography variant="body2">{dayjs(post.date).format('D MMMM YYYY, HH:mm')}</Typography>
                      <Typography sx={{fontSize: 30, ms: 0, ps: 0}} variant="body2">{post.title}</Typography>
                      <Typography variant="body2">{post.description}</Typography>
                    </CardContent>
                    <CardActions>
                      <Button to={`/posts/${post.id}`} size="small" component={NavLink}>Read More</Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          }
        </>
      }
    </>
  );
};

export default Home;