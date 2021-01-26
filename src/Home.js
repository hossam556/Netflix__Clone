import React from 'react';
import './Home.css';
import Row from './Row/Row';
import requests from './requests';
import Banner from './Banner/Banner';
import Nav from './Nav/Nav';


const Home =()=> {
  return (
    <div className="App">
      <Nav/>
      <Banner/>
      <Row title='NETFLIIX ORIGINALS' fetchUrl={requests.fetchNetflixOriginals} isPoster/>
      <Row title='Trending Now' fetchUrl={requests.fetchTrending}/>
      <Row title='Top Rated' fetchUrl={requests.fetchTopRated}/>
      <Row title='Action Movies' fetchUrl={requests.fetchActionMoivies}/>
      <Row title='Comedy Movies' fetchUrl={requests.fetchComedyMoivies}/>
      <Row title='Horror Movies' fetchUrl={requests.fetchHorroMoivies}/>
      <Row title='Romance Movies' fetchUrl={requests.fetchRomanceMoivies}/>
      <Row title='Documentaries' fetchUrl={requests.fetchDocumentaries}/>


    </div>
  );
}

export default Home;
