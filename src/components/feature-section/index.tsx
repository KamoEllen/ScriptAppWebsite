import { tw } from 'twind';
import Check from '@/constants/svg/check.svg';

const FeatureSection = () => (
  <section className={tw(`bg-white pb-34`)}>
    <div className={tw(`max-w-7xl mx-auto p-4 sm:p-16 lg:p-8`)}>
      <div className={tw(`mb-16 text-center`)}>
      <div className={tw(`max-w-7xl mx-4 lg:mx-auto pt-20 lg:pt-40`)}>
      <h4 className={tw(`text-base text-black-600 font-semibold tracking-wide uppercase`)}>Features</h4>

        <h1 className={tw(`font-sans font-bold text-3xl sm:text-4xl lg:text-6xl text-center leading-snug text-black-800 mb-6`)}>
        What  <span className={tw(`text-green-600`)}>Script App</span> Can Do For You
      </h1>
        </div>
        </div>
      <div className={tw(`container mx-auto px-6 p-6 bg-white grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4`)}>
        {/* Feature 1 */}
        <div className={tw(`border border-gray-300 p-8 rounded-lg`)}>
          <div className={tw(`flex items-center mb-6`)}>
            <Check width={20} height={20} fill="green" className={tw(`h-6 w-6 text-black-500`)} />
            <div className={tw(`ml-4 text-xl`)}>Effortlessly Import Scripts</div>
          </div>
          <p className={tw(`leading-loose text-black-500`)}>
          Import, edit, and manage scripts effortlessly with Script App. Spend more time supervising, less time on administrative tasks.
          </p>
        </div>
        


        {/* Feature 2 */}
                        <div className={tw(`border border-gray-300 p-8 rounded-lg`)}> {/* Added rounded-lg for rounded corners */}
          
      
          <div className={tw(`flex items-center mb-6`)}>
            <Check width={20} height={20} fill="green" className={tw(`h-6 w-6 text-black-500`)} />
            <div className={tw(`ml-4 text-xl`)}>Automate Form Filling</div>
          </div>
          <p className={tw(`leading-loose text-black-500 `)}>
          Automate repetitive tasks like form filling and formatting, allowing you to focus on creative aspects of script supervision.
          </p>
        </div>

        {/* Repeat the above structure for Features 3 to 12 */}

        {/* Feature 1 */}
        <div className={tw(`border border-gray-300 p-8 rounded-lg`)}>
          <div className={tw(`flex items-center mb-6`)}>
            <Check width={20} height={20} fill="green" className={tw(`h-6 w-6 text-black-500`)} />
            <div className={tw(`ml-4 text-xl`)}>Storage Integration</div>
          </div>
          <p className={tw(`leading-loose text-black-500`)}>
          Securely store and access scripts from anywhere.
          </p>
        </div>
        
        {/* Feature 2 */}
        <div className={tw(`border border-gray-300 p-8 rounded-lg`)}>
          <div className={tw(`flex items-center mb-6`)}>
            <Check width={20} height={20} fill="green" className={tw(`h-6 w-6 text-black-500`)} />
            <div className={tw(`ml-4 text-xl`)}>Real-Time Collaboration</div>
          </div>
          <p className={tw(`leading-loose text-black-500 `)}>
          Export your script and share it with your team , ensuring everyone is on the same page throughout the production process.
          </p>
        </div>

        {/* Feature 1 */}
        <div className={tw(`border border-gray-300 p-8 rounded-lg`)}>
          <div className={tw(`flex items-center mb-6`)}>
            <Check width={20} height={20} fill="green" className={tw(`h-6 w-6 text-black-500`)} />
            <div className={tw(`ml-4 text-xl`)}>Intuitive User Experience</div>
          </div>
          <p className={tw(`leading-loose text-black-500`)}>
          Enjoy a user-friendly interface designed to enhance your workflow and make script supervision a more enjoyable process.
          </p>
        </div>
        
        {/* Feature 2 
        <div className={tw(`border border-gray-300 p-8`)}>
          <div className={tw(`flex items-center mb-6`)}>
            <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-black-500`)} />
            <div className={tw(`ml-4 text-xl`)}>Feature Title 2</div>
          </div>
          <p className={tw(`leading-loose text-black-500 `)}>
            Feature description for the second feature.
          </p>
        </div>*/}

        {/* Feature 1 
        <div className={tw(`border border-gray-300 p-8`)}>
          <div className={tw(`flex items-center mb-6`)}>
            <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-black-500`)} />
            <div className={tw(`ml-4 text-xl`)}>Feature Title 1</div>
          </div>
          <p className={tw(`leading-loose text-black-500`)}>
            Feature description for the first feature.
          </p>
        </div>*/}
        
        {/* Feature 2 
        <div className={tw(`border border-gray-300 p-8`)}>
          <div className={tw(`flex items-center mb-6`)}>
            <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-black-500`)} />
            <div className={tw(`ml-4 text-xl`)}>Feature Title 2</div>
          </div>
          <p className={tw(`leading-loose text-black-500 `)}>
            Feature description for the second feature.
          </p>
        </div>*/}
        
      </div>
    </div>
  </section>
);

export default FeatureSection;
