import { Route, Routes } from 'react-router-dom'

import { Layout } from './components/Layout'
import { CONTACT, DONATIONS, HISTORY, HOME, PROJECTS, VOLUNTEERS } from './config/routes'
import { Home } from './pages/Home'
import { History } from './pages/History'
import { Projects } from './pages/Projects'
import { Donations } from './pages/Donations'
import { Volunteers } from './pages/Volunteers'
import { Contact } from './pages/Contact'

import './styles/global.css'
import './styles/tailwind.css'

export function App() {
  return (
    <Routes>
      <Route path={HOME} element={<Layout />}>
        <Route index element={<Home />} />
        <Route path={HISTORY} element={<History />} />
        <Route path={PROJECTS} element={<Projects />} />
        <Route path={DONATIONS} element={<Donations />} />
        <Route path={VOLUNTEERS} element={<Volunteers />} />
        <Route path={CONTACT} element={<Contact />} />
      </Route>
    </Routes>
  )
}
