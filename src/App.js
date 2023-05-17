import logo from './Bridgelabzz.jpg';
import './App.css';
import { useState } from 'react';

function ComponentStore(){
  // const displayString = "Hello from BridgeLabz 2";
  return (<>
      <h2>Address:: </h2><p>BridgeLabz Solutions Private Limited,
      1st Floor, Malhotra Chambers, Deonar, Govandi East, Mumbai - 400088,</p><h2> Timing - 9:30am to 5:00pm</h2>
       </>
  );
}

function ComponentOnClickBridgelabzLogo(){
    const urlComponent = "https://www.bridgelabz.com/";
      return ()=>{
        window.open(urlComponent,'_blank')
      };
}

// "export default" is used to tell the main component 
export default function App() {
    const displayString = "Hello from BridgeLabz";
    const url = "https://www.bridgelabz.com/";

// Two ways to open website::
// 1. by creating functions
// 2. by creating component 

// Method:: 01
    let onClickBridgelabzLogo = ()=>{
      window.open(url,'_blank');
    };

// Method:: 02
    // const onClickBridgelabzLogoByCompnent = ComponentOnClickBridgelabzLogo();

//Changing As Per UserInput But Error Occurs This way :: Both Doesn't Changes At The Same Time
    // let initialValues = {
    //   name:"Bridgelabz",
    //   age:24
    // }
    let initialNameValues = {
     name : "Bridgelabz_Candidate"
    }
    let initialAgeValues = {
      age : 1
     }
     
  
// Two different useStates used to update both at the same time and one change should retain when other one is changing
    // const [formValue,setValue] = useState(initialValues);
    const [formValueName,setValueName] = useState(initialNameValues);
    const [formValue,setValue] = useState(initialAgeValues);

    const onChangeUserName = (event)=>{
      console.log(event.target.value);
      setValueName({name: event.target.value});
    };
    const onChangeAge = (event)=>{
      console.log(event.target.value);
      setValue({age: event.target.value});
    };

 
  return (
    <>

{/* this is one way binding */}
        <h1>{displayString}</h1>

{/* this way we can use other components */}
        <ComponentStore />

{/* ==>> " This way we can use Property-Binding " */}

{/* Method::01 for open website {reference line :: 31} */}
        <img src={logo} alt='Bridgelabz logo not found' onClick={onClickBridgelabzLogo} />
        
{/* Method::02 for open website {reference line :: 11,32} */}
        {/* <img src={logo} alt='Bridgelabz logo not found' onClick={onClickBridgelabzLogoByCompnent} /> */}

        {/* <br/><h3>&emsp; Candidate Name :: {formValueName.name} &emsp;&emsp;&emsp; Age :: {formValue.age}</h3> */}

        <br/>
        <h3>&emsp; Candidate Name :: <input type='text' id='userName' class='userInput' onChange={onChangeUserName} />
            &emsp;<em><span id='helloMessage' style={{color: 'red'}}> " Hello, {formValueName.name} ". This is BridgeLabz....</span></em></h3>
        <h3>&emsp; Age :: <input type='number' id='age' class='userInput' min={1} max={120} onChange={onChangeAge} />
            &emsp;&emsp;Entered Age :: {formValue.age}</h3>
    </>

  );
}

// export default App;
