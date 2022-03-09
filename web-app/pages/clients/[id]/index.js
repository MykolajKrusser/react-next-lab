import { useRouter } from 'next/router';


function SelectedClientProjectPage(){
  const router = useRouter();
  console.log(router.query)

  function loadProjectHandler(){
    router.push({
      pathname: '/clients/[id]/[clientprojectid]',
      query: { id: 'max', clientprojectid: 'a' }
    })
  }

  return(
    <div>
      <h1>Project page for a specific project for a selected client</h1>
      <button onClick={loadProjectHandler}>
        Load project A
      </button>
    </div>
  )
}

export default SelectedClientProjectPage;
