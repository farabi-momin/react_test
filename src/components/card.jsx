import '../index.css'
const cardTitle = "Farabi";
const cardBody = "idsahvbdsyufhbyasdf ibsadipbfihbf ihsfdbisudfb";
const cardFooter = "Bye BYe!!!"

function Card(){
    return (
        <div className='cardDiv'>
            <h3>{cardTitle}</h3>
            <p>{cardBody}</p>
            <p>{cardFooter}</p>
        </div>
    )
}

export default Card;