import { useState, useEffect, useContext } from 'react';
import { Box, Typography, styled } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { API } from '../../service/api';
import { DataContext } from '../../context/DataProvider';
import Comments from './comments/Comments';
import localImage from '../../img/test.jpg';

const Container = styled(Box)(({ theme }) => ({
    margin: '50px 100px',
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0,0,0,0.3)',
    [theme.breakpoints.down('md')]: {
        margin: 0
    },
}));

const Image = styled('img')({
    width: '100%',
    height: '50vh',
    objectFit: 'cover'
});

const EditIcon = styled(Edit)`
    margin: 5px;
    padding: 5px;
    border: 1px solid #878787;
    border-radius: 10px;
`;

const DeleteIcon = styled(Delete)`
    margin: 5px;
    padding: 5px;
    border: 1px solid #878787;
    border-radius: 10px;
`;

const Heading = styled(Typography)`
    font-size: 38px;
    font-weight: 600;
    text-align: center;
    margin: 50px 0 10px 0;
`;

const Author = styled(Box)(({ theme }) => ({
    color: '#878787',
    display: 'flex',
    margin: '20px 0',
    [theme.breakpoints.down('sm')]: {
        display: 'block'
    },
}));

const DetailView = () => {
    
    const [post, setPost] = useState({});
    const { account } = useContext(DataContext);

    const navigate = useNavigate();
    const { id } = useParams();
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                let response = await API.getPostById(id);
                if (response.isSuccess) {
                    setPost(response.data);
                } else {
                    console.error('Failed to fetch the post:', response);
                }
            } catch (error) {
                console.error("Error fetching post data:", error);
            }
        };
        
        fetchData();
    }, [id]);

    const deleteBlog = async () => {
        try {
            let response = await API.deletePost(post._id);
            if (response.isSuccess) {
                navigate('/');
            } else {
                console.error('Failed to delete the post:', response);
            }
        } catch (error) {
            console.error('Error occurred while deleting the post:', error);
        }
    }

    const defaultImages = {
        Music: 'https://images.unsplash.com/photo-1591025810539-a321000cda85?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODN8fG11c2ljfGVufDB8fDB8fHww',
        Movies: 'https://images.pexels.com/photos/1117132/pexels-photo-1117132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        Sports: 'https://images.unsplash.com/photo-1628779238951-be2c9f2a59f4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHNwb3J0c3xlbnwwfHwwfHx8MA%3D%3D',
        Tech: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHRlY2h8ZW58MHx8MHx8fDA%3D',
        Fashion: 'https://images.unsplash.com/photo-1509319117193-57bab727e09d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGZhc2hpb258ZW58MHx8MHx8fDA%3D',
        default: 'https://media.istockphoto.com/id/2068487938/photo/pink-speech-bubble-on-white-background.webp?b=1&s=170667a&w=0&k=20&c=oND99xYh_3TRSIsgBIwHP2FkQFUcopW2P2_eJXd7xzI='
    };
    
    const url = post.picture ? post.picture : defaultImages[post.categories] || defaultImages.default;

    return (
        <Container>
            <Image src={url} alt="post" />

            {/* <Image src={post.picture || url} alt="post" /> */}
            <Box style={{ float: 'right' }}>
                {   
                    account.username === post.username && 
                    <>  
                        <Link to={`/update/${post._id}`}><EditIcon style={{backgroundColor: '#00204a' }} /></Link>
                        <DeleteIcon onClick={deleteBlog} color="error" />
                    </>
                }
            </Box>
            <Heading>{post.title}</Heading>

            <Author>
                <Link to={`/?username=${post.username}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <Typography>Author: <span style={{fontWeight: 600}}>{post.username}</span></Typography>
                </Link>
                <Typography style={{marginLeft: 'auto'}}>{new Date(post.createdDate).toDateString()}</Typography>
            </Author>

            <Typography>{post.description}</Typography>
            <Comments post={post} />
        </Container>
    )
}

export default DetailView;
