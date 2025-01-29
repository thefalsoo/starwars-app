import HomeView from '../views/HomeView';
import CharactersView from '../views/CharactersView';
import PlanetsView from '../views/PlanetsView';
import { Route, Routes } from 'react-router-dom';
import { RoutesPath } from '../routes/routes';
import CharacterDetailView from '../views/CharacterDetailView';

export function AppRoutes() {
  return (
    <Routes>
      <Route path={RoutesPath.HOME} element={<HomeView />} />
      <Route path={RoutesPath.CHARACTERS} element={<CharactersView />} />
      <Route
        path={RoutesPath.CHARACTERDETAIL}
        element={<CharacterDetailView />}
      />
      <Route path={RoutesPath.PLANETS} element={<PlanetsView />} />
    </Routes>
  );
}

export default AppRoutes;
