import logo from './Bridgelabzz.jpg';
import './App.css';

function ComponentStore(){
  // const displayString = "Hello from BridgeLabz 2";
  return (
    <h2>Hello from BridgeLabz 2</h2>
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

    </>

  );
}

// export default App;
