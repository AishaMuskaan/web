
import { styled, Box, Typography } from '@mui/material';

const Container = styled(Box)`
    border: 1px solid #d3cede;
    box-shadow : 0 0 10px rgba(0,0,0,0.2);
    border-radius: 10px;
    margin: 10px;
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 350px;
    & > img, & > p {
        padding: 0 5px 5px 5px;
    }
`;

const Image = styled('img')({
    width: '100%',
    objectFit: 'cover',
    borderRadius: '10px 10px 0 0',
    height: 150
});

const Text = styled(Typography)`
    color: #878787;
    font-size: 15px;
    font-family: 'Segoe UI', sans-serif;
    font-weight: bold;
    
`;

const Heading = styled(Typography)`
    font-size: 18px;
    font-weight: 600;
    font-family: Segoe UI;
`;

const Details = styled(Typography)`
    font-size: 14px;
    word-break: break-word;
    font-family: Segoe UI;
`;

const Post = ({ post }) => {

    const defaultImages = {
        Music: 'https://images.unsplash.com/photo-1591025810539-a321000cda85?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODN8fG11c2ljfGVufDB8fDB8fHww',
        Movies: 'https://images.pexels.com/photos/1117132/pexels-photo-1117132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        Sports: 'https://images.unsplash.com/photo-1628779238951-be2c9f2a59f4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHNwb3J0c3xlbnwwfHwwfHx8MA%3D%3D',
        Tech: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHRlY2h8ZW58MHx8MHx8fDA%3D',
        Fashion: 'https://images.unsplash.com/photo-1509319117193-57bab727e09d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGZhc2hpb258ZW58MHx8MHx8fDA%3D',
        default: 'https://media.istockphoto.com/id/2068487938/photo/pink-speech-bubble-on-white-background.webp?b=1&s=170667a&w=0&k=20&c=oND99xYh_3TRSIsgBIwHP2FkQFUcopW2P2_eJXd7xzI='
    };
    
    const url = post.picture ? post.picture : defaultImages[post.categories] || defaultImages.default;
    
    const addEllipsis = (str, limit) => {
        return str.length > limit ? str.substring(0, limit) + '...' : str;
    } 

    return (
        <Container>
            <Image src={url} alt="post" />
            <Text>{post.categories}</Text>
            <Heading>{addEllipsis(post.title, 20)}</Heading>
            <Text>Author: {post.username}</Text>
            <Details>{addEllipsis(post.description, 100)}</Details>
        </Container>
    )
}

export default Post;