import productData from './data/full-products';	import productData from './data/full-products';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";




function App() {	function App() {
  return (	  
     (
    <div className="App">	    <div className="App">
      <h1>Hello There.</h1>	       <Header />
      <Routes>
        <Route path="/" element={<CardList data={productData} />} />
        <Route path="/product/:id" element={<SingleView data={productData} />} />
      </Routes>
    </div>	    </div>
  );	  ;
}	}


export default App;	export default App;

