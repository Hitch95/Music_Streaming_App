import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAuth } from '../../context/useAuth';
import { useForm } from 'react-hook-form';
import { Button, TextField, Typography } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';

type Props = {};

type LoginFormsInputs = {
  email: string;
  password: string;
};

const validation = Yup.object().shape({
  email: Yup.string().required("L'email est requis").email(),
  password: Yup.string().required('Le mot de passe est requis'),
});

const LoginPage = (props: Props) => {
  const { loginUser } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormsInputs>({
    resolver: yupResolver(validation),
  });
  const handleLogin = (form: LoginFormsInputs) => {
    loginUser(form.email, form.password);
  };
  return (
    <section>
      <div>
        <div>
          <Grid2
            container
            spacing={2}
            sx={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Typography variant="h3">Connectez-vous à votre compte</Typography>
            <form onSubmit={handleSubmit(handleLogin)}>
              <div>
                <label htmlFor="email">Adresse e-mail </label>
                <TextField
                  type="text"
                  id="email"
                  placeholder="Email"
                  {...register('email')}
                  sx={{
                    outline: '1px solid white',
                  }}
                />
                {errors.email ? <p>{errors.email.message}</p> : ''}
              </div>
              <div>
                <label htmlFor="password">Mot de passe</label>
                <TextField
                  type="password"
                  id="password"
                  placeholder="••••••••"
                  {...register('password')}
                />
                {errors.password ? <p>{errors.password.message}</p> : ''}
              </div>
              <Button
                type="submit"
                variant="contained"
                sx={{
                  backgroundColor: '#1ed760',
                  borderRadius: '9999px',

                  '&:hover': {
                    backgroundColor: '#1ed760',
                    transform: 'scale(1.05)',
                  },
                }}
              >
                Se connecter
              </Button>
              <Typography>
                Pas encore de compte ? <a href="#">S'inscrire</a>
              </Typography>
            </form>
          </Grid2>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
