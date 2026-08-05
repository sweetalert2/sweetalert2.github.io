import { renderRecipe } from './utils'
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

renderRecipe(
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
