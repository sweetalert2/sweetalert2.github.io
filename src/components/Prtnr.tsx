export function Prtnr() {
  const prtnrs = [
    // Trade Republic
    {
      link: 'https://refnocode.trade.re/gt06b1m7',
      title: (
        <b>
          Join Trade Republic today!
          <br />
          <br />
          Start investing with a free stock worth up to $200 🚀
        </b>
      ),
      description: <></>,
      imageUrl: '/images/prtnrs/trade-republic.png',
    },

    // DigitalOcean
    {
      link: 'https://m.do.co/c/12907f2ba0bf',
      title: (
        <b>
          Get started with DigitalOcean today!
          <br />
          <br />
          Deploy your app and get $25 in credit 🚀
        </b>
      ),
      description: <></>,
      imageUrl: '/images/prtnrs/digitalocean.png',
    },
  ]

  const prtnr = prtnrs[Math.floor(Math.random() * prtnrs.length)]

  return (
    <a className="prtnr-lg" href={prtnr.link} target="_blank" rel="noreferrer noopener" tabIndex={-1}>
      <img src={prtnr.imageUrl} />

      {prtnr.title}

      <div className="description">{prtnr.description}</div>
    </a>
  )
}
