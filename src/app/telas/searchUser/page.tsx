import ArrayList from "../../../componentes/ArrayUsers/arrayUsers";
import Header from "@/componentes/Header/headerAdm/headerAdm";
import SearchInput from "@/componentes/SearchInputUser/input";

export default function SearchUser(){
    return(
        <>
        <header>
            <Header/>
        </header>
        
        <div className="mt-10">
            <ArrayList/>
        </div>

        </>
    )
}