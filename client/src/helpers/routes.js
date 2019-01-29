import LoadingScreen from '../Views/LoadingScreen/LoadingScreen';
import HomeScreen from '../Views/HomeScreen/HomeScreen';
import EraSelectContainer from '../Views/EraSelect/EraSelectContainer';
import Global from '../Views/Global/Global';
import HallOfFame from '../Views/HallOfFame/HallOfFame';
import EraContent from '../Views/EraContent/EraContent';

const routes = [
  {
    name: "loadingScreen",
    exact: true,
    path: "/",
    component: LoadingScreen
  },
  {
    name: "homeScreen",
    path: "/home",
    component: HomeScreen
  },
  {
    name: "global",
    component: Global,
    path: "/g",
    routes: [
      {
        name: "eraSelect",
        path: "/select-your-era",
        component: EraSelectContainer
      },
      {
        name: "VisitEra",
        path: "/episodes/:eraName",
        component: EraContent,
      },
      {
        name: "hallOfFame",
        path: "/hall-of-fame",
        component: HallOfFame
      },
      {
        redirect: true,
        to: '/select-your-era'
      }
    ]
  },
  {
    redirect: true,
    to: '/'
  }
]

export default routes;