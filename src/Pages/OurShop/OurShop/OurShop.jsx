import React, { useState } from 'react';
import CommonBanner from '../../../Shared/CommonBanner';
import os1 from "../../../assets/OurShop/banner2.jpg"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useParams } from 'react-router-dom';
import useMenu from '../../../Hooks/useMenu';
import OurShopTab from './OurShopTab';

const OurShop = () => {
    const {category}=useParams();
    const [menu]=useMenu();
    const categories = ["salad","pizza",'soup','dessert','drinks']
    const initialIndex = categories.indexOf(category);
    const [tabIndex,setTabIndex] =useState(initialIndex)
    

    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const soup = menu.filter(item => item.category === 'soup')
    const dessert = menu.filter(item => item.category === 'dessert')
    const drinks = menu.filter(item => item.category === 'drinks')
    
    return (
        <div>
            <CommonBanner coverImg={os1} coverTitle={'our Shop'}></CommonBanner>

            <Tabs defaultIndex={tabIndex} onSelect={(index)=>setTabIndex(index)}>
    <TabList className='text-center mt-2'>
      <Tab>Salad</Tab>
      <Tab>Pizzad</Tab>
      <Tab>Soups</Tab>
      <Tab>Dessert</Tab>
      <Tab>Drinks</Tab>
    </TabList>

    <TabPanel>
    <OurShopTab item={salad}></OurShopTab>
    </TabPanel>
    <TabPanel>
      <OurShopTab item={pizza}></OurShopTab>
    </TabPanel>
    <TabPanel>
    <OurShopTab item={soup}></OurShopTab>
    </TabPanel>
    <TabPanel>
      <OurShopTab item={dessert}></OurShopTab>
    </TabPanel>
    <TabPanel>
     <OurShopTab item={drinks}></OurShopTab>
    </TabPanel>
  </Tabs>
            
        </div>
    );
};

export default OurShop;