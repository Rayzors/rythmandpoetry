import LoadingScreen from '../Views/LoadingScreen/LoadingScreen';
import HomeScreen from '../Views/HomeScreen/HomeScreen';
import EraSelect from '../Views/EraSelect/EraSelect';

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
    component: EraSelect
  },
  {
    name: "homeScreen",
    path: "/home",
    component: HomeScreen
  },
  {
    redirect: true,
    to: '/'
  }
]

export default routes;