import { useEffect, useRef, useState } from "react";
import "./App.css";
import * as tt from "@tomtom-international/web-sdk-maps";

function App() {
  const mapElement = useRef();
  console.log(mapElement);
  const [map, setMap] = useState({});

  useEffect(() => {
    let map = tt.map({
      key: process.env.REACT_APP_MATRIX_ROUTING,
      container: mapElement.current,
    });
  }, []);

  console.log(mapElement);
  return (
    <div className="App">
      <div ref={mapElement}></div>
    </div>
  );
}

export default App;
