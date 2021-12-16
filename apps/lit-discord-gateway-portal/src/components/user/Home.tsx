import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function LoginPage() {
  const discordLogin = () => {
    window.location.href = '';
  };
  return (
    <Stack spacing={2} direction="row">
      <Button variant="contained">
        <a
          href="http://localhost:5000/discord/login"
          rel="noreferrer"
          style={{
            textDecoration: 'none',
            color: 'white',
          }}
        >
          Login With Discord
        </a>
      </Button>
    </Stack>
  );
}

export default LoginPage;
