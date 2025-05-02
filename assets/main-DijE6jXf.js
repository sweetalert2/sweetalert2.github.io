import { r as reactExports, j as jsxRuntimeExports, D as DocSearch, e as examples, P as Partners, S as Swal, R as ReactDOM, N as Nav } from './index-e3U1B4UL.js';
import { C as CodeExample } from './CodeExample-BynDxMtj.js';

const useHash = () => {
  const [hash, setHash] = reactExports.useState(() => window.location.hash);
  const hashChangeHandler = reactExports.useCallback(() => {
    setHash(window.location.hash);
  }, []);
  reactExports.useEffect(() => {
    window.addEventListener("hashchange", hashChangeHandler);
    return () => {
      window.removeEventListener("hashchange", hashChangeHandler);
    };
  }, []);
  const updateHash = reactExports.useCallback(
    (newHash) => {
      if (newHash !== hash) window.location.hash = newHash;
    },
    [hash]
  );
  return [hash, updateHash];
};

function Header() {
  const st4 = {
    fill: "#fa7471"
  };
  const st5 = {
    fill: "#a575b7"
  };
  const st6 = {
    strokeWidth: 8.2,
    stroke: "#8a3d9b",
    fill: "none",
    strokeMiterlimit: 10
  };
  const st7 = {
    fill: "#8a3d9b"
  };
  const [hash] = useHash();
  reactExports.useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [hash]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "iframe",
      {
        src: "https://ghbtns.com/github-btn.html?user=sweetalert2&repo=sweetalert2&type=star&count=true&size=large",
        frameBorder: "0",
        scrolling: "0",
        width: "170",
        height: "30",
        title: "GitHub stars",
        className: "mobile-hidden"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { id: "slava-ukraini", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://war.ukraine.ua/support-ukraine/", children: "SAVE LIVES, SUPPORT UKRAINE" }),
        " 🇺🇦"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { id: "logo-slider", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { id: "logo-track", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/logo-donut-track.svg" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { id: "logo-bouncer", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { id: "logo-spinner", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "15.4 -120.3 269.3 269.3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { id: "lower_circle", cx: "161.8", cy: "27", r: "100.2", fill: "#fdcc80" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { id: "inner_circle", cx: "149.4", cy: "14.2", r: "36.8", fill: "#fff" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "path",
            {
              id: "upper_frosting",
              d: "M108.7 105.5c-6.6.3-31.9-13.4-42.4-49.5-1.9-6.6-4.5-16.8-4.5-29.6 0-55 44.6-99.6 99.6-99.6 13.1 0 23.5 2.7 29.6 4.5 34.4 10.4 48 34.1 44.9 40.5s-10.6-3.4-22.9-2.5c-1.4.1-4.2 4-4.2 6.2 0 7.2 13.5 12.7 14.6 15.9 1.7 5 3.4 6.2 2.3 9.5-1.5 4.8-2.9 3.6-5.2 5.9-.9.9-5.6.7-16.6-1.7-5.9-1.3-18-11.2-18-11.4 0-.4-16.2-13.3-30.2-14.8-6.6-.7-28.1-2.8-39.2 19.2-.5 1.1-4.4 20-4.2 22.5.9 11.9 7 24.7 12.1 27.5 11.7 6.4 12.9 14.7 12.8 14.4-.1-.4 7.8 14.7 8.2 17.3.3 2.1-.8 7.4-3.7 8.7-3.5 1.5-7.7-1.7-8.4-2.1-.8-.5-10.7-16.3-19.5-13.1-.8.3-6 3.7-7.6 5-.3.2 4.8 15.4 5.6 18.5.5 1.8-2.3 8.7-3.1 8.7z",
              opacity: ".5",
              fill: "#fa7471"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { id: "sprinkles", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "path",
              {
                style: st4,
                d: "M135.1-69.3h-.2c-2.3.4-3.8 2.6-3.4 4.9.4 2.3 2.6 3.8 4.9 3.4.8-.1 1.5-.5 2.1-1 1-.9 1.6-2.3 1.4-3.7-.3-2.3-2.5-3.9-4.8-3.6z"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "path",
              {
                style: st4,
                d: "M181.7-65c-2.3-.1-4.3 1.7-4.5 4l-.5 8.4c-.1 2.3 1.7 4.3 4 4.5 1.2.1 2.2-.3 3.1-1.1.8-.7 1.3-1.7 1.4-2.9l.5-8.4c.1-2.4-1.7-4.4-4-4.5z"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "path",
              {
                style: st4,
                d: "M94.4 47.1c-2.3-.1-4.3 1.7-4.5 4l-.5 8.4c-.1 2.3 1.7 4.3 4 4.5 1.2.1 2.2-.3 3.1-1.1.8-.7 1.3-1.7 1.4-2.9l.5-8.4c.1-2.4-1.7-4.4-4-4.5z"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "path",
              {
                style: st5,
                d: "M65.4 1.7c-2.3-.1-4.3 1.7-4.5 4l-.5 8.4c-.1 2.3 1.7 4.3 4 4.5 1.2.1 2.2-.3 3.1-1.1s1.3-1.7 1.4-2.9l.5-8.4c.1-2.3-1.7-4.3-4-4.5z"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "path",
              {
                style: st5,
                d: "M157.2-61.8l-6.2 5.6c-1.7 1.6-1.9 4.2-.3 6 1.6 1.7 4.2 1.9 6 .3l6.2-5.6c1.7-1.6 1.9-4.2.3-6s-4.3-1.9-6-.3z"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "path",
              {
                style: st4,
                d: "M93.8-23.3l-8.3-.5c-2.3-.1-4.3 1.7-4.5 4s1.7 4.3 4 4.5l8.3.5c1.2.1 2.2-.3 3.1-1.1.8-.7 1.3-1.7 1.4-2.9.1-2.4-1.7-4.4-4-4.5z"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "path",
              {
                style: st5,
                d: "M189.1-35.1l-8.3-.5c-2.3-.1-4.3 1.7-4.5 4s1.7 4.3 4 4.5l8.3.5c1.2.1 2.2-.3 3.1-1.1s1.3-1.7 1.4-2.9c.1-2.4-1.6-4.4-4-4.5z"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "path",
              {
                style: st4,
                d: "M132.4-42.3l-7.1-4.4c-2-1.2-4.6-.6-5.8 1.4-1.2 2-.6 4.6 1.4 5.8l7.1 4.4c1 .6 2.1.8 3.2.5 1.1-.2 2-.9 2.6-1.9 1.1-2 .5-4.6-1.4-5.8z"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "path",
              {
                style: st5,
                d: "M88.2 5.7c-2.1 1.1-2.8 3.7-1.7 5.7l4 7.4c1.1 2.1 3.7 2.8 5.7 1.7 1.1-.6 1.8-1.6 2.1-2.7.3-1 .1-2.1-.4-3l-4-7.4c-1.1-2-3.7-2.8-5.7-1.7z"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { className: "hair", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "path",
              {
                style: st5,
                d: "M232.5-83.3c-2.2 3.1-4.6 6-7.2 8.7-1.8 1.9-1.7 4.9.1 6.7 1.9 1.8 4.9 1.7 6.7-.1 2.9-3 5.6-6.3 8-9.7 1.5-2.1 1-5.1-1.1-6.6s-5-1.1-6.5 1z"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "path",
              {
                style: st5,
                d: "M144.7-113.4c.2 3.7.2 7.5-.2 11.2-.2 2.6 1.7 4.9 4.3 5.1 2.6.2 4.9-1.7 5.1-4.3.4-4.2.4-8.4.2-12.6-.2-2.6-2.4-4.6-5-4.4-2.5.1-4.5 2.4-4.4 5z"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "path",
              {
                style: st5,
                d: "M59.3-75.7c3.1 2.2 6 4.5 8.7 7.1 1.9 1.8 4.9 1.7 6.7-.2s1.7-4.9-.2-6.7c-3-2.9-6.3-5.5-9.8-8-2.1-1.5-5.1-1-6.6 1.1s-1 5.2 1.2 6.7z"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "path",
              {
                style: st5,
                d: "M22.6 11.6c3.7-.2 7.5-.1 11.2.3 2.6.3 4.9-1.6 5.2-4.2s-1.6-4.9-4.2-5.2c-4.2-.4-8.4-.5-12.6-.3-2.6.1-4.6 2.3-4.5 4.9.1 2.7 2.3 4.7 4.9 4.5z"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "path",
              {
                style: st5,
                d: "M60.2 102.2c2.2-3 4.6-5.9 7.2-8.6 1.8-1.9 1.8-4.9-.1-6.7-1.9-1.8-4.9-1.8-6.7.1-2.9 3-5.6 6.3-8.1 9.7-1.5 2.1-1 5.1 1.1 6.6 2.1 1.4 5 1 6.6-1.1z"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { style: st6, cx: "149.1", cy: "15", r: "99.4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { id: "side_swirl", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "path",
              {
                style: st7,
                d: "M192.5 5.6c4.2-4.4 9.6.5 13.6 2.9 4 2.3 7.9 3.4 12.4 2.3 8.7-1.9 13.9-9.9 10.2-18.5-1.9-4.4-5.5-7.4-9.5-9.8-2.3-1.4-5.5-2.5-7-4.9-2.6-4.1 2.6-5.6 5.7-4.4 4.6 1.7 8.3 3.1 13.2 1.4 3.5-1.2 7.6-1.6 8.2-6.1.7-5.3-7.4-7.6-8.1-2.2-.1.2-.1.5-.2.7.8-.6 1.7-1.3 2.5-1.9-1.6.6-3.3 1-4.9 1.5-3.2 1-5.2-.1-8-1.3-4.2-1.6-8.7-1.6-12.6.9-8.9 5.9-4.6 16.6 2.8 21.3 3.9 2.5 10.3 4.7 10.5 10.2.2 6.1-7.6 5.7-11.2 3.6-7.7-4.5-16.2-9.3-23.7-1.6-3.6 3.9 2.3 9.8 6.1 5.9z"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "path",
              {
                style: st7,
                d: "M132.5 56.1c-.9 3.8-.5 7.5 1.3 11 1.8 3.6 7.8 8 7.6 12.1-.1 3.1-2.8 4.1-5.5 3.5s-4.2-2.3-5.7-4.5c-2.3-3.3-4.5-6.6-8.2-8.5-6.7-3.5-15.8-3-19.4 4.4-1.8 3.7-2.1 8.1-.9 12.1.7 2.3 2 4.3 3.3 6.3.7 1.2 1.6 2.2 1.3 3.7-.4 1.7-1.3 1.6-3.1 1.8-5.3.6-5.4 9 0 8.4 4-.5 8.2-1.3 10.5-4.9 2.3-3.7 1.4-8.1-.6-11.7-1.4-2.6-3.5-4.9-3.7-7.9-.3-4.2 2.2-6.4 6.2-5.5 5.8 1.3 7.2 7.2 11.1 11 5.7 5.5 17.4 5.9 21.4-1.7 2.1-3.9 2.2-8.7.1-12.6-2.5-4.6-9-8.8-7.6-14.6 1.2-5.4-6.9-7.7-8.1-2.4z"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "path",
              {
                style: st7,
                d: "M138.2-20c13.4-2.9 27.6-.7 37.5 9.4 7.8 8 11.8 19.6 10.2 30.7-3.9 27.4-37.5 39.4-58.4 22-12.2-10.2-14.2-25.9-10.4-40.6 1.4-5.6-7.2-8-8.7-2.4-4.2 16.3-2.4 33.7 9.6 46.4 9.3 9.9 23.6 15.2 37.1 13.8 17.5-1.8 32.6-13.9 38.1-30.7 4.6-13.9 1.4-29.7-7.4-41.3-11.9-15.7-31.3-20-49.9-16-5.7 1.2-3.3 9.9 2.3 8.7z"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "path",
              {
                style: st5,
                d: "M99.3-54.8l-8 2.4c-2.2.7-3.5 3-2.9 5.2.7 2.2 3 3.5 5.2 2.9l8-2.4c1.1-.3 2-1.1 2.5-2s.7-2.1.3-3.2c-.5-2.2-2.9-3.5-5.1-2.9z"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "path",
              {
                style: st4,
                d: "M81.8 30.7h-.2c-3.2.6-4.9 4.7-1.8 7.7 2.1 1.2 4.1.8 5.4-.4 1-.9 1.6-2.3 1.4-3.7-.4-2.3-2.5-3.9-4.8-3.6z"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "path",
              {
                style: st7,
                d: "M124.3-21.7c-3.2 1.7-6.1 4.3-8.3 7.1-1.4 1.8-1.1 4.9.8 6.3 2 1.5 4.7 1.1 6.3-.8.4-.5.8-.9 1.2-1.4l.1-.1c.2-.3.6-.5.8-.8.6-.4 1-.9 1.6-1.3.3-.3.6-.4.9-.6.8-.5-.6.3.1-.1 2-1.1 3.5-3.6 2.3-6-.9-2-3.5-3.5-5.8-2.3z"
              }
            )
          ] })
        ] }) }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { id: "logo-text", src: "./images/SweetAlert2.png", alt: "SweetAlert2" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "stats mobile-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CurrentVersion, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(LatestUpdate, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DownloadsLastMonth, {})
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DocSearch, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "A beautiful, responsive, customizable, accessible (WAI-ARIA) replacement for JavaScript's popup boxes" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Zero dependencies" })
    ] })
  ] });
}
function CurrentVersion() {
  const [currentVersion, setCurrentVersion] = reactExports.useState("");
  reactExports.useEffect(() => {
    fetch("https://api.github.com/repos/sweetalert2/sweetalert2/tags").then((response) => response.json()).then((response) => {
      if (!response[0] || !response[0].name) {
        return;
      }
      setCurrentVersion(response[0].name);
    }).catch(() => {
    });
  }, []);
  if (currentVersion) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      "Current version:",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://github.com/sweetalert2/sweetalert2/releases", "aria-label": `Current version ${currentVersion}`, children: currentVersion })
    ] });
  }
}
function LatestUpdate() {
  const [latestUpdate, setLatestUpdate] = reactExports.useState("");
  reactExports.useEffect(() => {
    fetch("https://api.github.com/repos/sweetalert2/sweetalert2/commits").then((response) => response.json()).then((response) => {
      if (!response[0] || !response[0].commit) {
        return;
      }
      let recentActivity = response[0].commit.author.date;
      const recentActivityDate = new Date(recentActivity);
      const diffDays = Math.floor((Date.now() - recentActivityDate.getTime()) / (1e3 * 60 * 60 * 24));
      switch (diffDays) {
        case 0:
          recentActivity = "today";
          break;
        case 1:
          recentActivity = "yesterday";
          break;
        default:
          recentActivity = `${diffDays} days ago`;
          break;
      }
      setLatestUpdate(recentActivity);
    }).catch(() => {
    });
  }, []);
  if (latestUpdate) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      "Latest update:",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://github.com/sweetalert2/sweetalert2/commits/main", "aria-label": `Latest update ${latestUpdate}`, children: latestUpdate })
    ] });
  }
}
function DownloadsLastMonth() {
  const [downloadsLastMonth, setDownloadsLastMonth] = reactExports.useState("");
  reactExports.useEffect(() => {
    fetch("https://api.npmjs.org/downloads/point/last-month/sweetalert2").then((response) => response.json()).then((response) => {
      setDownloadsLastMonth(response.downloads.toLocaleString());
    }).catch(() => {
    });
  }, []);
  if (downloadsLastMonth) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      "Downloads last month:",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "https://npm-stat.com/charts.html?package=sweetalert2",
          "aria-label": `Downloads last month ${downloadsLastMonth}`,
          children: downloadsLastMonth
        }
      )
    ] });
  }
}

function Showcase() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "showcase normal", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "normal-alert", children: "Normal alert" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: examples.normalAlert.fn, children: "Show normal alert" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CodeExample, { code: examples.normalAlert.fnString }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "vs-icon" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "showcase sweet", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/SweetAlert2.png", height: "30", alt: "SweetAlert2" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          className: "show-example-btn",
          "aria-label": "Show SweetAlert2 success message",
          onClick: examples.sweetAlert.fn,
          children: "Show success message"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CodeExample, { code: examples.sweetAlert.fnString })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Partners, {})
  ] });
}

