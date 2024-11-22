import { FetchPokemon} from "@/componentes/FetchPokemon"
import { Suspense } from "react"
import ErrorBoundary from "./error"

const Page = ({}) => {
 return (
 <ErrorBoundary>
        <Suspense fallback={<h2>Cargando....</h2>}><FetchPokemon/></Suspense>
 </ErrorBoundary>
    )
}
export default Page
