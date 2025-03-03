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
} from './components'
import { Kinsta } from './components/Kinsta'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <Nav />
    <Header />
    <Kinsta />
    <Showcase />
    <Examples />
    <Installation />
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
