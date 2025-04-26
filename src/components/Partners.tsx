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

    // NordVPN
    {
      link: 'https://go.nordvpn.net/aff_c?offer_id=15&aff_id=122472&url_id=902',
      title: (
        <b>
          Get 75% discount <span className="nowrap"> on NordVPN's 2-year plan!</span>
        </b>
      ),
      description: (
        <>
          A truly global VPN server network.
          <br />
          Cybersecurity kit built for every day.
        </>
      ),
      imageUrl: '/images/nordvpn.png',
    },

    // NordPass
    {
      link: 'https://go.nordpass.io/aff_c?offer_id=488&aff_id=122472&url_id=9356',
      title: (
        <b>
          Get 50% discount <span className="nowrap"> on NordPass Premium!</span>
        </b>
      ),
      description: (
        <>
          NordPass is a leading password manager.
          <br />
          Trusted by millions.
        </>
      ),
      imageUrl: '/images/nordpass.png',
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
