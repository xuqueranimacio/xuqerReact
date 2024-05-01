export function SectionTitle(props){
    return(
        <>
        
            <div className="container" style={{textAlign: "center"}}>
                <h1 className="section-title">{props.children}</h1>
            </div>
        
        </>
    )
}