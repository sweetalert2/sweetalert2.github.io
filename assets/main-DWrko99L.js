import { r as reactExports, j as jsxRuntimeExports, D as DocSearch, g as getDefaultExportFromCjs, e as examples, S as Swal, c as client, N as Nav } from './index-DuizMxlg.js';

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

/* eslint-disable no-multi-assign */

function deepFreeze(obj) {
  if (obj instanceof Map) {
    obj.clear =
      obj.delete =
      obj.set =
        function () {
          throw new Error('map is read-only');
        };
  } else if (obj instanceof Set) {
    obj.add =
      obj.clear =
      obj.delete =
        function () {
          throw new Error('set is read-only');
        };
  }

  // Freeze self
  Object.freeze(obj);

  Object.getOwnPropertyNames(obj).forEach((name) => {
    const prop = obj[name];
    const type = typeof prop;

    // Freeze prop if it is an object or function and also not already frozen
    if ((type === 'object' || type === 'function') && !Object.isFrozen(prop)) {
      deepFreeze(prop);
    }
  });

  return obj;
}

/** @typedef {import('highlight.js').CallbackResponse} CallbackResponse */
/** @typedef {import('highlight.js').CompiledMode} CompiledMode */
/** @implements CallbackResponse */

class Response {
  /**
   * @param {CompiledMode} mode
   */
  constructor(mode) {
    // eslint-disable-next-line no-undefined
    if (mode.data === undefined) mode.data = {};

    this.data = mode.data;
    this.isMatchIgnored = false;
  }

  ignoreMatch() {
    this.isMatchIgnored = true;
  }
}

/**
 * @param {string} value
 * @returns {string}
 */
function escapeHTML(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;');
}

/**
 * performs a shallow merge of multiple objects into one
 *
 * @template T
 * @param {T} original
 * @param {Record<string,any>[]} objects
 * @returns {T} a single new object
 */
function inherit$1(original, ...objects) {
  /** @type Record<string,any> */
  const result = Object.create(null);

  for (const key in original) {
    result[key] = original[key];
  }
  objects.forEach(function(obj) {
    for (const key in obj) {
      result[key] = obj[key];
    }
  });
  return /** @type {T} */ (result);
}

/**
 * @typedef {object} Renderer
 * @property {(text: string) => void} addText
 * @property {(node: Node) => void} openNode
 * @property {(node: Node) => void} closeNode
 * @property {() => string} value
 */

/** @typedef {{scope?: string, language?: string, sublanguage?: boolean}} Node */
/** @typedef {{walk: (r: Renderer) => void}} Tree */
/** */

const SPAN_CLOSE = '</span>';

/**
 * Determines if a node needs to be wrapped in <span>
 *
 * @param {Node} node */
const emitsWrappingTags = (node) => {
  // rarely we can have a sublanguage where language is undefined
  // TODO: track down why
  return !!node.scope;
};

/**
 *
 * @param {string} name
 * @param {{prefix:string}} options
 */
const scopeToCSSClass = (name, { prefix }) => {
  // sub-language
  if (name.startsWith("language:")) {
    return name.replace("language:", "language-");
  }
  // tiered scope: comment.line
  if (name.includes(".")) {
    const pieces = name.split(".");
    return [
      `${prefix}${pieces.shift()}`,
      ...(pieces.map((x, i) => `${x}${"_".repeat(i + 1)}`))
    ].join(" ");
  }
  // simple scope
  return `${prefix}${name}`;
};

/** @type {Renderer} */
class HTMLRenderer {
  /**
   * Creates a new HTMLRenderer
   *
   * @param {Tree} parseTree - the parse tree (must support `walk` API)
   * @param {{classPrefix: string}} options
   */
  constructor(parseTree, options) {
    this.buffer = "";
    this.classPrefix = options.classPrefix;
    parseTree.walk(this);
  }

  /**
   * Adds texts to the output stream
   *
   * @param {string} text */
  addText(text) {
    this.buffer += escapeHTML(text);
  }

  /**
   * Adds a node open to the output stream (if needed)
   *
   * @param {Node} node */
  openNode(node) {
    if (!emitsWrappingTags(node)) return;

    const className = scopeToCSSClass(node.scope,
      { prefix: this.classPrefix });
    this.span(className);
  }

  /**
   * Adds a node close to the output stream (if needed)
   *
   * @param {Node} node */
  closeNode(node) {
    if (!emitsWrappingTags(node)) return;

    this.buffer += SPAN_CLOSE;
  }

  /**
   * returns the accumulated buffer
  */
  value() {
    return this.buffer;
  }

  // helpers

  /**
   * Builds a span element
   *
   * @param {string} className */
  span(className) {
    this.buffer += `<span class="${className}">`;
  }
}

/** @typedef {{scope?: string, language?: string, children: Node[]} | string} Node */
/** @typedef {{scope?: string, language?: string, children: Node[]} } DataNode */
/** @typedef {import('highlight.js').Emitter} Emitter */
/**  */

/** @returns {DataNode} */
const newNode = (opts = {}) => {
  /** @type DataNode */
  const result = { children: [] };
  Object.assign(result, opts);
  return result;
};

class TokenTree {
  constructor() {
    /** @type DataNode */
    this.rootNode = newNode();
    this.stack = [this.rootNode];
  }

  get top() {
    return this.stack[this.stack.length - 1];
  }

  get root() { return this.rootNode; }

  /** @param {Node} node */
  add(node) {
    this.top.children.push(node);
  }

  /** @param {string} scope */
  openNode(scope) {
    /** @type Node */
    const node = newNode({ scope });
    this.add(node);
    this.stack.push(node);
  }

  closeNode() {
    if (this.stack.length > 1) {
      return this.stack.pop();
    }
    // eslint-disable-next-line no-undefined
    return undefined;
  }

  closeAllNodes() {
    while (this.closeNode());
  }

  toJSON() {
    return JSON.stringify(this.rootNode, null, 4);
  }

  /**
   * @typedef { import("./html_renderer").Renderer } Renderer
   * @param {Renderer} builder
   */
  walk(builder) {
    // this does not
    return this.constructor._walk(builder, this.rootNode);
    // this works
    // return TokenTree._walk(builder, this.rootNode);
  }

  /**
   * @param {Renderer} builder
   * @param {Node} node
   */
  static _walk(builder, node) {
    if (typeof node === "string") {
      builder.addText(node);
    } else if (node.children) {
      builder.openNode(node);
      node.children.forEach((child) => this._walk(builder, child));
      builder.closeNode(node);
    }
    return builder;
  }

  /**
   * @param {Node} node
   */
  static _collapse(node) {
    if (typeof node === "string") return;
    if (!node.children) return;

    if (node.children.every(el => typeof el === "string")) {
      // node.text = node.children.join("");
      // delete node.children;
      node.children = [node.children.join("")];
    } else {
      node.children.forEach((child) => {
        TokenTree._collapse(child);
      });
    }
  }
}

/**
  Currently this is all private API, but this is the minimal API necessary
  that an Emitter must implement to fully support the parser.

  Minimal interface:

  - addText(text)
  - __addSublanguage(emitter, subLanguageName)
  - startScope(scope)
  - endScope()
  - finalize()
  - toHTML()

*/

/**
 * @implements {Emitter}
 */
class TokenTreeEmitter extends TokenTree {
  /**
   * @param {*} options
   */
  constructor(options) {
    super();
    this.options = options;
  }

  /**
   * @param {string} text
   */
  addText(text) {
    if (text === "") { return; }

    this.add(text);
  }

  /** @param {string} scope */
  startScope(scope) {
    this.openNode(scope);
  }

  endScope() {
    this.closeNode();
  }

  /**
   * @param {Emitter & {root: DataNode}} emitter
   * @param {string} name
   */
  __addSublanguage(emitter, name) {
    /** @type DataNode */
    const node = emitter.root;
    if (name) node.scope = `language:${name}`;

    this.add(node);
  }

  toHTML() {
    const renderer = new HTMLRenderer(this, this.options);
    return renderer.value();
  }

  finalize() {
    this.closeAllNodes();
    return true;
  }
}

/**
 * @param {string} value
 * @returns {RegExp}
 * */

/**
 * @param {RegExp | string } re
 * @returns {string}
 */
function source(re) {
  if (!re) return null;
  if (typeof re === "string") return re;

  return re.source;
}

/**
 * @param {RegExp | string } re
 * @returns {string}
 */
function lookahead(re) {
  return concat('(?=', re, ')');
}

/**
 * @param {RegExp | string } re
 * @returns {string}
 */
function anyNumberOfTimes(re) {
  return concat('(?:', re, ')*');
}

/**
 * @param {RegExp | string } re
 * @returns {string}
 */
function optional(re) {
  return concat('(?:', re, ')?');
}

/**
 * @param {...(RegExp | string) } args
 * @returns {string}
 */
function concat(...args) {
  const joined = args.map((x) => source(x)).join("");
  return joined;
}

/**
 * @param { Array<string | RegExp | Object> } args
 * @returns {object}
 */
function stripOptionsFromArgs(args) {
  const opts = args[args.length - 1];

  if (typeof opts === 'object' && opts.constructor === Object) {
    args.splice(args.length - 1, 1);
    return opts;
  } else {
    return {};
  }
}

/** @typedef { {capture?: boolean} } RegexEitherOptions */

/**
 * Any of the passed expresssions may match
 *
 * Creates a huge this | this | that | that match
 * @param {(RegExp | string)[] | [...(RegExp | string)[], RegexEitherOptions]} args
 * @returns {string}
 */
function either(...args) {
  /** @type { object & {capture?: boolean} }  */
  const opts = stripOptionsFromArgs(args);
  const joined = '('
    + (opts.capture ? "" : "?:")
    + args.map((x) => source(x)).join("|") + ")";
  return joined;
}

/**
 * @param {RegExp | string} re
 * @returns {number}
 */
function countMatchGroups(re) {
  return (new RegExp(re.toString() + '|')).exec('').length - 1;
}

/**
 * Does lexeme start with a regular expression match at the beginning
 * @param {RegExp} re
 * @param {string} lexeme
 */
function startsWith(re, lexeme) {
  const match = re && re.exec(lexeme);
  return match && match.index === 0;
}

// BACKREF_RE matches an open parenthesis or backreference. To avoid
// an incorrect parse, it additionally matches the following:
// - [...] elements, where the meaning of parentheses and escapes change
// - other escape sequences, so we do not misparse escape sequences as
//   interesting elements
// - non-matching or lookahead parentheses, which do not capture. These
//   follow the '(' with a '?'.
const BACKREF_RE = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;

// **INTERNAL** Not intended for outside usage
// join logically computes regexps.join(separator), but fixes the
// backreferences so they continue to match.
// it also places each individual regular expression into it's own
// match group, keeping track of the sequencing of those match groups
// is currently an exercise for the caller. :-)
/**
 * @param {(string | RegExp)[]} regexps
 * @param {{joinWith: string}} opts
 * @returns {string}
 */
function _rewriteBackreferences(regexps, { joinWith }) {
  let numCaptures = 0;

  return regexps.map((regex) => {
    numCaptures += 1;
    const offset = numCaptures;
    let re = source(regex);
    let out = '';

    while (re.length > 0) {
      const match = BACKREF_RE.exec(re);
      if (!match) {
        out += re;
        break;
      }
      out += re.substring(0, match.index);
      re = re.substring(match.index + match[0].length);
      if (match[0][0] === '\\' && match[1]) {
        // Adjust the backreference.
        out += '\\' + String(Number(match[1]) + offset);
      } else {
        out += match[0];
        if (match[0] === '(') {
          numCaptures++;
        }
      }
    }
    return out;
  }).map(re => `(${re})`).join(joinWith);
}

/** @typedef {import('highlight.js').Mode} Mode */
/** @typedef {import('highlight.js').ModeCallback} ModeCallback */

// Common regexps
const MATCH_NOTHING_RE = /\b\B/;
const IDENT_RE$1 = '[a-zA-Z]\\w*';
const UNDERSCORE_IDENT_RE = '[a-zA-Z_]\\w*';
const NUMBER_RE = '\\b\\d+(\\.\\d+)?';
const C_NUMBER_RE = '(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)'; // 0x..., 0..., decimal, float
const BINARY_NUMBER_RE = '\\b(0b[01]+)'; // 0b...
const RE_STARTERS_RE = '!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~';

/**
* @param { Partial<Mode> & {binary?: string | RegExp} } opts
*/
const SHEBANG = (opts = {}) => {
  const beginShebang = /^#![ ]*\//;
  if (opts.binary) {
    opts.begin = concat(
      beginShebang,
      /.*\b/,
      opts.binary,
      /\b.*/);
  }
  return inherit$1({
    scope: 'meta',
    begin: beginShebang,
    end: /$/,
    relevance: 0,
    /** @type {ModeCallback} */
    "on:begin": (m, resp) => {
      if (m.index !== 0) resp.ignoreMatch();
    }
  }, opts);
};

// Common modes
const BACKSLASH_ESCAPE = {
  begin: '\\\\[\\s\\S]', relevance: 0
};
const APOS_STRING_MODE = {
  scope: 'string',
  begin: '\'',
  end: '\'',
  illegal: '\\n',
  contains: [BACKSLASH_ESCAPE]
};
const QUOTE_STRING_MODE = {
  scope: 'string',
  begin: '"',
  end: '"',
  illegal: '\\n',
  contains: [BACKSLASH_ESCAPE]
};
const PHRASAL_WORDS_MODE = {
  begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
};
/**
 * Creates a comment mode
 *
 * @param {string | RegExp} begin
 * @param {string | RegExp} end
 * @param {Mode | {}} [modeOptions]
 * @returns {Partial<Mode>}
 */
