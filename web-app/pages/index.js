import {Fragment} from "react";
import Hero from "../components/home-page/hero"
import FeaturedPosts from "../components/home-page/reatured-posts"

function HomePage() {
  return (
    <Fragment>
      <Hero/>
      <FeaturedPosts/>
    </Fragment>
  )
}

export default HomePage;
