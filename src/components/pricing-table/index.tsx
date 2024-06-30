import { tw } from 'twind';
import Check from '@/constants/svg/check.svg';
import Button from '@/components/button';

const features = [
  `Import scripts with ease`,
  `Efficient script editing`,
  `Create forms`,
  `Auto-fill repetitive fields`,
  `Export or send via email`,
  `Real-time collaboration`,
  `Secure storage integration`,
  `24/7 customer support`,
  `Optimized for ios`,
  `Track changes`,
];

const PricingTable = () => (
  <section className={tw(`bg-gradient-to-b from-black-100 to-white shadow-inner pt-12`)}>
    <div className={tw(`relative max-w-7xl mx-auto mb-12`)}>
      <div className={tw(`overflow-hidden lg:max-w-none lg:flex`)}>
        <div className={tw(`py-8 px-6 md:px-0 lg:flex-shrink-1`)}>
          <h2 className={tw(`text-4xl lg:text-7xl font-bold text-black-800 mb-12`)}>Most Popular</h2>
          <p className={tw(`mt-6 text-base leading-6 text-black-500`)}>
          Enjoy 24h free trial with us and only pay 20 pounds a month after that. Cancel anytime within the first
          30 days.
          </p>
          <div className={tw(`mt-8`)}>
            <div className={tw(`flex items-center`)}>
              <h3
                className={tw(
                  `flex-shrink-0 pr-4 text-sm leading-5
                tracking-wider font-semibold uppercase text-black-600`,
                )}
              >
                Basic
              </h3>
              <div className={tw(`flex-1 border-t-2 border-black-200`)} />
            </div>
            <ul className={tw(`mt-8 lg:grid lg:grid-cols-2`)}>
              {features.map((feature) => (
                <li className={tw(`flex items-center lg:col-span-1`)} key={feature}>
                  <div className={tw(`flex-shrink-0`)}>
                    <Check className={tw(`h-8 w-8 mr-3 mb-1`)} />
                  </div>
                  <p className={tw(`text-black-600`)}>{feature}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div
          className={tw(
            `py-8 px-6 text-center lg:flex-shrink-0
            lg:flex lg:flex-col lg:justify-center lg:p-12`,
          )}
        >
          <p className={tw(`text-lg font-medium text-black-800`)}>Simple payment plan</p>
          <div className={tw(`my-4 flex items-center justify-center text-6xl leading-none font-bold text-black-800`)}>
          £20/mo
          </div>
          <Button primary modifier="mt-6">
            <span className={tw(`text-green-800`)}>Coming Soon</span>
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default PricingTable;
