import {useState} from 'react'
import Pagination from 'react-responsive-pagination';
export const Table = ({ data}) => {
    const [search,setSearch]= useState('')
        const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage]=useState(10)
    function handlePageChange(page) {
        setCurrentPage(page);
      }
     const indexOfLastPost=currentPage * postsPerPage;
    const indexOfFirstPost=indexOfLastPost -postsPerPage;
    const x=data.filter((item)=>{
        // eslint-disable-next-line 
        // return search===''?item: (item.userId==search)
        if(search===''){
        return item
        }
       if(search===item.userId){
            return item.userId
     }
     
     if('complete'.includes(search)){
           return item.completed===true
      }
      if('not complete'.includes(search)){
           return item.completed===false
      }
      return item;

    })
    const currentPost=x.slice(indexOfFirstPost,indexOfLastPost)
      const totalPages =x.length/10;



return (

      <div>
      <h2>Table Data</h2>
      <input type="text" onChange={(e)=>setSearch(e.target.value)} />
      <button>Search</button>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>User Id</th>
            <th>Title</th>
            <th>Status</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {currentPost.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.userId}</td>
                <td>{item.title}</td>
                <td>{item.completed ? "complete" : "not complete"}</td>
                <td>
                  <button>Edit</button> <button>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Pagination
      current={currentPage}
      total={totalPages}
      onPageChange={page => handlePageChange(page)}
    />
    </div>
    
)
} 