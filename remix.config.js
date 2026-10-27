/** @type {import('@remix-run/dev').AppConfig} */
export default {
  ssr: false,
  ignoredRouteFiles: ["**/*.css"],
  appDirectory: "app",
  assetsBuildDirectory: "public/build",
  publicPath: "/build/"
};