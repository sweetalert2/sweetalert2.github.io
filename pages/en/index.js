const React = require('react')

const CompLibrary = require('../../core/CompLibrary.js')
const { MarkdownBlock } = CompLibrary
const siteConfig = require(process.cwd() + '/siteConfig.js')

const SplashContainer = props => (
  <div className='homeContainer'>
    <div className='homeSplashFade'>
      <div className='wrapper homeWrapper'>
        <div className='inner'>{props.children}</div>
      </div>
    </div>
  </div>
)

const ProjectTitle = props => (
  <h2 className='projectTitle'>
    <img src={siteConfig.link('img/sweetalert2-logo.png')}/>
    <small>{siteConfig.tagline}</small>
    <small>Zero dependencies</small>
  </h2>
)

const CarbonAds = props => (
  <div className="carbonads-wrapper" style={{height: '150px'}}>
    <script src="//cdn.carbonads.com/carbon.js?zoneid=1673&serve=C6AILKT&placement=sweetalert2githubio" id="_carbonads_js" async></script>
    <script src="//m.servedby-buysellads.com/monetization.js" async></script>
    <div className="bsa-cpc"></div>
  </div>
)

const StatsSection = props => (
  <div class="stats mobile-hidden">
    Current version: <a href="https://github.com/sweetalert2/sweetalert2/releases" id="current-version" aria-label="Current version "></a> ●
    Latest update: <a href="https://github.com/sweetalert2/sweetalert2/commits/master" id="latest-update" aria-label="Latest update "></a> ●
    Downloads last month: <a href="https://npm-stat.com/charts.html?package=sweetalert2" id="downloads-last-month" aria-label="Downloads last month "></a>
  </div>
)

const ShowdownSection = props => (
  <div className={'showdown'}>
    <div className={'alert'}>
      <p className={'heading'}>
        Normal alert
      </p>
      <MarkdownBlock>
        {`\
\`\`\`js executable
alert(
  'You clicked the button!'
)
\`\`\`
`}
      </MarkdownBlock>
    </div>
    <div className={'vs'} style={{backgroundImage: `url("${siteConfig.link('img/vs_icon.png')}")`}}/>
    <div className={'swal'}>
      <p className={'heading'}>
        <img src={siteConfig.link('img/sweetalert2-logo.png')} width="178" height="30" alt="SweetAlert2"/>
      </p>
      <MarkdownBlock>
        {`\
\`\`\`js executable
swal(
  'Good job!',
  'You clicked the button!',
  'success'
)
\`\`\`
`}
      </MarkdownBlock>
    </div>
  </div>
)

class Button extends React.Component {
  render () {
    return (
      <div className='pluginWrapper buttonWrapper'>
        <a className='button' href={this.props.href} target={this.props.target}>
          {this.props.children}
        </a>
      </div>
    )
  }
}

Button.defaultProps = {
  target: '_self'
}

const OutroSection = props => (
  <div className='section promoSection'>
    <div className='promoRow'>
      <div className='pluginRowBlock'>
        <Button href={siteConfig.link('docs/examples-basic.html')}>More Examples</Button>
        <Button href={siteConfig.link('docs/installing.html')}>Get Started</Button>
      </div>
    </div>
  </div>
)

module.exports = props => {
  return (
    <SplashContainer>
      <CarbonAds/>
      <ProjectTitle/>
      <StatsSection/>
      <ShowdownSection/>
      <OutroSection/>
      <script src={siteConfig.link('js/stats.js')}></script>
    </SplashContainer>
  )
}
