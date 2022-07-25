
function Character({character}) {

  return (
         <div className="text-center p-5">
              <h3>{character.name}</h3>
              <img src={character.image} alt={character.name} className="img-fluid rounded-pill"/>
         </div>
  )
}

export default Character