function Examples() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { id: "examples", children: "Examples" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "examples", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { id: "message-example", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ui", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "A basic message" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              className: "show-example-btn",
              "aria-label": "Try me! Example: A basic message",
              onClick: examples.basicMessage.fn,
              children: "Try me!"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CodeExample, { code: examples.basicMessage.fnString })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { id: "title-text-example", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ui", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "A title with a text under" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              className: "show-example-btn",
              "aria-label": "Try me! Example: A title with a text under",
              onClick: examples.titleText.fn,
              children: "Try me!"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CodeExample, { code: examples.titleText.fnString })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { id: "serror-example", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ui", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "A modal with a title, an error icon, a text, and a footer" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              className: "show-example-btn",
              "aria-label": "Try me! Example: A modal with a title, an error icon, a text, and a footer",
              onClick: examples.errorType.fn,
              children: "Try me!"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CodeExample, { code: examples.errorType.fnString })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { id: "long-text", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ui", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "A modal window with a long content inside:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              className: "show-example-btn",
              "aria-label": "Try me! Example: A modal window with a long content inside",
              onClick: examples.longText.fn,
              children: "Try me!"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CodeExample, { code: examples.longText.fnString })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { id: "draggable-modal", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ui", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "A draggable modal window:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              className: "show-example-btn",
              "aria-label": "Try me! Example: A draggable modal window",
              onClick: examples.draggableModal.fn,
              children: "Try me!"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CodeExample, { code: examples.draggableModal.fnString })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { id: "custom-html", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ui", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Custom HTML description and buttons with ARIA labels" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              className: "show-example-btn",
              "aria-label": "Try me! Example: Custom HTML description and buttons",
              onClick: examples.customHtml.fn,
              children: "Try me!"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          CodeExample,
          {
            code: examples.customHtml.fnString,
            codepenCssExternal: "https://cdn.jsdelivr.net/npm/font-awesome@4.7.0/css/font-awesome.min.css"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { id: "three-buttons", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ui", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "A dialog with three buttons" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              className: "show-example-btn",
              "aria-label": "Try me! Example: A dialog with three buttons",
              onClick: examples.threeButtons.fn,
              children: "Try me!"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CodeExample, { code: examples.threeButtons.fnString })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { id: "custom-position", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ui", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "A custom positioned dialog" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              className: "show-example-btn",
              "aria-label": "Try me! Example: A custom positioned dialog",
              onClick: examples.customPosition.fn,
              children: "Try me!"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CodeExample, { code: examples.customPosition.fnString })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { id: "custom-animation", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ui", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
            "Custom animation with",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: "https://animate.style/",
                target: "_blank",
                rel: "noreferrer noopener",
                tabIndex: -1,
                className: "nowrap",
                children: [
                  "Animate.css ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-external-link" })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              className: "show-example-btn",
              "aria-label": "Try me! Example: jQuery HTML with custom animation",
              onClick: examples.customAnimation.fn,
              children: "Try me!"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          CodeExample,
          {
            code: examples.customAnimation.fnString,
            codepenCssExternal: "https://cdn.jsdelivr.net/npm/animate.css@4/animate.min.css"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { id: "confirm-dialog", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ui", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: 'A confirm dialog, with a function attached to the "Confirm"-button' }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              className: "show-example-btn",
              "aria-label": "Try me! Example: A confirm dialog, with a function attached to the 'Confirm'-button",
              onClick: examples.warningConfirm.fn,
              children: "Try me!"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CodeExample, { code: examples.warningConfirm.fnString })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { id: "dismiss-handle", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ui", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: '... and by passing a parameter, you can execute something else for "Cancel"' }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              className: "show-example-btn",
              "aria-label": "Try me! Example: passing a parameter, you can execute something else for 'Cancel'",
              onClick: examples.handleDismiss.fn,
              children: "Try me!"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          CodeExample,
          {
            code: examples.handleDismiss.fnString,
            codepenCssExternal: "https://sweetalert2.github.io/bootstrap4-buttons.css"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { id: "custom-image-example", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ui", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "A message with a custom image" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              className: "show-example-btn",
              "aria-label": "Try me! Example: A message with a custom image",
              onClick: examples.customImage.fn,
              children: "Try me!"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CodeExample, { code: examples.customImage.fnString })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { id: "custom-width-padding-background", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ui", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "A message with custom width, padding, background and animated Nyan Cat" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              className: "show-example-btn",
              "aria-label": "Try me! Example: A message with custom width, padding and background",
              onClick: examples.customWidth.fn,
              children: "Try me!"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CodeExample, { code: examples.customWidth.fnString })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { id: "timer-example", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ui", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "A message with auto close timer" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              className: "show-example-btn",
              "aria-label": "Try me! Example: A message with auto close timer",
              onClick: examples.timer.fn,
              children: "Try me!"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CodeExample, { code: examples.timer.fnString })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { id: "rtl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ui", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Right-to-left support for Arabic, Persian, Hebrew, and other RTL languages" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              className: "show-example-btn",
              "aria-label": "Try me! Example: A message in Arabic",
              onClick: examples.rtl.fn,
              children: "Try me!"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CodeExample, { code: examples.rtl.fnString, codepenHtml: `<body dir="rtl"></body>` })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { id: "ajax-request", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ui", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "AJAX request example" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              className: "show-example-btn",
              "aria-label": "Try me! Example: AJAX request",
              onClick: examples.ajaxRequest.fn,
              children: "Try me!"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CodeExample, { code: examples.ajaxRequest.fnString })
      ] })
    ] })
  ] });
}

