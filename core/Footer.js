const React = require('react')

module.exports = props => (<footer className='nav-footer' id='footer'>
  <section className='sitemap'>
    <a href={props.config.baseUrl} className='nav-home'>
      {props.config.footerIcon && (
        <img
          src={props.config.link(props.config.footerIcon)}
          alt={props.config.title}
          width='66'
          height='58'
        />
      )}
    </a>
    <div>
      <h5>Docs</h5>
      <a href={props.config.link('docs/examples-basic.html')}>
          Examples
      </a>
      <a href={props.config.link('docs/installing.html')}>
          Guides
      </a>
      <a href={props.config.link('docs/options.html')}>
          API
      </a>
    </div>
    <div>
      <h5>Community</h5>
      <a
        href='https://stackoverflow.com/questions/tagged/sweetalert2/'
        target='_blank'>
          Stack Overflow
      </a>
      <a
        href='https://gitter.im/sweetalert2/Lobby'
        target='_blank'>
          Gitter
      </a>
    </div>
    <div>
      <h5>More</h5>
      <a
        className='github-button'
        href={props.config.repoUrl}
        data-icon='octicon-github'
        data-count-href='/sweetalert2/sweetalert2/stargazers'
        data-show-count
        data-count-aria-label='# stargazers on GitHub'
        aria-label='Star this project on GitHub'>
          Star
      </a>
    </div>
  </section>
  <section className='copyright'>
    {props.config.copyright}
  </section>

</footer>
)
