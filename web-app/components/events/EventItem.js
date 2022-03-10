import Link from 'next/link'

function EventItem(props) {
  const { title, image, date,  location, id } = props;
  const prettyDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })

  const formattedLocation = location.replace(', ', '\n');
  const url = `/event/${id}`

  return (
    <li>
      <img src={'/' + image} alt={title + ' in ' + formattedLocation}/>
      <div>
        <div>
          <h2>{title}</h2>
          <div>
            <time>{prettyDate}</time>
          </div>
          <div>
            <address>{formattedLocation}</address>
          </div>
        </div>
        <div>
          <Link href={url}>Explore more</Link>
        </div>
      </div>
    </li>
  )
}

export default EventItem;
