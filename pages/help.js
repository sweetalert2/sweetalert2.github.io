const React = require('react')

const CompLibrary = require('../core/CompLibrary.js')
const Container = CompLibrary.Container
const GridBlock = CompLibrary.GridBlock

class Help extends React.Component {
  render () {
    const supportLinks = [
      {
        title: 'Browse Docs',
        content: 'The best way to learn more is by using the [documentation on this site](/docs/doc1.html)'
      },
      {
        title: 'Post a question',
        content: 'If you can\'t figure out how to do what you want to do, [read and post questions on Stack Overflow](https://stackoverflow.com/questions/tagged/sweetalert2/)'

      },
      {
        title: 'Chat with us',
        content: 'To talk with us or other members of the community, [check us out on Gitter](https://gitter.im/sweetalert2/Lobby)'
      }
    ]

    return (
      <div className='docMainWrapper wrapper'>
        <Container className='mainContainer documentContainer postContainer'>
          <div className='post'>
            <header className='postHeader'>
              <h2>Need help?</h2>
            </header>
            <p>This project is maintained by a dedicated group of people.</p>
            <GridBlock contents={supportLinks} layout='threeColumn' />
          </div>
        </Container>
      </div>
    )
  }
}

module.exports = Help