function Installation() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "center-container download-section", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { id: "download", children: "Download & install" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("code", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "unselectable", children: "$ " }),
        "npm install sweetalert2"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
        "Or grab from",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://www.jsdelivr.com/package/npm/sweetalert2", target: "_blank", rel: "noopener", className: "nowrap", children: [
          "jsDelivr CDN ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-external-link" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        CodeExample,
        {
          code: `<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"><\/script>`,
          language: "xml",
          withoutCodepen: true
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(JsdelivrInfo, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Partners, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "center-container", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { id: "usage", children: "Usage" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "1. Import the plugin:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          CodeExample,
          {
            code: `import Swal from 'sweetalert2'

// or via CommonJS
const Swal = require('sweetalert2')`,
            withoutCodepen: true
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mobile-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "It's also possible to import JS and CSS separately, e.g. if you need to customize styles:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            CodeExample,
            {
              code: `import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'`,
              withoutCodepen: true
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "2. Call the sweetAlert2-function after the page has loaded" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          CodeExample,
          {
            code: `Swal.fire({
  title: 'Error!',
  text: 'Do you want to continue',
  icon: 'error',
  confirmButtonText: 'Cool'
})`,
            withoutCodepen: true
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "As an old-school alternative, you can initialize the plugin by referencing the necessary files:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CodeExample, { code: `<script src="sweetalert2.all.min.js"><\/script>`, withoutCodepen: true }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mobile-hidden", children: "Or with the stylesheet separately if desired:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          CodeExample,
          {
            code: `<script src="sweetalert2.min.js"><\/script>
<link rel="stylesheet" href="sweetalert2.min.css">`,
            language: "xml",
            withoutCodepen: true
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Partners, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "center-container", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { id: "frameworks-integrations", children: "Integrations with major frameworks" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "frameworks-integrations", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: "https://github.com/sweetalert2/sweetalert2-react-content",
            target: "_blank",
            rel: "noopener",
            "aria-label": "React integration",
            children: [
              "React",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/react.svg", width: "125", alt: "" })
            ]
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: "https://github.com/avil13/vue-sweetalert2",
            target: "_blank",
            rel: "noopener",
            "aria-label": "Vue integration",
            children: [
              "Vue",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/vue.png", width: "125", alt: "" })
            ]
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: "https://github.com/sweetalert2/ngx-sweetalert2",
            target: "_blank",
            rel: "noopener",
            "aria-label": "Angular integration",
            children: [
              "Angular",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/angular.svg", width: "125", alt: "" })
            ]
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: "https://github.com/sweetalert2/sweetalert2-laravel",
            target: "_blank",
            rel: "noopener",
            "aria-label": "Laravel integration",
            children: [
              "Laravel",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/laravel.svg", width: "125", alt: "" })
            ]
          }
        ) })
      ] })
    ] })
  ] });
}
function JsdelivrInfo() {
  const [jsdelivrRank, setJsdelivrRank] = reactExports.useState("");
  const [jsdelivrTotal, setJsdelivrTotal] = reactExports.useState("");
  function ordinalSuffix(i) {
    const n = parseInt(i);
    const j = n % 10;
    const k = n % 100;
    if (j === 1 && k !== 11) {
      return `${i}st`;
    }
    if (j === 2 && k !== 12) {
      return `${i}nd`;
    }
    if (j === 3 && k !== 13) {
      return `${i}rd`;
    }
    return `${i}th`;
  }
  reactExports.useEffect(() => {
    fetch("https://data.jsdelivr.com/v1/package/npm/sweetalert2/stats/month").then((response) => response.json()).then((response) => {
      if (response.rank && response.total) {
        setJsdelivrRank(response.rank);
        setJsdelivrTotal(response.total);
      }
    }).catch(() => {
    });
  }, []);
  if (jsdelivrRank && jsdelivrTotal) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "jsdelivr-info mobile-hidden", children: [
      "sweetalert2 is the ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: ordinalSuffix(jsdelivrRank) }),
      " most popular package on jsDelivr, with",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: parseInt(jsdelivrTotal).toLocaleString() }),
      " CDN hits in the last month"
    ] });
  }
}

