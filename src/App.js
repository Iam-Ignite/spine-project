import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import DashBoard from './pages/Dashboard';
import Professsionals from './pages/Professsionals';
import Payment from './component/professional/Payment';
import Projects from './pages/Projects';
import ProjectView from './component/projects/ProjectView';
import MyJob from './pages/MyJob';
import ActivityLog from './pages/ActivityLog';
import ActivityLogView from './pages/ActivityLogView';
import Message from './pages/Message';
import HiredProfessional from './pages/HiredProfessional';
import Profile from './pages/Profile';

function App() {
  return (
    <>
      <Routes>
        <Route path='projects' element={<Projects />} />
        <Route path='projects/projectview' element={<ProjectView />} />
        <Route path="myjobs" element={<MyJob />} />
        <Route path="activitylog" element={<ActivityLog />} />
        <Route path="/activitylog/jobview" element={<ActivityLogView />} />
        <Route path="dashboard" element={<DashBoard />} />
        <Route path="professionals" element={<Professsionals />} />
        <Route path="payment" element={<Payment />} />
        <Route path="profile" element={<Profile />} />
        <Route path="hiredprofessionals" element={<HiredProfessional />} />
        <Route path="messages" element={<Message />} />


      </Routes>

    </>
  );
}

export default App;
