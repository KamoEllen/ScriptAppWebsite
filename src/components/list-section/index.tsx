import { tw } from 'twind';

const ListSection = () => (
  <section className={tw`bg-white py-8 lg:py-20 overflow-hidden mb-4`}>
    <div className={tw`max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 bg-white flex flex-col items-center justify-center`}>
      <div className={tw`mb-16 text-center`}>
        <h4 className={tw`text-base text-black-600 font-semibold tracking-wide uppercase`}>Contact Us</h4>
        <p className={tw`mt-2 text-5xl lg:text-7xl font-bold tracking-tight text-black-900`}>
          Get in touch
        </p>
      </div>
      <div className={tw`w-full lg:w-1/2 text-center`}>
        <ul className={tw`space-y-6`}>
          <li className={tw`flex items-center justify-center`}>
            <svg xmlns="http://www.w3.org/2000/svg" className={tw`h-6 w-6 text-black-500`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            <span className={tw`text-black-500 ml-2`}>Monday - Friday: 9:00 - 18:00</span>
          </li>
          <li className={tw`flex items-center justify-center`}>
            <svg xmlns="http://www.w3.org/2000/svg" className={tw`h-6 w-6 text-black-500`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A11.955 11.955 0 0 1 12 21c-3.86 0-7.406-1.46-10-3.845M21 10.732a11.957 11.957 0 0 1-3 5.77M12 21V9m8-6h-8m8 0l-2-2m2 2l-2 2" />
            </svg>
            <span className={tw`text-black-500 ml-2`}>support@scriptapp.com</span>
          </li>
          <li className={tw`flex items-center justify-center`}>
            <svg xmlns="http://www.w3.org/2000/svg" className={tw`h-6 w-6 text-black-500`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            <span className={tw`text-black-500 ml-2`}>+1234567890</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
);

export default ListSection;
