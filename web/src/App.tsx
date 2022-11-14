import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './assets/styles/global.css'
import {routes} from './routes'

export function App() {

  return(
    <BrowserRouter basename='/text-sep'>
      <Routes>
        {
          routes.map(({path,element},index) =><Route key={index} path={path} element={element}/>)
        }
      </Routes>
    </BrowserRouter>
  )

}