function ConfigurationParams() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mobile-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { id: "configuration", children: "Configuration Params" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "center", children: "Here are the keys that you can use if you pass an object into sweetAlert2:" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { id: "api", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "titles", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("th", { children: [
            "Argument",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "(",
            /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: "Default value" }),
            ")"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Description" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "title", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover-anchor", href: "#title", children: "#" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "title" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: "''" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "The title of the popup, as HTML." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "titleText", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover-anchor", href: "#titleText", children: "#" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "titleText" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: "''" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "The title of the popup, as text. Useful to avoid HTML injection." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "html", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover-anchor", href: "#html", children: "#" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "html" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: "''" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              "A HTML description for the popup.",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              "If ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "text" }),
              " and ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "html" }),
              " parameters are provided in the same time,",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "html" }),
              " will be used.",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              "[Security] SweetAlert2 does NOT sanitize this parameter. It is the developer's responsibility to escape any user input when using the ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "html" }),
              " option, so XSS attacks would be prevented."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "text", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover-anchor", href: "#text", children: "#" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "text" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: "''" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              "A description for the popup.",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              "If ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "text" }),
              " and ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "html" }),
              " parameters are provided in the same time,",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "html" }),
              " will be used."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "icon", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover-anchor", href: "#icon", children: "#" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "icon" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: "undefined" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              "The icon of the popup. SweetAlert2 comes with 5 built-in icon which will show a corresponding icon animation: ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "warning" }),
              ", ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "error" }),
              ", ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "success" }),
              ",",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "info" }),
              ", and ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "question" }),
              '. It can either be put in the array under the key "icon" or passed as the third parameter of the function.'
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "iconColor", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover-anchor", href: "#iconColor", children: "#" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "iconColor" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: "undefined" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "Use this to change the color of the icon." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "iconHtml", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover-anchor", href: "#iconHtml", children: "#" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "iconHtml" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: "undefined" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "The custom HTML content for an icon." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "animation", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover-anchor", href: "#animation", children: "#" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "animation" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: "true" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              "If set to ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "false" }),
              ", the popup animation will be disabled"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "theme", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover-anchor", href: "#theme", children: "#" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "theme" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: "'light'" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              "Theme of the popup. ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "'light'" }),
              ", ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "'dark'" }),
              ", ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "'auto'" }),
              ", and",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "'borderless'" }),
              " for now. This is a new feature, more themes are coming. ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              "Feel free to request new themes (or create your own and PR it)."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "showClass", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover-anchor", href: "#showClass", children: "#" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "showClass" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                CodeExample,
                {
                  code: `{
  popup: 'swal2-show',
  backdrop: 'swal2-backdrop-show',
  icon: 'swal2-icon-show'
}`,
                  withoutCodepen: true
                }
              ) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "CSS classes for animations when showing a popup (fade in)" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "hideClass", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover-anchor", href: "#hideClass", children: "#" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "hideClass" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                CodeExample,
                {
                  code: `{
  popup: 'swal2-hide',
  backdrop: 'swal2-backdrop-hide',
  icon: 'swal2-icon-hide'
}`,
                  withoutCodepen: true
                }
              ) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "CSS classes for animations when hiding a popup (fade out)" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "footer", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover-anchor", href: "#footer", children: "#" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "footer" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: "''" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "The footer of the popup. Can be either plain text or HTML." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "backdrop", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover-anchor", href: "#backdrop", children: "#" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "backdrop" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: "true" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              "Whether or not SweetAlert2 should show a full screen click-to-dismiss backdrop. Can be either a",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "boolean" }),
              " or a ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "string" }),
              " which will be assigned to the CSS",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "background" }),
              " property."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "toast", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover-anchor", href: "#toast", children: "#" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "toast" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: "false" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              "Whether or not an alert should be treated as a toast notification. This option is normally coupled with the",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "position" }),
              " parameter and a timer. Toasts are NEVER autofocused."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "target", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover-anchor", href: "#target", children: "#" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "target" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: "'body'" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "The container element for adding popup into." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "input", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover-anchor", href: "#input", children: "#" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "input" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: "undefined" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              "Input field type, can be ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "text" }),
              ", ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "email" }),
              ", ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "password" }),
              ",",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "number" }),
              ", ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "tel" }),
              ", ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "range" }),
              ", ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "textarea" }),
              ",",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "search" }),
              ", ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "url" }),
              ", ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "select" }),
              ", ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "radio" }),
              ",",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "checkbox" }),
              ", ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "file" }),
              ", ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "date" }),
              ", ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "datetime-local" }),
              ", ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "time" }),
              ", ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "week" }),
              ", ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "month" }),
              "."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "width", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover-anchor", href: "#width", children: "#" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "width" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: "'32em'" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              "Popup window width, including paddings (",
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: "box-sizing: border-box" }),
              "). Can be in any CSS unit (",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "px" }),
              ", ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "em/rem" }),
              ", ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "%" }),
              ")."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "padding", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover-anchor", href: "#padding", children: "#" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "padding" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: "'0 0 1.25em'" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              "Popup window padding. Can be in any CSS unit (",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "px" }),
              ", ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "em/rem" }),
              ",",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "%" }),
              ")."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "color", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover-anchor", href: "#color", children: "#" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "color" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: "undefined" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              "Color for title, content and footer (CSS ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "color" }),
              " property). The default color is",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "'#545454'" }),
              "."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "background", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover-anchor", href: "#background", children: "#" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "background" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: "undefined" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              "Popup window background (CSS background property). The default background is ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "'#fff'" }),
              "."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "position", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover-anchor", href: "#position", children: "#" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "position" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: "'center'" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              "Popup window position, can be ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "'top'" }),
              ", ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "'top-start'" }),
              ",",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "'top-end'" }),
              ", ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "'center'" }),
              ", ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "'center-start'" }),
              ",",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "'center-end'" }),
              ", ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "'bottom'" }),
              ", ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "'bottom-start'" }),
              ", or",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "'bottom-end'" }),
              "."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "grow", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover-anchor", href: "#grow", children: "#" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "grow" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: "false" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              "Paired with window position, sets the direction the popup should grow in, can be set to",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "'row'" }),
              ", ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "'column'" }),
              ", ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "'fullscreen'" }),
              ", or",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "false" }),
              "."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "customClass", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover-anchor", href: "#customClass", children: "#" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "customClass" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: "undefined" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              "A custom CSS class for the popup:",
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                CodeExample,
                {
                  code: `customClass: {
  container: '...',
  popup: '...',
  header: '...',
  title: '...',
  closeButton: '...',
  icon: '...',
  image: '...',
  htmlContainer: '...',
  input: '...',
  inputLabel: '...',
  validationMessage: '...',
  actions: '...',
  confirmButton: '...',
  denyButton: '...',
  cancelButton: '...',
  loader: '...',
  footer: '....',
  timerProgressBar: '....',
}`,
                  withoutCodepen: true
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "timer", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover-anchor", href: "#timer", children: "#" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "timer" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: "undefined" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              "Auto close timer of the popup. Set in ms (milliseconds). See also",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#getTimerLeft", children: "Swal.getTimerLeft()" }),
              ", ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#stopTimer", children: "Swal.stopTimer()" }),
              ",",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#resumeTimer", children: "Swal.resumeTimer()" }),
              ", ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#toggleTimer", children: "Swal.toggleTimer()" }),
              ",",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#isTimerRunning", children: "Swal.isTimerRunning()" }),
              " and",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#increaseTimer", children: "Swal.increaseTimer()" }),
              "."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "timerProgressBar", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover-anchor", href: "#timerProgressBar", children: "#" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "timerProgressBar" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: "false" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "If set to true, the timer will have a progress bar at the bottom of a popup. Mostly, this feature is useful with toasts." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "heightAuto", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover-anchor", href: "#heightAuto", children: "#" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "heightAuto" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: "true" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              "By default, SweetAlert2 sets html's and body's CSS ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "height" }),
              " to",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "auto !important" }),
              ". If this behavior isn't compatible with your project's layout, set",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "heightAuto" }),
              " to ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "false" }),
              "."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "allowOutsideClick", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover-anchor", href: "#allowOutsideClick", children: "#" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "allowOutsideClick" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: "true" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              "If set to ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "false" }),
              ", the user can't dismiss the popup by clicking outside it.",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              "You can also pass a custom function returning a boolean value, e.g. if you want to disable outside clicks for the loading state of a popup."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "allowEscapeKey", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover-anchor", href: "#allowEscapeKey", children: "#" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "allowEscapeKey" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: "true" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              "If set to ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "false" }),
              ", the user can't dismiss the popup by pressing the ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("kbd", { children: "Esc" }),
              " key. You can also pass a custom function returning a boolean value, e.g. if you want to disable the",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("kbd", { children: "Esc" }),
              " key for the loading state of a popup."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "stopKeydownPropagation", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover-anchor", href: "#stopKeydownPropagation", children: "#" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "stopKeydownPropagation" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: "true" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              "If set to ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "false" }),
              ", SweetAlert2 will allow ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "keydown" }),
              " events propagation to the document."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "keydownListenerCapture", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover-anchor", href: "#keydownListenerCapture", children: "#" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "keydownListenerCapture" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: "false" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              "Useful for those who are using SweetAlert2 along with Bootstrap modals. By default",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "keydownListenerCapture" }),
              " is ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "false" }),
              " which means when a user hits",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("kbd", { children: "Esc" }),
              ", both SweetAlert2 and Bootstrap modals will be closed. Set",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "keydownListenerCapture" }),
              " to ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "true" }),
              " to fix that behavior."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "showConfirmButton", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover-anchor", href: "#showConfirmButton", children: "#" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "showConfirmButton" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: "true" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              "If set to ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "false" }),
              ', a "Confirm"-button will not be shown.'
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "showDenyButton", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover-anchor", href: "#showDenyButton", children: "#" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "showDenyButton" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: "false" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              "If set to ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "true" }),
              ', a "Deny"-button will be shown. It can be useful when you want a popup with 3 buttons.'
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "showCancelButton", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover-anchor", href: "#showCancelButton", children: "#" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "showCancelButton" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: "false" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              "If set to ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "true" }),
              ', a "Cancel"-button will be shown, which the user can click on to dismiss the modal.'
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "confirmButtonText", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover-anchor", href: "#confirmButtonText", children: "#" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "confirmButtonText" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: "'OK'" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: 'Use this to change the text on the "Confirm"-button.' })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "denyButtonText", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover-anchor", href: "#denyButtonText", children: "#" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "denyButtonText" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: "'No'" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: 'Use this to change the text on the "Deny"-button.' })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "cancelButtonText", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover-anchor", href: "#cancelButtonText", children: "#" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "cancelButtonText" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: "'Cancel'" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: 'Use this to change the text on the "Cancel"-button.' })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "confirmButtonColor", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover-anchor", href: "#confirmButtonColor", children: "#" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "confirmButtonColor" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: "undefined" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              'Use this to change the background color of the "Confirm"-button. The default color is',
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "#3085d6" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "denyButtonColor", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover-anchor", href: "#denyButtonColor", children: "#" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "denyButtonColor" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: "undefined" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              'Use this to change the background color of the "Deny"-button. The default color is',
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "#dd6b55" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "cancelButtonColor", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover-anchor", href: "#cancelButtonColor", children: "#" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "cancelButtonColor" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: "undefined" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              'Use this to change the background color of the "Cancel"-button. The default color is',
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "#aaa" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "confirmButtonAriaLabel", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover-anchor", href: "#confirmButtonAriaLabel", children: "#" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "confirmButtonAriaLabel" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: "''" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              "Use this to change the ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "aria-label" }),
              ' for the "Confirm"-button.'
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "denyButtonAriaLabel", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover-anchor", href: "#denyButtonAriaLabel", children: "#" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "denyButtonAriaLabel" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: "''" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              "Use this to change the ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "aria-label" }),
              ' for the "Deny"-button.'
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "cancelButtonAriaLabel", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover-anchor", href: "#cancelButtonAriaLabel", children: "#" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "cancelButtonAriaLabel" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: "''" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              "Use this to change the ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "aria-label" }),
              ' for the "Cancel"-button.'
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "buttonsStyling", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover-anchor", href: "#buttonsStyling", children: "#" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "buttonsStyling" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: "true" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              "Apply default styling to buttons. If you want to use your own classes (e.g. Bootstrap classes) set this parameter to ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "false" }),
              "."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "reverseButtons", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover-anchor", href: "#reverseButtons", children: "#" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "reverseButtons" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: "false" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              "Set to ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "true" }),
              ' if you want to invert default buttons positions ("Confirm"-button on the right side).'
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "focusConfirm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover-anchor", href: "#focusConfirm", children: "#" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "focusConfirm" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: "true" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              "Set to ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "false" }),
              ' if you want to focus the first element in tab order instead of "Confirm"-button by default.'
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "returnFocus", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover-anchor", href: "#returnFocus", children: "#" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "returnFocus" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: "true" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              "Set to ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "false" }),
              " if you don't want to return the focus to the element that invoked the modal after the modal is closed."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "focusDeny", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover-anchor", href: "#focusDeny", children: "#" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "focusDeny" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: "false" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              "Set to ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "true" }),
              ' if you want to focus the "Deny"-button by default.'
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "focusCancel", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover-anchor", href: "#focusCancel", children: "#" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "focusCancel" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: "false" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              "Set to ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "true" }),
              ' if you want to focus the "Cancel"-button by default.'
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "showCloseButton", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover-anchor", href: "#showCloseButton", children: "#" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "showCloseButton" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: "false" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              "Set to ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "true" }),
              " to show close button in top right corner of the popup."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "closeButtonHtml", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover-anchor", href: "#closeButtonHtml", children: "#" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "closeButtonHtml" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: "'&times;'" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "Use this to change the content of the close button." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "closeButtonAriaLabel", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover-anchor", href: "#closeButtonAriaLabel", children: "#" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "closeButtonAriaLabel" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: "'Close this dialog'" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              "Use this to change the ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "aria-label" }),
              " for the close button."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "loaderHtml", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover-anchor", href: "#loaderHtml", children: "#" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "loaderHtml" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: "''" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "Use this to change the HTML content of the loader." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "showLoaderOnConfirm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover-anchor", href: "#showLoaderOnConfirm", children: "#" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "showLoaderOnConfirm" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: "false" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              "Set to ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "true" }),
              " to disable buttons and show the loader instead of the Confirm button. Use it in combination with the",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#preConfirm", children: /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "preConfirm" }) }),
              " ",
              "parameter."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "showLoaderOnDeny", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover-anchor", href: "#showLoaderOnDeny", children: "#" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "showLoaderOnDeny" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: "false" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              "Set to ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "true" }),
              " to disable buttons and show the loader instead of the Deny button. Use it in combination with the",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#preDeny", children: /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "preDeny" }) }),
              " ",
              "parameter."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "scrollbarPadding", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover-anchor", href: "#scrollbarPadding", children: "#" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "scrollbarPadding" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: "true" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              "Set to ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "false" }),
              " to disable body padding adjustment when the page scrollbar gets hidden while the popup is shown"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "preConfirm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover-anchor", href: "#preConfirm", children: "#" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "preConfirm" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: "undefined" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              "Function to execute before confirming, may be async (Promise-returning) or sync. ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              "Returned (or resolved) value can be:",
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "false" }),
                  " to prevent a popup from closing"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  "anything else to pass that value as the ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "result.value" }),
                  " of",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Swal.fire()" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "undefined" }),
                  " to keep the default ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "result.value" })
                ] })
              ] }),
              "See ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#ajax-request", children: "usage example" }),
              "."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "preDeny", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover-anchor", href: "#preDeny", children: "#" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "preDeny" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: "undefined" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              "Function to execute before denying, may be async (Promise-returning) or sync. ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              "Returned (or resolved) value can be:",
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "false" }),
                  " to prevent a popup from closing"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  "anything else to pass that value as the ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "result.value" }),
                  " of",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Swal.fire()" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "undefined" }),
                  " to keep the default ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "result.value" })
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "returnInputValueOnDeny", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover-anchor", href: "#returnInputValueOnDeny", children: "#" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "returnInputValueOnDeny" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: "false" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              "If you want to return the input value as ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "result.value" }),
              " when denying the popup, set to",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "true" }),
              ". Otherwise, the denying will set ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "result.value" }),
              " to",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "false" }),
              "."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "imageUrl", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover-anchor", href: "#imageUrl", children: "#" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "imageUrl" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: "undefined" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "Add a customized icon for the popup. Should contain a string with the path or URL to the image." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "imageWidth", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover-anchor", href: "#imageWidth", children: "#" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "imageWidth" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: "undefined" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              "If imageUrl is set, you can specify imageWidth to describes image width. Can be in any CSS unit (",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "px" }),
              ", ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "em/rem" }),
              ", ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "%" }),
              ")."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "imageHeight", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover-anchor", href: "#imageHeight", children: "#" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "imageHeight" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: "undefined" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              "Custom image height. Can be in any CSS unit (",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "px" }),
              ", ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "em/rem" }),
              ",",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "%" }),
              ")."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "imageAlt", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover-anchor", href: "#imageAlt", children: "#" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "imageAlt" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: "''" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "An alternative text for the custom image icon." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "inputLabel", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover-anchor", href: "#inputLabel", children: "#" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "inputLabel" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: "''" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "Input field label." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "inputPlaceholder", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover-anchor", href: "#inputPlaceholder", children: "#" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "inputPlaceholder" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: "''" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "Input field placeholder." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "inputValue", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover-anchor", href: "#inputValue", children: "#" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "inputValue" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: "''" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              "Input field initial value. ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              "If the input type is ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "select" }),
              ", ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "inputValue" }),
              " will represent the selected",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "<option>" }),
              " tag. ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              "If the input type is ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "checkbox" }),
              ", ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "inputValue" }),
              " will represent the",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "checked" }),
              " state. ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              "If the input type is ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "email" }),
              ", ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "number" }),
              ", ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "tel" }),
              ",",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "text" }),
              ", ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "email" }),
              ", ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "number" }),
              ", ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "tel" }),
              "or ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "textarea" }),
              ", a Promise can be accepted as ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "inputValue" }),
              "."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "inputOptions", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover-anchor", href: "#inputOptions", children: "#" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "inputOptions" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", {})
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              "If ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "input" }),
              " parameter is set to ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: '"select"' }),
              " or ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: '"radio"' }),
              ", you can provide options. Can be a Map or a plain object, with keys that represent option values and values that represent option text. You can also provide plain object or Map as values that will represented a group of options, being the label of this ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "<optgroup>" }),
              " the key. Finally, you can also provide a Promise that resolves with one of those types."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "inputAutoFocus", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover-anchor", href: "#inputAutoFocus", children: "#" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "inputAutoFocus" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: "true" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              "Automatically focus the input when popup is shown. Set this parameter to ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "false" }),
              " to disable auto-focusing."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "inputAutoTrim", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover-anchor", href: "#inputAutoTrim", children: "#" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "inputAutoTrim" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: "true" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              "Automatically remove whitespaces from both ends of a result string. Set this parameter to",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "false" }),
              " to disable auto-trimming."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "inputAttributes", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover-anchor", href: "#inputAttributes", children: "#" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "inputAttributes" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", {})
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              "HTML input attributes (e.g. ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "min" }),
              ", ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "max" }),
              ", ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "autocomplete" }),
              ",",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "accept" }),
              "), that are added to the input field. Object keys will represent attributes names, object values will represent attributes values."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "inputValidator", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover-anchor", href: "#inputValidator", children: "#" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "inputValidator" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: "undefined" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              "Validator for input field, may be async (Promise-returning) or sync. ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              "Returned (or resolved) value can be:",
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  "a ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "falsy" }),
                  " value (",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "undefined" }),
                  ", ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "null" }),
                  ",",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "false" }),
                  ") for indicating ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: "success" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  "a string value (error message) for indicating ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: "failure" })
                ] })
              ] }),
              "See ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#input-select", children: "usage example" }),
              "."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "validationMessage", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover-anchor", href: "#validationMessage", children: "#" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "validationMessage" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: "undefined" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "A custom validation message for default validators (email, url)." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "progressSteps", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover-anchor", href: "#progressSteps", children: "#" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "progressSteps" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: "[]" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "Progress steps, useful for queues." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "currentProgressStep", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover-anchor", href: "#currentProgressStep", children: "#" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "currentProgressStep" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: "undefined" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "Current active progress step." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "progressStepsDistance", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover-anchor", href: "#progressStepsDistance", children: "#" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "progressStepsDistance" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: "undefined" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              "Distance between progress steps. Can be in any CSS unit (",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "px" }),
              ", ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "em/rem" }),
              ",",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "%" }),
              ")."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "didRender", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover-anchor", href: "#didRender", children: "#" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "didRender" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: "undefined" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              "Popup lifecycle hook. Synchronously runs after the popup DOM has been updated (i.e. just before the popup is repainted on the screen). ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "didRender" }),
              " is called before ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "willOpen" }),
              ".",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              "Provides popup DOM element as the argument.",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              "Typically, this will happen after ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Swal.fire()" }),
              " or ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Swal.update()" }),
              ".",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              "If you want to perform changes in the popup's DOM, that survive ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Swal.update()" }),
              ", prefer",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "didRender" }),
              " over ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "willOpen" }),
              ".",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              "In previous versions, this hook was named ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "onRender" }),
              "."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "willOpen", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover-anchor", href: "#willOpen", children: "#" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "willOpen" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: "undefined" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              "Popup lifecycle hook. Synchronously runs before the popup is shown on screen. Provides popup DOM element as the argument. In previous versions, this hook was named ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "onBeforeOpen" }),
              "."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "didOpen", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover-anchor", href: "#didOpen", children: "#" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "didOpen" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: "undefined" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              "Popup lifecycle hook. Asynchronously runs after the popup has been shown on screen. Provides popup DOM element as the argument. In previous versions, this hook was named ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "onOpen" }),
              "."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "willClose", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover-anchor", href: "#willClose", children: "#" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "willClose" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: "undefined" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              "Popup lifecycle hook. Synchronously runs when the popup closes by user interaction (and not due to another popup being fired). Provides popup DOM element as the argument. In previous versions, this hook was named ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "onClose" }),
              "."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "didClose", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover-anchor", href: "#didClose", children: "#" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "didClose" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: "undefined" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              "Popup lifecycle hook. Asynchronously runs after the popup has been disposed by user interaction (and not due to another popup being fired). In previous versions, this hook was named",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "onAfterClose" }),
              "."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "didDestroy", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover-anchor", href: "#didDestroy", children: "#" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "didDestroy" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: "undefined" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              "Popup lifecycle hook. Synchronously runs after popup has been destroyed either by user interaction or by another popup.",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              "If you have cleanup operations that you need to reliably execute each time a popup is closed, prefer",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "didDestroy" }),
              " over ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "didClose" }),
              ".",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              "In previous versions, this hook was named ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "onDestroy" }),
              "."
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "center", id: "mixin", children: [
        "You can easily reuse configuration by creating your own ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Swal" }),
        " with",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsxs("strong", { children: [
          "Swal.mixin(",
          "{",
          "...options",
          "}",
          ")"
        ] }),
        ":"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "examples mobile-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ui", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Mixin example" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "show-example-btn", "aria-label": "Try me! Example: Mixin", onClick: examples.mixin.fn, children: "Try me!" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CodeExample, { code: examples.mixin.fnString })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Partners, {})
  ] });
}

