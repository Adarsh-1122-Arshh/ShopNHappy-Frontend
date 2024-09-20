import logo from './logo.svg';
import './App.css';
import {BazaarExchange} from './Pages/BazaarExchange';
import { Provider } from 'react-redux';
import { store } from './Configurations/BazaarStore';
import { userContext} from './Common/Component/UserContext';
function App() {
  // const [userLooginBTN,setUserLoginBTN]=useState();
  return (
    <div >
      <Provider store={store} >
        {/* <userContext.Provider value ={}> */}
        < BazaarExchange/>
        {/* </userContext.Provider> */}
       </Provider>
    </div>
  );
}

export default App;
