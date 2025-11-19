export function Partners() {
  const partners = [
    // Cloudways: Black Friday
    '<a href="https://www.cloudways.com/en/?id=1930700&amp;a_bid=5c89ffc4" target="_top"><img src="//www.cloudways.com/affiliate/accounts/default1/banners/5c89ffc4.png" alt="" title="" width="728" height="90" /></a><img style="border:0" src="https://www.cloudways.com/affiliate/scripts/imp.php?id=1930700&amp;a_bid=5c89ffc4" width="1" height="1" alt="" />',

    // Cloudways: PHP - App
    // '<a href="https://www.cloudways.com/en/php-hosting.php?id=1930700&amp;a_bid=3992fe4c" target="_top"><img src="https://www.cloudways.com/affiliate/accounts/default1/banners/3992fe4c.jpg" alt="Faster PHP Cloud Hosting" title="Faster PHP Cloud Hosting" width="468" height="60" /></a><img style="border:0" src="https://www.cloudways.com/affiliate/scripts/imp.php?id=1930700&amp;a_bid=3992fe4c" width="1" height="1" alt="" />',

    // Cloudways: WordPress
    // '<a href="https://www.cloudways.com/en/wordpress-hosting.php?id=1930700&amp;a_bid=be63a2ec" target="_top"><img src="//www.cloudways.com/affiliate/accounts/default1/banners/be63a2ec.jpg" alt="Load WordPress Sites in as fast as 37ms!" title="Load WordPress Sites in as fast as 37ms!" width="468" height="60" /></a><img style="border:0" src="https://www.cloudways.com/affiliate/scripts/imp.php?id=1930700&amp;a_bid=be63a2ec" width="1" height="1" alt="" />',

    // Cloudways: Magento
    // '<a href="https://www.cloudways.com/en/magento-hosting.php?id=1930700&amp;a_bid=a72063ee" target="_top"><img src="//www.cloudways.com/affiliate/accounts/default1/banners/a72063ee.jpg" alt="Speed Up Your Magento Store by 300%" title="Speed Up Your Magento Store by 300%" width="468" height="60" /></a><img style="border:0" src="https://www.cloudways.com/affiliate/scripts/imp.php?id=1930700&amp;a_bid=a72063ee" width="1" height="1" alt="" />',

    // Cloudways: WooCommerce
    // '<a href="https://www.cloudways.com/en/woocommerce-hosting.php?id=1930700&amp;a_bid=06721105" target="_top"><img src="//www.cloudways.com/affiliate/accounts/default1/banners/06721105.jpg" alt="Load WooCommerce Stores in 249ms!" title="Load WooCommerce Stores in 249ms!" width="468" height="60" /></a><img style="border:0" src="https://www.cloudways.com/affiliate/scripts/imp.php?id=1930700&amp;a_bid=06721105" width="1" height="1" alt="" />',

    // Cloudways: General
    '<a href="https://www.cloudways.com/en/?id=1930700&amp;a_bid=61dde566" target="_top"><img src="//www.cloudways.com/affiliate/accounts/default1/banners/61dde566.jpg" alt="The Ultimate Managed Hosting Platform" title="The Ultimate Managed Hosting Platform" width="728" height="90" /></a><img style="border:0" src="https://www.cloudways.com/affiliate/scripts/imp.php?id=1930700&amp;a_bid=61dde566" width="1" height="1" alt="" />',
  ]

  const partner = partners[Math.floor(Math.random() * partners.length)]

  return <div dangerouslySetInnerHTML={{ __html: partner }} className="prtnr"></div>
}

// export function Partners() {
//   const partners = [
//     // Hostinger
//     {
//       link: 'https://hostinger.com?REFERRALCODE=BKZHOSTINDAB',
//       title: (
//         <b>
//           Get 20% discount <span className="nowrap"> on Hostiger Web Hosting!</span>
//         </b>
//       ),
//       description: (
//         <>
//           Everything you need to create a website. <br />
//           Free domain. Free website migration. Free SSL.
//         </>
//       ),
//       imageUrl: '/images/hostinger.png',
//     },
//   ]

//   const partner = partners[Math.floor(Math.random() * partners.length)]

//   return (
//     <div className="partner">
//       <a href={partner.link} target="_blank" rel="noreferrer noopener" tabIndex={-1}>
//         <img src={partner.imageUrl} alt="" />
//         <b>{partner.title}</b>
//         <div className="description">{partner.description}</div>
//       </a>
//     </div>
//   )
// }
