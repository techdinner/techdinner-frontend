import type { FC } from "react";
import TechDinnerLogoDark from "../../../assets/logo-compressed-black.svg";
import TechDinnerLogoWhite from "../../../assets/logo-compressed-white.svg";
import TechDinnerCompleteLogoDark from "../../../assets/logo-normal-black.svg";
import TechDinnerCompleteLogoWhite from "../../../assets/logo-normal-white.svg";
import Image from "next/image";
import {
  Box,
  Avatar,
  useTheme,
  Container,
  Button,
  Typography,
  IconButton,
  Tooltip,
} from "@mui/material";
import { Person } from "@mui/icons-material";
// import { parseCookies } from "nookies";
import { useUser } from "../../../context/userContext";
interface TopProps {}

const Top: FC<TopProps> = ({}) => {
  const theme = useTheme();
  const { user } = useUser();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingY: 2,
        spacing: 50,
        gap: 5,
        width: 1,
        flex: 0,
      }}
    >
      <Container
        disableGutters
        sx={{ display: { xs: "none", md: "flex" }, justifyContent: "center" }}
      >
        <Image
          width={50}
          alt="TechDinner Logo"
          height={50}
          src={
            theme.palette.mode == "dark"
              ? TechDinnerLogoWhite
              : TechDinnerLogoDark
          }
        />
      </Container>

      <Container
        disableGutters
        sx={{ display: { xs: "flex", md: "none" }, justifyContent: "center" }}
      >
        <Image
          width={150}
          height={70}
          alt="TechDinner Logo"
          src={
            theme.palette.mode == "dark"
              ? TechDinnerCompleteLogoWhite
              : TechDinnerCompleteLogoDark
          }
        />
      </Container>

      <Tooltip title={user.name} placement="right">
        <IconButton
          sx={{
            p: 0,
            m: 0,
            width: 1,
            height: 40,
            gap: 1,
            display: "inline-flex",
            borderRadius: { xs: "2px", md: "50%" },
          }}
        >
          {user.imageURL ? (
            <Avatar sx={{ width: 30, height: 30 }} src={user.imageURL} />
          ) : (
            <Person />
          )}
          <Typography
            variant="subtitle2"
            color="primary"
            sx={{ fontSize: 20, display: { xs: "inline-flex", md: "none" } }}
          >
            {user.name}
          </Typography>
        </IconButton>
      </Tooltip>
    </Box>
  );
};
export default Top;
