// In the case we have already stored locally a dark mode setting reuse it
const theme = localStorage.getItem("theme");
if (theme === "dark") {
  document.documentElement.setAttribute("data-theme", "dark");
}
