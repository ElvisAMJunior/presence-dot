fetch("/package.json")
  .then((response) => response.json())
  .then((data) => {
    document.getElementById(
      "version"
    ).textContent = `System Version ${data.version}-Live`;
  });
