
function ComponentStore(){
  const displayString = "Hello from BridgeLabz 2";
  return displayString;
  
}

// "export default" is used to tell the main component 
export default function App() {
  const displayString = "Hello from BridgeLabz";
  return (
    <>

    {/* this is one way binding */}
    <h1>{displayString}</h1>

    {/* this way we can use other components */}
    <h2><ComponentStore /></h2>
    </>

  );
}

// export default App;
