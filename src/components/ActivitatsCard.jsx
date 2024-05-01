export function ActivitatsCard(props){
    return(
        <>
        
            <div className="activitats-card" data-aos="fade-left" >

                <div className="info">
                    <h1>{props.titulo}</h1>
                    <p>{props.texto}</p>
                    <form action={props.pagina}>
                        <button className="contact-activitats">Veure Més</button>
                    </form>
                </div>
                <div className="image">
                    <img src={props.imgurl} alt="" />
                </div>

            </div>
        
        </>
    )
}