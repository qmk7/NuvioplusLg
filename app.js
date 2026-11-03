function showSection(sectionId) {
  document.querySelectorAll("main section").forEach(section => {
    section.hidden = section.id !== sectionId;
  });
}

function addPlaylist() {
  const input = document.getElementById("playlistUrl");
  const url = input.value.trim();

  if (!url) {
    alert("Please enter a playlist URL.");
    return;
  }

  if (!url.startsWith("http://") && !url.startsWith("https://")) {
    alert("Please enter a valid HTTP or HTTPS URL.");
    return;
  }

  const list = document.getElementById("playlistList");
  const item = document.createElement("li");

  item.textContent = url;
  list.appendChild(item);

  input.value = "";
  alert("Playlist URL added to this session.");
}

function openYouTube() {
  window.open("https://www.youtube.com/tv", "_blank");
}

document.addEventListener("DOMContentLoaded", () => {
  showSection("home");
});