const COMMENT = function(begin, end, modeOptions = {}) {
  const mode = inherit$1(
    {
      scope: 'comment',
      begin,
      end,
      contains: []
    },
    modeOptions
  );
  mode.contains.push({
    scope: 'doctag',
    // hack to avoid the space from being included. the space is necessary to
    // match here to prevent the plain text rule below from gobbling up doctags
    begin: '[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)',
    end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
    excludeBegin: true,
    relevance: 0
  });
  const ENGLISH_WORD = either(
    // list of common 1 and 2 letter words in English
    "I",
    "a",
    "is",
    "so",
    "us",
    "to",
    "at",
    "if",
    "in",
    "it",
    "on",
    // note: this is not an exhaustive list of contractions, just popular ones
    /[A-Za-z]+['](d|ve|re|ll|t|s|n)/, // contractions - can't we'd they're let's, etc
    /[A-Za-z]+[-][a-z]+/, // `no-way`, etc.
    /[A-Za-z][a-z]{2,}/ // allow capitalized words at beginning of sentences
  );
  // looking like plain text, more likely to be a comment
  mode.contains.push(
    {
      // TODO: how to include ", (, ) without breaking grammars that use these for
      // comment delimiters?
      // begin: /[ ]+([()"]?([A-Za-z'-]{3,}|is|a|I|so|us|[tT][oO]|at|if|in|it|on)[.]?[()":]?([.][ ]|[ ]|\))){3}/
      // ---

      // this tries to find sequences of 3 english words in a row (without any
      // "programming" type syntax) this gives us a strong signal that we've
      // TRULY found a comment - vs perhaps scanning with the wrong language.
      // It's possible to find something that LOOKS like the start of the
      // comment - but then if there is no readable text - good chance it is a
      // false match and not a comment.
      //
      // for a visual example please see:
      // https://github.com/highlightjs/highlight.js/issues/2827

      begin: concat(
        /[ ]+/, // necessary to prevent us gobbling up doctags like /* @author Bob Mcgill */
        '(',
        ENGLISH_WORD,
        /[.]?[:]?([.][ ]|[ ])/,
        '){3}') // look for 3 words in a row
    }
  );
  return mode;
};
const C_LINE_COMMENT_MODE = COMMENT('//', '$');
const C_BLOCK_COMMENT_MODE = COMMENT('/\\*', '\\*/');
const HASH_COMMENT_MODE = COMMENT('#', '$');
const NUMBER_MODE = {
  scope: 'number',
  begin: NUMBER_RE,
  relevance: 0
};
const C_NUMBER_MODE = {
  scope: 'number',
  begin: C_NUMBER_RE,
  relevance: 0
};
const BINARY_NUMBER_MODE = {
  scope: 'number',
  begin: BINARY_NUMBER_RE,
  relevance: 0
};
const REGEXP_MODE = {
  scope: "regexp",
  begin: /\/(?=[^/\n]*\/)/,
  end: /\/[gimuy]*/,
  contains: [
    BACKSLASH_ESCAPE,
    {
      begin: /\[/,
      end: /\]/,
      relevance: 0,
      contains: [BACKSLASH_ESCAPE]
    }
  ]
};
const TITLE_MODE = {
  scope: 'title',
  begin: IDENT_RE$1,
  relevance: 0
};
const UNDERSCORE_TITLE_MODE = {
  scope: 'title',
  begin: UNDERSCORE_IDENT_RE,
  relevance: 0
};
const METHOD_GUARD = {
  // excludes method names from keyword processing
  begin: '\\.\\s*' + UNDERSCORE_IDENT_RE,
  relevance: 0
};

/**
 * Adds end same as begin mechanics to a mode
 *
 * Your mode must include at least a single () match group as that first match
 * group is what is used for comparison
 * @param {Partial<Mode>} mode
 */
const END_SAME_AS_BEGIN = function(mode) {
  return Object.assign(mode,
    {
      /** @type {ModeCallback} */
      'on:begin': (m, resp) => { resp.data._beginMatch = m[1]; },
      /** @type {ModeCallback} */
      'on:end': (m, resp) => { if (resp.data._beginMatch !== m[1]) resp.ignoreMatch(); }
    });
};

var MODES = /*#__PURE__*/Object.freeze({
  __proto__: null,
  APOS_STRING_MODE: APOS_STRING_MODE,
  BACKSLASH_ESCAPE: BACKSLASH_ESCAPE,
  BINARY_NUMBER_MODE: BINARY_NUMBER_MODE,
  BINARY_NUMBER_RE: BINARY_NUMBER_RE,
  COMMENT: COMMENT,
  C_BLOCK_COMMENT_MODE: C_BLOCK_COMMENT_MODE,
  C_LINE_COMMENT_MODE: C_LINE_COMMENT_MODE,
  C_NUMBER_MODE: C_NUMBER_MODE,
  C_NUMBER_RE: C_NUMBER_RE,
  END_SAME_AS_BEGIN: END_SAME_AS_BEGIN,
  HASH_COMMENT_MODE: HASH_COMMENT_MODE,
  IDENT_RE: IDENT_RE$1,
  MATCH_NOTHING_RE: MATCH_NOTHING_RE,
  METHOD_GUARD: METHOD_GUARD,
  NUMBER_MODE: NUMBER_MODE,
  NUMBER_RE: NUMBER_RE,
  PHRASAL_WORDS_MODE: PHRASAL_WORDS_MODE,
  QUOTE_STRING_MODE: QUOTE_STRING_MODE,
  REGEXP_MODE: REGEXP_MODE,
  RE_STARTERS_RE: RE_STARTERS_RE,
  SHEBANG: SHEBANG,
  TITLE_MODE: TITLE_MODE,
  UNDERSCORE_IDENT_RE: UNDERSCORE_IDENT_RE,
  UNDERSCORE_TITLE_MODE: UNDERSCORE_TITLE_MODE
});

/**
@typedef {import('highlight.js').CallbackResponse} CallbackResponse
@typedef {import('highlight.js').CompilerExt} CompilerExt
*/

// Grammar extensions / plugins
// See: https://github.com/highlightjs/highlight.js/issues/2833

// Grammar extensions allow "syntactic sugar" to be added to the grammar modes
// without requiring any underlying changes to the compiler internals.

// `compileMatch` being the perfect small example of now allowing a grammar
// author to write `match` when they desire to match a single expression rather
// than being forced to use `begin`.  The extension then just moves `match` into
// `begin` when it runs.  Ie, no features have been added, but we've just made
// the experience of writing (and reading grammars) a little bit nicer.

// ------

// TODO: We need negative look-behind support to do this properly
/**
 * Skip a match if it has a preceding dot
 *
 * This is used for `beginKeywords` to prevent matching expressions such as
 * `bob.keyword.do()`. The mode compiler automatically wires this up as a
 * special _internal_ 'on:begin' callback for modes with `beginKeywords`
 * @param {RegExpMatchArray} match
 * @param {CallbackResponse} response
 */
function skipIfHasPrecedingDot(match, response) {
  const before = match.input[match.index - 1];
  if (before === ".") {
    response.ignoreMatch();
  }
}

/**
 *
 * @type {CompilerExt}
 */
function scopeClassName(mode, _parent) {
  // eslint-disable-next-line no-undefined
  if (mode.className !== undefined) {
    mode.scope = mode.className;
    delete mode.className;
  }
}

/**
 * `beginKeywords` syntactic sugar
 * @type {CompilerExt}
 */
function beginKeywords(mode, parent) {
  if (!parent) return;
  if (!mode.beginKeywords) return;

  // for languages with keywords that include non-word characters checking for
  // a word boundary is not sufficient, so instead we check for a word boundary
  // or whitespace - this does no harm in any case since our keyword engine
  // doesn't allow spaces in keywords anyways and we still check for the boundary
  // first
  mode.begin = '\\b(' + mode.beginKeywords.split(' ').join('|') + ')(?!\\.)(?=\\b|\\s)';
  mode.__beforeBegin = skipIfHasPrecedingDot;
  mode.keywords = mode.keywords || mode.beginKeywords;
  delete mode.beginKeywords;

  // prevents double relevance, the keywords themselves provide
  // relevance, the mode doesn't need to double it
  // eslint-disable-next-line no-undefined
  if (mode.relevance === undefined) mode.relevance = 0;
}

/**
 * Allow `illegal` to contain an array of illegal values
 * @type {CompilerExt}
 */
function compileIllegal(mode, _parent) {
  if (!Array.isArray(mode.illegal)) return;

  mode.illegal = either(...mode.illegal);
}

/**
 * `match` to match a single expression for readability
 * @type {CompilerExt}
 */
function compileMatch(mode, _parent) {
  if (!mode.match) return;
  if (mode.begin || mode.end) throw new Error("begin & end are not supported with match");

  mode.begin = mode.match;
  delete mode.match;
}

/**
 * provides the default 1 relevance to all modes
 * @type {CompilerExt}
 */
function compileRelevance(mode, _parent) {
  // eslint-disable-next-line no-undefined
  if (mode.relevance === undefined) mode.relevance = 1;
}

// allow beforeMatch to act as a "qualifier" for the match
// the full match begin must be [beforeMatch][begin]
const beforeMatchExt = (mode, parent) => {
  if (!mode.beforeMatch) return;
  // starts conflicts with endsParent which we need to make sure the child
  // rule is not matched multiple times
  if (mode.starts) throw new Error("beforeMatch cannot be used with starts");

  const originalMode = Object.assign({}, mode);
  Object.keys(mode).forEach((key) => { delete mode[key]; });

  mode.keywords = originalMode.keywords;
  mode.begin = concat(originalMode.beforeMatch, lookahead(originalMode.begin));
  mode.starts = {
    relevance: 0,
    contains: [
      Object.assign(originalMode, { endsParent: true })
    ]
  };
  mode.relevance = 0;

  delete originalMode.beforeMatch;
};

// keywords that should have no default relevance value
const COMMON_KEYWORDS = [
  'of',
  'and',
  'for',
  'in',
  'not',
  'or',
  'if',
  'then',
  'parent', // common variable name
  'list', // common variable name
  'value' // common variable name
];

const DEFAULT_KEYWORD_SCOPE = "keyword";

/**
 * Given raw keywords from a language definition, compile them.
 *
 * @param {string | Record<string,string|string[]> | Array<string>} rawKeywords
 * @param {boolean} caseInsensitive
 */
function compileKeywords(rawKeywords, caseInsensitive, scopeName = DEFAULT_KEYWORD_SCOPE) {
  /** @type {import("highlight.js/private").KeywordDict} */
  const compiledKeywords = Object.create(null);

  // input can be a string of keywords, an array of keywords, or a object with
  // named keys representing scopeName (which can then point to a string or array)
  if (typeof rawKeywords === 'string') {
    compileList(scopeName, rawKeywords.split(" "));
  } else if (Array.isArray(rawKeywords)) {
    compileList(scopeName, rawKeywords);
  } else {
    Object.keys(rawKeywords).forEach(function(scopeName) {
      // collapse all our objects back into the parent object
      Object.assign(
        compiledKeywords,
        compileKeywords(rawKeywords[scopeName], caseInsensitive, scopeName)
      );
    });
  }
  return compiledKeywords;

  // ---

  /**
   * Compiles an individual list of keywords
   *
   * Ex: "for if when while|5"
   *
   * @param {string} scopeName
   * @param {Array<string>} keywordList
   */
  function compileList(scopeName, keywordList) {
    if (caseInsensitive) {
      keywordList = keywordList.map(x => x.toLowerCase());
    }
    keywordList.forEach(function(keyword) {
      const pair = keyword.split('|');
      compiledKeywords[pair[0]] = [scopeName, scoreForKeyword(pair[0], pair[1])];
    });
  }
}

/**
 * Returns the proper score for a given keyword
 *
 * Also takes into account comment keywords, which will be scored 0 UNLESS
 * another score has been manually assigned.
 * @param {string} keyword
 * @param {string} [providedScore]
 */
function scoreForKeyword(keyword, providedScore) {
  // manual scores always win over common keywords
  // so you can force a score of 1 if you really insist
  if (providedScore) {
    return Number(providedScore);
  }

  return commonKeyword(keyword) ? 0 : 1;
}

/**
 * Determines if a given keyword is common or not
 *
 * @param {string} keyword */
function commonKeyword(keyword) {
  return COMMON_KEYWORDS.includes(keyword.toLowerCase());
}

/*

For the reasoning behind this please see:
https://github.com/highlightjs/highlight.js/issues/2880#issuecomment-747275419

*/

/**
 * @type {Record<string, boolean>}
 */
const seenDeprecations = {};

/**
 * @param {string} message
 */
const error = (message) => {
  console.error(message);
};

/**
 * @param {string} message
 * @param {any} args
 */
const warn = (message, ...args) => {
  console.log(`WARN: ${message}`, ...args);
};

/**
 * @param {string} version
 * @param {string} message
 */
const deprecated = (version, message) => {
  if (seenDeprecations[`${version}/${message}`]) return;

  console.log(`Deprecated as of ${version}. ${message}`);
  seenDeprecations[`${version}/${message}`] = true;
};

/* eslint-disable no-throw-literal */

/**
@typedef {import('highlight.js').CompiledMode} CompiledMode
*/

const MultiClassError = new Error();

/**
 * Renumbers labeled scope names to account for additional inner match
 * groups that otherwise would break everything.
 *
 * Lets say we 3 match scopes:
 *
 *   { 1 => ..., 2 => ..., 3 => ... }
 *
 * So what we need is a clean match like this:
 *
 *   (a)(b)(c) => [ "a", "b", "c" ]
 *
 * But this falls apart with inner match groups:
 *
 * (a)(((b)))(c) => ["a", "b", "b", "b", "c" ]
 *
 * Our scopes are now "out of alignment" and we're repeating `b` 3 times.
 * What needs to happen is the numbers are remapped:
 *
 *   { 1 => ..., 2 => ..., 5 => ... }
 *
 * We also need to know that the ONLY groups that should be output
 * are 1, 2, and 5.  This function handles this behavior.
 *
 * @param {CompiledMode} mode
 * @param {Array<RegExp | string>} regexes
 * @param {{key: "beginScope"|"endScope"}} opts
 */
function remapScopeNames(mode, regexes, { key }) {
  let offset = 0;
  const scopeNames = mode[key];
  /** @type Record<number,boolean> */
  const emit = {};
  /** @type Record<number,string> */
  const positions = {};

  for (let i = 1; i <= regexes.length; i++) {
    positions[i + offset] = scopeNames[i];
    emit[i + offset] = true;
    offset += countMatchGroups(regexes[i - 1]);
  }
  // we use _emit to keep track of which match groups are "top-level" to avoid double
  // output from inside match groups
  mode[key] = positions;
  mode[key]._emit = emit;
  mode[key]._multi = true;
}

/**
 * @param {CompiledMode} mode
 */
function beginMultiClass(mode) {
  if (!Array.isArray(mode.begin)) return;

  if (mode.skip || mode.excludeBegin || mode.returnBegin) {
    error("skip, excludeBegin, returnBegin not compatible with beginScope: {}");
    throw MultiClassError;
  }

  if (typeof mode.beginScope !== "object" || mode.beginScope === null) {
    error("beginScope must be object");
    throw MultiClassError;
  }

  remapScopeNames(mode, mode.begin, { key: "beginScope" });
  mode.begin = _rewriteBackreferences(mode.begin, { joinWith: "" });
}

/**
 * @param {CompiledMode} mode
 */
function endMultiClass(mode) {
  if (!Array.isArray(mode.end)) return;

  if (mode.skip || mode.excludeEnd || mode.returnEnd) {
    error("skip, excludeEnd, returnEnd not compatible with endScope: {}");
    throw MultiClassError;
  }

  if (typeof mode.endScope !== "object" || mode.endScope === null) {
    error("endScope must be object");
    throw MultiClassError;
  }

  remapScopeNames(mode, mode.end, { key: "endScope" });
  mode.end = _rewriteBackreferences(mode.end, { joinWith: "" });
}

/**
 * this exists only to allow `scope: {}` to be used beside `match:`
 * Otherwise `beginScope` would necessary and that would look weird

  {
    match: [ /def/, /\w+/ ]
    scope: { 1: "keyword" , 2: "title" }
  }

 * @param {CompiledMode} mode
 */
function scopeSugar(mode) {
  if (mode.scope && typeof mode.scope === "object" && mode.scope !== null) {
    mode.beginScope = mode.scope;
    delete mode.scope;
  }
}

/**
 * @param {CompiledMode} mode
 */
function MultiClass(mode) {
  scopeSugar(mode);

  if (typeof mode.beginScope === "string") {
    mode.beginScope = { _wrap: mode.beginScope };
  }
  if (typeof mode.endScope === "string") {
    mode.endScope = { _wrap: mode.endScope };
  }

  beginMultiClass(mode);
  endMultiClass(mode);
}

/**
@typedef {import('highlight.js').Mode} Mode
@typedef {import('highlight.js').CompiledMode} CompiledMode
@typedef {import('highlight.js').Language} Language
@typedef {import('highlight.js').HLJSPlugin} HLJSPlugin
@typedef {import('highlight.js').CompiledLanguage} CompiledLanguage
*/

// compilation

/**
 * Compiles a language definition result
 *
 * Given the raw result of a language definition (Language), compiles this so
 * that it is ready for highlighting code.
 * @param {Language} language
 * @returns {CompiledLanguage}
 */
function compileLanguage(language) {
  /**
   * Builds a regex with the case sensitivity of the current language
   *
   * @param {RegExp | string} value
   * @param {boolean} [global]
   */
  function langRe(value, global) {
    return new RegExp(
      source(value),
      'm'
      + (language.case_insensitive ? 'i' : '')
      + (language.unicodeRegex ? 'u' : '')
      + (global ? 'g' : '')
    );
  }

  /**
    Stores multiple regular expressions and allows you to quickly search for
    them all in a string simultaneously - returning the first match.  It does
    this by creating a huge (a|b|c) regex - each individual item wrapped with ()
    and joined by `|` - using match groups to track position.  When a match is
    found checking which position in the array has content allows us to figure
    out which of the original regexes / match groups triggered the match.

    The match object itself (the result of `Regex.exec`) is returned but also
    enhanced by merging in any meta-data that was registered with the regex.
    This is how we keep track of which mode matched, and what type of rule
    (`illegal`, `begin`, end, etc).
  */
  class MultiRegex {
    constructor() {
      this.matchIndexes = {};
      // @ts-ignore
      this.regexes = [];
      this.matchAt = 1;
      this.position = 0;
    }

    // @ts-ignore
    addRule(re, opts) {
      opts.position = this.position++;
      // @ts-ignore
      this.matchIndexes[this.matchAt] = opts;
      this.regexes.push([opts, re]);
      this.matchAt += countMatchGroups(re) + 1;
    }

    compile() {
      if (this.regexes.length === 0) {
        // avoids the need to check length every time exec is called
        // @ts-ignore
        this.exec = () => null;
      }
      const terminators = this.regexes.map(el => el[1]);
      this.matcherRe = langRe(_rewriteBackreferences(terminators, { joinWith: '|' }), true);
      this.lastIndex = 0;
    }

    /** @param {string} s */
    exec(s) {
      this.matcherRe.lastIndex = this.lastIndex;
      const match = this.matcherRe.exec(s);
      if (!match) { return null; }

      // eslint-disable-next-line no-undefined
      const i = match.findIndex((el, i) => i > 0 && el !== undefined);
      // @ts-ignore
      const matchData = this.matchIndexes[i];
      // trim off any earlier non-relevant match groups (ie, the other regex
      // match groups that make up the multi-matcher)
      match.splice(0, i);

      return Object.assign(match, matchData);
    }
  }

  /*
    Created to solve the key deficiently with MultiRegex - there is no way to
    test for multiple matches at a single location.  Why would we need to do
    that?  In the future a more dynamic engine will allow certain matches to be
    ignored.  An example: if we matched say the 3rd regex in a large group but
    decided to ignore it - we'd need to started testing again at the 4th
    regex... but MultiRegex itself gives us no real way to do that.

    So what this class creates MultiRegexs on the fly for whatever search
    position they are needed.

    NOTE: These additional MultiRegex objects are created dynamically.  For most
    grammars most of the time we will never actually need anything more than the
    first MultiRegex - so this shouldn't have too much overhead.

    Say this is our search group, and we match regex3, but wish to ignore it.

      regex1 | regex2 | regex3 | regex4 | regex5    ' ie, startAt = 0

    What we need is a new MultiRegex that only includes the remaining
    possibilities:

      regex4 | regex5                               ' ie, startAt = 3

    This class wraps all that complexity up in a simple API... `startAt` decides
    where in the array of expressions to start doing the matching. It
    auto-increments, so if a match is found at position 2, then startAt will be
    set to 3.  If the end is reached startAt will return to 0.

    MOST of the time the parser will be setting startAt manually to 0.
  */
  class ResumableMultiRegex {
    constructor() {
      // @ts-ignore
      this.rules = [];
      // @ts-ignore
      this.multiRegexes = [];
      this.count = 0;

      this.lastIndex = 0;
      this.regexIndex = 0;
    }

    // @ts-ignore
    getMatcher(index) {
      if (this.multiRegexes[index]) return this.multiRegexes[index];

      const matcher = new MultiRegex();
      this.rules.slice(index).forEach(([re, opts]) => matcher.addRule(re, opts));
      matcher.compile();
      this.multiRegexes[index] = matcher;
      return matcher;
    }

    resumingScanAtSamePosition() {
      return this.regexIndex !== 0;
    }

    considerAll() {
      this.regexIndex = 0;
    }

    // @ts-ignore
    addRule(re, opts) {
      this.rules.push([re, opts]);
      if (opts.type === "begin") this.count++;
    }

    /** @param {string} s */
    exec(s) {
      const m = this.getMatcher(this.regexIndex);
      m.lastIndex = this.lastIndex;
      let result = m.exec(s);

      // The following is because we have no easy way to say "resume scanning at the
      // existing position but also skip the current rule ONLY". What happens is
      // all prior rules are also skipped which can result in matching the wrong
      // thing. Example of matching "booger":

      // our matcher is [string, "booger", number]
      //
      // ....booger....

      // if "booger" is ignored then we'd really need a regex to scan from the
      // SAME position for only: [string, number] but ignoring "booger" (if it
      // was the first match), a simple resume would scan ahead who knows how
      // far looking only for "number", ignoring potential string matches (or
      // future "booger" matches that might be valid.)

      // So what we do: We execute two matchers, one resuming at the same
      // position, but the second full matcher starting at the position after:

      //     /--- resume first regex match here (for [number])
      //     |/---- full match here for [string, "booger", number]
      //     vv
      // ....booger....

      // Which ever results in a match first is then used. So this 3-4 step
      // process essentially allows us to say "match at this position, excluding
      // a prior rule that was ignored".
      //
      // 1. Match "booger" first, ignore. Also proves that [string] does non match.
      // 2. Resume matching for [number]
      // 3. Match at index + 1 for [string, "booger", number]
      // 4. If #2 and #3 result in matches, which came first?
      if (this.resumingScanAtSamePosition()) {
        if (result && result.index === this.lastIndex) ; else { // use the second matcher result
          const m2 = this.getMatcher(0);
          m2.lastIndex = this.lastIndex + 1;
          result = m2.exec(s);
        }
      }

      if (result) {
        this.regexIndex += result.position + 1;
        if (this.regexIndex === this.count) {
          // wrap-around to considering all matches again
          this.considerAll();
        }
      }

      return result;
    }
  }

  /**
   * Given a mode, builds a huge ResumableMultiRegex that can be used to walk
   * the content and find matches.
   *
   * @param {CompiledMode} mode
   * @returns {ResumableMultiRegex}
   */
  function buildModeRegex(mode) {
    const mm = new ResumableMultiRegex();

    mode.contains.forEach(term => mm.addRule(term.begin, { rule: term, type: "begin" }));

    if (mode.terminatorEnd) {
      mm.addRule(mode.terminatorEnd, { type: "end" });
    }
    if (mode.illegal) {
      mm.addRule(mode.illegal, { type: "illegal" });
    }

    return mm;
  }

  /** skip vs abort vs ignore
   *
   * @skip   - The mode is still entered and exited normally (and contains rules apply),
   *           but all content is held and added to the parent buffer rather than being
   *           output when the mode ends.  Mostly used with `sublanguage` to build up
   *           a single large buffer than can be parsed by sublanguage.
   *
   *             - The mode begin ands ends normally.
   *             - Content matched is added to the parent mode buffer.
   *             - The parser cursor is moved forward normally.
   *
   * @abort  - A hack placeholder until we have ignore.  Aborts the mode (as if it
   *           never matched) but DOES NOT continue to match subsequent `contains`
   *           modes.  Abort is bad/suboptimal because it can result in modes
   *           farther down not getting applied because an earlier rule eats the
   *           content but then aborts.
   *
   *             - The mode does not begin.
   *             - Content matched by `begin` is added to the mode buffer.
   *             - The parser cursor is moved forward accordingly.
   *
   * @ignore - Ignores the mode (as if it never matched) and continues to match any
   *           subsequent `contains` modes.  Ignore isn't technically possible with
   *           the current parser implementation.
   *
   *             - The mode does not begin.
   *             - Content matched by `begin` is ignored.
   *             - The parser cursor is not moved forward.
   */

  /**
   * Compiles an individual mode
   *
   * This can raise an error if the mode contains certain detectable known logic
   * issues.
   * @param {Mode} mode
   * @param {CompiledMode | null} [parent]
   * @returns {CompiledMode | never}
   */
  function compileMode(mode, parent) {
    const cmode = /** @type CompiledMode */ (mode);
    if (mode.isCompiled) return cmode;

    [
      scopeClassName,
      // do this early so compiler extensions generally don't have to worry about
      // the distinction between match/begin
      compileMatch,
      MultiClass,
      beforeMatchExt
    ].forEach(ext => ext(mode, parent));

    language.compilerExtensions.forEach(ext => ext(mode, parent));

    // __beforeBegin is considered private API, internal use only
    mode.__beforeBegin = null;

    [
      beginKeywords,
      // do this later so compiler extensions that come earlier have access to the
      // raw array if they wanted to perhaps manipulate it, etc.
      compileIllegal,
      // default to 1 relevance if not specified
      compileRelevance
    ].forEach(ext => ext(mode, parent));

    mode.isCompiled = true;

    let keywordPattern = null;
    if (typeof mode.keywords === "object" && mode.keywords.$pattern) {
      // we need a copy because keywords might be compiled multiple times
      // so we can't go deleting $pattern from the original on the first
      // pass
      mode.keywords = Object.assign({}, mode.keywords);
      keywordPattern = mode.keywords.$pattern;
      delete mode.keywords.$pattern;
    }
    keywordPattern = keywordPattern || /\w+/;

    if (mode.keywords) {
      mode.keywords = compileKeywords(mode.keywords, language.case_insensitive);
    }

    cmode.keywordPatternRe = langRe(keywordPattern, true);

    if (parent) {
      if (!mode.begin) mode.begin = /\B|\b/;
      cmode.beginRe = langRe(cmode.begin);
      if (!mode.end && !mode.endsWithParent) mode.end = /\B|\b/;
      if (mode.end) cmode.endRe = langRe(cmode.end);
      cmode.terminatorEnd = source(cmode.end) || '';
      if (mode.endsWithParent && parent.terminatorEnd) {
        cmode.terminatorEnd += (mode.end ? '|' : '') + parent.terminatorEnd;
      }
    }
    if (mode.illegal) cmode.illegalRe = langRe(/** @type {RegExp | string} */ (mode.illegal));
    if (!mode.contains) mode.contains = [];

    mode.contains = [].concat(...mode.contains.map(function(c) {
      return expandOrCloneMode(c === 'self' ? mode : c);
    }));
    mode.contains.forEach(function(c) { compileMode(/** @type Mode */ (c), cmode); });

    if (mode.starts) {
      compileMode(mode.starts, parent);
    }

    cmode.matcher = buildModeRegex(cmode);
    return cmode;
  }

  if (!language.compilerExtensions) language.compilerExtensions = [];

  // self is not valid at the top-level
  if (language.contains && language.contains.includes('self')) {
    throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
  }

  // we need a null object, which inherit will guarantee
  language.classNameAliases = inherit$1(language.classNameAliases || {});

  return compileMode(/** @type Mode */ (language));
}

/**
 * Determines if a mode has a dependency on it's parent or not
 *
 * If a mode does have a parent dependency then often we need to clone it if
 * it's used in multiple places so that each copy points to the correct parent,
 * where-as modes without a parent can often safely be re-used at the bottom of
 * a mode chain.
 *
 * @param {Mode | null} mode
 * @returns {boolean} - is there a dependency on the parent?
 * */
function dependencyOnParent(mode) {
  if (!mode) return false;

  return mode.endsWithParent || dependencyOnParent(mode.starts);
}

/**
 * Expands a mode or clones it if necessary
 *
 * This is necessary for modes with parental dependenceis (see notes on
 * `dependencyOnParent`) and for nodes that have `variants` - which must then be
 * exploded into their own individual modes at compile time.
 *
 * @param {Mode} mode
 * @returns {Mode | Mode[]}
 * */
function expandOrCloneMode(mode) {
  if (mode.variants && !mode.cachedVariants) {
    mode.cachedVariants = mode.variants.map(function(variant) {
      return inherit$1(mode, { variants: null }, variant);
    });
  }

  // EXPAND
  // if we have variants then essentially "replace" the mode with the variants
  // this happens in compileMode, where this function is called from
  if (mode.cachedVariants) {
    return mode.cachedVariants;
  }

  // CLONE
  // if we have dependencies on parents then we need a unique
  // instance of ourselves, so we can be reused with many
  // different parents without issue
  if (dependencyOnParent(mode)) {
    return inherit$1(mode, { starts: mode.starts ? inherit$1(mode.starts) : null });
  }

  if (Object.isFrozen(mode)) {
    return inherit$1(mode);
  }

  // no special dependency issues, just return ourselves
  return mode;
}

var version = "11.10.0";

class HTMLInjectionError extends Error {
  constructor(reason, html) {
    super(reason);
    this.name = "HTMLInjectionError";
    this.html = html;
  }
}

/*
Syntax highlighting with language autodetection.
https://highlightjs.org/
*/



/**
@typedef {import('highlight.js').Mode} Mode
@typedef {import('highlight.js').CompiledMode} CompiledMode
@typedef {import('highlight.js').CompiledScope} CompiledScope
@typedef {import('highlight.js').Language} Language
@typedef {import('highlight.js').HLJSApi} HLJSApi
@typedef {import('highlight.js').HLJSPlugin} HLJSPlugin
@typedef {import('highlight.js').PluginEvent} PluginEvent
@typedef {import('highlight.js').HLJSOptions} HLJSOptions
@typedef {import('highlight.js').LanguageFn} LanguageFn
@typedef {import('highlight.js').HighlightedHTMLElement} HighlightedHTMLElement
@typedef {import('highlight.js').BeforeHighlightContext} BeforeHighlightContext
@typedef {import('highlight.js/private').MatchType} MatchType
@typedef {import('highlight.js/private').KeywordData} KeywordData
@typedef {import('highlight.js/private').EnhancedMatch} EnhancedMatch
@typedef {import('highlight.js/private').AnnotatedError} AnnotatedError
@typedef {import('highlight.js').AutoHighlightResult} AutoHighlightResult
@typedef {import('highlight.js').HighlightOptions} HighlightOptions
@typedef {import('highlight.js').HighlightResult} HighlightResult
*/


const escape = escapeHTML;
const inherit = inherit$1;
const NO_MATCH = Symbol("nomatch");
const MAX_KEYWORD_HITS = 7;

/**
 * @param {any} hljs - object that is extended (legacy)
 * @returns {HLJSApi}
 */
const HLJS = function(hljs) {
  // Global internal variables used within the highlight.js library.
  /** @type {Record<string, Language>} */
  const languages = Object.create(null);
  /** @type {Record<string, string>} */
  const aliases = Object.create(null);
  /** @type {HLJSPlugin[]} */
  const plugins = [];

  // safe/production mode - swallows more errors, tries to keep running
  // even if a single syntax or parse hits a fatal error
  let SAFE_MODE = true;
  const LANGUAGE_NOT_FOUND = "Could not find the language '{}', did you forget to load/include a language module?";
  /** @type {Language} */
  const PLAINTEXT_LANGUAGE = { disableAutodetect: true, name: 'Plain text', contains: [] };

  // Global options used when within external APIs. This is modified when
  // calling the `hljs.configure` function.
  /** @type HLJSOptions */
  let options = {
    ignoreUnescapedHTML: false,
    throwUnescapedHTML: false,
    noHighlightRe: /^(no-?highlight)$/i,
    languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
    classPrefix: 'hljs-',
    cssSelector: 'pre code',
    languages: null,
    // beta configuration options, subject to change, welcome to discuss
    // https://github.com/highlightjs/highlight.js/issues/1086
    __emitter: TokenTreeEmitter
  };

  /* Utility functions */

  /**
   * Tests a language name to see if highlighting should be skipped
   * @param {string} languageName
   */
  function shouldNotHighlight(languageName) {
    return options.noHighlightRe.test(languageName);
  }

  /**
   * @param {HighlightedHTMLElement} block - the HTML element to determine language for
   */
  function blockLanguage(block) {
    let classes = block.className + ' ';

    classes += block.parentNode ? block.parentNode.className : '';

    // language-* takes precedence over non-prefixed class names.
    const match = options.languageDetectRe.exec(classes);
    if (match) {
      const language = getLanguage(match[1]);
      if (!language) {
        warn(LANGUAGE_NOT_FOUND.replace("{}", match[1]));
        warn("Falling back to no-highlight mode for this block.", block);
      }
      return language ? match[1] : 'no-highlight';
    }

    return classes
      .split(/\s+/)
      .find((_class) => shouldNotHighlight(_class) || getLanguage(_class));
  }

  /**
   * Core highlighting function.
   *
   * OLD API
   * highlight(lang, code, ignoreIllegals, continuation)
   *
   * NEW API
   * highlight(code, {lang, ignoreIllegals})
   *
   * @param {string} codeOrLanguageName - the language to use for highlighting
   * @param {string | HighlightOptions} optionsOrCode - the code to highlight
   * @param {boolean} [ignoreIllegals] - whether to ignore illegal matches, default is to bail
   *
   * @returns {HighlightResult} Result - an object that represents the result
   * @property {string} language - the language name
   * @property {number} relevance - the relevance score
   * @property {string} value - the highlighted HTML code
   * @property {string} code - the original raw code
   * @property {CompiledMode} top - top of the current mode stack
   * @property {boolean} illegal - indicates whether any illegal matches were found
  */
  function highlight(codeOrLanguageName, optionsOrCode, ignoreIllegals) {
    let code = "";
    let languageName = "";
    if (typeof optionsOrCode === "object") {
      code = codeOrLanguageName;
      ignoreIllegals = optionsOrCode.ignoreIllegals;
      languageName = optionsOrCode.language;
    } else {
      // old API
      deprecated("10.7.0", "highlight(lang, code, ...args) has been deprecated.");
      deprecated("10.7.0", "Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277");
      languageName = codeOrLanguageName;
      code = optionsOrCode;
    }

    // https://github.com/highlightjs/highlight.js/issues/3149
    // eslint-disable-next-line no-undefined
    if (ignoreIllegals === undefined) { ignoreIllegals = true; }

    /** @type {BeforeHighlightContext} */
    const context = {
      code,
      language: languageName
    };
    // the plugin can change the desired language or the code to be highlighted
    // just be changing the object it was passed
    fire("before:highlight", context);

    // a before plugin can usurp the result completely by providing it's own
    // in which case we don't even need to call highlight
    const result = context.result
      ? context.result
      : _highlight(context.language, context.code, ignoreIllegals);

    result.code = context.code;
    // the plugin can change anything in result to suite it
    fire("after:highlight", result);

    return result;
  }

  /**
   * private highlight that's used internally and does not fire callbacks
   *
   * @param {string} languageName - the language to use for highlighting
   * @param {string} codeToHighlight - the code to highlight
   * @param {boolean?} [ignoreIllegals] - whether to ignore illegal matches, default is to bail
   * @param {CompiledMode?} [continuation] - current continuation mode, if any
   * @returns {HighlightResult} - result of the highlight operation
  */
  function _highlight(languageName, codeToHighlight, ignoreIllegals, continuation) {
    const keywordHits = Object.create(null);

    /**
     * Return keyword data if a match is a keyword
     * @param {CompiledMode} mode - current mode
     * @param {string} matchText - the textual match
     * @returns {KeywordData | false}
     */
    function keywordData(mode, matchText) {
      return mode.keywords[matchText];
    }

    function processKeywords() {
      if (!top.keywords) {
        emitter.addText(modeBuffer);
        return;
      }

      let lastIndex = 0;
      top.keywordPatternRe.lastIndex = 0;
      let match = top.keywordPatternRe.exec(modeBuffer);
      let buf = "";

      while (match) {
        buf += modeBuffer.substring(lastIndex, match.index);
        const word = language.case_insensitive ? match[0].toLowerCase() : match[0];
        const data = keywordData(top, word);
        if (data) {
          const [kind, keywordRelevance] = data;
          emitter.addText(buf);
          buf = "";

          keywordHits[word] = (keywordHits[word] || 0) + 1;
          if (keywordHits[word] <= MAX_KEYWORD_HITS) relevance += keywordRelevance;
          if (kind.startsWith("_")) {
            // _ implied for relevance only, do not highlight
            // by applying a class name
            buf += match[0];
          } else {
            const cssClass = language.classNameAliases[kind] || kind;
            emitKeyword(match[0], cssClass);
          }
        } else {
          buf += match[0];
        }
        lastIndex = top.keywordPatternRe.lastIndex;
        match = top.keywordPatternRe.exec(modeBuffer);
      }
      buf += modeBuffer.substring(lastIndex);
      emitter.addText(buf);
    }

    function processSubLanguage() {
      if (modeBuffer === "") return;
      /** @type HighlightResult */
      let result = null;

      if (typeof top.subLanguage === 'string') {
        if (!languages[top.subLanguage]) {
          emitter.addText(modeBuffer);
          return;
        }
        result = _highlight(top.subLanguage, modeBuffer, true, continuations[top.subLanguage]);
        continuations[top.subLanguage] = /** @type {CompiledMode} */ (result._top);
      } else {
        result = highlightAuto(modeBuffer, top.subLanguage.length ? top.subLanguage : null);
      }

      // Counting embedded language score towards the host language may be disabled
      // with zeroing the containing mode relevance. Use case in point is Markdown that
      // allows XML everywhere and makes every XML snippet to have a much larger Markdown
      // score.
      if (top.relevance > 0) {
        relevance += result.relevance;
      }
      emitter.__addSublanguage(result._emitter, result.language);
    }

    function processBuffer() {
      if (top.subLanguage != null) {
        processSubLanguage();
      } else {
        processKeywords();
      }
      modeBuffer = '';
    }

    /**
     * @param {string} text
     * @param {string} scope
     */
    function emitKeyword(keyword, scope) {
      if (keyword === "") return;

      emitter.startScope(scope);
      emitter.addText(keyword);
      emitter.endScope();
    }

    /**
     * @param {CompiledScope} scope
     * @param {RegExpMatchArray} match
     */
    function emitMultiClass(scope, match) {
      let i = 1;
      const max = match.length - 1;
      while (i <= max) {
        if (!scope._emit[i]) { i++; continue; }
        const klass = language.classNameAliases[scope[i]] || scope[i];
        const text = match[i];
        if (klass) {
          emitKeyword(text, klass);
        } else {
          modeBuffer = text;
          processKeywords();
          modeBuffer = "";
        }
        i++;
      }
    }

    /**
     * @param {CompiledMode} mode - new mode to start
     * @param {RegExpMatchArray} match
     */
    function startNewMode(mode, match) {
      if (mode.scope && typeof mode.scope === "string") {
        emitter.openNode(language.classNameAliases[mode.scope] || mode.scope);
      }
      if (mode.beginScope) {
        // beginScope just wraps the begin match itself in a scope
        if (mode.beginScope._wrap) {
          emitKeyword(modeBuffer, language.classNameAliases[mode.beginScope._wrap] || mode.beginScope._wrap);
          modeBuffer = "";
        } else if (mode.beginScope._multi) {
          // at this point modeBuffer should just be the match
          emitMultiClass(mode.beginScope, match);
          modeBuffer = "";
        }
      }

      top = Object.create(mode, { parent: { value: top } });
      return top;
    }

    /**
     * @param {CompiledMode } mode - the mode to potentially end
     * @param {RegExpMatchArray} match - the latest match
     * @param {string} matchPlusRemainder - match plus remainder of content
     * @returns {CompiledMode | void} - the next mode, or if void continue on in current mode
     */
    function endOfMode(mode, match, matchPlusRemainder) {
      let matched = startsWith(mode.endRe, matchPlusRemainder);

      if (matched) {
        if (mode["on:end"]) {
          const resp = new Response(mode);
          mode["on:end"](match, resp);
          if (resp.isMatchIgnored) matched = false;
        }

        if (matched) {
          while (mode.endsParent && mode.parent) {
            mode = mode.parent;
          }
          return mode;
        }
      }
      // even if on:end fires an `ignore` it's still possible
      // that we might trigger the end node because of a parent mode
      if (mode.endsWithParent) {
        return endOfMode(mode.parent, match, matchPlusRemainder);
      }
    }

    /**
     * Handle matching but then ignoring a sequence of text
     *
     * @param {string} lexeme - string containing full match text
     */
    function doIgnore(lexeme) {
      if (top.matcher.regexIndex === 0) {
        // no more regexes to potentially match here, so we move the cursor forward one
        // space
        modeBuffer += lexeme[0];
        return 1;
      } else {
        // no need to move the cursor, we still have additional regexes to try and
        // match at this very spot
        resumeScanAtSamePosition = true;
        return 0;
      }
    }

    /**
     * Handle the start of a new potential mode match
     *
     * @param {EnhancedMatch} match - the current match
     * @returns {number} how far to advance the parse cursor
     */
    function doBeginMatch(match) {
      const lexeme = match[0];
      const newMode = match.rule;

      const resp = new Response(newMode);
      // first internal before callbacks, then the public ones
      const beforeCallbacks = [newMode.__beforeBegin, newMode["on:begin"]];
      for (const cb of beforeCallbacks) {
        if (!cb) continue;
        cb(match, resp);
        if (resp.isMatchIgnored) return doIgnore(lexeme);
      }

      if (newMode.skip) {
        modeBuffer += lexeme;
      } else {
        if (newMode.excludeBegin) {
          modeBuffer += lexeme;
        }
        processBuffer();
        if (!newMode.returnBegin && !newMode.excludeBegin) {
          modeBuffer = lexeme;
        }
      }
      startNewMode(newMode, match);
      return newMode.returnBegin ? 0 : lexeme.length;
    }

    /**
     * Handle the potential end of mode
     *
     * @param {RegExpMatchArray} match - the current match
     */
    function doEndMatch(match) {
      const lexeme = match[0];
      const matchPlusRemainder = codeToHighlight.substring(match.index);

      const endMode = endOfMode(top, match, matchPlusRemainder);
      if (!endMode) { return NO_MATCH; }

      const origin = top;
      if (top.endScope && top.endScope._wrap) {
        processBuffer();
        emitKeyword(lexeme, top.endScope._wrap);
      } else if (top.endScope && top.endScope._multi) {
        processBuffer();
        emitMultiClass(top.endScope, match);
      } else if (origin.skip) {
        modeBuffer += lexeme;
      } else {
        if (!(origin.returnEnd || origin.excludeEnd)) {
          modeBuffer += lexeme;
        }
        processBuffer();
        if (origin.excludeEnd) {
          modeBuffer = lexeme;
        }
      }
      do {
        if (top.scope) {
          emitter.closeNode();
        }
        if (!top.skip && !top.subLanguage) {
          relevance += top.relevance;
        }
        top = top.parent;
      } while (top !== endMode.parent);
      if (endMode.starts) {
        startNewMode(endMode.starts, match);
      }
      return origin.returnEnd ? 0 : lexeme.length;
    }

    function processContinuations() {
      const list = [];
      for (let current = top; current !== language; current = current.parent) {
        if (current.scope) {
          list.unshift(current.scope);
        }
      }
      list.forEach(item => emitter.openNode(item));
    }

    /** @type {{type?: MatchType, index?: number, rule?: Mode}}} */
    let lastMatch = {};

    /**
     *  Process an individual match
     *
     * @param {string} textBeforeMatch - text preceding the match (since the last match)
     * @param {EnhancedMatch} [match] - the match itself
     */
    function processLexeme(textBeforeMatch, match) {
      const lexeme = match && match[0];

      // add non-matched text to the current mode buffer
      modeBuffer += textBeforeMatch;

      if (lexeme == null) {
        processBuffer();
        return 0;
      }

      // we've found a 0 width match and we're stuck, so we need to advance
      // this happens when we have badly behaved rules that have optional matchers to the degree that
      // sometimes they can end up matching nothing at all
      // Ref: https://github.com/highlightjs/highlight.js/issues/2140
      if (lastMatch.type === "begin" && match.type === "end" && lastMatch.index === match.index && lexeme === "") {
        // spit the "skipped" character that our regex choked on back into the output sequence
        modeBuffer += codeToHighlight.slice(match.index, match.index + 1);
        if (!SAFE_MODE) {
          /** @type {AnnotatedError} */
          const err = new Error(`0 width match regex (${languageName})`);
          err.languageName = languageName;
          err.badRule = lastMatch.rule;
          throw err;
        }
        return 1;
      }
      lastMatch = match;

      if (match.type === "begin") {
        return doBeginMatch(match);
      } else if (match.type === "illegal" && !ignoreIllegals) {
        // illegal match, we do not continue processing
        /** @type {AnnotatedError} */
        const err = new Error('Illegal lexeme "' + lexeme + '" for mode "' + (top.scope || '<unnamed>') + '"');
        err.mode = top;
        throw err;
      } else if (match.type === "end") {
        const processed = doEndMatch(match);
        if (processed !== NO_MATCH) {
          return processed;
        }
      }

      // edge case for when illegal matches $ (end of line) which is technically
      // a 0 width match but not a begin/end match so it's not caught by the
      // first handler (when ignoreIllegals is true)
      if (match.type === "illegal" && lexeme === "") {
        // advance so we aren't stuck in an infinite loop
        return 1;
      }

      // infinite loops are BAD, this is a last ditch catch all. if we have a
      // decent number of iterations yet our index (cursor position in our
      // parsing) still 3x behind our index then something is very wrong
      // so we bail
      if (iterations > 100000 && iterations > match.index * 3) {
        const err = new Error('potential infinite loop, way more iterations than matches');
        throw err;
      }

      /*
      Why might be find ourselves here?  An potential end match that was
      triggered but could not be completed.  IE, `doEndMatch` returned NO_MATCH.
      (this could be because a callback requests the match be ignored, etc)

      This causes no real harm other than stopping a few times too many.
      */

      modeBuffer += lexeme;
      return lexeme.length;
    }

    const language = getLanguage(languageName);
    if (!language) {
      error(LANGUAGE_NOT_FOUND.replace("{}", languageName));
      throw new Error('Unknown language: "' + languageName + '"');
    }

    const md = compileLanguage(language);
    let result = '';
    /** @type {CompiledMode} */
    let top = continuation || md;
    /** @type Record<string,CompiledMode> */
    const continuations = {}; // keep continuations for sub-languages
    const emitter = new options.__emitter(options);
    processContinuations();
    let modeBuffer = '';
    let relevance = 0;
    let index = 0;
    let iterations = 0;
    let resumeScanAtSamePosition = false;

    try {
      if (!language.__emitTokens) {
        top.matcher.considerAll();

        for (;;) {
          iterations++;
          if (resumeScanAtSamePosition) {
            // only regexes not matched previously will now be
            // considered for a potential match
            resumeScanAtSamePosition = false;
          } else {
            top.matcher.considerAll();
          }
          top.matcher.lastIndex = index;

          const match = top.matcher.exec(codeToHighlight);
          // console.log("match", match[0], match.rule && match.rule.begin)

          if (!match) break;

          const beforeMatch = codeToHighlight.substring(index, match.index);
          const processedCount = processLexeme(beforeMatch, match);
          index = match.index + processedCount;
        }
        processLexeme(codeToHighlight.substring(index));
      } else {
        language.__emitTokens(codeToHighlight, emitter);
      }

      emitter.finalize();
      result = emitter.toHTML();

      return {
        language: languageName,
        value: result,
        relevance,
        illegal: false,
        _emitter: emitter,
        _top: top
      };
    } catch (err) {
      if (err.message && err.message.includes('Illegal')) {
        return {
          language: languageName,
          value: escape(codeToHighlight),
          illegal: true,
          relevance: 0,
          _illegalBy: {
            message: err.message,
            index,
            context: codeToHighlight.slice(index - 100, index + 100),
            mode: err.mode,
            resultSoFar: result
          },
          _emitter: emitter
        };
      } else if (SAFE_MODE) {
        return {
          language: languageName,
          value: escape(codeToHighlight),
          illegal: false,
          relevance: 0,
          errorRaised: err,
          _emitter: emitter,
          _top: top
        };
      } else {
        throw err;
      }
    }
  }

  /**
   * returns a valid highlight result, without actually doing any actual work,
   * auto highlight starts with this and it's possible for small snippets that
   * auto-detection may not find a better match
   * @param {string} code
   * @returns {HighlightResult}
   */
  function justTextHighlightResult(code) {
    const result = {
      value: escape(code),
      illegal: false,
      relevance: 0,
      _top: PLAINTEXT_LANGUAGE,
      _emitter: new options.__emitter(options)
    };
    result._emitter.addText(code);
    return result;
  }

  /**
  Highlighting with language detection. Accepts a string with the code to
  highlight. Returns an object with the following properties:

  - language (detected language)
  - relevance (int)
  - value (an HTML string with highlighting markup)
  - secondBest (object with the same structure for second-best heuristically
    detected language, may be absent)

    @param {string} code
    @param {Array<string>} [languageSubset]
    @returns {AutoHighlightResult}
  */
  function highlightAuto(code, languageSubset) {
    languageSubset = languageSubset || options.languages || Object.keys(languages);
    const plaintext = justTextHighlightResult(code);

    const results = languageSubset.filter(getLanguage).filter(autoDetection).map(name =>
      _highlight(name, code, false)
    );
    results.unshift(plaintext); // plaintext is always an option

    const sorted = results.sort((a, b) => {
      // sort base on relevance
      if (a.relevance !== b.relevance) return b.relevance - a.relevance;

      // always award the tie to the base language
      // ie if C++ and Arduino are tied, it's more likely to be C++
      if (a.language && b.language) {
        if (getLanguage(a.language).supersetOf === b.language) {
          return 1;
        } else if (getLanguage(b.language).supersetOf === a.language) {
          return -1;
        }
      }

      // otherwise say they are equal, which has the effect of sorting on
      // relevance while preserving the original ordering - which is how ties
      // have historically been settled, ie the language that comes first always
      // wins in the case of a tie
      return 0;
    });

    const [best, secondBest] = sorted;

    /** @type {AutoHighlightResult} */
    const result = best;
    result.secondBest = secondBest;

    return result;
  }

  /**
   * Builds new class name for block given the language name
   *
   * @param {HTMLElement} element
   * @param {string} [currentLang]
   * @param {string} [resultLang]
   */
  function updateClassName(element, currentLang, resultLang) {
    const language = (currentLang && aliases[currentLang]) || resultLang;

    element.classList.add("hljs");
    element.classList.add(`language-${language}`);
  }

  /**
   * Applies highlighting to a DOM node containing code.
   *
   * @param {HighlightedHTMLElement} element - the HTML element to highlight
  */
  function highlightElement(element) {
    /** @type HTMLElement */
    let node = null;
    const language = blockLanguage(element);

    if (shouldNotHighlight(language)) return;

    fire("before:highlightElement",
      { el: element, language });

    if (element.dataset.highlighted) {
      console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.", element);
      return;
    }

    // we should be all text, no child nodes (unescaped HTML) - this is possibly
    // an HTML injection attack - it's likely too late if this is already in
    // production (the code has likely already done its damage by the time
    // we're seeing it)... but we yell loudly about this so that hopefully it's
    // more likely to be caught in development before making it to production
    if (element.children.length > 0) {
      if (!options.ignoreUnescapedHTML) {
        console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk.");
        console.warn("https://github.com/highlightjs/highlight.js/wiki/security");
        console.warn("The element with unescaped HTML:");
        console.warn(element);
      }
      if (options.throwUnescapedHTML) {
        const err = new HTMLInjectionError(
          "One of your code blocks includes unescaped HTML.",
          element.innerHTML
        );
        throw err;
      }
    }

    node = element;
    const text = node.textContent;
    const result = language ? highlight(text, { language, ignoreIllegals: true }) : highlightAuto(text);

    element.innerHTML = result.value;
    element.dataset.highlighted = "yes";
    updateClassName(element, language, result.language);
    element.result = {
      language: result.language,
      // TODO: remove with version 11.0
      re: result.relevance,
      relevance: result.relevance
    };
    if (result.secondBest) {
      element.secondBest = {
        language: result.secondBest.language,
        relevance: result.secondBest.relevance
      };
    }

    fire("after:highlightElement", { el: element, result, text });
  }

  /**
   * Updates highlight.js global options with the passed options
   *
   * @param {Partial<HLJSOptions>} userOptions
   */
  function configure(userOptions) {
    options = inherit(options, userOptions);
  }

  // TODO: remove v12, deprecated
  const initHighlighting = () => {
    highlightAll();
    deprecated("10.6.0", "initHighlighting() deprecated.  Use highlightAll() now.");
  };

  // TODO: remove v12, deprecated
  function initHighlightingOnLoad() {
    highlightAll();
    deprecated("10.6.0", "initHighlightingOnLoad() deprecated.  Use highlightAll() now.");
  }

  let wantsHighlight = false;

  /**
   * auto-highlights all pre>code elements on the page
   */
  function highlightAll() {
    // if we are called too early in the loading process
    if (document.readyState === "loading") {
      wantsHighlight = true;
      return;
    }

    const blocks = document.querySelectorAll(options.cssSelector);
    blocks.forEach(highlightElement);
  }

  function boot() {
    // if a highlight was requested before DOM was loaded, do now
    if (wantsHighlight) highlightAll();
  }

  // make sure we are in the browser environment
  if (typeof window !== 'undefined' && window.addEventListener) {
    window.addEventListener('DOMContentLoaded', boot, false);
  }

  /**
   * Register a language grammar module
   *
   * @param {string} languageName
   * @param {LanguageFn} languageDefinition
   */
  function registerLanguage(languageName, languageDefinition) {
    let lang = null;
    try {
      lang = languageDefinition(hljs);
    } catch (error$1) {
      error("Language definition for '{}' could not be registered.".replace("{}", languageName));
      // hard or soft error
      if (!SAFE_MODE) { throw error$1; } else { error(error$1); }
      // languages that have serious errors are replaced with essentially a
      // "plaintext" stand-in so that the code blocks will still get normal
      // css classes applied to them - and one bad language won't break the
      // entire highlighter
      lang = PLAINTEXT_LANGUAGE;
    }
    // give it a temporary name if it doesn't have one in the meta-data
    if (!lang.name) lang.name = languageName;
    languages[languageName] = lang;
    lang.rawDefinition = languageDefinition.bind(null, hljs);

    if (lang.aliases) {
      registerAliases(lang.aliases, { languageName });
    }
  }

  /**
   * Remove a language grammar module
   *
   * @param {string} languageName
   */
  function unregisterLanguage(languageName) {
    delete languages[languageName];
    for (const alias of Object.keys(aliases)) {
      if (aliases[alias] === languageName) {
        delete aliases[alias];
      }
    }
  }

  /**
   * @returns {string[]} List of language internal names
   */
  function listLanguages() {
    return Object.keys(languages);
  }

  /**
   * @param {string} name - name of the language to retrieve
   * @returns {Language | undefined}
   */
  function getLanguage(name) {
    name = (name || '').toLowerCase();
    return languages[name] || languages[aliases[name]];
  }

  /**
   *
   * @param {string|string[]} aliasList - single alias or list of aliases
   * @param {{languageName: string}} opts
   */
  function registerAliases(aliasList, { languageName }) {
    if (typeof aliasList === 'string') {
      aliasList = [aliasList];
    }
    aliasList.forEach(alias => { aliases[alias.toLowerCase()] = languageName; });
  }

  /**
   * Determines if a given language has auto-detection enabled
   * @param {string} name - name of the language
   */
  function autoDetection(name) {
    const lang = getLanguage(name);
    return lang && !lang.disableAutodetect;
  }

  /**
   * Upgrades the old highlightBlock plugins to the new
   * highlightElement API
   * @param {HLJSPlugin} plugin
   */
  function upgradePluginAPI(plugin) {
    // TODO: remove with v12
    if (plugin["before:highlightBlock"] && !plugin["before:highlightElement"]) {
      plugin["before:highlightElement"] = (data) => {
        plugin["before:highlightBlock"](
          Object.assign({ block: data.el }, data)
        );
      };
    }
    if (plugin["after:highlightBlock"] && !plugin["after:highlightElement"]) {
      plugin["after:highlightElement"] = (data) => {
        plugin["after:highlightBlock"](
          Object.assign({ block: data.el }, data)
        );
      };
    }
  }

  /**
   * @param {HLJSPlugin} plugin
   */
  function addPlugin(plugin) {
    upgradePluginAPI(plugin);
    plugins.push(plugin);
  }

  /**
   * @param {HLJSPlugin} plugin
   */
  function removePlugin(plugin) {
    const index = plugins.indexOf(plugin);
    if (index !== -1) {
      plugins.splice(index, 1);
    }
  }

  /**
   *
   * @param {PluginEvent} event
   * @param {any} args
   */
  function fire(event, args) {
    const cb = event;
    plugins.forEach(function(plugin) {
      if (plugin[cb]) {
        plugin[cb](args);
      }
    });
  }

  /**
   * DEPRECATED
   * @param {HighlightedHTMLElement} el
   */
  function deprecateHighlightBlock(el) {
    deprecated("10.7.0", "highlightBlock will be removed entirely in v12.0");
    deprecated("10.7.0", "Please use highlightElement now.");

    return highlightElement(el);
  }

  /* Interface definition */
  Object.assign(hljs, {
    highlight,
    highlightAuto,
    highlightAll,
    highlightElement,
    // TODO: Remove with v12 API
    highlightBlock: deprecateHighlightBlock,
    configure,
    initHighlighting,
    initHighlightingOnLoad,
    registerLanguage,
    unregisterLanguage,
    listLanguages,
    getLanguage,
    registerAliases,
    autoDetection,
    inherit,
    addPlugin,
    removePlugin
  });

  hljs.debugMode = function() { SAFE_MODE = false; };
  hljs.safeMode = function() { SAFE_MODE = true; };
  hljs.versionString = version;

  hljs.regex = {
    concat: concat,
    lookahead: lookahead,
    either: either,
    optional: optional,
    anyNumberOfTimes: anyNumberOfTimes
  };

  for (const key in MODES) {
    // @ts-ignore
    if (typeof MODES[key] === "object") {
      // @ts-ignore
      deepFreeze(MODES[key]);
    }
  }

  // merge all the modes/regexes into our main object
  Object.assign(hljs, MODES);

  return hljs;
};

// Other names for the variable may break build script
const highlight = HLJS({});

// returns a new instance of the highlighter to be used for extensions
// check https://github.com/wooorm/lowlight/issues/47
highlight.newInstance = () => HLJS({});

var core = highlight;
highlight.HighlightJS = highlight;
highlight.default = highlight;

const HighlightJS = /*@__PURE__*/getDefaultExportFromCjs(core);

const IDENT_RE = '[A-Za-z$_][0-9A-Za-z$_]*';
const KEYWORDS = [
  "as", // for exports
  "in",
  "of",
  "if",
  "for",
  "while",
  "finally",
  "var",
  "new",
  "function",
  "do",
  "return",
  "void",
  "else",
  "break",
  "catch",
  "instanceof",
  "with",
  "throw",
  "case",
  "default",
  "try",
  "switch",
  "continue",
  "typeof",
  "delete",
  "let",
  "yield",
  "const",
  "class",
  // JS handles these with a special rule
  // "get",
  // "set",
  "debugger",
  "async",
  "await",
  "static",
  "import",
  "from",
  "export",
  "extends"
];
const LITERALS = [
  "true",
  "false",
  "null",
  "undefined",
  "NaN",
  "Infinity"
];

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects
const TYPES = [
  // Fundamental objects
  "Object",
  "Function",
  "Boolean",
  "Symbol",
  // numbers and dates
  "Math",
  "Date",
  "Number",
  "BigInt",
  // text
  "String",
  "RegExp",
  // Indexed collections
  "Array",
  "Float32Array",
  "Float64Array",
  "Int8Array",
  "Uint8Array",
  "Uint8ClampedArray",
  "Int16Array",
  "Int32Array",
  "Uint16Array",
  "Uint32Array",
  "BigInt64Array",
  "BigUint64Array",
  // Keyed collections
  "Set",
  "Map",
  "WeakSet",
  "WeakMap",
  // Structured data
  "ArrayBuffer",
  "SharedArrayBuffer",
  "Atomics",
  "DataView",
  "JSON",
  // Control abstraction objects
  "Promise",
  "Generator",
  "GeneratorFunction",
  "AsyncFunction",
  // Reflection
  "Reflect",
  "Proxy",
  // Internationalization
  "Intl",
  // WebAssembly
  "WebAssembly"
];

const ERROR_TYPES = [
  "Error",
  "EvalError",
  "InternalError",
  "RangeError",
  "ReferenceError",
  "SyntaxError",
  "TypeError",
  "URIError"
];

const BUILT_IN_GLOBALS = [
  "setInterval",
  "setTimeout",
  "clearInterval",
  "clearTimeout",

  "require",
  "exports",

  "eval",
  "isFinite",
  "isNaN",
  "parseFloat",
  "parseInt",
  "decodeURI",
  "decodeURIComponent",
  "encodeURI",
  "encodeURIComponent",
  "escape",
  "unescape"
];

const BUILT_IN_VARIABLES = [
  "arguments",
  "this",
  "super",
  "console",
  "window",
  "document",
  "localStorage",
  "sessionStorage",
  "module",
  "global" // Node.js
];

const BUILT_INS = [].concat(
  BUILT_IN_GLOBALS,
  TYPES,
  ERROR_TYPES
);

/*
Language: JavaScript
Description: JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions.
Category: common, scripting, web
Website: https://developer.mozilla.org/en-US/docs/Web/JavaScript
*/


/** @type LanguageFn */
function javascript(hljs) {
  const regex = hljs.regex;
  /**
   * Takes a string like "<Booger" and checks to see
   * if we can find a matching "</Booger" later in the
   * content.
   * @param {RegExpMatchArray} match
   * @param {{after:number}} param1
   */
  const hasClosingTag = (match, { after }) => {
    const tag = "</" + match[0].slice(1);
    const pos = match.input.indexOf(tag, after);
    return pos !== -1;
  };

  const IDENT_RE$1 = IDENT_RE;
  const FRAGMENT = {
    begin: '<>',
    end: '</>'
  };
  // to avoid some special cases inside isTrulyOpeningTag
  const XML_SELF_CLOSING = /<[A-Za-z0-9\\._:-]+\s*\/>/;
  const XML_TAG = {
    begin: /<[A-Za-z0-9\\._:-]+/,
    end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
    /**
     * @param {RegExpMatchArray} match
     * @param {CallbackResponse} response
     */
    isTrulyOpeningTag: (match, response) => {
      const afterMatchIndex = match[0].length + match.index;
      const nextChar = match.input[afterMatchIndex];
      if (
        // HTML should not include another raw `<` inside a tag
        // nested type?
        // `<Array<Array<number>>`, etc.
        nextChar === "<" ||
        // the , gives away that this is not HTML
        // `<T, A extends keyof T, V>`
        nextChar === ","
        ) {
        response.ignoreMatch();
        return;
      }

      // `<something>`
      // Quite possibly a tag, lets look for a matching closing tag...
      if (nextChar === ">") {
        // if we cannot find a matching closing tag, then we
        // will ignore it
        if (!hasClosingTag(match, { after: afterMatchIndex })) {
          response.ignoreMatch();
        }
      }

      // `<blah />` (self-closing)
      // handled by simpleSelfClosing rule

      let m;
      const afterMatch = match.input.substring(afterMatchIndex);

      // some more template typing stuff
      //  <T = any>(key?: string) => Modify<
      if ((m = afterMatch.match(/^\s*=/))) {
        response.ignoreMatch();
        return;
      }

      // `<From extends string>`
      // technically this could be HTML, but it smells like a type
      // NOTE: This is ugh, but added specifically for https://github.com/highlightjs/highlight.js/issues/3276
      if ((m = afterMatch.match(/^\s+extends\s+/))) {
        if (m.index === 0) {
          response.ignoreMatch();
          // eslint-disable-next-line no-useless-return
          return;
        }
      }
    }
  };
  const KEYWORDS$1 = {
    $pattern: IDENT_RE,
    keyword: KEYWORDS,
    literal: LITERALS,
    built_in: BUILT_INS,
    "variable.language": BUILT_IN_VARIABLES
  };

  // https://tc39.es/ecma262/#sec-literals-numeric-literals
  const decimalDigits = '[0-9](_?[0-9])*';
  const frac = `\\.(${decimalDigits})`;
  // DecimalIntegerLiteral, including Annex B NonOctalDecimalIntegerLiteral
  // https://tc39.es/ecma262/#sec-additional-syntax-numeric-literals
  const decimalInteger = `0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*`;
  const NUMBER = {
    className: 'number',
    variants: [
      // DecimalLiteral
      { begin: `(\\b(${decimalInteger})((${frac})|\\.)?|(${frac}))` +
        `[eE][+-]?(${decimalDigits})\\b` },
      { begin: `\\b(${decimalInteger})\\b((${frac})\\b|\\.)?|(${frac})\\b` },

      // DecimalBigIntegerLiteral
      { begin: `\\b(0|[1-9](_?[0-9])*)n\\b` },

      // NonDecimalIntegerLiteral
      { begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b" },
      { begin: "\\b0[bB][0-1](_?[0-1])*n?\\b" },
      { begin: "\\b0[oO][0-7](_?[0-7])*n?\\b" },

      // LegacyOctalIntegerLiteral (does not include underscore separators)
      // https://tc39.es/ecma262/#sec-additional-syntax-numeric-literals
      { begin: "\\b0[0-7]+n?\\b" },
    ],
    relevance: 0
  };

  const SUBST = {
    className: 'subst',
    begin: '\\$\\{',
    end: '\\}',
    keywords: KEYWORDS$1,
    contains: [] // defined later
  };
  const HTML_TEMPLATE = {
    begin: '\.?html`',
    end: '',
    starts: {
      end: '`',
      returnEnd: false,
      contains: [
        hljs.BACKSLASH_ESCAPE,
        SUBST
      ],
      subLanguage: 'xml'
    }
  };
  const CSS_TEMPLATE = {
    begin: '\.?css`',
    end: '',
    starts: {
      end: '`',
      returnEnd: false,
      contains: [
        hljs.BACKSLASH_ESCAPE,
        SUBST
      ],
      subLanguage: 'css'
    }
  };
  const GRAPHQL_TEMPLATE = {
    begin: '\.?gql`',
    end: '',
    starts: {
      end: '`',
      returnEnd: false,
      contains: [
        hljs.BACKSLASH_ESCAPE,
        SUBST
      ],
      subLanguage: 'graphql'
    }
  };
  const TEMPLATE_STRING = {
    className: 'string',
    begin: '`',
    end: '`',
    contains: [
      hljs.BACKSLASH_ESCAPE,
      SUBST
    ]
  };
  const JSDOC_COMMENT = hljs.COMMENT(
    /\/\*\*(?!\/)/,
    '\\*/',
    {
      relevance: 0,
      contains: [
        {
          begin: '(?=@[A-Za-z]+)',
          relevance: 0,
          contains: [
            {
              className: 'doctag',
              begin: '@[A-Za-z]+'
            },
            {
              className: 'type',
              begin: '\\{',
              end: '\\}',
              excludeEnd: true,
              excludeBegin: true,
              relevance: 0
            },
            {
              className: 'variable',
              begin: IDENT_RE$1 + '(?=\\s*(-)|$)',
              endsParent: true,
              relevance: 0
            },
            // eat spaces (not newlines) so we can find
            // types or variables
            {
              begin: /(?=[^\n])\s/,
              relevance: 0
            }
          ]
        }
      ]
    }
  );
  const COMMENT = {
    className: "comment",
    variants: [
      JSDOC_COMMENT,
      hljs.C_BLOCK_COMMENT_MODE,
      hljs.C_LINE_COMMENT_MODE
    ]
  };
  const SUBST_INTERNALS = [
    hljs.APOS_STRING_MODE,
    hljs.QUOTE_STRING_MODE,
    HTML_TEMPLATE,
    CSS_TEMPLATE,
    GRAPHQL_TEMPLATE,
    TEMPLATE_STRING,
    // Skip numbers when they are part of a variable name
    { match: /\$\d+/ },
    NUMBER,
    // This is intentional:
    // See https://github.com/highlightjs/highlight.js/issues/3288
    // hljs.REGEXP_MODE
  ];
  SUBST.contains = SUBST_INTERNALS
    .concat({
      // we need to pair up {} inside our subst to prevent
      // it from ending too early by matching another }
      begin: /\{/,
      end: /\}/,
      keywords: KEYWORDS$1,
      contains: [
        "self"
      ].concat(SUBST_INTERNALS)
    });
  const SUBST_AND_COMMENTS = [].concat(COMMENT, SUBST.contains);
  const PARAMS_CONTAINS = SUBST_AND_COMMENTS.concat([
    // eat recursive parens in sub expressions
    {
      begin: /(\s*)\(/,
      end: /\)/,
      keywords: KEYWORDS$1,
      contains: ["self"].concat(SUBST_AND_COMMENTS)
    }
  ]);
  const PARAMS = {
    className: 'params',
    // convert this to negative lookbehind in v12
    begin: /(\s*)\(/, // to match the parms with 
    end: /\)/,
    excludeBegin: true,
    excludeEnd: true,
    keywords: KEYWORDS$1,
    contains: PARAMS_CONTAINS
  };

  // ES6 classes
  const CLASS_OR_EXTENDS = {
    variants: [
      // class Car extends vehicle
      {
        match: [
          /class/,
          /\s+/,
          IDENT_RE$1,
          /\s+/,
          /extends/,
          /\s+/,
          regex.concat(IDENT_RE$1, "(", regex.concat(/\./, IDENT_RE$1), ")*")
        ],
        scope: {
          1: "keyword",
          3: "title.class",
          5: "keyword",
          7: "title.class.inherited"
        }
      },
      // class Car
      {
        match: [
          /class/,
          /\s+/,
          IDENT_RE$1
        ],
        scope: {
          1: "keyword",
          3: "title.class"
        }
      },

    ]
  };

  const CLASS_REFERENCE = {
    relevance: 0,
    match:
    regex.either(
      // Hard coded exceptions
      /\bJSON/,
      // Float32Array, OutT
      /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,
      // CSSFactory, CSSFactoryT
      /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,
      // FPs, FPsT
      /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/,
      // P
      // single letters are not highlighted
      // BLAH
      // this will be flagged as a UPPER_CASE_CONSTANT instead
    ),
    className: "title.class",
    keywords: {
      _: [
        // se we still get relevance credit for JS library classes
        ...TYPES,
        ...ERROR_TYPES
      ]
    }
  };

  const USE_STRICT = {
    label: "use_strict",
    className: 'meta',
    relevance: 10,
    begin: /^\s*['"]use (strict|asm)['"]/
  };

  const FUNCTION_DEFINITION = {
    variants: [
      {
        match: [
          /function/,
          /\s+/,
          IDENT_RE$1,
          /(?=\s*\()/
        ]
      },
      // anonymous function
      {
        match: [
          /function/,
          /\s*(?=\()/
        ]
      }
    ],
    className: {
      1: "keyword",
      3: "title.function"
    },
    label: "func.def",
    contains: [ PARAMS ],
    illegal: /%/
  };

  const UPPER_CASE_CONSTANT = {
    relevance: 0,
    match: /\b[A-Z][A-Z_0-9]+\b/,
    className: "variable.constant"
  };

  function noneOf(list) {
    return regex.concat("(?!", list.join("|"), ")");
  }

  const FUNCTION_CALL = {
    match: regex.concat(
      /\b/,
      noneOf([
        ...BUILT_IN_GLOBALS,
        "super",
        "import"
      ].map(x => `${x}\\s*\\(`)),
      IDENT_RE$1, regex.lookahead(/\s*\(/)),
    className: "title.function",
    relevance: 0
  };

  const PROPERTY_ACCESS = {
    begin: regex.concat(/\./, regex.lookahead(
      regex.concat(IDENT_RE$1, /(?![0-9A-Za-z$_(])/)
    )),
    end: IDENT_RE$1,
    excludeBegin: true,
    keywords: "prototype",
    className: "property",
    relevance: 0
  };

  const GETTER_OR_SETTER = {
    match: [
      /get|set/,
      /\s+/,
      IDENT_RE$1,
      /(?=\()/
    ],
    className: {
      1: "keyword",
      3: "title.function"
    },
    contains: [
      { // eat to avoid empty params
        begin: /\(\)/
      },
      PARAMS
    ]
  };

  const FUNC_LEAD_IN_RE = '(\\(' +
    '[^()]*(\\(' +
    '[^()]*(\\(' +
    '[^()]*' +
    '\\)[^()]*)*' +
    '\\)[^()]*)*' +
    '\\)|' + hljs.UNDERSCORE_IDENT_RE + ')\\s*=>';

  const FUNCTION_VARIABLE = {
    match: [
      /const|var|let/, /\s+/,
      IDENT_RE$1, /\s*/,
      /=\s*/,
      /(async\s*)?/, // async is optional
      regex.lookahead(FUNC_LEAD_IN_RE)
    ],
    keywords: "async",
    className: {
      1: "keyword",
      3: "title.function"
    },
    contains: [
      PARAMS
    ]
  };

  return {
    name: 'JavaScript',
    aliases: ['js', 'jsx', 'mjs', 'cjs'],
    keywords: KEYWORDS$1,
    // this will be extended by TypeScript
    exports: { PARAMS_CONTAINS, CLASS_REFERENCE },
    illegal: /#(?![$_A-z])/,
    contains: [
      hljs.SHEBANG({
        label: "shebang",
        binary: "node",
        relevance: 5
      }),
      USE_STRICT,
      hljs.APOS_STRING_MODE,
      hljs.QUOTE_STRING_MODE,
      HTML_TEMPLATE,
      CSS_TEMPLATE,
      GRAPHQL_TEMPLATE,
      TEMPLATE_STRING,
      COMMENT,
      // Skip numbers when they are part of a variable name
      { match: /\$\d+/ },
      NUMBER,
      CLASS_REFERENCE,
      {
        className: 'attr',
        begin: IDENT_RE$1 + regex.lookahead(':'),
        relevance: 0
      },
      FUNCTION_VARIABLE,
      { // "value" container
        begin: '(' + hljs.RE_STARTERS_RE + '|\\b(case|return|throw)\\b)\\s*',
        keywords: 'return throw case',
        relevance: 0,
        contains: [
          COMMENT,
          hljs.REGEXP_MODE,
          {
            className: 'function',
            // we have to count the parens to make sure we actually have the
            // correct bounding ( ) before the =>.  There could be any number of
            // sub-expressions inside also surrounded by parens.
            begin: FUNC_LEAD_IN_RE,
            returnBegin: true,
            end: '\\s*=>',
            contains: [
              {
                className: 'params',
                variants: [
                  {
                    begin: hljs.UNDERSCORE_IDENT_RE,
                    relevance: 0
                  },
                  {
                    className: null,
                    begin: /\(\s*\)/,
                    skip: true
                  },
                  {
                    begin: /(\s*)\(/,
                    end: /\)/,
                    excludeBegin: true,
                    excludeEnd: true,
                    keywords: KEYWORDS$1,
                    contains: PARAMS_CONTAINS
                  }
                ]
              }
            ]
          },
          { // could be a comma delimited list of params to a function call
            begin: /,/,
            relevance: 0
          },
          {
            match: /\s+/,
            relevance: 0
          },
          { // JSX
            variants: [
              { begin: FRAGMENT.begin, end: FRAGMENT.end },
              { match: XML_SELF_CLOSING },
              {
                begin: XML_TAG.begin,
                // we carefully check the opening tag to see if it truly
                // is a tag and not a false positive
                'on:begin': XML_TAG.isTrulyOpeningTag,
                end: XML_TAG.end
              }
            ],
            subLanguage: 'xml',
            contains: [
              {
                begin: XML_TAG.begin,
                end: XML_TAG.end,
                skip: true,
                contains: ['self']
              }
            ]
          }
        ],
      },
      FUNCTION_DEFINITION,
      {
        // prevent this from getting swallowed up by function
        // since they appear "function like"
        beginKeywords: "while if switch catch for"
      },
      {
        // we have to count the parens to make sure we actually have the correct
        // bounding ( ).  There could be any number of sub-expressions inside
        // also surrounded by parens.
        begin: '\\b(?!function)' + hljs.UNDERSCORE_IDENT_RE +
          '\\(' + // first parens
          '[^()]*(\\(' +
            '[^()]*(\\(' +
              '[^()]*' +
            '\\)[^()]*)*' +
          '\\)[^()]*)*' +
          '\\)\\s*\\{', // end parens
        returnBegin:true,
        label: "func.def",
        contains: [
          PARAMS,
          hljs.inherit(hljs.TITLE_MODE, { begin: IDENT_RE$1, className: "title.function" })
        ]
      },
      // catch ... so it won't trigger the property rule below
      {
        match: /\.\.\./,
        relevance: 0
      },
      PROPERTY_ACCESS,
      // hack: prevents detection of keywords in some circumstances
      // .keyword()
      // $keyword = x
      {
        match: '\\$' + IDENT_RE$1,
        relevance: 0
      },
      {
        match: [ /\bconstructor(?=\s*\()/ ],
        className: { 1: "title.function" },
        contains: [ PARAMS ]
      },
      FUNCTION_CALL,
      UPPER_CASE_CONSTANT,
      CLASS_OR_EXTENDS,
      GETTER_OR_SETTER,
      {
        match: /\$[(.]/ // relevance booster for a pattern common to JS libs: `$(something)` and `$.something`
      }
    ]
  };
}

/*
Language: HTML, XML
Website: https://www.w3.org/XML/
Category: common, web
Audit: 2020
*/

/** @type LanguageFn */
function xml(hljs) {
  const regex = hljs.regex;
  // XML names can have the following additional letters: https://www.w3.org/TR/xml/#NT-NameChar
  // OTHER_NAME_CHARS = /[:\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]/;
  // Element names start with NAME_START_CHAR followed by optional other Unicode letters, ASCII digits, hyphens, underscores, and periods
  // const TAG_NAME_RE = regex.concat(/[A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/, regex.optional(/[A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*:/), /[A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*/);;
  // const XML_IDENT_RE = /[A-Z_a-z:\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]+/;
  // const TAG_NAME_RE = regex.concat(/[A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/, regex.optional(/[A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*:/), /[A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*/);
  // however, to cater for performance and more Unicode support rely simply on the Unicode letter class
  const TAG_NAME_RE = regex.concat(/[\p{L}_]/u, regex.optional(/[\p{L}0-9_.-]*:/u), /[\p{L}0-9_.-]*/u);
  const XML_IDENT_RE = /[\p{L}0-9._:-]+/u;
  const XML_ENTITIES = {
    className: 'symbol',
    begin: /&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/
  };
  const XML_META_KEYWORDS = {
    begin: /\s/,
    contains: [
      {
        className: 'keyword',
        begin: /#?[a-z_][a-z1-9_-]+/,
        illegal: /\n/
      }
    ]
  };
  const XML_META_PAR_KEYWORDS = hljs.inherit(XML_META_KEYWORDS, {
    begin: /\(/,
    end: /\)/
  });
  const APOS_META_STRING_MODE = hljs.inherit(hljs.APOS_STRING_MODE, { className: 'string' });
  const QUOTE_META_STRING_MODE = hljs.inherit(hljs.QUOTE_STRING_MODE, { className: 'string' });
  const TAG_INTERNALS = {
    endsWithParent: true,
    illegal: /</,
    relevance: 0,
    contains: [
      {
        className: 'attr',
        begin: XML_IDENT_RE,
        relevance: 0
      },
      {
        begin: /=\s*/,
        relevance: 0,
        contains: [
          {
            className: 'string',
            endsParent: true,
            variants: [
              {
                begin: /"/,
                end: /"/,
                contains: [ XML_ENTITIES ]
              },
              {
                begin: /'/,
                end: /'/,
                contains: [ XML_ENTITIES ]
              },
              { begin: /[^\s"'=<>`]+/ }
            ]
          }
        ]
      }
    ]
  };
  return {
    name: 'HTML, XML',
    aliases: [
      'html',
      'xhtml',
      'rss',
      'atom',
      'xjb',
      'xsd',
      'xsl',
      'plist',
      'wsf',
      'svg'
    ],
    case_insensitive: true,
    unicodeRegex: true,
    contains: [
      {
        className: 'meta',
        begin: /<![a-z]/,
        end: />/,
        relevance: 10,
        contains: [
          XML_META_KEYWORDS,
          QUOTE_META_STRING_MODE,
          APOS_META_STRING_MODE,
          XML_META_PAR_KEYWORDS,
          {
            begin: /\[/,
            end: /\]/,
            contains: [
              {
                className: 'meta',
                begin: /<![a-z]/,
                end: />/,
                contains: [
                  XML_META_KEYWORDS,
                  XML_META_PAR_KEYWORDS,
                  QUOTE_META_STRING_MODE,
                  APOS_META_STRING_MODE
                ]
              }
            ]
          }
        ]
      },
      hljs.COMMENT(
        /<!--/,
        /-->/,
        { relevance: 10 }
      ),
      {
        begin: /<!\[CDATA\[/,
        end: /\]\]>/,
        relevance: 10
      },
      XML_ENTITIES,
      // xml processing instructions
      {
        className: 'meta',
        end: /\?>/,
        variants: [
          {
            begin: /<\?xml/,
            relevance: 10,
            contains: [
              QUOTE_META_STRING_MODE
            ]
          },
          {
            begin: /<\?[a-z][a-z0-9]+/,
          }
        ]

      },
      {
        className: 'tag',
        /*
        The lookahead pattern (?=...) ensures that 'begin' only matches
        '<style' as a single word, followed by a whitespace or an
        ending bracket.
        */
        begin: /<style(?=\s|>)/,
        end: />/,
        keywords: { name: 'style' },
        contains: [ TAG_INTERNALS ],
        starts: {
          end: /<\/style>/,
          returnEnd: true,
          subLanguage: [
            'css',
            'xml'
          ]
        }
      },
      {
        className: 'tag',
        // See the comment in the <style tag about the lookahead pattern
        begin: /<script(?=\s|>)/,
        end: />/,
        keywords: { name: 'script' },
        contains: [ TAG_INTERNALS ],
        starts: {
          end: /<\/script>/,
          returnEnd: true,
          subLanguage: [
            'javascript',
            'handlebars',
            'xml'
          ]
        }
      },
      // we need this for now for jSX
      {
        className: 'tag',
        begin: /<>|<\/>/
      },
      // open tag
      {
        className: 'tag',
        begin: regex.concat(
          /</,
          regex.lookahead(regex.concat(
            TAG_NAME_RE,
            // <tag/>
            // <tag>
            // <tag ...
            regex.either(/\/>/, />/, /\s/)
          ))
        ),
        end: /\/?>/,
        contains: [
          {
            className: 'name',
            begin: TAG_NAME_RE,
            relevance: 0,
            starts: TAG_INTERNALS
          }
        ]
      },
      // close tag
      {
        className: 'tag',
        begin: regex.concat(
          /<\//,
          regex.lookahead(regex.concat(
            TAG_NAME_RE, />/
          ))
        ),
        contains: [
          {
            className: 'name',
            begin: TAG_NAME_RE,
            relevance: 0
          },
          {
            begin: />/,
            relevance: 0,
            endsParent: true
          }
        ]
      }
    ]
  };
}

function CodeExample({
  code,
  language = "javascript",
  codepenHtml,
  codepenCssExternal,
  withoutCodepen,
  ...props
}) {
  const codeRef = reactExports.useRef();
  const codepenForm = reactExports.useRef();
  const codepenFormData = reactExports.useRef();
  const isAsync = !!code.match(/(^|\n)\w.*await/);
  reactExports.useEffect(() => {
    if (!codeRef.current || codeRef.current.classList.contains("hljs")) {
      return;
    }
    if (language === "javascript") {
      HighlightJS.registerLanguage("javascript", javascript);
    } else if (language === "xml") {
      HighlightJS.registerLanguage("xml", xml);
    }
    HighlightJS.highlightElement(codeRef.current);
  }, [codeRef, language]);
  const openInCodepen = (event) => {
    if (event.nativeEvent.offsetY < 0) {
      const codepenValue = {
        js_external: "https://cdn.jsdelivr.net/npm/sweetalert2@11",
        css: 'body {\n  font-family: "Open Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Helvetica, Arial, sans-serif; \n}'
      };
      codepenValue.html = codepenHtml;
      codepenValue.css_external = codepenCssExternal;
      codepenValue.js = "";
      if (isAsync) {
        codepenValue.js += `(async () => {
`;
        code = code.replace(/(^|\n)/g, "$1  ");
      }
      codepenValue.js += code.replace(/\/images/g, `${window.location.href}images`);
      if (isAsync) {
        codepenValue.js += `
})()`;
      }
      codepenFormData.current.value = JSON.stringify(codepenValue);
      codepenForm.current.submit();
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { className: withoutCodepen ? "" : "code-sample", onClick: openInCodepen, ...props, children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { ref: codeRef, children: code }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("form", { action: "https://codepen.io/pen/define", method: "POST", target: "_blank", ref: codepenForm, children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "hidden", name: "data", ref: codepenFormData }) })
  ] });
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
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "center-container", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://m.do.co/c/12907f2ba0bf", target: "_blank", rel: "noreferrer noopener", tabIndex: -1, children: "Get $200 in free credits with DigitalOcean!" }) }) })
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
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "center-container", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { id: "usage", children: "Usage" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mobile-hidden", children: [
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
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "center-container", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { id: "frameworks-integrations", children: "Integrations with major JS frameworks" }),
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
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "didRender", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover-anchor", href: "#didRender", children: "#" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "didRender" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: "undefined" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              "Popup lifecycle hook. Synchronously runs after the popup DOM has been updated (ie. just before the popup is repainted on the screen).",
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
    /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "examples", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ui", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Mixin example" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "show-example-btn", "aria-label": "Try me! Example: Mixin", onClick: examples.mixin.fn, children: "Try me!" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CodeExample, { code: examples.mixin.fnString })
    ] }) })
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
    ] })
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
    ] })
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
    ] }) })
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
    ] }) })
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

