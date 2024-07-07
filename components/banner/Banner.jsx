
import { styled, Box, Typography } from '@mui/material';

const Image = styled(Box)`
    width: 100%;
    background: rgba(0, 0, 0, 0.7);
    background-image: url(https://images.pexels.com/photos/733856/pexels-photo-733856.jpeg?cs=srgb&dl=pexels-tirachard-kumtanom-112571-733856.jpg&fm=jpg);
    background-position: center;
    background-size: cover;
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 70px;
`;

const Heading = styled(Typography)`
    font-size: 70px;
    color: #00204a;
    line-height: 1;
`;

const SubHeading = styled(Typography)`
    font-size: 20px;
    color: #f8b400;
    background: #FFFFFF; 
`;


const Banner = () => {
    
    return (
        <Image>
            <Heading>BLOG FUSION</Heading>
            <SubHeading>Empowering Your Journey with Insightful Stories and Expert Tips.</SubHeading>
        </Image>
    )
}

export default Banner;