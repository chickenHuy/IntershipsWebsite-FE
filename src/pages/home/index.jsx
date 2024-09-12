import React, { useEffect, useState } from 'react'
import Header from '../../components/header';
import Logo from '../../assets/images/logo.png';

const HomePage = () => {

  const shuffleArray = (array) => {
    let newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  const [listCompanyShuffled, setListCompanyShuffled] = useState([]);
  const [itemSize, setItemSize] = useState({ width: 100, height: 100 });

  const listCompany = [
    {
      id: 1,
      name: 'Company 1',
      logo: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
      width: 1,
      height: 1
    },
    {
      id: 1,
      name: 'Company 1',
      logo: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
      width: 1,
      height: 1
    },
    {
      id: 1,
      name: 'Company 1',
      logo: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
      width: 1,
      height: 1
    },
    {
      id: 1,
      name: 'Company 1',
      logo: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
      width: 1,
      height: 1
    },
    {
      id: 1,
      name: 'Company 1',
      logo: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
      width: 1,
      height: 1
    },
    {
      id: 1,
      name: 'Company 1',
      logo: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
      width: 1,
      height: 1
    },
    {
      id: 1,
      name: 'Company 1',
      logo: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
      width: 1,
      height: 1
    },
    {
      id: 1,
      name: 'Company 1',
      logo: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
      width: 1,
      height: 1
    },
    {
      id: 1,
      name: 'Company 1',
      logo: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
      width: 1,
      height: 1
    },
    {
      id: 1,
      name: 'Company 1',
      logo: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
      width: 1,
      height: 1
    },
    {
      id: 1,
      name: 'Company 1',
      logo: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
      width: 1,
      height: 1
    },
    {
      id: 1,
      name: 'Company 1',
      logo: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
      width: 1,
      height: 1
    },
    {
      id: 1,
      name: 'Company 1',
      logo: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
      width: 1,
      height: 1
    },
    {
      id: 1,
      name: 'Company 1',
      logo: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
      width: 1,
      height: 1
    },
    {
      id: 1,
      name: 'Company 1',
      logo: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
      width: 2,
      height: 2
    },
    {
      id: 1,
      name: 'Company 1',
      logo: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
      width: 1,
      height: 1
    },
    {
      id: 1,
      name: 'Company 1',
      logo: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
      width: 1,
      height: 1
    },
    {
      id: 1,
      name: 'Company 1',
      logo: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
      width: 1,
      height: 1
    },
    {
      id: 1,
      name: 'Company 1',
      logo: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
      width: 1,
      height: 1
    },
    {
      id: 1,
      name: 'Company 1',
      logo: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
      width: 1,
      height: 1
    },
    {
      id: 1,
      name: 'Company 1',
      logo: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
      width: 1,
      height: 1
    },
    {
      id: 1,
      name: 'Company 1',
      logo: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
      width: 1,
      height: 1
    },
    {
      id: 1,
      name: 'Company 1',
      logo: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
      width: 1,
      height: 1
    },
    {
      id: 1,
      name: 'Company 1',
      logo: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
      width: 1,
      height: 1
    },
    {
      id: 1,
      name: 'Company 1',
      logo: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
      width: 1,
      height: 1
    },
    {
      id: 1,
      name: 'Company 1',
      logo: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
      width: 1,
      height: 1
    },
    {
      id: 1,
      name: 'Company 1',
      logo: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
      width: 1,
      height: 1
    },
    {
      id: 1,
      name: 'Company 1',
      logo: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
      width: 1,
      height: 1
    },
    {
      id: 1,
      name: 'Company 1',
      logo: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
      width: 1,
      height: 1
    },
    {
      id: 1,
      name: 'Company 1',
      logo: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
      width: 2,
      height: 2
    },
    {
      id: 1,
      name: 'Company 1',
      logo: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
      width: 1,
      height: 1
    },
    {
      id: 1,
      name: 'Company 1',
      logo: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
      width: 1,
      height: 1
    },
    {
      id: 1,
      name: 'Company 1',
      logo: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
      width: 1,
      height: 1
    },
    {
      id: 1,
      name: 'Company 1',
      logo: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
      width: 1,
      height: 1
    },
    {
      id: 1,
      name: 'Company 1',
      logo: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
      width: 1,
      height: 1
    },
    {
      id: 1,
      name: 'Company 1',
      logo: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
      width: 1,
      height: 1
    },
    {
      id: 1,
      name: 'Company 1',
      logo: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
      width: 1,
      height: 1
    },
    {
      id: 1,
      name: 'Company 1',
      logo: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
      width: 1,
      height: 1
    },
    {
      id: 1,
      name: 'Company 1',
      logo: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
      width: 1,
      height: 1
    },
    {
      id: 1,
      name: 'Company 1',
      logo: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
      width: 1,
      height: 1
    },
    {
      id: 1,
      name: 'Company 1',
      logo: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
      width: 1,
      height: 1
    },
    {
      id: 1,
      name: 'Company 1',
      logo: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
      width: 1,
      height: 1
    },
    {
      id: 1,
      name: 'Company 1',
      logo: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
      width: 1,
      height: 1
    },
    {
      id: 1,
      name: 'Company 1',
      logo: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
      width: 1,
      height: 1
    },
    {
      id: 1,
      name: 'Company 1',
      logo: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
      width: 1,
      height: 1
    },
    {
      id: 1,
      name: 'Company 1',
      logo: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
      width: 1,
      height: 1
    },
    {
      id: 1,
      name: 'Company 1',
      logo: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
      width: 1,
      height: 1
    },
    {
      id: 1,
      name: 'Company 1',
      logo: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
      width: 1,
      height: 1
    },
    {
      id: 1,
      name: 'Company 1',
      logo: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
      width: 2,
      height: 2
    },
    {
      id: 1,
      name: 'Company 1',
      logo: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
      width: 1,
      height: 1
    },
    {
      id: 1,
      name: 'Company 1',
      logo: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
      width: 1,
      height: 1
    },
    {
      id: 1,
      name: 'Company 1',
      logo: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
      width: 1,
      height: 1
    },
    {
      id: 1,
      name: 'Company 1',
      logo: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
      width: 1,
      height: 1
    },
    {
      id: 1,
      name: 'Company 1',
      logo: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
      width: 1,
      height: 1
    },
    {
      id: 1,
      name: 'Company 1',
      logo: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
      width: 1,
      height: 1
    },
    {
      id: 1,
      name: 'Company 1',
      logo: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
      width: 1,
      height: 1
    },
    {
      id: 1,
      name: 'Company 1',
      logo: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
      width: 1,
      height: 1
    },
    {
      id: 1,
      name: 'Company 1',
      logo: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
      width: 1,
      height: 1
    },
    {
      id: 1,
      name: 'Company 1',
      logo: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
      width: 1,
      height: 1
    },
    {
      id: 1,
      name: 'Company 1',
      logo: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
      width: 1,
      height: 1
    },
    {
      id: 1,
      name: 'Company 1',
      logo: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
      width: 1,
      height: 1
    },
    {
      id: 1,
      name: 'Company 1',
      logo: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
      width: 1,
      height: 1
    },
    {
      id: 1,
      name: 'Company 1',
      logo: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
      width: 1,
      height: 1
    },
    {
      id: 1,
      name: 'Company 1',
      logo: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
      width: 2,
      height: 2
    },
    {
      id: 1,
      name: 'Company 1',
      logo: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
      width: 1,
      height: 1
    },
    {
      id: 1,
      name: 'Company 1',
      logo: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
      width: 1,
      height: 1
    },
    {
      id: 1,
      name: 'Company 1',
      logo: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
      width: 1,
      height: 1
    },
    {
      id: 1,
      name: 'Company 1',
      logo: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
      width: 1,
      height: 1
    },
    {
      id: 1,
      name: 'Company 1',
      logo: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
      width: 1,
      height: 1
    },
    {
      id: 1,
      name: 'Company 1',
      logo: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
      width: 1,
      height: 1
    },
    {
      id: 1,
      name: 'Company 1',
      logo: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
      width: 1,
      height: 1
    },
    {
      id: 1,
      name: 'Company 1',
      logo: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
      width: 1,
      height: 1
    },
    {
      id: 1,
      name: 'Company 1',
      logo: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
      width: 1,
      height: 1
    },
    {
      id: 1,
      name: 'Company 1',
      logo: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
      width: 1,
      height: 1
    },
    {
      id: 1,
      name: 'Company 1',
      logo: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
      width: 1,
      height: 1
    },
    {
      id: 1,
      name: 'Company 1',
      logo: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
      width: 1,
      height: 1
    },
    {
      id: 1,
      name: 'Company 1',
      logo: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
      width: 1,
      height: 1
    },
    {
      id: 1,
      name: 'Company 1',
      logo: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
      width: 1,
      height: 1
    },
    {
      id: 1,
      name: 'Company 1',
      logo: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
      width: 2,
      height: 2
    },
    {
      id: 1,
      name: 'Company 1',
      logo: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
      width: 1,
      height: 1
    },
    {
      id: 1,
      name: 'Company 1',
      logo: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
      width: 1,
      height: 1
    },
    {
      id: 1,
      name: 'Company 1',
      logo: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
      width: 1,
      height: 1
    },
    {
      id: 1,
      name: 'Company 1',
      logo: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
      width: 1,
      height: 1
    },
    {
      id: 1,
      name: 'Company 1',
      logo: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
      width: 1,
      height: 1
    },
    {
      id: 1,
      name: 'Company 1',
      logo: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
      width: 1,
      height: 1
    },
    {
      id: 1,
      name: 'Company 1',
      logo: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
      width: 1,
      height: 1
    },
    {
      id: 1,
      name: 'Company 1',
      logo: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
      width: 1,
      height: 1
    },
    {
      id: 1,
      name: 'Company 1',
      logo: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
      width: 1,
      height: 1
    },
    {
      id: 1,
      name: 'Company 1',
      logo: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
      width: 1,
      height: 1
    },
    {
      id: 1,
      name: 'Company 1',
      logo: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
      width: 1,
      height: 1
    },
    {
      id: 1,
      name: 'Company 1',
      logo: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
      width: 1,
      height: 1
    },
    {
      id: 1,
      name: 'Company 1',
      logo: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
      width: 1,
      height: 1
    },
    {
      id: 1,
      name: 'Company 1',
      logo: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
      width: 1,
      height: 1
    },
    {
      id: 1,
      name: 'Company 1',
      logo: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
      width: 2,
      height: 2
    },
    {
      id: 1,
      name: 'Company 1',
      logo: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
      width: 1,
      height: 1
    },
    {
      id: 1,
      name: 'Company 1',
      logo: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
      width: 1,
      height: 1
    },
    {
      id: 1,
      name: 'Company 1',
      logo: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
      width: 1,
      height: 1
    },
    {
      id: 1,
      name: 'Company 1',
      logo: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
      width: 1,
      height: 1
    },
    {
      id: 1,
      name: 'Company 1',
      logo: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
      width: 1,
      height: 1
    },
    {
      id: 1,
      name: 'Company 1',
      logo: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
      width: 1,
      height: 1
    },
    {
      id: 1,
      name: 'Company 1',
      logo: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
      width: 1,
      height: 1
    },
    {
      id: 1,
      name: 'Company 1',
      logo: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
      width: 1,
      height: 1
    },
    {
      id: 1,
      name: 'Company 1',
      logo: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
      width: 1,
      height: 3
    },
    {
      id: 1,
      name: 'Company 1',
      logo: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
      width: 1,
      height: 1
    },
    {
      id: 1,
      name: 'Company 1',
      logo: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
      width: 1,
      height: 1
    },
    {
      id: 1,
      name: 'Company 1',
      logo: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
      width: 1,
      height: 1
    },
    {
      id: 1,
      name: 'Company 1',
      logo: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
      width: 1,
      height: 1
    },
    {
      id: 1,
      name: 'Company 1',
      logo: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
      width: 1,
      height: 1
    },
    {
      id: 1,
      name: 'Company 1',
      logo: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
      width: 2,
      height: 2
    },
    {
      id: 1,
      name: 'Company 1',
      logo: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
      width: 1,
      height: 1
    },
    {
      id: 1,
      name: 'Company 1',
      logo: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
      width: 1,
      height: 1
    },
    {
      id: 1,
      name: 'Company 1',
      logo: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
      width: 3,
      height: 3
    },
    {
      id: 1,
      name: 'Company 1',
      logo: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
      width: 3,
      height: 1
    },
    {
      id: 1,
      name: 'Company 1',
      logo: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
      width: 1,
      height: 1
    },
    {
      id: 1,
      name: 'Company 1',
      logo: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
      width: 1,
      height: 1
    },
    {
      id: 1,
      name: 'Company 1',
      logo: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
      width: 1,
      height: 1
    },
    {
      id: 1,
      name: 'Company 1',
      logo: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
      width: 1,
      height: 1
    },
    {
      id: 1,
      name: 'Company 1',
      logo: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
      width: 1,
      height: 2
    },
    {
      id: 1,
      name: 'Company 1',
      logo: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
      width: 1,
      height: 1
    },
    {
      id: 1,
      name: 'Company 1',
      logo: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
      width: 1,
      height: 1
    },
    {
      id: 1,
      name: 'Company 1',
      logo: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
      width: 1,
      height: 1
    },
    {
      id: 1,
      name: 'Company 1',
      logo: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
      width: 1,
      height: 1
    },
    {
      id: 1,
      name: 'Company 1',
      logo: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
      width: 1,
      height: 1
    },
    {
      id: 1,
      name: 'Company 1',
      logo: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
      width: 2,
      height: 2
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      let numberColumn;
      if (window.innerWidth < 640) {
        numberColumn = 5;
      } else {
        if (window.innerWidth < 768) {
          numberColumn = 6;
        } else {
          if (window.innerWidth < 1024) {
            numberColumn = 8;
          }
          else {
            if (window.innerWidth < 1280) {
              numberColumn = 10;
            }
            else {
              numberColumn = 16;
            }
          }
        }
      }

      setListCompanyShuffled(shuffleArray(listCompany));
      const gridWidth = document.querySelector('.grid-container').offsetWidth;
      const itemWidth = gridWidth / numberColumn;
      setItemSize({ width: itemWidth, height: itemWidth });
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <div className='w-full h-fit min-h-screen bg-white-secondary flex flex-col justify-center items-center'>
      <div className='sticky top-0 w-full'>
        <Header />
      </div>

      <div className=' w-full flex-grow'>
        <div className="grid-container p-[6px] overflow-auto w-full h-fit grid xl:grid-cols-16 lg:grid-cols-10 md:grid-cols-8 sm:grid-cols-6 grid-cols-5 gap-[1px]">
          {listCompanyShuffled.map((company, index) => (
            <div
              key={index}
              style={{
                gridColumn: `span ${company.width}`,
                gridRow: `span ${company.height}`,
                width: `${itemSize.width * company.width}px`,
                height: `${itemSize.height * company.height}px`
              }}>
              <div className='w-full h-full p-[2px]'>
                <div className='w-full h-full p-[3px] shadow-sm border-[0.5px] border-slate-300 flex justify-center items-center '>
                  {/* <img className='object-contain w-full h-full cursor-pointer hover:scale-110 duration-200' src={Logo} alt="" /> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;