function DeclarativeTemplates() {
  const template = `
<template id="my-template">
  <swal-title>
    Save changes to "Untitled 1" before closing?
  </swal-title>
  <swal-icon type="warning" color="red"></swal-icon>
  <swal-button type="confirm">
    Save As
  </swal-button>
  <swal-button type="cancel">
    Cancel
  </swal-button>
  <swal-button type="deny">
    Close without Saving
  </swal-button>
  <swal-param name="allowEscapeKey" value="false" />
  <swal-param
    name="customClass"
    value='{ "popup": "my-popup" }' />
  <swal-function-param
    name="didOpen"
    value="popup => console.log(popup)" />
</template>`.trim();
  const declarativeTriggeringTemplate = `
<template id="my-template">
  <swal-title>Hey!</swal-title>
</template>

<button data-swal-template="#my-template">
  Trigger modal
</button>

<button data-swal-toast-template="#my-template">
  Trigger toast
</button>`.trim();
  reactExports.useEffect(() => {
    Swal.bindClickHandler();
    Swal.mixin({
      toast: true
    }).bindClickHandler("data-swal-toast-template");
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "center-container mobile-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { id: "declarative-templates", children: "Declarative templates and declarative triggering" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "center", children: [
        "There's also the declarative way to define a popup, via the",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template",
            target: "_blank",
            rel: "noreferrer noopener",
            tabIndex: -1,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "<template>" })
          }
        ),
        " ",
        "tag. This is handy when you want to define popup on server side (SSR)."
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "examples mobile-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { id: "declarative-template", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ui", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Declarative template example" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: "show-example-btn",
            "aria-label": "Try me! Example: Declarative template",
            onClick: examples.declarativeTemplate.fn,
            children: "Try me!"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "inline-flex", flexDirection: "column" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            dangerouslySetInnerHTML: {
              __html: template
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CodeExample, { code: template, language: "xml", withoutCodepen: true, style: { marginTop: 0 } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          CodeExample,
          {
            code: examples.declarativeTemplate.fnString,
            codepenHtml: template,
            style: { marginTop: 10 }
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "center-container mobile-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "center", children: "Supported template elements:" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        CodeExample,
        {
          code: `
<swal-title>…</swal-title>
<swal-html>…</swal-html>
<swal-footer>…</swal-footer>
<swal-param name="…" value="…" />
<swal-function-param name="…" value="…" />
<swal-button type="…" color="…" aria-label="…">…</swal-button>
<swal-image src="…" width="…" height="…" alt="…" />
<swal-icon type="…" color="…">…</swal-icon>
<swal-input type="…" label="…" placeholder="…" value="…" />
<swal-input-option value="…">…</swal-input-option>
`.trim(),
          language: "xml",
          withoutCodepen: true
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "center-container mobile-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { id: "declarative-triggering", className: "center", children: [
      "And you can even trigger SweetAlert2 popups declaratively! Use the ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "bindClickHandler()" }),
      " method for that:"
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "examples mobile-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ui", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "show-example-btn", "data-swal-template": "#my-template", style: { margin: "1em 0" }, children: "Trigger modal" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "show-example-btn", "data-swal-toast-template": "#my-template", children: "Trigger toast" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "inline-flex", flexDirection: "column" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          CodeExample,
          {
            code: `
<button data-swal-template="#my-template">
  Trigger modal
</button>

<button data-swal-toast-template="#my-template">
  Trigger toast
</button>
              `.trim(),
            language: "xml",
            withoutCodepen: true,
            style: { marginTop: 0 }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          CodeExample,
          {
            code: examples.declarativeTriggering.fnString,
            codepenHtml: declarativeTriggeringTemplate,
            style: { marginTop: "10px" }
          }
        )
      ] })
    ] }) })
  ] });
}

