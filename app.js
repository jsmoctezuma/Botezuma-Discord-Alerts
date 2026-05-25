// Botezuma TikTok Miniapp
// Basic GitHub Pages demo for TikTok Developer review.
//
// IMPORTANT:
// Replace these values after your GitHub Pages URL is ready.

const TIKTOK_CONFIG = {
  CLIENT_KEY: "key",
  REDIRECT_URI: "https://jsmoctezuma.github.io/Botezuma-Discord-Alerts/callback.html",
  SCOPES: ["user.info.basic", "video.list"],
};

function buildTikTokAuthUrl() {
  const csrfState = crypto.randomUUID ? crypto.randomUUID() : String(Date.now());
  sessionStorage.setItem("tiktok_oauth_state", csrfState);

  const params = new URLSearchParams({
    client_key: TIKTOK_CONFIG.CLIENT_KEY,
    scope: TIKTOK_CONFIG.SCOPES.join(","),
    response_type: "code",
    redirect_uri: TIKTOK_CONFIG.REDIRECT_URI,
    state: csrfState,
  });

  return `https://www.tiktok.com/v2/auth/authorize/?${params.toString()}`;
}

document.getElementById("connectBtn")?.addEventListener("click", () => {
  if (
    TIKTOK_CONFIG.CLIENT_KEY.includes("PASTE_") ||
    TIKTOK_CONFIG.REDIRECT_URI.includes("YOUR_GITHUB_USERNAME")
  ) {
    alert("Before testing, edit app.js and set CLIENT_KEY and REDIRECT_URI.");
    return;
  }

  window.location.href = buildTikTokAuthUrl();
});
