import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  Grid,
  Switch,
  TextField,
  Typography,
  useTheme as useMuiTheme,
  Link as MuiLink,
} from "@mui/material";
import { Google } from "@mui/icons-material";
import Image from "next/image";
import { useEffect, useState } from "react";
import LogoLight from "../assets/logo-extended-black.svg";
import LogoDark from "../assets/logo-extended-white.svg";
import Drawing from "../assets/drawing-login.svg";
import { useMui } from "../context/muiContext";
import { NextPage } from "next";
import Link from "next/link";

interface LoginProps {}

const Login: NextPage<LoginProps> = ({}) => {
  const theme = useMuiTheme();
  const { currentTheme, setCurrentTheme } = useMui();
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) return null;

  return (
    <Grid container sx={{ height: "100vh", width: 1 }}>
      <Grid
        item
        md={6}
        xs={12}
        gap={10}
        bgcolor={theme.palette.background.default}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          paddingX: { xs: 5, md: 10, lg: 20 },
        }}
      >
        <Box gap={0} sx={{ justifyContent: "center" }}>
          <Image
            src={theme.palette.mode === "dark" ? LogoDark : LogoLight}
            alt="Logo TechDinner"
          />
          <Typography
            variant="h6"
            sx={{
              fontSize: { xs: 13, sm: 18, md: 20 },
              textAlign: "center",
              letterSpacing: 6,
            }}
          >
            SISTEMA DE PEDIDOS
          </Typography>
        </Box>

        <FormControl sx={{ gap: 2, flex: 0, spacing: 0 }}>
          <TextField label="Usuário, email ou telefone" />
          <TextField type={"password"} label="Senha" />
          <Button href="/home" size="large" variant="contained">
            Entrar
          </Button>
          {/* <Button
            startIcon={<Google />}
            size="large"
            color="secondary"
            variant="contained"
          >
            Entrar com Google
          </Button> */}
          <FormControlLabel
            control={
              <Switch
                checked={currentTheme === "light" ? true : false}
                onChange={(e) =>
                  setCurrentTheme(e.target.checked ? "light" : "dark")
                }
              />
            }
            label={`Tema: ${currentTheme === "light" ? "Claro" : "Escuro"}`}
          />
        </FormControl>

        <Link href="/forgotpass" passHref>
          <MuiLink
            color="secondary"
            fontSize={"large"}
            sx={{ textAlign: "center" }}
          >
            Esqueceu a senha?
          </MuiLink>
        </Link>
      </Grid>
      <Grid
        item
        md={6}
        sx={{
          display: {
            xs: "none",
            md: "flex",
            justifyContent: "center",
            alignItems: "center",
          },
        }}
        bgcolor={theme.palette.primary.main}
      >
        <Image
          src={Drawing}
          alt="A drawing containing two people eating some food."
        />
      </Grid>
    </Grid>
  );
};
export default Login;
