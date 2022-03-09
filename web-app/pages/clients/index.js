import Link from 'next/link';

function ClientsPage(){
  const clients =[
    {id: 'max', name: 'Maxx'},
    {id: 'bax', name: 'Baxx'}
  ]

  return(
    <div>
      <h1>Clients page</h1>
      <ul>
        {
          clients.map(client => {
            return (
              <li key={client.id}>
                <Link href={{
                  pathname: '/clients/[id]',
                  query: { id: client.id }
                }}>{client.name}</Link>
              </li>
            )
          })
        }
      </ul>

    </div>
  )
}

export default ClientsPage;
