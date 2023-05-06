import { Provider } from "react-redux"
import store from "./redux/store"
import CakeContainer from "./components/CakeContainer"
import HooksCakeContainer from "./components/HooksCakeContainer"



function App() {


  return (
    <Provider store={store}>

      <div className="flex gap-4 flex-col justify-center items-center min-h-screen">
        <h1 className="font-extralight text-2xl">REDUX</h1>
        <HooksCakeContainer />
        <CakeContainer />
        <h1>Note: Other method is <span className="border border-red-400 px-2 py-1"> subscribe</span></h1>
      </div>
    </Provider >

  )
}

export default App
