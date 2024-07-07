// import React, { useState, useEffect, useContext } from 'react';
// import { styled, Box, TextareaAutosize, Button, InputBase, FormControl } from '@mui/material';
// import { AddCircle as Add } from '@mui/icons-material';
// import { useNavigate, useLocation } from 'react-router-dom';
// import { API } from '../../service/api';
// import { DataContext } from '../../context/DataProvider';

// const Container = styled(Box)(({ theme }) => ({
//     margin: '50px 100px',
//     [theme.breakpoints.down('md')]: {
//         margin: 0
//     }
// }));

// const Image = styled('img')({
//     width: '100%',
//     height: '50vh',
//     objectFit: 'cover'
// });

// const StyledFormControl = styled(FormControl)`
//     margin-top: 10px;
//     display: flex;
//     flex-direction: row;
// `;

// const InputTextField = styled(InputBase)`
//     flex: 1;
//     margin: 0 30px;
//     font-size: 25px;
// `;

// const Textarea = styled(TextareaAutosize)`
//     width: 100%;
//     border: none;
//     margin-top: 50px;
//     font-size: 18px;
//     &:focus-visible {
//         outline: none;
//     }
// `;

// const initialPost = {
//     title: '',
//     description: '',
//     picture: '', // We'll store the image URL here
//     username: '',
//     categories: '',
//     createdDate: new Date()
// }

// const CreatePost = () => {
//     const navigate = useNavigate();
//     const location = useLocation();
//     const [post, setPost] = useState(initialPost);
//     const [file, setFile] = useState(null); // Changed to null initially
//     const { account } = useContext(DataContext);

//     useEffect(() => {
//         post.categories = location.search?.split('=')[1] || 'All';
//         post.username = account.username;
//     }, []);

//     useEffect(() => {
//         // If a file is selected, update the post object with the file name
//         if (file) {
//             const reader = new FileReader();
//             reader.onload = () => {
//                 setPost({ ...post, picture: reader.result });
//             };
//             reader.readAsDataURL(file);
//         }
//     }, [file]);

//     const savePost = async () => {
//         // Upload the file and then create the post
//         if (file) {
//             const formData = new FormData();
//             formData.append('file', file);
//             const response = await API.uploadFile(formData);
//             post.picture = response.data; // Assuming the API returns the URL of the uploaded image
//         }
//         await API.createPost(post);
//         navigate('/');
//     }

//     const handleChange = (e) => {
//         setPost({ ...post, [e.target.name]: e.target.value });
//     }

//     return (
//         <Container>
//             <Image src={post.picture || 'https://via.placeholder.com/400x300'} alt="post" />

//             <StyledFormControl>
//                 <label htmlFor="fileInput">
//                     <Add fontSize="large" color="action" />
//                 </label>
//                 <input
//                     type="file"
//                     id="fileInput"
//                     style={{ display: "none" }}
//                     onChange={(e) => setFile(e.target.files[0])}
//                 />
//                 {file && (
//                     <span>{file.name}</span>
//                 )}
//                 <InputTextField onChange={(e) => handleChange(e)} name='title' placeholder="Title" />
//                 <Button onClick={() => savePost()} variant="contained" color="primary">Publish</Button>
//             </StyledFormControl>

//             <Textarea
//                 rowsMin={5}
//                 placeholder="Tell your story..."
//                 name='description'
//                 onChange={(e) => handleChange(e)}
//             />
//         </Container>
//     )
// }

// export default CreatePost;

// import React, { useState, useEffect, useContext } from 'react';
// import { styled, Box, TextareaAutosize, Button, InputBase, FormControl } from '@mui/material';
// import { AddCircle as Add } from '@mui/icons-material';
// import { useNavigate, useLocation } from 'react-router-dom';
// import { API } from '../../service/api';
// import { DataContext } from '../../context/DataProvider';

// const Container = styled(Box)(({ theme }) => ({
//     margin: '50px 100px',
//     [theme.breakpoints.down('md')]: {
//         margin: 0
//     }
// }));

// const Image = styled('img')({
//     width: '100%',
//     height: '50vh',
//     objectFit: 'cover'
// });

// const StyledFormControl = styled(FormControl)`
//     margin-top: 10px;
//     display: flex;
//     flex-direction: row;
// `;

// const InputTextField = styled(InputBase)`
//     flex: 1;
//     margin: 0 30px;
//     font-size: 25px;
// `;

// const Textarea = styled(TextareaAutosize)`
//     width: 100%;
//     border: none;
//     margin-top: 50px;
//     font-size: 18px;
//     &:focus-visible {
//         outline: none;
//     }
// `;

// const initialPost = {
//     title: '',
//     description: '',
//     picture: '',
//     username: '',
//     categories: '',
//     createdDate: new Date()
// };

// const CreatePost = () => {
//     const navigate = useNavigate();
//     const location = useLocation();
//     const [post, setPost] = useState(initialPost);
//     const [file, setFile] = useState(null);
//     const { account } = useContext(DataContext);

//     useEffect(() => {
//         setPost((prevPost) => ({
//             ...prevPost,
//             categories: location.search?.split('=')[1] || 'All',
//             username: account.username
//         }));
//     }, [location, account]);

