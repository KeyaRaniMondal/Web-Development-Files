import React from 'react';
import Banner from './Components/Banner';
import Apps from './Components/Apps';
import { useLoaderData } from 'react-router';

const Home = () => {
  const apps=useLoaderData();
  return (
    <div>
      <Banner />
      <div>
        <h1>Trusted by Millions, Built for You</h1>
        <div>
          <div>
            <p>Total Downloads</p>
            <h1></h1>
            <p>21% more than last month</p>
          </div>
          <div>
            <p>Total Reviews</p>
            <h1></h1>
            <p>46% more than last month</p>
          </div>
          <div>
            <p>Active Apps</p>
            <h1></h1>
            <p>31 more will Launch</p>
          </div>
        </div>
      </div>
      {/* for showing top apps */}
      <Apps apps={apps} />
    </div>
  );
};

export default Home;