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
import { Prtnr } from './components/Prtnr'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <Nav />
    <Header />
    <Prtnr />
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
