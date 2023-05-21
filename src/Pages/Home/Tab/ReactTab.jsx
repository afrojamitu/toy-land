import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ReactTab = ({toy}) => {
    // console.log(toy);
    const [tabIndex, setTabIndex] = useState(0);
    const [toyByCategory, setToyByCategory] = useState([])

    // const URL = `http://localhost:5000/toybycategory/${toy.sub_category}`
    // console.log(URL);
    // useEffect(() => {
    //     fetch(URL)
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //         })
    // }, [URL])

    return (
        <div>
            <h1 className='text-3xl text-center font-bold mt-10 mb-4'>Shop by Category</h1>

            <Tabs selectedIndex={tabIndex} onSelect={(index) => {
                setTabIndex(index)
                console.log(index)
            }

            }>
                <TabList>
                    <Tab>Elsa</Tab>
                    <Tab>Disney Castle</Tab>
                    <Tab>Rapunzel</Tab>
                </TabList>
                <TabPanel></TabPanel>
                <TabPanel></TabPanel>
                <TabPanel></TabPanel>
            </Tabs>

        </div>
    );
};

export default ReactTab;