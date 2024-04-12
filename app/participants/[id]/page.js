
export async function getId(id){
    try{
        const resp = await fetch('http://localhost:4000/tickets/' + id, {
            next:{
                revalidate:30
            }
        });
        return resp.json();
    }
    catch{
        alert('Error communicating with the API')
    }
}

export default async function page({ params }) {
    try{
        const ticket = await getId(params.id);
        console.log(ticket);
      return (
        <div className={`${ticket.color}`}>
          <h1 className="text-center text-white"><u>{ticket.title}</u></h1>
          <p className="text-center text-white">{ticket.body}</p>
        </div>
      )
    }
    catch{
        return(
            <h1>Id not found</h1>
        )
    }
}
