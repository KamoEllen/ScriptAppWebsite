import { tw } from 'twind';
{/* import Button from '@/components/button'; */}

const Footer = () => (
  <footer className={tw(`bg-white border-t border-black-400 pt-5 pb-2`)}>
    <div className={tw(`max-w-7xl mx-auto text-black-400 px-3 lg:px-0 flex flex-wrap`)}>
      <div className={tw(`mb-14 flex items-center w-full`)}>
        <img className={tw(`h-12 w-12 mr-4`)} src="logo.svg" alt="logo" width={48} height={48} />
        <p className={tw(`text-4xl text-black-500 font-bold`)}>Script App</p>
      </div>
      {/* Commented out the newsletter subscription section
      <div className={tw(`w-full lg:w-1/2`)}>
        <ul className={tw(`text-lg font-light flex flex-wrap w-full`)}>
          <li className={tw(`w-1/2 md:w-1/3 lg:w-1/3`)}>
            <div>
              <h4 className={tw(`text-black-900 text-base font-bold mb-1`)}>Social-Insta</h4>
              <ul>
                {productLinks.map((link) => (
                  <li className={tw(`text-black-800 text-sm font-medium leading-6`)} key={link}>
                    <a href="/">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
          <li className={tw(`w-1/2 md:w-1/3 lg:w-1/3`)}>
            <div>
              <h4 className={tw(`text-black-900 text-base font-bold mb-1`)}>Social- FB</h4>
              <ul>
                {resourceLinks.map((link) => (
                  <li className={tw(`text-black-800 text-sm font-medium leading-6`)} key={link}>
                    <a href="/">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
          <li className={tw(`w-1/2 md:w-1/3 lg:w-1/3`)}>
            <div>
              <h4 className={tw(`text-black-900 text-base font-bold mb-1`)}>About Us</h4>
              <ul>
                {aboutLinks.map((link) => (
                  <li className={tw(`text-black-800 text-sm font-medium leading-6`)} key={link}>
                    <a href="/">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
      
      <div className={tw(`w-full lg:w-1/2 mt-12 lg:mt-0`)}>
        <div className={tw(`border border-black-400 rounded py-5 px-4`)}>
          <h4 className={tw(`font-mono text-sm uppercase text-black-500 mb-3`)}>Subscribe our newsletter</h4>
          <div className={tw(`flex w-full`)}>
            <input
              aria-label="email address"
              type="text"
              className={tw(`border border-black-300 bg-black-100 min-w-0 w-full rounded text-black-800 py-2 px-3 mr-2`)}
              placeholder="Enter your email"
            />
            <Button>Subscribe</Button>
          </div>
        </div>
      </div>
      */}
    </div>
  </footer>
);

export default Footer;
