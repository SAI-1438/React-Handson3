import './App.css';
import React, { useState } from 'react';
import FunctionalBoxs from './Components/FunctionalBoxs';

function App() {
  const [showForm, setShowForm] = useState(true);

  const [allFormData, setAllFormData] = useState([]);

  const [formData, setFormData] = useState({
    Name : "",
    Department : "",
    Rating : "",
  });

  const handleChange = (event) => {
    setFormData({...formData, [event.target.name] : event.target.value});
  };

  const toggleBack = () => {
    setShowForm(true);
  }
  
  if(showForm){
  return (
    
    <div className="App">
      <h1>EMPLOYEE FEEDBACK FORM</h1>
      <form>
        <label><b>Name : </b></label><input type="text" name="Name" value={formData.Name} onChange={handleChange}/><br/><br/>
        <label><b>Department : </b></label><input type="text" name="Department" value={formData.Department} onChange={handleChange}/><br/><br/>
        <label><b>Rating : </b></label><input type="number" name="Rating" value={formData.Rating} onChange={handleChange}/><br/><br/><br/>
        <input type="submit" value="submit" 
          onClick={(e)=>{e.preventDefault(); 
          setAllFormData([...allFormData, formData]);
          setFormData({
            Name : "",
            Department : "",
            Rating : "",
          });
          setShowForm(false);
        }}
        /><br/>
      </form>
      <br/>
    </div>
  );
  } else{
  return <FunctionalBoxs allFormDatas={allFormData} togglebacks={()=>toggleBack()}/>;
}
}

export default App;
