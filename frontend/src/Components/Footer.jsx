import { assets } from "../assets/frontend_assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-20 text-sm ">
        <div>
          <img className="mb-5 w-32" src={assets.logo} alt="" />
          <p className="w-full md:w-2/3 text-gray-600">
            Natures power is a supplement brand which deals in different kinds
            of supplements for both male and female immunity and energization
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About</li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH </p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+918530213147</li>
            <li>foreverclothing@naturesPower.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2025 @ NaturesPower.com - All Rights Reserved <br/>
          <p>Created by <a href="https://www.linkedin.com/in/sushilrankhamb18" target="_blank">Sushil Rankhamb</a> & <a href="https://www.linkedin.com/in/abhijeet-sarkate" target="_blank">Abhijeet Sarkate</a></p>
        </p>
      </div>
    </div>
  );
};

export default Footer;
