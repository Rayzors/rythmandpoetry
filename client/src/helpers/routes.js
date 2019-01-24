import LoadingScreen from '../Views/LoadingScreen/LoadingScreen';
import HomeScreen from '../Views/HomeScreen/HomeScreen';
import EraSelectContainer from '../Views/EraSelect/EraSelectContainer';
import AudioPlayerContainer from '../Views/Player/AudiPlayerContainer';

const routes = [
  {
    name: "loadingScreen",
    exact: true,
    path: "/",
    component: LoadingScreen
  },
  {
    name: "eraSelect",
    path: "/select",
    component: EraSelectContainer
  },
  {
    name: "homeScreen",
    path: "/home",
    component: HomeScreen
  },
  {
    name: "player",
    path: "/player",
    component: AudioPlayerContainer
  },
  {
    redirect: true,
    to: '/select'
  }
]

export default routes;