import React from 'react'
import Link from 'next/link';

async function Tickets() {
    await new Promise((resolve) => setTimeout(resolve, 4000));
    const resp = await fetch("http://localhost:4000/tickets", {
      next: {
        revalidate: 0,
      },
    });
    return resp.json();
  }

export default async function Cards() {
    const tickets = await Tickets();
    const ticketString = JSON.stringify(tickets);
  return (
    <div>
      <div class="container">
            <div  class="row">
              {tickets.map((ticket) => (
              <div key={ticket.id} className="col-4">
                <div class="card p-3 mb-2">
                  <div>
                    <p>
                      <small className={`${ticket.color}`}>
                        {ticket.title},
                      </small>
                    </p>
                  </div>
                  <div>
                    <p class="card-text">{ticket.body.slice(0, 100)}...</p>
                  </div>
                  <div>
                    <button className={`btn btn-${ticket.color}`}>
                      <Link href={`/participants/${ticket.id}`}>View</Link>
                    </button>
                  </div>
                </div>
              </div>
              ))}
            </div> 
          </div>
    </div>
  )
}
