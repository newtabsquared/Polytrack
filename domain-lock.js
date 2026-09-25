(function () {
  var ALLOWED_ORIGIN = "https://newtabsquared.github.io/";

  function isOnAllowedSite() {
    try {
      var topHref = window.top.location.href;
      return topHref.indexOf(ALLOWED_ORIGIN) === 0;
    } catch (e) {
      return false;
    }
  }
  if (isOnAllowedSite()) {
    return;
  }
  function showOverlay() {
    var overlay = document.createElement("div");
    overlay.id = "domain-lock-overlay";
    overlay.innerHTML =
      '<div class="domain-lock-card">' +
      '<div class="domain-lock-icon">🔒</div>' +
      "<h1>This title was stolen</h1>" +
      "<p>This title is only available at:</p>" +
      '<a class="domain-lock-link" href="' +
      ALLOWED_ORIGIN +
      '" target="_top">' +
      ALLOWED_ORIGIN +
      "</a>" +
      '<a class="domain-lock-button" href="' +
      ALLOWED_ORIGIN +
      '" target="_top">Take me there →</a>' +
      "</div>";
    var style = document.createElement("style");
    style.textContent =
      "#domain-lock-overlay{" +
      "position:fixed;inset:0;z-index:2147483647;" +
      "display:flex;align-items:center;justify-content:center;" +
      "background:radial-gradient(circle at 50% 0%, #1a1f2e 0%, #0a0c12 70%);" +
      "font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;" +
      "padding:24px;box-sizing:border-box;" +
      "animation:domainLockFadeIn 0.4s ease-out;" +
      "}" +
      "@keyframes domainLockFadeIn{from{opacity:0}to{opacity:1}}" +
      "@keyframes domainLockPop{from{opacity:0;transform:translateY(12px) scale(0.98)}to{opacity:1;transform:translateY(0) scale(1)}}" +
      ".domain-lock-card{" +
      "max-width:440px;width:100%;text-align:center;" +
      "background:linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02));" +
      "border:1px solid rgba(255,255,255,0.12);" +
      "border-radius:20px;padding:40px 32px;" +
      "box-shadow:0 20px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.08);" +
      "backdrop-filter:blur(10px);" +
      "animation:domainLockPop 0.5s cubic-bezier(0.16,1,0.3,1);" +
      "}" +
      ".domain-lock-icon{font-size:40px;margin-bottom:12px;}" +
      ".domain-lock-card h1{" +
      "color:#f5f6fa;font-size:22px;font-weight:700;margin:0 0 10px;letter-spacing:-0.01em;" +
      "}" +
      ".domain-lock-card p{" +
      "color:#9aa1b2;font-size:15px;margin:0 0 16px;line-height:1.5;" +
      "}" +
      ".domain-lock-link{" +
      "display:block;color:#8ab4ff;font-size:14px;font-weight:600;" +
      "text-decoration:none;word-break:break-all;margin-bottom:24px;" +
      "opacity:0.9;" +
      "}" +
      ".domain-lock-link:hover{text-decoration:underline;}" +
      ".domain-lock-button{" +
      "display:inline-block;background:#5b7cff;color:#fff;" +
      "font-size:15px;font-weight:600;text-decoration:none;" +
      "padding:12px 28px;border-radius:999px;" +
      "box-shadow:0 8px 20px rgba(91,124,255,0.35);" +
      "transition:transform 0.15s ease, box-shadow 0.15s ease, background 0.15s ease;" +
      "}" +
      ".domain-lock-button:hover{" +
      "background:#6d8aff;transform:translateY(-1px);" +
      "box-shadow:0 12px 26px rgba(91,124,255,0.45);" +
      "}" +
      ".domain-lock-button:active{transform:translateY(0);}";
    document.head.appendChild(style);
    function mount() {
      document.body.appendChild(overlay);
      document.body.style.overflow = "hidden";
    }
    if (document.body) {
      mount();
    } else {
      document.addEventListener("DOMContentLoaded", mount);
    }
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", showOverlay);
  } else {
    showOverlay();
  }
})();
