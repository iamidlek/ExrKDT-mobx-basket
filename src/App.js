import "bootstrap/dist/css/bootstrap.css";
import { Provider } from "mobx-react";
import Mart from "./components/Mart";
import MarketStore from "./store/MarketStore";

// 스토어 생성
const marketStore = new MarketStore();

function App() {
  return (
    <Provider className="App" market={marketStore}>
      <Mart />
    </Provider>
  );
}

export default App;
