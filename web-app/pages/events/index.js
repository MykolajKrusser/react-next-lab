import {Fragment} from "react";
import {getAllEvents} from "../../dummy_data";
import EventList from "../../components/events/event-list";
import EventsSearch from "../../components/events/events-search";
import {useRouter} from "next/router";

function Events(){
  const events = getAllEvents();
  const router = useRouter();

  function findEventHandler(year, month){
    const fullPath = `/events/${year}/${month}`
    router.push(fullPath)
  }

  return(
    <Fragment>
      <EventsSearch onSearch={findEventHandler} />
      <EventList items={events}/>
    </Fragment>
  )
}

export default Events;
