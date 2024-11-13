import { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredReadList } from '../../Utility/AddtoDB';

const ListedBooks = () => {
    const allBooks=useLoaderData();

    useEffect(()=>{
const storeReadList=getStoredReadList();
    },[])

    return (
        <div>
            <h1>Listed Books</h1>

            <Tabs>
                <TabList>
                    <Tab>Books list</Tab>
                    <Tab>Wish list</Tab>
                </TabList>

                <TabPanel>
                    <h2>Books I read</h2>
                </TabPanel>
                <TabPanel>
                    <h2>My wish list</h2>
                </TabPanel>
            </Tabs>
        </div>
    )
}
export default ListedBooks;