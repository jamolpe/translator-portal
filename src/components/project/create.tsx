import { ThemeProvider } from '@emotion/react';
import {
  Container,
  CssBaseline,
  Box,
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  createTheme
} from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CreateProjectData } from '../../services/project';

interface CreateProjectProps {
  createProjectAction: (projectData: CreateProjectData) => void;
}

const theme = createTheme();

const CreateProject = ({ createProjectAction }: CreateProjectProps) => {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const createNewProject = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    createProjectAction({ name });
    navigate('/projects');
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={createNewProject}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Project Name"
              name="name"
              autoComplete="project name..."
              onChange={(e) => setName(e.target.value)}
              autoFocus
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Create
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default CreateProject;
