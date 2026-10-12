import axios from "axios";
import "./App.css";
import Chart from "./Components/Chart/Chart";
import MarksChart from "./Components/MarksChart/MarksChart";
import NavBar from "./Components/NavBar/NavBar";
import { Suspense } from "react";
import GroceryChart from "./Components/GroceryChart/GroceryChart";

const marksPromise = axios.get("marks-2.json");
const groceryPromise = axios.get("walmart-data.json");
function App() {
  return (
    <>
      <NavBar></NavBar>
      <Chart></Chart>
      <Suspense
        fallback={<span className="loading loading-spinner loading-lg"></span>}
      >
        <MarksChart marksPromise={marksPromise}></MarksChart>
      </Suspense>
      <Suspense
       fallback={<span className="loading loading-spinner loading-lg"></span>}
      >
        <GroceryChart groceryPromise={groceryPromise}></GroceryChart>
      </Suspense>
    </>
  );
}

export default App;
