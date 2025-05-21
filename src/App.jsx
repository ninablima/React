// import Title from "./components/Title"
// import Button from "./components/Button"
// import Card from "./components/Card"
import { ssrImportMetaKey } from "vite/module-runner"
import UserProfile from "./components/UserProfile"

function App() {

  const usuario = {
    nome:"Nina",
    status: "Ativo"
  }

  return (
    <>
    <UserProfile profile={usuario}/>
    </>
  )
}

export default App
