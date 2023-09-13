import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import FileUpload from './file-upload';
import { clinicServices } from '../../../services/Admin/clinicService';
const defaultTheme = createTheme();
export default function SignUp({ closeClinic }) {
  const navigate = useNavigate();
  const [imageUrl, setImageUrl] = React.useState();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const bodyData = {
      name: data.get('clinicName'),
      email: data.get('email'),
      contact: data.get('contact'),
      password: data.get('password'),
      address: data.get('address'),
      image: imageUrl
    };
    try {
      const res = await clinicServices.addClinic({ bodyData });
      if (res.success) {
        toast.success("Clinic was registered success...!");
        closeClinic();
      }
      else
        toast.warning("Ohho Something went wrong");
    } catch (error) {
      toast.error("Please fill again");
    }
  };

  return (

    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <ToastContainer className="toast-position"
          position="top-center"
          autoClose={2500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Register Clinic
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} ms={4} style={{ marginLeft: "140px" }}>
                <FileUpload imageUrl={imageUrl} setImageUrl={setImageUrl} />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="clinicName"
                  label="Clinic Name"
                  name="clinicName"
                  autoComplete="clinicName"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="contact"
                  label="Contact Number"
                  name="contact"
                  autoComplete="contact"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="address"
                  label="Address"
                  name="address"
                  autoComplete="address"
                />
              </Grid>


            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Ceate Clinic
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}