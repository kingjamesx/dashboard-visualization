export const onDelete = async (id) => {
    await fetch(`https://jsonplaceholder.typicode.com/post/${id}`, {
      method: "DELETE"
    })
   
  };