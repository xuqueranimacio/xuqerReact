import { HeaderComponent } from "../../components/HeaderComponent"
import { ImageWrapper } from "../../components/ImageWrapper"
import { InfoSectionWrapperCustom, InfoSectionCardLeft, InfoSectionCardRight } from "../../components/InfoSection"
import { GalleryWrapper } from "../../components/GalleryWrapper"

// IMGS
import img1 from "/src/img/nosaltres/quisom/Principal.jpg"
import img2 from "/src/img/nosaltres/quisom/1.jpg"
import img3 from "/src/img/nosaltres/quisom/2.jpg"
import img4 from "/src/img/nosaltres/quisom/3.jpg"
import { FooterComponent } from "../../components/FooterComponent";



export function QuiSom() {
    return (
        <>
            <HeaderComponent />
            <ImageWrapper
                imgURL={img1}
                title="Qui Som"
            />
            <InfoSectionWrapperCustom title="Qui Som">
                <InfoSectionCardRight imgURL={img1}>
                    Xúquer Animació naix al poble d’Albalat de la Ribera l’any 2022 amb l’objectiu de donar-li un nou significat
                    a l’educació no formal. Som una entitat nova però amb experiència, ja que sorgim després d’estar més de 10
                    anys treballant de manera altruista a l’Associació Juvenil Xúquer Monitors. És en aquest punt quan es pren
                    la decisió de professionalitzar i revalorar tota la feina realitzada durant tots aquests anys.
                </InfoSectionCardRight>
                <InfoSectionCardLeft imgURL={img2}>
                    Així, es tracta de partir dels nostres orígens en el món de l’animació sociocultural i educativa, però integrant
                    noves metodologies i noves formes de treball que impliquen un aprenentatge més significatiu i adaptat a cada xiquet i xiqueta.
                </InfoSectionCardLeft>
                <InfoSectionCardRight imgURL={img3}>
                    A més, comptem amb un equip de monitors i monitores que esdevenen el nostre pilar fonamental i per als quals ser monitor/a
                    del temps lliure ha sigut un dels regals més grans que els ha donat la vida. Més d’una dècada d’aprenentatges i vivències
                    en el món de l’animació componen l’experiència professional i personal d’aquest gran equip de treball, el qual conforma la
                    màquina que greixa aquest projecte.
                </InfoSectionCardRight>
                <InfoSectionCardLeft imgURL={img4}>
                    En definitiva, el que desitgem transmetre és que ser monitor/a de temps lliure és una manera
                    d’entendre i de viure la vida, un sentiment vocacional que implica viure amb il·lusió i alegria
                    cada moment de treball. És per això que viure no és estar viu, viure és l’actitud d’omplir la vida!
                </InfoSectionCardLeft>
            </InfoSectionWrapperCustom>
            <FooterComponent />
        </>
    )
}