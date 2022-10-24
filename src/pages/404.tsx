import Link from "next/link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import { NextPage } from "next";
import MuiLink from "@mui/material/Link";
import { ReportProblem } from "@mui/icons-material";

const FourZeroFour: NextPage = () => {
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
      <ReportProblem sx={{ fontSize: "5rem" }} />
      <Typography variant="h3" sx={{ fontSize: { xs: 25, md: 50 } }}>
        Página não encontrada!
      </Typography>
      <Link href={"/"} passHref>
        <MuiLink color="secondary" sx={{ fontSize: { xs: 18, md: 25 } }}>
          Voltar {"<<"}
        </MuiLink>
      </Link>
    </Box>
  );
};
export default FourZeroFour;
