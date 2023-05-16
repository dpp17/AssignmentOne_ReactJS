import logo from './Bridgelabzz.jpg';
import './App.css';

function ComponentStore(){
  // const displayString = "Hello from BridgeLabz 2";
  return (
    <h2>Hello from BridgeLabz 2</h2>
  );
}

// "export default" is used to tell the main component 
export default function App() {
  const displayString = "Hello from BridgeLabz";
  return (
    <>

    {/* this is one way binding */}
    <h1>{displayString}</h1>

    {/* this way we can use other components */}
    <ComponentStore />

    {/* this way we can use Property-Binding */}
    <img src={logo} alt='Bridgelabz logo not found'/>
    </>

  );
}

// export default App;