function Themes() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { id: "themes", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://github.com/sweetalert2/sweetalert2-themes", target: "_blank", children: [
      "Themes ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-external-link" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "themes center-container", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Dark" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://github.com/sweetalert2/sweetalert2-themes/tree/main/dark", target: "_blank", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "images/themes-dark.png", alt: "theme dark" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Minimal" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://github.com/sweetalert2/sweetalert2-themes/tree/main/minimal", target: "_blank", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "images/themes-minimal.png", alt: "theme minimal" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Borderless" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://github.com/sweetalert2/sweetalert2-themes/tree/main/borderless", target: "_blank", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "images/themes-borderless.png", alt: "theme borderless" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Bootstrap 4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://github.com/sweetalert2/sweetalert2-themes/tree/main/bootstrap-4", target: "_blank", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "images/themes-bootstrap-4.png", alt: "theme bootstrap 4" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Bulma" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://github.com/sweetalert2/sweetalert2-themes/tree/main/bulma", target: "_blank", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "images/themes-bulma.png", alt: "theme bulma" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Material UI" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://github.com/sweetalert2/sweetalert2-themes/tree/main/material-ui", target: "_blank", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "images/themes-material-ui.png", alt: "theme material ui" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "WordPress Admin" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://github.com/sweetalert2/sweetalert2-themes/tree/main/wordpress-admin", target: "_blank", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "images/themes-wordpress-admin.png", alt: "theme material ui" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Themes Installation" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "code-label", children: "You can install all themes at once:" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("code", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "unselectable", children: "$ " }),
        "npm install @sweetalert2/themes"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "code-label", children: [
        "Or just a single theme ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "@sweetalert2/theme-<theme_name>" }),
        ", e.g.:"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("code", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "unselectable", children: "$ " }),
        "npm install @sweetalert2/theme-dark"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "code-label", children: "Or from jsdelivr CDN, e.g.:" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        CodeExample,
        {
          code: `
<link href="https://cdn.jsdelivr.net/npm/@sweetalert2/theme-dark@4/dark.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11/dist/sweetalert2.min.js"><\/script>
          `.trim(),
          language: "xml",
          withoutCodepen: true
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Themes Usage" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "code-label", children: "With CSS:" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        CodeExample,
        {
          code: `
<!-- Include a required theme -->
<link rel="stylesheet" href="@sweetalert2/themes/dark/dark.css">
<script src="sweetalert2/dist/sweetalert2.min.js"><\/script>
          `.trim(),
          language: "xml",
          withoutCodepen: true
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "code-label", children: "With SASS:" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        CodeExample,
        {
          code: `
// your-app.js
import Swal from 'sweetalert2/src/sweetalert2.js'

// your-app.scss
@import '@sweetalert2/themes/dark/dark.scss';
          `.trim(),
          withoutCodepen: true
        }
      )
    ] })
  ] });
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
        "aria-label": "Become a sponsor",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/plus.png", alt: "" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "Become a sponsor"
        ]
      }
    ) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sponsors", children: [
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
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://www.serpempire.com/", target: "_blank", rel: "noopener", "aria-label": "SERP Empire", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/sponsors/serpempire.png", alt: "SERP Empire" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "SERP Empire"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://realspyapps.com/", target: "_blank", rel: "noopener", "aria-label": "Real Spy Apps", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/sponsors/realspyapps.jpeg", alt: "Real Spy Apps" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "Real Spy Apps"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://www.vegega.com/", target: "_blank", rel: "noopener", "aria-label": "Metal Raised Garden Bed", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/sponsors/vegega.jpeg", alt: "Metal Raised Garden Bed" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "Metal Raised Garden Bed"
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
        "aria-label": "Become a sponsor",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/plus.png", alt: "" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "Become a sponsor"
        ]
      }
    ) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sponsors", children: [
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
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://vlixa.com/", target: "_blank", rel: "noopener", "aria-label": "Vlixa", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/sponsors/vlixa.png", alt: "Vlixa" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "Vlixa"
      ] }) }),
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
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "a",
        {
          href: "https://www.bestblowjobmachines.com/",
          target: "_blank",
          rel: "noopener",
          "aria-label": "Best Blowjob Machines",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/sponsors/best-blowjob-machines.jpg", alt: "Best Blowjob Machines" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "Best Blowjob ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "Machines"
          ]
        }
      ) }),
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
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "a",
        {
          href: "https://blowupdollshop.com/inflatable-sex-doll/",
          target: "_blank",
          rel: "noopener",
          "aria-label": "Inflatable sex doll",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/sponsors/blowupdollshop.png", alt: "Inflatable sex doll" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "Inflatable sex doll"
          ]
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://sexdollsmarket.com/", target: "_blank", rel: "noopener", "aria-label": "Sex Doll Torso", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/sponsors/sexdollsmarket.png", alt: "Sex Doll Torso" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "Sex Doll Torso"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://sexydollies.com/", target: "_blank", rel: "noopener", "aria-label": "porn sexdoll", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/sponsors/sexydollies.png", alt: "porn sexdoll" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "porn sexdoll"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://bululusexdoll.com/", target: "_blank", rel: "noopener", "aria-label": "cheap sex doll", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/sponsors/bululusexdoll.png", alt: "cheap sex doll" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "cheap sex doll"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://bululu.shop/", target: "_blank", rel: "noopener", "aria-label": "BULULU", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/sponsors/bululu.png", alt: "BULULU" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "BULULU"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://vsdoll.net/", target: "_blank", rel: "noopener", "aria-label": "VSDoll", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/sponsors/vsdoll.png", alt: "VSDoll" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "VSDoll"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://www.xndoll.com/", target: "_blank", rel: "noopener", "aria-label": "XNDOLL", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/sponsors/xndoll.jpeg", alt: "XNDOLL" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "XNDOLL"
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
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "a",
        {
          href: "https://www.myminisexdoll.com/cheap-sex-dolls/",
          target: "_blank",
          rel: "noopener",
          "aria-label": "cheap sexdoll",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/sponsors/myminisexdoll.png", alt: "cheap sexdoll" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "cheap sexdoll"
          ]
        }
      ) }),
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

client.createRoot(document.getElementById("root")).render(
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
    /* @__PURE__ */ jsxRuntimeExports.jsx(Themes, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Sponsors, {})
  ] })
);
