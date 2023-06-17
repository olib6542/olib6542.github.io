const DARK = "dark";
const LIGHT = "light";

const themeSwitch = document.getElementById("themeToggle");
const computedTheme = getComputedStyle(
  document.documentElement
).getPropertyValue("content");

if (theme === LIGHT) {
  setTheme(LIGHT);
} else if (theme !== LIGHT && (theme === DARK || computedTheme === '"dark"')) {
  themeSwitch.checked = true;
  setTheme(DARK);
}

function toggleTheme() {
  const currentMode = document.documentElement.getAttribute("data-theme");
  if (currentMode === DARK) {
    setTheme(LIGHT);
  } else {
    setTheme(DARK);
  }
}

function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
}
