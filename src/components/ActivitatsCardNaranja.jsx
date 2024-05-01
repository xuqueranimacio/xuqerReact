export function ActivitatsCardNaranja(props){
    return(
        <>
        
            <div className="activitats-card naranja" data-aos="fade-right" >

                <div className="image">
                    <img src={props.imgurl} alt="" />
                </div>

                <div className="info">
                    <h1>{props.titulo}</h1>
                    <p>{props.texto}</p>
                    <form action={props.pagina}>
                        <button className="contact-activitats botonrj">Veure Més</button>
                    </form>
                </div>
                

            </div>
        
        </>
    )
}