import type { NextPage } from "next";
import Head from "next/head";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import { ReactNode } from "react";
import { useSidebar } from "../../context/organisms/sidebarContext";

interface IPage {
  title: string;
  children: ReactNode;
  description?: string;
}

const Page: NextPage<IPage> = ({ title: Mytitle, children, description }) => {
  const { palette } = useTheme();
  const { width: sidebarWidth } = useSidebar();
  return (
    <>
      <Head>
        <title>Techdinner - {Mytitle}</title>
        <meta
          name="description"
          content={description ?? "Página do sistema Techdinner"}
        />
      </Head>

      <Box
        overflow="hidden"
        position="relative"
        sx={{
          height: 1,
          flex: 1,
          paddingX: 0.5,
          display: "flex",
          flexDirection: "column",
          width: {
            xs: 1,
            md: `calc(100vw - ${sidebarWidth}px)`,
          },
          ml: { xs: 0, md: `${sidebarWidth}px` },
        }}
      >
        {children}
      </Box>
    </>
  );
};

export default Page;
