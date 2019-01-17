import LoadingScreen from '../Views/LoadingScreen/LoadingScreen';
import HomeScreen from '../Views/HomeScreen/HomeScreen';
import EraSelectContainer from '../Views/EraSelect/EraSelectContainer';

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
    redirect: true,
    to: '/select'
  }
]

export default routes;