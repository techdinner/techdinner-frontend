import Link from "next/link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import { NextPage } from "next";
import MuiLink from "@mui/material/Link";
import { RiWifiOffLine } from "react-icons/ri";

const Offline: NextPage = () => {
  const { palette } = useTheme();

  return (
    <Box
      bgcolor={palette.background.default}
      sx={{
        height: "100vh",
        width: "100vw",
        flexDirection: "column",
        gap: 2,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Box sx={{ fontSize: "5rem" }}>
        <RiWifiOffLine />
      </Box>

      <Typography variant="h3" sx={{ fontSize: { xs: 25, md: 50 } }}>
        Você está offline!
      </Typography>
      <Typography variant="body2">
        Tente recarregar esta página mais tarde.
      </Typography>

      <Link href={"/"} passHref>
        <MuiLink color="secondary" sx={{ fontSize: { xs: 18, md: 25 } }}>
          Recarregar
        </MuiLink>
      </Link>
    </Box>
  );
};
export default Offline;
