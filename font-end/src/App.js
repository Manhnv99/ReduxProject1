import store from "./redux/store";
import { connect, useDispatch, useSelector } from "react-redux";
import { increaseCounter, decreaseCounter } from "./action/actions";
import { useEffect } from "react";
import axios from "axios";
import Home from "./components/Home";

function App() {
  // const dispatch = useDispatch();

  // const count = useSelector((state) => {
  //   return state.counter.count;
  // });

  //cách viết khác
  // const handleIncrease=()=>{
  //   // dispatch 1 action
  //   store.dispatch(increaseCounter())
  // }

  return (
    // <div className="App">
    //   <div>Count: {count}</div>
    //   <button onClick={() => dispatch(increaseCounter())}>
    //     Increase Count
    //   </button>
    //   <button onClick={() => dispatch(decreaseCounter())}>
    //     Decrease Count
    //   </button>
    // </div>
    <Home/>
  );
}

// const mapStateToProps=(state)=>{
//   return{
//     count:state.counter.count
//   }
// }

// const mapDispatchToProps = (dispatch)=>{
//   return{
//     increaseCounter:()=>dispatch(increaseCounter()),
//     decreaseCounter:()=>dispatch(decreaseCounter())
//   }
// }
// export default connect(mapStateToProps,mapDispatchToProps)(App);
//-> Cách viết của Class Componet

export default App;
