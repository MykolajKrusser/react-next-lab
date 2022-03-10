import { getFeaturedEvents } from "../dummy_data";
import EventList from "../components/events/event-list";

function HomePage (){
  const featuresEvents = getFeaturedEvents();

  return (
    <div>
      <h1 style={{textAlign: 'center'}}>Home page</h1>
      <EventList items={featuresEvents}/>
    </div>
  )
}


export default HomePage;
