export function ImageWrapper(props){
    return(
        <section className="imagewrapper">
            <div className="container">
                <div className="img-title">
                    <img src={props.imgURL} alt="" />
                    <div className="absolute-title">
                        <a href="">
                            <h1>{props.title}</h1>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}