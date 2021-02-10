import './App.css';
import Header from './pages/Header';
import UsersList from './pages/users/UsersList';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

function App() {
  return (
    <div className="App">
<Header/> 
<UsersList/>
   </div>
  );
}

export default App;
