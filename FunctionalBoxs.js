import './Style.css';


function FunctionalBoxs(props){
  return(
    <div className='functnbox'>
    <h1>EMPLOYEE FEEDBACK FORM</h1>
    <div className='mainbox'>
    {props.allFormDatas.map((value,index) => {
      return(
          <div className='box' key={index}>
            <b>Name :{value.Name} | Department :{value.Department} | Rating:{value.Rating}</b>
          </div>
      );
    })}
    </div>
    <button type="button" className='back' onClick={props.togglebacks}>Go Back</button>
    </div>
  );
}

export default FunctionalBoxs;