import { Container, Box } from '@mui/material';

import StyledHeader from '../common/StyledHeader';
import Body from './styled/Body';

export default function LandingPage() {
  return (
    <Container>
      <Box
        sx={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <StyledHeader>
          <div className="title">
            Welcome to the LIT{' '}
            <span role="img" aria-label="fire">
              &#x1F525;
            </span>{' '}
            Discord Gateway Portal!
          </div>
        </StyledHeader>
        <Body>
          <div className="text">
            Click <span className="link">here</span> to add the discord bot to
            your server
          </div>
        </Body>
      </Box>
    </Container>
  );
}
