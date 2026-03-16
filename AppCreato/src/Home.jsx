import React from 'react';
import Banner from './Components/Banner';
import Apps from './Components/Apps';
import { useLoaderData } from 'react-router';

const Home = () => {
  const apps=useLoaderData();
  const totalDownloads = apps.reduce((sum, app) => sum + app.downloads, 0);
  const totalReviews = apps.reduce((sum, app) => sum + app.reviews, 0);
  const activeApps = apps.length;
  return (
    <div>
      <Banner />
      {/* calculation of reviews, downloads and active apps */}
      <div className='w-full h-[310px] bg-gradient-to-r from-purple-600 to-purple-400 text-white flex flex-col items-center justify-center gap-5'>
        <h1 className='text-5xl font-bold'>Trusted by Millions, Built for You</h1>
        <div className='flex justify-around gap-20'>
          <div >
            <p>Total Downloads</p>
            <h1 className='text-4xl font-bold'>{totalDownloads}</h1>
            <p>21% more than last month</p>
          </div>
          <div>
            <p>Total Reviews</p>
            <h1 className='text-4xl font-bold'>{totalReviews}</h1>
            <p>46% more than last month</p>
          </div>
          <div>
            <p>Active Apps</p>
            <h1 className='text-4xl font-bold'>{activeApps}</h1>
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