function HandlingButtons() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "center-container", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { id: "handling-buttons", children: "Handling Buttons (Confirm, Deny, Cancel)" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "center", children: [
      "When the user clicks a button, the Promise returned by ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Swal.fire()" }),
      " will be resolved with the",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "SweetAlertResult" }),
      " object:"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "dismiss-reasons", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "titles", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Key" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Description" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "isConfirmed" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
            'The "Confirm" button was clicked, the ',
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "value" }),
            " will contain the result"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "isDenied" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
            'The "Deny" button was clicked, the ',
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "value" }),
            " will be ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "false" }),
            ".",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "Alternatively, if there's an input in a popup, you can use ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "returnInputValueOnDeny: true" }),
            " ",
            "to return the input's value."
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "isDismissed" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
            'The "Cancel" button was clicked, the ',
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "dismiss" }),
            " will be",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "nowrap", children: "Swal.DismissReason.cancel" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "value" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
            "The value from the popup, possible values:",
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "true" }),
                " for simple confirmed dialogs"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "false" }),
                " for denied popups"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "any value for popups with inputs" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "dismiss" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
            "The dismissal reason, see the ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#handling-dismissals", children: "Handling Dismissals" }),
            " section for details"
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Partners, {})
  ] });
}

function HandlingDismissals() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "center-container", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { id: "handling-dismissals", children: "Handling Dismissals" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "center", children: [
      "When an alert is dismissed by the user, the Promise returned by ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Swal.fire()" }),
      " will be resolved with an object",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsxs("strong", { className: "nowrap", children: [
        "{",
        " isDismissed: true, dismiss: reason ",
        "}"
      ] }),
      " ",
      "documenting the reason it was dismissed:"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "dismiss-reasons", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "titles", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Reason" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Description" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Related configuration" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "nowrap", children: "Swal.DismissReason.backdrop" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "The user clicked the backdrop." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#allowOutsideClick", children: "allowOutsideClick" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "nowrap", children: "Swal.DismissReason.cancel" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "The user clicked the cancel button." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#showCancelButton", children: "showCancelButton" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "nowrap", children: "Swal.DismissReason.close" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "The user clicked the close button." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#showCloseButton", children: "showCloseButton" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "nowrap", children: "Swal.DismissReason.esc" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
            "The user clicked the ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("kbd", { children: "Esc" }),
            " key."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#allowEscapeKey", children: "allowEscapeKey" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "nowrap", children: "Swal.DismissReason.timer" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "The timer ran out, and the alert closed automatically." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#timer", children: "timer" }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "center", children: [
      "If a popup is dismissed by ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "nowrap", children: "Swal.close()" }),
      " or another popup, the Promise will be resolved with an object",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsxs("strong", { className: "nowrap", children: [
        "{",
        " isDismissed: true ",
        "}"
      ] }),
      " ",
      "(",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "dismiss" }),
      " will be ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "undefined" }),
      ")."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Partners, {})
  ] });
}

function Icons() {
  const showExample = (icon) => {
    Swal.fire({
      icon,
      title: `Icon ${icon}`
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { id: "icons", children: "Icons" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("table", { className: "popup-icons", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "success" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "swal2-icon swal2-success", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "swal2-success-circular-line-left" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "swal2-success-line-tip" }),
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "swal2-success-line-long" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "swal2-success-ring" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "swal2-success-fix" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "swal2-success-circular-line-right" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: "show-example-btn",
            onClick: () => showExample("success"),
            "aria-label": "Try me! Example: success modal",
            children: "Try me!"
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "error" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "swal2-icon swal2-error", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "swal2-x-mark", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "swal2-x-mark-line-left" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "swal2-x-mark-line-right" })
        ] }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: "show-example-btn",
            onClick: () => showExample("error"),
            "aria-label": "Try me! Example: error modal",
            children: "Try me!"
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "warning" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "swal2-icon swal2-warning", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "swal2-icon-content", children: "!" }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: "show-example-btn",
            onClick: () => showExample("warning"),
            "aria-label": "Try me! Example: warning modal",
            children: "Try me!"
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "info" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "swal2-icon swal2-info", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "swal2-icon-content", children: "i" }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: "show-example-btn",
            onClick: () => showExample("info"),
            "aria-label": "Try me! Example: info modal",
            children: "Try me!"
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "question" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "swal2-icon swal2-question", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "swal2-icon-content", children: "?" }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: "show-example-btn",
            onClick: () => showExample("question"),
            "aria-label": "Try me! Example: question modal",
            children: "Try me!"
          }
        ) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Partners, {})
  ] });
}

