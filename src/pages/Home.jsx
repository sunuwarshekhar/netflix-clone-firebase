import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../Request'
const Home = () => {
  return (
    <div>
      <Main/>
      <Row rowID='2' title='Popular' fetchURL={requests.requestPopular}/>
      <Row rowID='3' title='Top Rated' fetchURL={requests.requestToprated}/>
      <Row rowID='4' title='Now Playng' fetchURL={requests.requestNowplaying}/>
      <Row rowID='1' title='Up coming' fetchURL={requests.requestUpcoming}/>

    </div>
  )
}

export default Home
