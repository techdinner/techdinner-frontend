export const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  mobileEL: "550px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "1920px",
  desktopL: "2560px",
};

const minw = "screen and (min-width:";

export const device = {
  mobileS: `${minw} ${size.mobileS})`,
  mobileM: `${minw} ${size.mobileM})`,
  mobileL: `${minw} ${size.mobileL})`,
  mobileEL: `${minw} ${size.mobileEL})`,
  tablet: `${minw} ${size.tablet})`,
  laptop: `${minw} ${size.laptop})`,
  laptopL: `${minw} ${size.laptopL})`,
  desktop: `${minw} ${size.desktop})`,
  desktopL: `${minw} ${size.desktopL})`,
};
