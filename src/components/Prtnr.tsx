export function Prtnr() {
  const prtnrs = [
    // Hostinger Web Hosting
    {
      link: 'https://www.hostinger.com/cart?product=hosting%3Ahostinger_business&period=12&referral_type=cart_link&REFERRALCODE=BKZHOSTINDAB&referral_id=019af368-1b44-72b6-bcde-05624c60f3fa',
      title: (
        <b>
          Get 20% discount <span className="nowrap"> on Hostiger Web Hosting!</span>
        </b>
      ),
      description: (
        <>
          <p>Web hosting is ideal for personal, business, and eCommerce sites.</p>
          <p>A free domain, business email, and site migration are included. </p>
          <p>Enjoy weekly auto backups for easy data recovery.</p>
        </>
      ),
      imageUrl: '/images/prtnrs/web-hosting.png',
    },

    // Hostinger Cloud Hosting
    {
      link: 'https://www.hostinger.com/cart?product=hosting%3Acloud_professional&period=12&referral_type=cart_link&REFERRALCODE=BKZHOSTINDAB&referral_id=019b0517-ac56-7242-87e1-8e90aa11029d',
      title: (
        <b>
          Get 20% discount <span className="nowrap"> on Hostiger Cloud Hosting!</span>
        </b>
      ),
      description: (
        <>
          <p>Cloud hosting is great choice for high-traffic sites that need all the power and control.</p>
          <p>Enjoy your dedicated IP address and daily backups too.</p>
        </>
      ),
      imageUrl: '/images/prtnrs/cloud-hosting.png',
    },

    // Hostinger Agency Hosting
    {
      link: 'https://www.hostinger.com/cart?product=hosting%3Aagency_professional&period=12&referral_type=cart_link&REFERRALCODE=BKZHOSTINDAB&referral_id=019b0519-da27-724b-81a5-843a6d2677a4',
      title: (
        <b>
          Get 20% discount <span className="nowrap"> on Hostiger Agency Hosting!</span>
        </b>
      ),
      description: (
        <>
          <p>Perfect for agencies and freelancers who need more power, resources, and isolated environments.</p>
          <p>Share access per site for easy collaboration.</p>
        </>
      ),
      imageUrl: '/images/prtnrs/agency-hosting.png',
    },

    // Hostinger VPS Hosting
    {
      link: 'https://www.hostinger.com/cart?product=vps%3Avps_kvm_2&period=12&referral_type=cart_link&REFERRALCODE=BKZHOSTINDAB&referral_id=019b051d-4815-7098-a489-bcbea1f8a627',
      title: (
        <b>
          Get 20% discount <span className="nowrap"> on Hostiger VPS Hosting!</span>
        </b>
      ),
      description: (
        <>
          <p>VPS hosting is great for developers and high-traffic sites when total control is needed.</p>
          <p>Enjoy free weekly backups and n8n templates too.</p>
        </>
      ),
      imageUrl: '/images/prtnrs/vps-hosting.png',
    },

    // Hostinger Website Builder
    {
      link: 'https://www.hostinger.com/cart?product=hosting%3Ahostinger_business&period=12&referral_type=cart_link&REFERRALCODE=BKZHOSTINDAB&referral_id=019b051e-0ed2-72b0-96da-45cd58935fdf&product_type=website-builder',
      title: (
        <b>
          Get 20% discount <span className="nowrap"> on Hostiger Website Builder!</span>
        </b>
      ),
      description: (
        <>
          <p>Website Builder is made for quickly creating websites with AI.</p>
          <p>It's perfect for personal sites, portfolios, small businesses, or blogs.</p>
          <p>Get a free domain and business email too.</p>
        </>
      ),
      imageUrl: '/images/prtnrs/website-builder.png',
    },

    // Hostinger Horizons
    {
      link: 'https://www.hostinger.com/cart?product=horizons%3Astarterv2&period=12&referral_type=cart_link&REFERRALCODE=BKZHOSTINDAB&referral_id=019b051f-a646-72cd-92e5-9f340681881e',
      title: (
        <b>
          Get 20% discount <span className="nowrap"> on Hostiger AI Website Builder!</span>
        </b>
      ),
      description: (
        <>
          <p>Build a site by chatting with AI</p>
          <p>
            Just describe your idea and watch Horizons build it for you - from sites and online stores to tools and
            beyond.
          </p>
          <p>No coding or drag-and-dropping.</p>
        </>
      ),
      imageUrl: '/images/prtnrs/horizons.png',
    },

    // Hostinger Business Email
    {
      link: 'https://www.hostinger.com/cart?product=hostinger_mail%3Apremium&period=12&referral_type=cart_link&REFERRALCODE=BKZHOSTINDAB&referral_id=019b0521-84dd-70ea-a2dd-a53ed45a9f14',
      title: (
        <b>
          Get 20% discount <span className="nowrap"> on Hostiger Business Email!</span>
        </b>
      ),
      description: (
        <>
          <p>Hostinger email is tailored for reliable, branded communication.</p>
          <p>
            It lets you create domain-based mailboxes with secure, ad-free inboxes, spam protection, and easy website
            integration.
          </p>
        </>
      ),
      imageUrl: '/images/prtnrs/email.png',
    },

    // Hostinger Reach Email Marketing
    {
      link: 'https://www.hostinger.com/cart?product=reach%3A1000&period=12&referral_type=cart_link&REFERRALCODE=BKZHOSTINDAB&referral_id=019b0523-b3bb-72b7-bb2b-65338d412631',
      title: (
        <b>
          Get 20% discount <span className="nowrap"> on Hostiger Email Marketing!</span>
        </b>
      ),
      description: (
        <>
          <p>Create and send professional email campaigns with AI - in minutes.</p>
          <p>Grow your audience, engagement, and sales.</p>
        </>
      ),
      imageUrl: '/images/prtnrs/reach.png',
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
