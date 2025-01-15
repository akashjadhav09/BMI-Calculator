import './i18next';
import './App.css'

import BMICalculator from './view/bmi-view';
import LanguageSwitcher from './components/LanguageSwitcher';

function App() {
  return (
  <>
    <LanguageSwitcher />
    <BMICalculator />
  </>
  )
}

export default App
