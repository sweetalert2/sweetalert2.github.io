import { useState, useEffect } from 'react'
import docsearch from '@docsearch/js'

export function Header() {
  const st4 = {
    fill: '#fa7471',
  }
  const st5 = {
    fill: '#a575b7',
  }
  const st6 = {
    strokeWidth: 8.2,
    stroke: '#8a3d9b',
    fill: 'none',
    strokeMiterlimit: 10,
  }
  const st7 = {
    fill: '#8a3d9b',
  }

  return (
    <>
      {/* GitHub stars  */}
      <iframe
        src="https://ghbtns.com/github-btn.html?user=sweetalert2&repo=sweetalert2&type=star&count=true&size=large"
        frameBorder="0"
        scrolling="0"
        width="170"
        height="30"
        title="GitHub stars"
        className="mobile-hidden"
      ></iframe>

      <header>
        <div id="slava-ukraini">
          <a href="https://war.ukraine.ua/support-ukraine/">SAVE LIVES, SUPPORT UKRAINE</a> 🇺🇦
        </div>
        <div id="logo-slider">
          <div id="logo-track">
            <img src="/images/logo-donut-track.svg" />
          </div>
          <div id="logo-bouncer">
            <div id="logo-spinner">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="15.4 -120.3 269.3 269.3">
                <circle id="lower_circle" cx="161.8" cy="27" r="100.2" fill="#fdcc80"></circle>
                <circle id="inner_circle" cx="149.4" cy="14.2" r="36.8" fill="#fff"></circle>
                <path
                  id="upper_frosting"
                  d="M108.7 105.5c-6.6.3-31.9-13.4-42.4-49.5-1.9-6.6-4.5-16.8-4.5-29.6 0-55 44.6-99.6 99.6-99.6 13.1 0 23.5 2.7 29.6 4.5 34.4 10.4 48 34.1 44.9 40.5s-10.6-3.4-22.9-2.5c-1.4.1-4.2 4-4.2 6.2 0 7.2 13.5 12.7 14.6 15.9 1.7 5 3.4 6.2 2.3 9.5-1.5 4.8-2.9 3.6-5.2 5.9-.9.9-5.6.7-16.6-1.7-5.9-1.3-18-11.2-18-11.4 0-.4-16.2-13.3-30.2-14.8-6.6-.7-28.1-2.8-39.2 19.2-.5 1.1-4.4 20-4.2 22.5.9 11.9 7 24.7 12.1 27.5 11.7 6.4 12.9 14.7 12.8 14.4-.1-.4 7.8 14.7 8.2 17.3.3 2.1-.8 7.4-3.7 8.7-3.5 1.5-7.7-1.7-8.4-2.1-.8-.5-10.7-16.3-19.5-13.1-.8.3-6 3.7-7.6 5-.3.2 4.8 15.4 5.6 18.5.5 1.8-2.3 8.7-3.1 8.7z"
                  opacity=".5"
                  fill="#fa7471"
                ></path>
                <g id="sprinkles">
                  <path
                    style={st4}
                    d="M135.1-69.3h-.2c-2.3.4-3.8 2.6-3.4 4.9.4 2.3 2.6 3.8 4.9 3.4.8-.1 1.5-.5 2.1-1 1-.9 1.6-2.3 1.4-3.7-.3-2.3-2.5-3.9-4.8-3.6z"
                  ></path>
                  <path
                    style={st4}
                    d="M181.7-65c-2.3-.1-4.3 1.7-4.5 4l-.5 8.4c-.1 2.3 1.7 4.3 4 4.5 1.2.1 2.2-.3 3.1-1.1.8-.7 1.3-1.7 1.4-2.9l.5-8.4c.1-2.4-1.7-4.4-4-4.5z"
                  ></path>
                  <path
                    style={st4}
                    d="M94.4 47.1c-2.3-.1-4.3 1.7-4.5 4l-.5 8.4c-.1 2.3 1.7 4.3 4 4.5 1.2.1 2.2-.3 3.1-1.1.8-.7 1.3-1.7 1.4-2.9l.5-8.4c.1-2.4-1.7-4.4-4-4.5z"
                  ></path>
                  <path
                    style={st5}
                    d="M65.4 1.7c-2.3-.1-4.3 1.7-4.5 4l-.5 8.4c-.1 2.3 1.7 4.3 4 4.5 1.2.1 2.2-.3 3.1-1.1s1.3-1.7 1.4-2.9l.5-8.4c.1-2.3-1.7-4.3-4-4.5z"
                  ></path>
                  <path
                    style={st5}
                    d="M157.2-61.8l-6.2 5.6c-1.7 1.6-1.9 4.2-.3 6 1.6 1.7 4.2 1.9 6 .3l6.2-5.6c1.7-1.6 1.9-4.2.3-6s-4.3-1.9-6-.3z"
                  ></path>
                  <path
                    style={st4}
                    d="M93.8-23.3l-8.3-.5c-2.3-.1-4.3 1.7-4.5 4s1.7 4.3 4 4.5l8.3.5c1.2.1 2.2-.3 3.1-1.1.8-.7 1.3-1.7 1.4-2.9.1-2.4-1.7-4.4-4-4.5z"
                  ></path>
                  <path
                    style={st5}
                    d="M189.1-35.1l-8.3-.5c-2.3-.1-4.3 1.7-4.5 4s1.7 4.3 4 4.5l8.3.5c1.2.1 2.2-.3 3.1-1.1s1.3-1.7 1.4-2.9c.1-2.4-1.6-4.4-4-4.5z"
                  ></path>
                  <path
                    style={st4}
                    d="M132.4-42.3l-7.1-4.4c-2-1.2-4.6-.6-5.8 1.4-1.2 2-.6 4.6 1.4 5.8l7.1 4.4c1 .6 2.1.8 3.2.5 1.1-.2 2-.9 2.6-1.9 1.1-2 .5-4.6-1.4-5.8z"
                  ></path>
                  <path
                    style={st5}
                    d="M88.2 5.7c-2.1 1.1-2.8 3.7-1.7 5.7l4 7.4c1.1 2.1 3.7 2.8 5.7 1.7 1.1-.6 1.8-1.6 2.1-2.7.3-1 .1-2.1-.4-3l-4-7.4c-1.1-2-3.7-2.8-5.7-1.7z"
                  ></path>
                </g>
                <g className="hair">
                  <path
                    style={st5}
                    d="M232.5-83.3c-2.2 3.1-4.6 6-7.2 8.7-1.8 1.9-1.7 4.9.1 6.7 1.9 1.8 4.9 1.7 6.7-.1 2.9-3 5.6-6.3 8-9.7 1.5-2.1 1-5.1-1.1-6.6s-5-1.1-6.5 1z"
                  ></path>
                  <path
                    style={st5}
                    d="M144.7-113.4c.2 3.7.2 7.5-.2 11.2-.2 2.6 1.7 4.9 4.3 5.1 2.6.2 4.9-1.7 5.1-4.3.4-4.2.4-8.4.2-12.6-.2-2.6-2.4-4.6-5-4.4-2.5.1-4.5 2.4-4.4 5z"
                  ></path>
                  <path
                    style={st5}
                    d="M59.3-75.7c3.1 2.2 6 4.5 8.7 7.1 1.9 1.8 4.9 1.7 6.7-.2s1.7-4.9-.2-6.7c-3-2.9-6.3-5.5-9.8-8-2.1-1.5-5.1-1-6.6 1.1s-1 5.2 1.2 6.7z"
                  ></path>
                  <path
                    style={st5}
                    d="M22.6 11.6c3.7-.2 7.5-.1 11.2.3 2.6.3 4.9-1.6 5.2-4.2s-1.6-4.9-4.2-5.2c-4.2-.4-8.4-.5-12.6-.3-2.6.1-4.6 2.3-4.5 4.9.1 2.7 2.3 4.7 4.9 4.5z"
                  ></path>
                  <path
                    style={st5}
                    d="M60.2 102.2c2.2-3 4.6-5.9 7.2-8.6 1.8-1.9 1.8-4.9-.1-6.7-1.9-1.8-4.9-1.8-6.7.1-2.9 3-5.6 6.3-8.1 9.7-1.5 2.1-1 5.1 1.1 6.6 2.1 1.4 5 1 6.6-1.1z"
                  ></path>
                </g>
                <circle style={st6} cx="149.1" cy="15" r="99.4"></circle>
                <g id="side_swirl">
                  <path
                    style={st7}
                    d="M192.5 5.6c4.2-4.4 9.6.5 13.6 2.9 4 2.3 7.9 3.4 12.4 2.3 8.7-1.9 13.9-9.9 10.2-18.5-1.9-4.4-5.5-7.4-9.5-9.8-2.3-1.4-5.5-2.5-7-4.9-2.6-4.1 2.6-5.6 5.7-4.4 4.6 1.7 8.3 3.1 13.2 1.4 3.5-1.2 7.6-1.6 8.2-6.1.7-5.3-7.4-7.6-8.1-2.2-.1.2-.1.5-.2.7.8-.6 1.7-1.3 2.5-1.9-1.6.6-3.3 1-4.9 1.5-3.2 1-5.2-.1-8-1.3-4.2-1.6-8.7-1.6-12.6.9-8.9 5.9-4.6 16.6 2.8 21.3 3.9 2.5 10.3 4.7 10.5 10.2.2 6.1-7.6 5.7-11.2 3.6-7.7-4.5-16.2-9.3-23.7-1.6-3.6 3.9 2.3 9.8 6.1 5.9z"
                  ></path>
                  <path
                    style={st7}
                    d="M132.5 56.1c-.9 3.8-.5 7.5 1.3 11 1.8 3.6 7.8 8 7.6 12.1-.1 3.1-2.8 4.1-5.5 3.5s-4.2-2.3-5.7-4.5c-2.3-3.3-4.5-6.6-8.2-8.5-6.7-3.5-15.8-3-19.4 4.4-1.8 3.7-2.1 8.1-.9 12.1.7 2.3 2 4.3 3.3 6.3.7 1.2 1.6 2.2 1.3 3.7-.4 1.7-1.3 1.6-3.1 1.8-5.3.6-5.4 9 0 8.4 4-.5 8.2-1.3 10.5-4.9 2.3-3.7 1.4-8.1-.6-11.7-1.4-2.6-3.5-4.9-3.7-7.9-.3-4.2 2.2-6.4 6.2-5.5 5.8 1.3 7.2 7.2 11.1 11 5.7 5.5 17.4 5.9 21.4-1.7 2.1-3.9 2.2-8.7.1-12.6-2.5-4.6-9-8.8-7.6-14.6 1.2-5.4-6.9-7.7-8.1-2.4z"
                  ></path>
                  <path
                    style={st7}
                    d="M138.2-20c13.4-2.9 27.6-.7 37.5 9.4 7.8 8 11.8 19.6 10.2 30.7-3.9 27.4-37.5 39.4-58.4 22-12.2-10.2-14.2-25.9-10.4-40.6 1.4-5.6-7.2-8-8.7-2.4-4.2 16.3-2.4 33.7 9.6 46.4 9.3 9.9 23.6 15.2 37.1 13.8 17.5-1.8 32.6-13.9 38.1-30.7 4.6-13.9 1.4-29.7-7.4-41.3-11.9-15.7-31.3-20-49.9-16-5.7 1.2-3.3 9.9 2.3 8.7z"
                  ></path>
                  <path
                    style={st5}
                    d="M99.3-54.8l-8 2.4c-2.2.7-3.5 3-2.9 5.2.7 2.2 3 3.5 5.2 2.9l8-2.4c1.1-.3 2-1.1 2.5-2s.7-2.1.3-3.2c-.5-2.2-2.9-3.5-5.1-2.9z"
                  ></path>
                  <path
                    style={st4}
                    d="M81.8 30.7h-.2c-3.2.6-4.9 4.7-1.8 7.7 2.1 1.2 4.1.8 5.4-.4 1-.9 1.6-2.3 1.4-3.7-.4-2.3-2.5-3.9-4.8-3.6z"
                  ></path>
                  <path
                    style={st7}
                    d="M124.3-21.7c-3.2 1.7-6.1 4.3-8.3 7.1-1.4 1.8-1.1 4.9.8 6.3 2 1.5 4.7 1.1 6.3-.8.4-.5.8-.9 1.2-1.4l.1-.1c.2-.3.6-.5.8-.8.6-.4 1-.9 1.6-1.3.3-.3.6-.4.9-.6.8-.5-.6.3.1-.1 2-1.1 3.5-3.6 2.3-6-.9-2-3.5-3.5-5.8-2.3z"
                  ></path>
                </g>
              </svg>
            </div>
          </div>
        </div>
        <img id="logo-text" src="./images/SweetAlert2.png" alt="SweetAlert2" />
        <div className="stats mobile-hidden">
          <CurrentVersion />
          <LatestUpdate />
          <DownloadsLastMonth />
        </div>
        <DocSearch />
        <h1>A beautiful, responsive, customizable, accessible (WAI-ARIA) replacement for JavaScript's popup boxes</h1>
        <h2>Zero dependencies</h2>
      </header>
    </>
  )
}