//     useEffect(() => {
//         if (file) {
//             const reader = new FileReader();
//             reader.onload = () => {
//                 setPost({ ...post, picture: reader.result });
//             };
//             reader.readAsDataURL(file);
//         }
//     }, [file]);

//     // const savePost = async () => {
//     //     try {
//     //         if (file) {
//     //             const formData = new FormData();
//     //             formData.append('file', file);
//     //             const response = await API.uploadFile(formData);
//     //             setPost({ ...post, picture: response.data });
//     //         }
//     //         await API.createPost(post);
//     //         navigate('/');
//     //     } catch (error) {
//     //         console.error('Error while saving post:', error);
//     //     }
//     // };
    
//     const savePost = async () => {
//         try {
//             if (file) {
//                 const formData = new FormData();
//                 formData.append('file', file);
//                 const response = await API.uploadFile(formData);
//                 // Update post state with the uploaded picture URL
//                 setPost({ ...post, picture: response.data });
//             }
            
//             // Now post.picture is updated with the correct URL
//             await API.createPost(post);
//             navigate('/');
//         } catch (error) {
//             console.error('Error while saving post:', error);
//             // Handle specific errors
//             if (error.response) {
//                 console.error('Response data:', error.response.data);
//                 console.error('Response status:', error.response.status);
//             } else if (error.request) {
//                 console.error('Request made but no response received:', error.request);
//             } else {
//                 console.error('Error details:', error.message);
//             }
//         }
//     };
    
    

//     const handleChange = (e) => {
//         setPost({ ...post, [e.target.name]: e.target.value });
//     };

//     return (
//         <Container>
//             <Image src={post.picture || 'https://via.placeholder.com/400x300'} alt="post" />
//             <StyledFormControl>
//                 <label htmlFor="fileInput">
//                     <Add fontSize="large" color="action" />
//                 </label>
//                 <input
//                     type="file"
//                     id="fileInput"
//                     style={{ display: "none" }}
//                     onChange={(e) => setFile(e.target.files[0])}
//                 />
//                 {file && <span>{file.name}</span>}
//                 <InputTextField onChange={handleChange} name='title' placeholder="Title" />
//                 <Button onClick={savePost} variant="contained" color="primary">Publish</Button>
//             </StyledFormControl>
//             <Textarea
//                 rowsMin={5}
//                 placeholder="Tell your story..."
//                 name='description'
//                 onChange={handleChange}
//             />
//         </Container>
//     );
// };

// export default CreatePost;

import React, { useState, useEffect, useContext } from 'react';
import { styled, Box, TextareaAutosize, Button, InputBase, FormControl } from '@mui/material';
import { AddCircle as Add } from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';
import { API } from '../../service/api';
import { DataContext } from '../../context/DataProvider';

const Container = styled(Box)(({ theme }) => ({
    margin: '50px 100px',
    [theme.breakpoints.down('md')]: {
        margin: 0
    }
}));

const Image = styled('img')({
    width: '100%',
    height: '50vh',
    objectFit: 'cover'
});

const StyledFormControl = styled(FormControl)`
    margin-top: 10px;
    display: flex;
    flex-direction: row;
`;

const InputTextField = styled(InputBase)`
    flex: 1;
    margin: 0 30px;
    font-size: 25px;
`;

const Textarea = styled(TextareaAutosize)`
    width: 100%;
    border: none;
    margin-top: 50px;
    font-size: 18px;
    &:focus-visible {
        outline: none;
    }
`;

const initialPost = {
    title: '',
    description: '',
    picture: '', // We'll store the image URL here
    username: '',
    categories: '',
    createdDate: new Date()
};

const CreatePost = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [post, setPost] = useState(initialPost);
    const [file, setFile] = useState(null);
    const { account } = useContext(DataContext);

    useEffect(() => {
        setPost((prevPost) => ({
            ...prevPost,
            categories: location.search?.split('=')[1] || 'All',
            username: account.username
        }));
    }, [location, account]);

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);
        // Optionally, you can preview the selected image
        if (selectedFile) {
            const reader = new FileReader();
            reader.onload = () => {
                setPost({ ...post, picture: reader.result });
            };
            reader.readAsDataURL(selectedFile);
        }
    };

    const savePost = async () => {
        try {
            if (file) {
                const formData = new FormData();
                formData.append('file', file);
                const response = await API.uploadFile(formData);
                setPost({ ...post, picture: response.data });
            }
            
            await API.createPost(post);
            navigate('/');
        } catch (error) {
            console.error('Error while saving post:', error);
        }
    };

    const handleChange = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value });
    };

    return (
        <Container>
            <Image src={post.picture || 'https://via.placeholder.com/400x300'} alt="post" />
            <StyledFormControl>
                <label htmlFor="fileInput">
                    <Add fontSize="large" color="action" />
                </label>
                <input
                    type="file"
                    id="fileInput"
                    style={{ display: "none" }}
                    onChange={handleFileChange}
                />
                {file && <span>{file.name}</span>}
                <InputTextField onChange={handleChange} name='title' placeholder="Title" />
                <Button onClick={savePost} variant="contained" color="primary">Publish</Button>
            </StyledFormControl>
            <Textarea
                rowsMin={5}
                placeholder="Tell your story..."
                name='description'
                onChange={handleChange}
            />
        </Container>
    );
};

export default CreatePost;
