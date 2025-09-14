

import React from 'react';
import CommonBanner from '../../../Shared/CommonBanner';
import menuImg from "../../../assets/Our Menu/ourMenuBanner.jpg"
import OurMenu from '../../Home/OurMenu';
import m2 from "../../../assets/home/chef-service.jpg"
import useMenu from '../../../Hooks/useMenu';
import CategoryHook from './categoryHook';
const Menu = () => {
    const [menuItems] = useMenu()
    const dessert = menuItems.filter(menuItem=> menuItem.category === 'salad')
    
    
    return (
        <div>
                      <CommonBanner coverImg={menuImg} coverTitle={'Our Menu'}></CommonBanner>

                      <div className='w-64 text-xl text-black font-bold mx-auto'>
                         
                          <div className="divider"></div>
                          <h2 className='text-3xl font-extrabold text-center uppercase'>today's Offer</h2>
                          <div className="divider"></div>

                          

                      </div>

                      <OurMenu></OurMenu>
                      <CommonBanner coverImg={m2} coverTitle={"Desserts"}></CommonBanner>
                      <CategoryHook name={'dessert'}></CategoryHook>
                      <CommonBanner coverImg={m2} coverTitle={'Pizza'}></CommonBanner>
                      <CategoryHook name={'pizza'}></CategoryHook>
                      <CommonBanner coverImg={m2} coverTitle={'Soups'}></CommonBanner>
                      <CategoryHook name={'soup'}></CategoryHook>
        </div>
    );
};
export default Menu;