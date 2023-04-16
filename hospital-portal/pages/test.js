import { useDispatch, useSelector } from "react-redux";
import { increment } from "../redux/actions";

export default function test() {
  const dispatch = useDispatch();
  const count = useSelector((a) => {
    console.log(a);
    return a.counter;
    
  });
  
  return (
    <div>
      <h1 onClick={()=> dispatch(increment())}>Counter {count}</h1>
    </div>
  );
}
