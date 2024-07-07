
import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, Instagram, Email } from '@mui/icons-material';
import AboutImage from '../../img/about.jpeg';

const PageContainer = styled(Box)`
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.5); 
    margin: 70px 10px 10px;
`;

const Banner = styled(Box)`
    background-image: url(${AboutImage});
    width: 100%;
    height: 50vh;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
`;

const Wrapper = styled(Box)`
    padding: 20px;
    & > h3, & > h5 {
        margin-top: 20px;
    }
`;

const Text = styled(Typography)`
    color: #878787;
`;

const CustomTypography = styled(Typography)`
    color: #00204a;
`

const About = () => {

    return (
        <PageContainer>
            <Banner/>
            <Wrapper>
                <CustomTypography variant="h3">Blog Fusion</CustomTypography>
                <Text variant="h5">Welcome to our blog! We share insights, stories, and tips on various 
                topics to inspire and inform our readers.
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://github.com/kunaltyagi9" color="inherit" target="_blank"><GitHub /></Link>
                    </Box>
                </Text>
                <Text variant="h5">
                    Need something built or simply want to have chat? Reach out to me on
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://www.instagram.com/codeforinterview/" color="inherit" target="_blank">
                            <Instagram />
                        </Link>
                    </Box>  
                        or send me an Email 
                        <Link href="mailto:codeforinterview@gmail.com?Subject=This is a subject" target="_blank" color="inherit">
                            <Email />
                        </Link>.
                </Text>
            </Wrapper>
        </PageContainer>
    )
}

export default About;