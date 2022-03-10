import { getFeaturedEvents } from "../dummy_data";
import EventList from "../components/events/EventList";

function HomePage (){
  const featuresEvents = getFeaturedEvents();

  return (
    <div>
      <h1>Home page</h1>
      <EventList items={featuresEvents}/>
    </div>
  )
}


export default HomePage;
