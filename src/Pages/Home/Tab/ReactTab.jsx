import React, { useEffect, useRef, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import TabData from './TabData';

const ReactTab = () => {

    const [alltoys, setAllToys] = useState([])
    // console.log(alltoys);

    // const {toy_name, toy_img } = toy;
    const [tabIndex, setTabIndex] = useState(0);
    console.log(tabIndex);
    const [currentToy, setcurrentToy] = useState([])
    console.log(currentToy);

    useEffect(() => {
        fetch('https://toy-land-server-beta.vercel.app/alltoys')
            .then(res => res.json())
            .then(data => {
                setAllToys(data);
            });
    }, [])

    useEffect(() => {
        if (tabIndex === 0) {
            const elsa = alltoys.filter(alltoy => alltoy.sub_category === 'Elsa')
            setcurrentToy(elsa);
        }
        else if (tabIndex === 1) {
            const castle = alltoys.filter(alltoy => alltoy.sub_category === 'Disney Castle')
            setcurrentToy(castle);
        }
        else {
            const rapunzel = alltoys.filter(alltoy => alltoy.sub_category === 'Rapunzel')
            setcurrentToy(rapunzel);
        }
    }, [tabIndex, alltoys])


    return (
        <div>
            <h1 className='text-3xl text-center font-bold mt-10 mb-4'>Shop by Category</h1>

            <Tabs selectedIndex={tabIndex} onSelect={(index) => {
                setTabIndex(index)
                // console.log(index)
            }
            }>

                <TabList>
                    <Tab>Elsa</Tab>
                    <Tab>Disney Castle</Tab>
                    <Tab>Rapunzel</Tab>
                </TabList>
                <div className='grid md:grid-cols-3 gap-5'>
                    <TabPanel>
                        {
                            currentToy.map(singleToy => <TabData
                                key={singleToy._id}
                                tabData={singleToy}
                            >
                            </TabData>)
                        }

                    </TabPanel>
                </div>
                <div className='grid md:grid-cols-3 gap-5'>
                    <TabPanel>
                        {
                            currentToy.map(singleToy => <TabData
                                key={singleToy._id}
                                tabData={singleToy}
                            >
                            </TabData>)
                        }

                    </TabPanel>
                </div>
                <div className='grid md:grid-cols-3 gap-5'>
                    <TabPanel>
                        {
                            currentToy.map(singleToy => <TabData
                                key={singleToy._id}
                                tabData={singleToy}
                            >
                            </TabData>)
                        }

                    </TabPanel>
                </div>

            </Tabs>



        </div>
    );
};

export default ReactTab;