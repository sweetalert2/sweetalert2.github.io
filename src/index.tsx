import ReactDOM from 'react-dom/client'
import {
  ConfigurationParams,
  DeclarativeTemplates,
  Examples,
  HandlingButtons,
  HandlingDismissals,
  Header,
  Icons,
  InputTypes,
  Installation,
  Methods,
  Nav,
  Showcase,
  Sponsors,
  Themes,
} from './components'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <Nav />
    <Header />
    <Showcase />
    <Examples />
    <Installation />
    <Themes />
    <ConfigurationParams />
    <DeclarativeTemplates />
    <HandlingButtons />
    <HandlingDismissals />
    <Icons />
    <InputTypes />
    <Methods />
    <Sponsors />
  </>
)
