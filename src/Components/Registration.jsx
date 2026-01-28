import { useState } from "react"
export const Registration = () => {
  const [name, setname] = useState('')
  const [age, setage] = useState('')
  const [dept, setstan] = useState('')
  const [arr, setarr] = useState([])
  const display = () => {
    setarr([
      ...arr,
      { Fullname: name, personage: age, Standard: dept }
    ])
  }
  const deleteItem = (index) => {
    const newArr = arr.filter((_, i) => i !== index)
    setarr(newArr)
  }
  const updateItem = (index) => {
    const updatedArr = arr.map((item, i) =>
      i === index
        ? { Fullname: name, personage: age, Standard: dept }
        : item
    )
    setarr(updatedArr)
  }
  return (
    <div
      style={{
        textAlign: "center",
        backgroundImage: `url('https://th.bing.com/th/id/R.52e2151821891d00cf3252528dbb429a?rik=ZAdwGCC25nwn%2bw&riu=http%3a%2f%2fstatic8.depositphotos.com%2f1092019%2f917%2fi%2f450%2fdepositphotos_9176885-stock-photo-registration-button.jpg&ehk=LByAN%2bqe2YbyJCDudFGWkF1ikw6DOkYxPAJF8%2fKo1G8%3d&risl=&pid=ImgRaw&r=0)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '330px',
        fontSize: '20px'
      }}
    >
      <h1>Student Registration</h1>
      <form>
        Name:
        <input type="text" onChange={(e) => setname(e.target.value)} /><br /><br />
        Age:
        <input type="number" onChange={(e) => setage(e.target.value)} /><br /><br />
        Standard:
        <input type="text" onChange={(e) => setstan(e.target.value)} /><br /><br />
      </form>
      <button onClick={display}>Insert</button>
      <br /><br />
      {arr.length > 0 && (
        <table
          border="1"
          align="center"
          style={{ width: "40%" }}
        >
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Standard</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {arr.map((item, index) => (
              <tr key={index}>
                <td>{item.Fullname}</td>
                <td>{item.personage}</td>
                <td>{item.Standard}</td>
                <td>
                  <button onClick={() => updateItem(index)}>Update</button>
                  <button onClick={() => deleteItem(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}
