export function Partners() {
  const partners = [
    // Hostinger
    {
      link: 'https://hostinger.com?REFERRALCODE=BKZHOSTINDAB',
      title: (
        <b>
          Get 20% discount <span className="nowrap"> on Hostiger Web Hosting!</span>
        </b>
      ),
      description: (
        <>
          Everything you need to create a website. <br />
          Free domain. Free website migration. Free SSL.
        </>
      ),
      imageUrl: '/images/hostinger.png',
    },
  ]

  const partner = partners[Math.floor(Math.random() * partners.length)]

  return (
    <div className="partner">
      <a href={partner.link} target="_blank" rel="noreferrer noopener" tabIndex={-1}>
        <img src={partner.imageUrl} alt="" />
        <b>{partner.title}</b>
        <div className="description">{partner.description}</div>
      </a>
    </div>
  )
}
