/** @type {import("../src/spa/config.js").SPAConfig} */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
var scheduleConfig = {
  theme: {
    colors: {
      themeYellow: [
        "#fffae1",
        "#fff3cb",
        "#ffe69a",
        "#ffd864",
        "#ffcc38",
        "#ffc51c",
        "#ffbf00",
        "#e3aa00",
        "#ca9700",
        "#af8100",
      ],
    },
    primaryColor: "themeYellow",
    primaryShade: 6,
    fontFamily: "'Fira Sans', sans-serif",
  },
  colorScheme: "dark",
  basePath: "/ac-2026-demo",
  serviceWorker: true,
  cacheURLs: [
    "map.css",
    "lower.svg",
    "lobby.svg",
    "2f.svg",
    "3f.svg",
    "4f.svg",
    "5f.svg",
  ],
  router: "hash",
}
