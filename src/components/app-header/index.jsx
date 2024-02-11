import React, { memo, useState } from 'react';
import SunSvg from 'assets/icons/sun.svg';
import MoonSvg from 'assets/icons/moon.svg';

const AppHeader = memo(() => {

  const [theme, setTheme] = useState(true);

  const changeTheme = () => {
    if(theme) {
      setTheme(false);
      document.documentElement.classList.add('dark');
    } else {
      setTheme(true);
      document.documentElement.classList.remove('dark');
    }
  }

  return (
    <header className='fixed top-0 left-0 right-0'>
      <nav className='relative container mx-auto flex justify-end px-[2rem] py-[2rem]'>
        <h1 className='font-extralight absolute top-0 right-0 left-0 bottom-0 flex justify-center items-center text-[2rem] tracking-wider'>Luffy</h1>
        <button className='cursor-pointer z-10' onClick={changeTheme}>
        {
          theme === true ? <img src={MoonSvg} alt="" /> : <img src={SunSvg} />
        }
        </button>
      </nav>
    </header>
  )
})

export default AppHeader;