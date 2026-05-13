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

    // Hostinger
    {
      link: 'https://www.hostinger.com?REFERRALCODE=BKZHOSTINDAB',
      title: (
        <b>
          Get started with Hostinger today!
          <br />
          <br />
          Deploy your website and get 20% discount 🚀
        </b>
      ),
      description: <></>,
      imageUrl: '/images/prtnrs/hostinger.png',
    },

    // Revolut
    {
      link: 'https://revolut.com/referral/?referral-code=vladimh4x',
      title: (
        <b>
          Start using Revolut today!
          <br />
          <br />
          Join me and over 70 million users 🚀
        </b>
      ),
      description: <></>,
      imageUrl: '/images/prtnrs/revolut.png',
    },

    // Deel
    {
      link: 'https://deel.com/referrals/Vladimir-356KvXWR',
      title: (
        <b>
          Hire and pay global teams easily with Deel!
          <br />
          <br />
          Fast, compliant payroll and HR for remote businesses worldwide.
          <br />
          <br />
          Start today with $500 in Deel credits 🚀
        </b>
      ),
      description: <></>,
      imageUrl: '/images/prtnrs/deel.webp',
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
