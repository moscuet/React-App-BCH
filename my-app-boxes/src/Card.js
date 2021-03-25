function Card({person}) {
 
    return (
      <div className="card">
        <header className="card-header">
          <h1 key = {person.name}>{person.name}</h1>
          <p key = {person.name+person.title}>{person.title}</p>
          <p key = {person.name+person.age}>{person.age}</p>
        </header>
      </div>
    );
  }
  
  export default Card;
  