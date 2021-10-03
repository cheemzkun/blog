import { Theme } from "@emotion/react";

const colors: Theme["colors"] = {
  white: "#ffffff",
  "black.100": "#F2F5F8",
  "black.200": "#E4EAF1",
  "black.300": "#D7E0EA",
  "black.400": "#C9D5E3",
  "black.500": "#BCCBDC",
  "black.600": "#AEC0D5",
  "black.700": "#A1B6CE",
  "black.800": "#93ACC8",
  "black.900": "#86A1C1",
  "black.1000": "#7897BA",
  "black.1100": "#6B8CB3",
  "black.1200": "#5D82AC",
  "black.1300": "#5378A2",
  "black.1400": "#4D6E94",
  "black.1500": "#456487",
  "black.1600": "#3E5A79",
  "black.1700": "#37506C",
  "black.1800": "#31465E",
  "black.1900": "#2A3C51",
  "black.2000": "#233243",
  "black.2100": "#1C2836",
  "black.2200": "#151E28",
  "black.2300": "#0E141B",
  "black.2400": "#070A0D",
  "pink.100": "#FFEBF3",
  "pink.200": "#FFD6E7",
  "pink.300": "#FFC2DB",
  "pink.400": "#FFADCF",
  "pink.500": "#FF99C3",
  "pink.600": "#FF85B8",
  "pink.700": "#FF70AC",
  "pink.800": "#FF5CA0",
  "pink.900": "#FF4794",
  "pink.1000": "#FF3388",
  "pink.1100": "#FF1F7C",
  "pink.1200": "#FF006A",
  "pink.1300": "#F50066",
  "pink.1400": "#E0005D",
  "pink.1500": "#CC0055",
  "pink.1600": "#B8004C",
  "pink.1700": "#A30044",
  "pink.1800": "#8F003B",
  "pink.1900": "#7F0033",
  "pink.2000": "#66002F",
  "pink.2100": "#520022",
  "pink.2200": "#3D0019",
  "pink.2300": "#290011",
  "pink.2400": "#140008",
  "green.100": "#F7FDEC",
  "green.200": "#EFFCD9",
  "green.300": "#E7FAC7",
  "green.400": "#DFF8B4",
  "green.500": "#D7F7A1",
  "green.600": "#D0F58E",
  "green.700": "#C8F47C",
  "green.800": "#C0F269",
  "green.900": "#B8F056",
  "green.1000": "#AAED36",
  "green.1100": "#A8ED31",
  "green.1200": "#A0EB1E",
  "green.1300": "#96E114",
  "green.1400": "#89CE12",
  "green.1500": "#7DBC10",
  "green.1600": "#70A90F",
  "green.1700": "#64960D",
  "green.1800": "#57830B",
  "green.1900": "#4B710A",
  "green.2000": "#3E5E08",
  "green.2100": "#324B07",
  "green.2200": "#253805",
  "green.2300": "#192603",
  "green.2400": "#0C1302",
  "gray.100": "#F3F4F7",
  "gray.200": "#E7E9EE",
  "gray.300": "#DBDFE6",
  "gray.400": "#CFD4DE",
  "gray.500": "#C3C9D5",
  "gray.600": "#B7BECD",
  "gray.700": "#ABB3C4",
  "gray.800": "#9FA9BC",
  "gray.900": "#939EB4",
  "gray.1000": "#8793AB",
  "gray.1100": "#7B88A3",
  "gray.1200": "#6E7D9A",
  "gray.1300": "#647390",
  "gray.1400": "#5C6984",
  "gray.1500": "#546078",
  "gray.1600": "#4B566C",
  "gray.1700": "#434D60",
  "gray.1800": "#3B4354",
  "gray.1900": "#323A48",
  "gray.2000": "#2A303C",
  "gray.2100": "#212630",
  "gray.2200": "#191D24",
  "gray.2300": "#111318",
  "gray.2400": "#080A0C",
  "blue.100": "#EBFCFF",
  "blue.200": "#D6F8FF",
  "blue.300": "#C2F5FF",
  "blue.400": "#ADF1FF",
  "blue.500": "#99EEFF",
  "blue.600": "#85EBFF",
  "blue.700": "#70E7FF",
  "blue.800": "#5CE4FF",
  "blue.900": "#44DFFF",
  "blue.1000": "#33DDFF",
  "blue.1100": "#1FDAFF",
  "blue.1200": "#0AD6FF",
  "blue.1300": "#00CCF5",
  "blue.1400": "#00BBE0",
  "blue.1500": "#00AACC",
  "blue.1600": "#0099B8",
  "blue.1700": "#0088A3",
  "blue.1800": "#00778F",
  "blue.1900": "#00667A",
  "blue.2000": "#005566",
  "blue.2100": "#004452",
  "blue.2200": "#00333D",
  "blue.2300": "#002229",
  "blue.2400": "#001114",
  "yellow.100": "#FEF8EB",
  "yellow.200": "#FDF1D8",
  "yellow.300": "#FDEBC4",
  "yellow.400": "#FCE4B1",
  "yellow.500": "#FBDD9D",
  "yellow.600": "#FAD689",
  "yellow.700": "#F9D076",
  "yellow.800": "#F8C962",
  "yellow.900": "#F8C24F",
  "yellow.1000": "#F7BB3B",
  "yellow.1100": "#F5AF19",
  "yellow.1200": "#F5AE14",
  "yellow.1300": "#EBA40A",
  "yellow.1400": "#D79609",
  "yellow.1500": "#C48808",
  "yellow.1600": "#B07B07",
  "yellow.1700": "#9D6D07",
  "yellow.1800": "#895F06",
  "yellow.1900": "#765205",
  "yellow.2000": "#624404",
  "yellow.2100": "#4E3703",
  "yellow.2200": "#3B2902",
  "yellow.2300": "#271B02",
  "yellow.2400": "#140E01",
};

const dark: Theme = {
  bgColor: "black.2300",
  fgColor: "black.100",
  fonts: {
    fontFamily: "Jost",
    monoFontFamily: "Iosevka",
  },
  colors,
};

const light: Theme = {
  bgColor: "white",
  fgColor: "black.2400",
  fonts: {
    fontFamily: "Jost",
    monoFontFamily: "Iosevka",
  },
  colors,
};

const THEME = {
  dark,
  light,
};

export default THEME;
