import React from 'react';
import Banner from '../Components/Banner';
import Apps from './Apps';
import { useLoaderData } from 'react-router';

const Home = () => {
  const apps = useLoaderData();
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
            <h1 className='text-4xl font-bold'>
              {/* to show the total downloads in a compact format like 1.2K, 3.4M etc we can use Intl.NumberFormat with notation set to compact */}
              {new Intl.NumberFormat("en-US", {
                notation: "compact"
              }).format(totalDownloads)}
            </h1>
            <p>21% more than last month</p>
          </div>
          <div>
            <p>Total Reviews</p>
            <h1 className='text-4xl font-bold'>
              {new Intl.NumberFormat("en-US", {
                notation: "compact"
              }).format(totalReviews)}
            </h1>
            <p>46% more than last month</p>
          </div>
          <div>
            <p>Active Apps</p>
            <h1 className='text-4xl font-bold'>
              {new Intl.NumberFormat("en-US", {
                notation: "compact"
              }).format(activeApps)}
            </h1>
            <p>31 more will Launch</p>
          </div>
        </div>
      </div>
      {/* for showing top apps */}
      <div className='text-center justify-center mt-14'>
        <h1 className='text-3xl font-bold mb-4'>Trending Apps</h1>
        <p className='text-[#627382]'>Explore All Trending Apps on the Market developed by us</p>
        <Apps apps={apps.slice(0, 8)} />
        <button className="btn btn-outline btn-primary bg-gradient-to-r from-purple-600 to-purple-400 text-white gap-2 py-2 px-4 ">
          Show All
        </button>
      </div>
    </div>
  );
};

export default Home;