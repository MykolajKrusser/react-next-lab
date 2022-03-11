import {useRouter} from "next/router";
import {getFilteredEvents} from "../../dummy_data";
import EventList from "../../components/events/event-list";
import ResultsTitle from "../../components/events/results-title";
import {Fragment} from "react";

function FilteredEventsPage(){
  const router = useRouter();
  const filteredData = router.query.slug

  if (!filteredData){
    return <p className="center">Loading..</p>
  }

  const filteredYear = filteredData[0];
  const filteredMonth = filteredData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if(isNaN(numYear) || isNaN(numMonth)){
    return <p className="center">invalid filter</p>
  }

  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth
  });

  if(!filteredEvents || filteredEvents.length === 0){
    return <p className="center">No events found</p>
  }

  const date = new Date(numYear, numMonth - 1)

  return(
    <Fragment>
      <ResultsTitle date={date}/>
      <EventList items={filteredEvents}/>
    </Fragment>
  )
}

export default FilteredEventsPage;