function InputTypes() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { id: "input-types", children: "Input Types" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("table", { className: "input-types", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "input-text", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "text" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CodeExample, { code: examples.textInput.fnString }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: "show-example-btn",
            "aria-label": "Try me! Example: input type text",
            onClick: examples.textInput.fn,
            children: "Try me!"
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "input-email", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "email" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CodeExample, { code: examples.emailInput.fnString }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: "show-example-btn",
            "aria-label": "Try me! Example: input type email",
            onClick: examples.emailInput.fn,
            children: "Try me!"
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "input-url", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "url" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CodeExample, { code: examples.urlInput.fnString }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: "show-example-btn",
            "aria-label": "Try me! Example: input type url",
            onClick: examples.urlInput.fn,
            children: "Try me!"
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "input-password", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "password" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CodeExample, { code: examples.passwordInput.fnString }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: "show-example-btn",
            "aria-label": "Try me! Example: input type password",
            onClick: examples.passwordInput.fn,
            children: "Try me!"
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "input-textarea", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "textarea" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CodeExample, { code: examples.textareaInput.fnString }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: "show-example-btn",
            "aria-label": "Try me! Example: input type textarea",
            onClick: examples.textareaInput.fn,
            children: "Try me!"
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "input-select", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "select" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CodeExample, { code: examples.selectInput.fnString }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: "show-example-btn",
            "aria-label": "Try me! Example: input type select",
            onClick: examples.selectInput.fn,
            children: "Try me!"
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "input-radio", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "radio" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CodeExample, { code: examples.radioInput.fnString }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: "show-example-btn",
            "aria-label": "Try me! Example: input type radio",
            onClick: examples.radioInput.fn,
            children: "Try me!"
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "input-checkbox", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "checkbox" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CodeExample, { code: examples.checkboxInput.fnString }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: "show-example-btn",
            "aria-label": "Try me! Example: input type checkbox",
            onClick: examples.checkboxInput.fn,
            children: "Try me!"
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "input-date", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "date" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CodeExample, { code: examples.dateInput.fnString }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: "show-example-btn",
            "aria-label": "Try me! Example: input type date",
            onClick: examples.dateInput.fn,
            children: "Try me!"
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "input-file", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "file" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CodeExample, { code: examples.fileInput.fnString }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: "show-example-btn",
            "aria-label": "Try me! Example: input type file",
            onClick: examples.fileInput.fn,
            children: "Try me!"
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "input-range", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "range" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CodeExample, { code: examples.rangeInput.fnString }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: "show-example-btn",
            "aria-label": "Try me! Example: input type range",
            onClick: examples.rangeInput.fn,
            children: "Try me!"
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { id: "multiple-inputs", className: "mobile-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("td", { colSpan: 3, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
        "Multiple inputs aren't supported, you can achieve them by using ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "html" }),
        " and",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "preConfirm" }),
        " parameters.",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "Inside the ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "preConfirm()" }),
        " function you can return (or, if async, resolve with) the custom result:"
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "multiple-inputs-example", className: "mobile-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CodeExample, { code: examples.multipleInputs.fnString }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: "show-example-btn",
            "aria-label": "Try me! Example: multiple inputs",
            onClick: examples.multipleInputs.fn,
            children: "Try me!"
          }
        ) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Partners, {})
  ] });
}

function Methods() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mobile-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { id: "methods", children: "Methods" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "titles", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Method" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Description" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Swal.isVisible()" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "Determine if popup is shown." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { children: [
            "Swal.mixin(",
            `{`,
            " ...options ",
            `}`,
            ")"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
            "Returns an extended version of ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Swal" }),
            " containing ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "params" }),
            " as defaults. Useful for reusing Swal configuration."
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "update", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { children: [
            "Swal.update(",
            `{`,
            "...options",
            `}`,
            ")"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "Updates popup options." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Swal.close()" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
            "Close the currently open SweetAlert2 popup programmatically, the Promise returned by",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Swal.fire()" }),
            " will be resolved with an empty object",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "nowrap", children: `{ }` })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Swal.getContainer()" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "Get the popup container which contains the backdrop and the popup itself." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Swal.getPopup()" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "Get the popup." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Swal.getTitle()" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "Get the popup title." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Swal.getProgressSteps()" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "Get the progress steps." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Swal.getCloseButton()" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "Get the close button." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Swal.getIcon()" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
            "Get the ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#icons", children: "icon" }),
            "."
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Swal.getIconContent()" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
            "Get the ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#icons", children: "icon" }),
            " content (without border)."
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Swal.getHtmlContainer()" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
            "Gets the DOM element where the ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "html" }),
            "/",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "text" }),
            " parameter is rendered to."
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Swal.getImage()" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
            "Get the ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#image", children: "image" }),
            "."
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Swal.getActions()" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "Get the actions block (buttons container)." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Swal.getFooter()" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "Get the popup footer." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Swal.getFocusableElements()" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "Get all focusable elements in the popup." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "getConfirmButton", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Swal.getConfirmButton()" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: 'Get the "Confirm" button.' })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Swal.getDenyButton()" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: 'Get the "Deny" button.' })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Swal.getCancelButton()" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: 'Get the "Cancel" button.' })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Swal.enableButtons()" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: 'Enable "Confirm" and "Cancel" buttons.' })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Swal.disableButtons()" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: 'Disable "Confirm" and "Cancel" buttons.' })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "showLoading", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Swal.showLoading()" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
            "Shows loader (spinner), this is useful with AJAX requests.",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            'By default the loader be shown instead of the "Confirm" button, but if you want another button to be replaced with a loader, just pass it like this:',
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "nowrap", children: "Swal.showLoading(Swal.getDenyButton())" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "hideLoading", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Swal.hideLoading()" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "Hides loader and shows back the button which was hidden by .showLoading()" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Swal.isLoading()" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
            "Determine if popup is in the loading state. Related methods:",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#showLoading", className: "nowrap", children: "Swal.showLoading()" }),
            " ",
            "and",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#hideLoading", className: "nowrap", children: "Swal.hideLoading()" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "getTimerLeft", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Swal.getTimerLeft()" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
            "Returns the time left in case when ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#timer", children: "timer" }),
            " parameter is set."
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "stopTimer", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Swal.stopTimer()" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
            "Stops the timer in case when ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#timer", children: "timer" }),
            " parameter is set. Returns the time left"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "resumeTimer", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Swal.resumeTimer()" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
            "Resume the ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#timer", children: "timer" }),
            " previously stopped. Returns the time left"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "toggleTimer", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Swal.toggleTimer()" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
            "Toggle state of the ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#timer", children: "timer" }),
            " between stopped and running. Returns the time left"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "isTimerRunning", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Swal.isTimerRunning()" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
            "Returns the status of a ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#timer", children: "timer" }),
            ": ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "true" }),
            " if is running,",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "false" }),
            " if it's paused"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "increaseTimer", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Swal.increaseTimer(ms)" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
            "Increase the ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#timer", children: "timer" }),
            " by ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "ms" }),
            " milliseconds. Returns the time left"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Swal.clickConfirm()" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: 'Click the "Confirm"-button programmatically.' })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Swal.clickDeny()" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: 'Click the "Deny"-button programmatically.' })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Swal.clickCancel()" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: 'Click the "Cancel"-button programmatically.' })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Swal.getInput()" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
            "Get the input DOM node, this method works with ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#input", children: "input parameter" }),
            "."
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Swal.disableInput()" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "Disable input. A disabled input element is unusable and un-clickable." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Swal.enableInput()" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "Enable input." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "showValidationMessage", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Swal.showValidationMessage(message)" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "Show the validation message DOM node." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Swal.resetValidationMessage()" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "Hide the validation message DOM node." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Swal.getValidationMessage()" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "Get the validation message DOM node." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Swal.isValidParameter(param)" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "Determine if parameter name is valid." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Swal.isUpdatableParameter(param)" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
            "Determine if parameter name is valid for ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#update", children: "Swal.update()" }),
            " method."
          ] })
        ] })
      ] })
    ] })
  ] }) });
}

