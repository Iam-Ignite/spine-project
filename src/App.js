import './App.css';
import Login from './pages/Login';
import {
  Routes,
  Route,
} from "react-router-dom";
import LoginSelect from './pages/LoginSelect';
import Qualification from './pages/Qualification';
import Final from './pages/final';
import DashBoard from './pages/Dashboard';
import Professsionals from './pages/Professsionals';
import Payment from './component/professional/Payment';
import Profile from './pages/Profile';
import Projects from './pages/Projects';
import ProjectView from './component/projects/ProjectView';
import MyJob from './pages/MyJob';
import ActivityLog from './pages/ActivityLog';
import ActivityLogView from './pages/ActivityLogView';
import Withdawal from './pages/Withdawal';
import Message from './pages/Message';

function App() {
  return (
    <>
      <Routes>
        <Route exact path="login" element={<Login />} />
        <Route path='/' element={<LoginSelect />} />
        <Route path='profile' element={<Profile />} />
        <Route path='projects' element={<Projects />} />
        <Route path='projects/projectview' element={<ProjectView />} />
        <Route path="myjobs" element={<MyJob />} />
        <Route path="activitylog" element={<ActivityLog />} />
        <Route path="/activitylog/withdraw" element={<Withdawal />} />
        <Route path="/activitylog/jobview" element={<ActivityLogView />} />
        <Route path='qualification' element={<Qualification />} />
        <Route path="final" element={<Final />} />
        <Route path="dashboard" element={<DashBoard />} />
        <Route path="professionals" element={<Professsionals />} />
        <Route path="payment" element={<Payment />} />
        <Route path="messages" element={<Message />} />


      </Routes>

    </>
  );
}

export default App;
