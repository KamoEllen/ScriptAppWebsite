import { tw, css } from 'twind/css';
import Image from './undraw_camera_re_cnp4.svg'; // Adjust the path based on your actual image component import

const headerStyle = css`
  background-color: #ffffff;
  min-height: 100vh; /* Adjust as needed */
`;

const Header = () => (
  <div className={tw(`flex justify-center items-center`)}>
    <div className={tw(`max-w-7xl mx-auto`)}>
      <div className={tw(`flex flex-col max-w-4xl mx-auto pt-8 md:pt-12 lg:pt-16`)}>
        <header className={tw(headerStyle, `max-w-4xl mx-auto py-16 px-4 sm:px-3 lg:px-4 flex flex-col items-center pb-4 md:pb-3 lg:pb-3`)}>
        
          <h1 className={tw(`font-sans font-bold text-3xl sm:text-4xl lg:text-6xl text-center leading-snug text-black-800 mb-6`)}>
            Ready to Make Script Supervision Effortless?
          </h1>
          
          <div className={tw(`max-w-xl mx-auto`)}>
            <p className={tw(`mt-4 text-black-500 text-center text-lg lg:text-2xl`)}>
              From import to export, editing to automatic form filling, Script App empowers you to manage scripts effortlessly, saving you time and effort.
            </p>
          </div>
          
          <div className={tw(`my-8 mx-auto w-full max-w-4xl`)}> {/* Ensure image scales with parent */}
            <Image className={tw(`mx-auto w-full h-auto`)} />
          </div>

        </header>
      </div>
    </div>
  </div>
);

export default Header;