function Sponsors() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { id: "sponsors", children: "Sponsors" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "center", children: [
      "For all questions related to sponsorship please contact me via email",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:sweetalert2@gmail.com", children: "sweetalert2@gmail.com" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sponsors", style: { marginTop: "-1.8em" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "a",
      {
        href: "https://github.com/sweetalert2/sweetalert2/blob/main/SPONSORS.md#sponsors",
        target: "_blank",
        rel: "noopener",
        "aria-label": "Add your logo and link here",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/plus.png", alt: "" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "Add your logo and link",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "for $29 per month"
        ]
      }
    ) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sponsors", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://www.inksonic.com/", target: "_blank", rel: "noopener", "aria-label": "InkSonic", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/sponsors/inksonic.png", alt: "InkSonic" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "InkSonic"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "a",
        {
          href: "https://bluehive.com/?utm_source=sweetalert2&utm_medium=sponsored&utm_campaign=listing",
          target: "_blank",
          rel: "noopener",
          "aria-label": "Your Occupational Healthcare Hub",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/sponsors/bluehive.png", alt: "Your Occupational Healthcare Hub" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "Your Occupational Healthcare Hub"
          ]
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "a",
        {
          href: "https://boilerplatehub.com/?utm_source=sweetalert2",
          target: "_blank",
          rel: "noopener",
          "aria-label": "Build your SaaS or App in days, not weeks",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/sponsors/boilerplatehub.jpg", alt: "Build your SaaS or App in days, not weeks" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "Build your SaaS or App in days"
          ]
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "a",
        {
          href: "https://ssmarket.net/buy-youtube-views",
          target: "_blank",
          rel: "noopener",
          "aria-label": "Buy Youtube Views",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/sponsors/ssmarket.png", alt: "Buy Youtube Views" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "Buy Youtube Views"
          ]
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://www.coinbit.fi/", target: "_blank", rel: "noopener", "aria-label": "Kryptovaluutat", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/sponsors/coinbit.png", alt: "Kryptovaluutat" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "Kryptovaluutat"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://dlxplugins.com/", target: "_blank", rel: "noopener", "aria-label": "DLX Plugins", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "https://avatars.githubusercontent.com/u/106675919?s=200&v=4", alt: "DLX Plugins" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "DLX Plugins"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://github.com/tiagostutz", target: "_blank", rel: "noopener", "aria-label": "Tiago de Oliveira Stutz", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "https://avatars0.githubusercontent.com/u/3986989?s=200&v=4", alt: "Tiago de Oliveira Stutz" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "Tiago de Oliveira Stutz"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://istar.tips/", target: "_blank", rel: "noopener", "aria-label": "iStarTips", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/sponsors/istartips.png", alt: "iStarTips" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "iStarTips"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://roboflow.com/", target: "_blank", rel: "noopener", "aria-label": "Roboflow", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/sponsors/roboflow.png", alt: "Roboflow" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "Roboflow"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://www.zezelife.com/", target: "_blank", rel: "noopener", "aria-label": "ZezeLife", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/sponsors/zezelife.png", alt: "ZezeLife" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "ZezeLife"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://realspyapps.com/", target: "_blank", rel: "noopener", "aria-label": "Real Spy Apps", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/sponsors/realspyapps.jpeg", alt: "Real Spy Apps" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "Real Spy Apps"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://celltrackingapps.com/", target: "_blank", rel: "noopener", "aria-label": "Phone Tracking Apps", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/sponsors/celltrackingapps.png", alt: "Phone Tracking Apps" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "Phone Tracking Apps"
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { id: "nsfw-sponsors", children: "NSFW Sponsors" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "center", children: [
      "For all questions related to sponsorship please contact me via email",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:sweetalert2@gmail.com", children: "sweetalert2@gmail.com" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sponsors", style: { marginTop: "-1.8em" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "a",
      {
        href: "https://github.com/sweetalert2/sweetalert2/blob/main/SPONSORS.md#sponsors",
        target: "_blank",
        rel: "noopener",
        "aria-label": "Add your logo and link here",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/plus.png", alt: "" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "Add your logo and link",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "for $29 per month"
        ]
      }
    ) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sponsors", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://www.xndoll.com", target: "_blank", rel: "noopener", "aria-label": "XNDOLL", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/sponsors/xndoll.png", alt: "XNDOLL" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "XNDOLL"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://www.pidoll.com", target: "_blank", rel: "noopener", "aria-label": "PIDOLL", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/sponsors/pidoll.png", alt: "PIDOLL" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "PIDOLL"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "a",
        {
          href: "https://www.fantasywives.com/cheap-sex-dolls/",
          target: "_blank",
          rel: "noopener",
          "aria-label": "Cheap sex dolls",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/sponsors/fantasywives.png", alt: "Cheap sex dolls" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "Cheap sex dolls"
          ]
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "a",
        {
          href: "https://tabootwin.com?utm_source=sweetalert",
          target: "_blank",
          rel: "noopener",
          "aria-label": "TabooTwin AI Girlfriend",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/sponsors/tabootwin.png", alt: "TabooTwin AI Girlfriend" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "TabooTwin ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            " AI Girlfriend"
          ]
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://huntlocals.com/", target: "_blank", rel: "noopener", "aria-label": "HuntLocals", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/sponsors/huntlocals.png", alt: "HuntLocals" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "HuntLocals"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://siteshartbandi.co/", target: "_blank", rel: "noopener", "aria-label": "سایت شرط بندی", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/sponsors/siteshartbandi.png", alt: "سایت شرط بندی" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { dir: "rtl", children: "سایت شرط بندی" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://www.sosexdoll.com/cheap-sex-doll", target: "_blank", rel: "noopener", "aria-label": "SoSexDoll", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/sponsors/sosexdoll.png", alt: "SoSexDoll" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "SoSexDoll"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://aeroescorts.com/", target: "_blank", rel: "noopener", "aria-label": "AeroEscorts", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/sponsors/aeroescorts.png", alt: "AeroEscorts" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "AeroEscorts"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://www.hismith.co.uk/", target: "_blank", rel: "noopener", "aria-label": "Hismith", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/sponsors/hismith.png", alt: "Hismith" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "Hismith"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://dollauthority.com/", target: "_blank", rel: "noopener", "aria-label": "Doll Authority", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/sponsors/dollauthority.png", alt: "Doll Authority" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "Doll Authority"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://dreamlovedoll.com/", target: "_blank", rel: "noopener", "aria-label": "DreamLoveDoll", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/sponsors/dreamlovedoll.jpg", alt: "DreamLoveDoll" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "DreamLoveDoll"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://www.sexdollpartner.com/", target: "_blank", rel: "noopener", "aria-label": "SexDollPartner", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/sponsors/sexdollpartner.jpg", alt: "SexDollPartner" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "SexDollPartner"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "a",
        {
          href: "https://www.xspacecup.com/",
          target: "_blank",
          rel: "noopener",
          "aria-label": "XspaceCup - Top Male Masturbator Brand",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/sponsors/xspacecup.png", alt: "XspaceCup - Top Male Masturbator Brand" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "XspaceCup - Top Male Masturbator Brand"
          ]
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://sexsitoys.com/lovense-games/", target: "_blank", rel: "noopener", "aria-label": "Sexsi Toys", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/sponsors/sexsitoys.jpg", alt: "Sexsi Toys" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "Sexsi Toys"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://www.cheapestsexdolls.com", target: "_blank", rel: "noopener", "aria-label": "CheapestSexDolls", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/sponsors/cheapestsexdolls.png", alt: "CheapestSexDolls" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "CheapestSexDolls"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://www.nakedoll.com/", target: "_blank", rel: "noopener", "aria-label": "NakeDoll", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/sponsors/nakedoll.png", alt: "NakeDoll" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "NakeDoll"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://www.onahole.com/", target: "_blank", rel: "noopener", "aria-label": "hentai sex toys", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/sponsors/onahole.png", alt: "hentai sex toys" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "hentai sex toys"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://vsdoll.net/", target: "_blank", rel: "noopener", "aria-label": "VSDoll", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/sponsors/vsdoll.png", alt: "VSDoll" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "VSDoll"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://www.sextorso.com/", target: "_blank", rel: "noopener", "aria-label": "sexdoll torso", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/sponsors/sextorso.png", alt: "sexdoll torso" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "sexdoll torso"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "a",
        {
          href: "https://www.minisexdoll.com/anime-sexdoll/",
          target: "_blank",
          rel: "noopener",
          "aria-label": "anime sexdoll",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/sponsors/minisexdoll.png", alt: "anime sexdoll" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "anime sexdoll"
          ]
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://www.myminisexdoll.com/under-300/", target: "_blank", rel: "noopener", "aria-label": "cheap sexdoll", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/sponsors/myminisexdoll.png", alt: "cheap sexdoll" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "cheap sexdoll"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://www.hugedildo.com/", target: "_blank", rel: "noopener", "aria-label": "huge dildo", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/sponsors/hugedildo.png", alt: "huge dildo" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "huge dildo"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://www.uusexdoll.com/", target: "_blank", rel: "noopener", "aria-label": "sexdoll", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/sponsors/uusexdoll.png", alt: "sexdoll" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "sexdoll"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://cutesexdoll.com/", target: "_blank", rel: "noopener", "aria-label": "Cute Sex Doll", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/sponsors/cutesexdoll.jpg", alt: "Cute Sex Doll" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "Cute Sex Doll"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "a",
        {
          href: "https://www.uusextoy.com/best-pocket-pussy/",
          target: "_blank",
          rel: "noopener",
          "aria-label": "best pocket pussy",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/sponsors/uusextoy.png", alt: "best pocket pussy" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "best pocket pussy"
          ]
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "a",
        {
          href: "https://www.lovedolltorso.com/female-torso-sex-doll/",
          target: "_blank",
          rel: "noopener",
          "aria-label": "female torso sex doll",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/sponsors/lovedolltorso.png", alt: "female torso sex doll" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "female torso sex doll"
          ]
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://www.mymasturbators.com/", target: "_blank", rel: "noopener", "aria-label": "male masturbator", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/sponsors/mymasturbators.png", alt: "male masturbator" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "male masturbator"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://www.buypenispump.com/", target: "_blank", rel: "noopener", "aria-label": "penis pump", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/sponsors/buypenispump.png", alt: "penis pump" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "penis pump"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "a",
        {
          href: "https://www.bestrealdoll.com/collections/us-warehouse",
          target: "_blank",
          rel: "noopener",
          "aria-label": "BestRealDoll",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/sponsors/bestrealdoll.jpeg", alt: "BestRealDoll" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "BestRealDoll"
          ]
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "a",
        {
          href: "https://www.sexdolltech.com/product-category/us-warehouse/",
          target: "_blank",
          rel: "noopener",
          "aria-label": "SexDollTech",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/sponsors/sexdolltech.jpeg", alt: "SexDollTech" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "SexDollTech"
          ]
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://www.sexdollsoff.com/", target: "_blank", rel: "noopener", "aria-label": "SexDollsOff", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/sponsors/sexdollsoff.png", alt: "YourDoll" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "SexDollsOff"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://realsexdoll.com/", target: "_blank", rel: "noopener", "aria-label": "RealSexDoll", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/sponsors/realsexdoll.png", alt: "YourDoll" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "RealSexDoll"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://www.yourdoll.com/", target: "_blank", rel: "noopener", "aria-label": "YourDoll", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/sponsors/yourdoll.jpg", alt: "YourDoll" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "YourDoll"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://anniesdollhouse.com/", target: "_blank", rel: "noopener", "aria-label": "Annie's Dollhouse", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/sponsors/annies-dollhouse.png", alt: "Annie's Dollhouse" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "Annie's Dollhouse"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://sextoycollective.com/", target: "_blank", rel: "noopener", "aria-label": "STC", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/sponsors/sextoycollective.jpg", alt: "STC" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "STC"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "a",
        {
          href: "https://doctorclimax.com/",
          target: "_blank",
          rel: "noopener",
          "aria-label": "DoctorClimax",
          title: "DoctorClimax",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/sponsors/doctorclimax.png", alt: "DoctorClimax" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "DoctorClimax"
          ]
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://www.bsdoll.com/", target: "_blank", rel: "noopener", "aria-label": "BSDoll", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/sponsors/bsdoll.jpg", alt: "BSDoll" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "BSDoll"
      ] }) })
    ] })
  ] });
}

ReactDOM.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Showcase, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Examples, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Installation, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ConfigurationParams, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DeclarativeTemplates, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(HandlingButtons, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(HandlingDismissals, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Icons, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(InputTypes, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Methods, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Sponsors, {})
  ] })
);
