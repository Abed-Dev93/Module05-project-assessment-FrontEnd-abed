import './App.css'
import AppRoutes from './routes/AppRoutes'
import axios from 'axios'

function App() {

  axios.defaults.withCredentials = true

  return (
    <div className="App">
      <AppRoutes />
    </div>
  );
}

export default App;
