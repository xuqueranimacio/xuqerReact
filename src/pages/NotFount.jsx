import { FooterComponent } from "../components/FooterComponent";
import { HeaderComponent } from "../components/HeaderComponent";
import { InfoSectionWrapperCustom } from "../components/InfoSection";

export function NotFound(){
    return(
        <>
            <HeaderComponent />
                <div className="container pageCenter">
                    <h1 className="firstTitleCustom">Error 404</h1>
                    <h1 className="section-title">Esta Pagina no Existe :(</h1>
                </div>
            <FooterComponent />
        </>
    )
}