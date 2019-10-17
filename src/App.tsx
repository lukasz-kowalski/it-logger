import React, { useEffect } from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import "materialize-css/dist/css/materialize.min.css";
//@ts-ignore
import M from "materialize-css/dist/js/materialize.min.js";
import SearchBar from "./components/layout/SearchBar";
import Logs from "./components/logs/Logs";
import TechListModal from "./components/techs/TechListModal";
import AddBtn from "./components/layout/AddBtn";
import AddLogModal from "./components/logs/AddLogModal";
import EditLogModal from "./components/logs/EditLogModal";
import AddTechModal from "./components/techs/AddTechModal";
import "./App.css";

const App: React.FC = () => {
  useEffect(() => {
    // Init Materialize vanilla JS
    M.AutoInit();
  });

  return (
    <Provider store={store}>
      <SearchBar />
      <div className="container">
        <AddBtn />
        <AddLogModal />
        <EditLogModal />
        <AddTechModal />
        <TechListModal />
        <Logs />
      </div>
    </Provider>
  );
};

export default App;
