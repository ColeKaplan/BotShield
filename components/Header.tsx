import React from 'react';
import UserGreetText from './UserGreetText';
import DemoPage from './DemoPage';
import RobotsTxt from './robotstxt';
import Defenses from './defenses';
import Paywall from './paywall';
import References from './references';

const Header: React.FC = () => {
  return (
    <div className='px-4 pt-4'>
      <div className='flex flex-row justify-between w-full text-accent1'>
        <div id="banner" className=" text-4xl w-full">
          <a className="inline-block" href='/'>
            BotShield
          </a>
        </div>
        <div id="greetingAndLogoutLargeScreen" className='flex flex-row items-end right-10 gap-x-2'>
          {/* <UserGreetText className="" /> */}
          <Defenses />
          {"  |  "}
          <RobotsTxt />
          {"  |  "}
          {/* <DemoPage /> */}
          {/* {"  |  "} */}
          <Paywall />
          {"  |  "}
          <References />
        </div>
      </div>
      <hr className="my-2 border-accent1 mt-6" />
    </div>
  );
};

export default Header;