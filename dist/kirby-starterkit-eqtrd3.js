const u = () => {
  a(), d(), r();
}, a = () => {
  const o = "ontouchstart" in window || navigator.msMaxTouchPoints > 0, t = window.navigator.userAgent, e = !!t.match(/iP(ad|hone)/i), n = !!t.match(/WebKit/i), s = e && n && !t.match(/CriOS/i), c = o ? "touch" : "no-touch", i = s ? "ios" : "no-ios";
  document.documentElement.classList.remove("touch", "no-touch", "ios", "no-ios"), document.documentElement.classList.add(c, i);
}, d = () => {
  document.querySelectorAll("a").forEach((t) => {
    t.target || (t.host !== window.location.host ? (t.target = "_blank", t.rel = "noopener") : t.target = "_self");
  });
}, r = () => {
  const o = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${o}px`), window.addEventListener("resize", () => {
    const t = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${t}px`);
  });
};
export {
  u as onLoading
};
