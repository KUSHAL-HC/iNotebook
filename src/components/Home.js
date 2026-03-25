import Notes from "./Notes.js";


const Home = (props) => {
  const {showAlert} = props
  return (
    <div className="container-fluid">
        <Notes showAlert={showAlert}/>
     </div>
  )
}

export default Home