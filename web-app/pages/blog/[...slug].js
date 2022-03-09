import { useRouter } from "next/router";

function BlogPages(){
  const router = useRouter();
  console.log(router.query)

  return(
    <div>
      <h1>Blog page</h1>
    </div>
  )
}

export default BlogPages;
