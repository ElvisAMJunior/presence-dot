function getFaviconIdAndColorScheme(idFavicon) {
  const prefersColorScheme = window.matchMedia("(prefers-color-scheme: dark)");
  const faviconId = document.getElementById(idFavicon);

  return {
    faviconId,
    colorScheme: prefersColorScheme.matches ? "dark" : "light",
  };
}

function changeFavicon() {
  const { faviconId, colorScheme } = getFaviconIdAndColorScheme("favicon");

  if (!faviconId) return;

  console.log("Changing favicon based on color scheme:", colorScheme);
  if (colorScheme === "dark") {
    faviconId.href = "/src/assets/favicon-light/favicon.ico";
  }
  if (colorScheme === "light") {
    faviconId.href = "/src/assets/favicon-dark/favicon.ico";
  }
}

window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", changeFavicon);

changeFavicon();
