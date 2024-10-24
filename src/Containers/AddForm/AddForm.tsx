import React, { useState } from 'react';
import { IPostForm } from '../../types';
import Box from '@mui/material/Box';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import axiosAPI from '../../axiosAPI.ts';

const initialForm = {
  title: "",
  description: "",
  date: ""
};

const AddForm = () => {

  const [form, setForm] = useState<IPostForm>({...initialForm});

  const onChangeField = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setForm(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const onSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await axiosAPI.post('posts.json', {...form, date: new Date().toISOString()});
    console.log(form);
    setForm({...initialForm});
  };

  return (
    <form onSubmit={onSubmitForm} style={{width: '70%', border: '4px solid #9e9e9e', borderRadius: "10px", marginLeft:"auto", marginRight:"auto"}}>
      <h1 style={{textAlign: "center", paddingTop: "30px"}}>Add new post</h1>
      <Box
        sx={{ py: 3, display: 'grid', gap: 2, alignItems: 'center', flexWrap: 'wrap', width: '100%' }}
      >
        <TextField
          sx={{mx: 'auto', width: '90%' }}
          name="title"
          id="outlined-basic"
          label="Title"
          variant="outlined"
          value={form.title}
          onChange={onChangeField}
        />
        <TextField
          sx={{mx: 'auto', width: '90%' }}
          name="description"
          id="outlined-multiline-static"
          label="Description"
          multiline
          rows={4}
          value={form.description}
          onChange={onChangeField}
        />
        <Button type="submit" sx={{mx: 'auto', width: '90%' }} color="inherit" variant="outlined">Save</Button>
      </Box>
    </form>
  );
};

export default AddForm;