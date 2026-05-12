export function Prtnr() {
  const prtnrs = [
    // Hostinger Web Hosting
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
