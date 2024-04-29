import "./App.css";
import LifecycleA from "./LifecycleA";
import LifecycleB from "./LifecycleB";
import LifecycleD from "./LifecycleD";

function App() {
  return (
    <div className="App">
      <LifecycleA />
      <LifecycleB />

      <LifecycleD />
    </div>
  );
}

export default App;

/*
MOUNTING

LifecycleA : constructor => getDerivedStateFromProps => render => componentDidMount

LifecycleB constructor 
 ↓
LifecycleB getDerivedStateFromProps
 ↓
LifecycleB render
 ↓
LifecycleC constructor
 ↓
LifecycleC getDerivedStateFromProps
 ↓
LifecycleC render
 ↓
LifecycleC componentDidMount
 ↓
LifecycleB componentDidMount

*/

/*
UPDATING

LifecycleD getDerivedStateFromProps
↓
LifecycleD shouldComponentUpdate
↓
LifecycleD render
↓
LifecycleE getDerivedStateFromProp
↓
LifecycleE shouldComponentUpdate
↓
LifecycleE render
↓
LifecycleE getSnapshotBeforeUpdate
↓
LifecycleD getSnapshotBeforeUpdate
↓
LifecycleE componentDidUpdate
↓
LifecycleD componentDidUpdate

*/

/*
UNMOUNTING
componentWillUnmount
*/

/*  
Error Handling
getDerivedStateFromError(error)
componentDidCatch(error,info)
*/

/*
useEffect(()=>{},[]) => componentDidMount 
useEffect(()=>{},[dep1,dep2]) => componentDidUpdate
useEffect(()=>{ return ()=>{}},[dependency]) => componentWillUnmount 
*/