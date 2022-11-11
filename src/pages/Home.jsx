import React from "react";
import Main from "../components/Main";
import Row from "../components/Row";
import requests from "../Request";

const Home = () => {
  return (
    <>
      <Main />
      <Row rowID='1' title="Próximamente" fetchURL={requests.requestUpcoming} />
      <Row rowID='2' title="Más Populares" fetchURL={requests.requestPopular} />
      <Row rowID='3' title="Los Más Valorados" fetchURL={requests.requestTopRated} />
      <Row rowID='4' title="Tendencias" fetchURL={requests.requestTrending} />
      <Row rowID='5' title="Terror" fetchURL={requests.requestHorror} />
    </>
  );
};

export default Home;
