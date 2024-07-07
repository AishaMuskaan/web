
import { Box, styled, Typography, Link } from '@mui/material';
import {Instagram, Email } from '@mui/icons-material';

const PageContainer = styled(Box)`
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5); 
    margin: 70px 10px 10px 10px;
`;

const Banner = styled(Box)`
    background-image: url(http://mrtaba.ir/image/bg2.jpg);
    width: 100%;
    height: 50vh;
    background-position: left 0px top -100px;
    background-size: cover;
`;

const Wrapper = styled(Box)`
    padding: 20px;
    & > h3, & > h5 {
        margin-top: 10px;
    }
`;

const Text = styled(Typography)`
    color: #878787;
`;

const CustomTypography = styled(Typography)`
    color: #00204a;
`

const Contact = () => {
    return (
        <PageContainer>
            <Banner />
            <Wrapper>
                <CustomTypography variant="h3">Getting in touch is easy!</CustomTypography>    
                <Text variant="h5">
                    Reach out to me on
                    <Link href="https://www.instagram.com/codeforinterview/" color="inherit" target="_blank">
                        <Instagram/>
                    </Link>
                    or send me an Email 
                    <Link href="mailto:codeforinterview@gmail.com?Subject=This is a subject" target="_blank" color="inherit">
                        <Email />
                    </Link>.
                    We're here to help and answer any question you might have. We look forward to hearing from you!
                </Text>
                <Text variant="h5">Your feedback and inquiries are important to us.</Text>
            </Wrapper>
        </PageContainer>
    );
}

export default Contact;