function CurrentVersion() {
  const [currentVersion, setCurrentVersion] = useState('')

  useEffect(() => {
    fetch('https://api.github.com/repos/sweetalert2/sweetalert2/tags')
      .then((response) => response.json())
      .then((response) => {
        if (!response[0] || !response[0].name) {
          return
        }
        setCurrentVersion(response[0].name)
      })
      .catch(() => {
        // ignore
      })
  }, [])

  if (currentVersion) {
    return (
      <div>
        Current version:{' '}
        <a href="https://github.com/sweetalert2/sweetalert2/releases" aria-label={`Current version ${currentVersion}`}>
          {currentVersion}
        </a>
      </div>
    )
  }
}

function LatestUpdate() {
  const [latestUpdate, setLatestUpdate] = useState('')

  useEffect(() => {
    fetch('https://api.github.com/repos/sweetalert2/sweetalert2/commits')
      .then((response) => response.json())
      .then((response) => {
        if (!response[0] || !response[0].commit) {
          return
        }
        let recentActivity: string = response[0].commit.author.date
        const recentActivityDate = new Date(recentActivity)
        const diffDays = Math.floor((Date.now() - recentActivityDate.getTime()) / (1000 * 60 * 60 * 24))
        switch (diffDays) {
          case 0:
            recentActivity = 'today'
            break
          case 1:
            recentActivity = 'yesterday'
            break
          default:
            recentActivity = `${diffDays} days ago`
            break
        }
        setLatestUpdate(recentActivity)
      })
      .catch(() => {
        // ignore
      })
  }, [])

  if (latestUpdate) {
    return (
      <div>
        Latest update:{' '}
        <a href="https://github.com/sweetalert2/sweetalert2/commits/main" aria-label={`Latest update ${latestUpdate}`}>
          {latestUpdate}
        </a>
      </div>
    )
  }
}

function DownloadsLastMonth() {
  const [downloadsLastMonth, setDownloadsLastMonth] = useState('')

  useEffect(() => {
    fetch('https://api.npmjs.org/downloads/point/last-month/sweetalert2')
      .then((response) => response.json())
      .then((response) => {
        setDownloadsLastMonth(response.downloads.toLocaleString())
      })
      .catch(() => {
        // ignore
      })
  }, [])

  if (downloadsLastMonth) {
    return (
      <div>
        Downloads last month:{' '}
        <a
          href="https://npm-stat.com/charts.html?package=sweetalert2"
          aria-label={`Downloads last month ${downloadsLastMonth}`}
        >
          {downloadsLastMonth}
        </a>
      </div>
    )
  }
}

function DocSearch() {
  useEffect(() => {
    docsearch({
      appId: '38BPOKYOZ2',
      apiKey: 'aa152d345260f94e9c0b177ed5437c9e',
      indexName: 'sweetalert2',
      container: '#docsearch',
    })
  }, [])

  return <div id="docsearch"></div>
}
