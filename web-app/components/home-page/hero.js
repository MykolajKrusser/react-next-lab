import classes from './hero.module.css'
import Image from "next/image";
function Hero(){
  return(
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image src="/images/site/ava.png" alt="" width={300} height={300} />
      </div>
      <h1>Hi</h1>
      <p>
        ddddddd
      </p>
    </section>
  )
}

export default Hero;
