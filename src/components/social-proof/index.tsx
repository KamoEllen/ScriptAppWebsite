import { tw } from 'twind';
import { useState } from 'react';
import Quote from '@/constants/svg/quote.svg';

const socialProofs = [
  {
    name: `Emma Lee Johnson`,
    company: `Film Producer`,
    image: `/images/pexels-rich-ortiz.jpg`,
    text: `Script App is a game-changer. It simplifies script supervision like never
                        before.Script App coversall my needs. It is an indispensable tool for any production.`,
  },
  {
    name: `Tammy Laine`,
    company: `Script Supervisor, Indie Films`,
    image: `/images/pexels-andrea-piacquadio.jpg`,
    text: `The ability to import, edit, and export scripts seamlessly saves me hours of
                        work on every production. Highly recommended!`,
  },
  {
    name: `John Smith`,
    company: `Script Supervisor, X Films`,
    image: `/images/pexels-justin-shaifer.jpg`,
    text: `Script App has transformed how I manage scripts. It's intuitive, efficient,
                        and a must-have for any script supervisor.`,
  },
  {
    name: `Tim Ront`,
    company: `Script Supervisor, Indie Films`,
    image: `/images/pexels-nathan-cowley.jpg`,
    text: `I recommend it to everyone in the industry. Thank you!`,
  },
  {
    name: `An Latel`,
    company: `Production Manager`,
    image: `/images/pexels-minan.jpg`,
    text: `I can't imagine working without Script App. It's a lifesaver!`,
  },
  {
    name: `Ital Oith`,
    company: `Script Supervisor`,
    image: `/images/pexels-italo-melo.jpg`,
    text: `Managing scripts has never been easier. Script App is a must-have tool`,
  },

];


const SocialProof = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    if (currentIndex + 1 < socialProofs.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const previous = () => {
    if (currentIndex - 1 >= 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className={tw(`container mx-auto my-8`)}>
      <div className={tw(`max-w-7xl mx-auto`)}>
        <section>
        <div className={tw(`mb-16 text-center`)}>
          <h4 className={tw(`text-base text-black-600 font-semibold tracking-wide uppercase`)}>Customer Testimonials</h4>
          <p className={tw(`mt-2 text-5xl lg:text-7xl font-bold tracking-tight text-black-900`)}>
          What our customers say
          </p>
        </div>
          <figure>
            <div className={tw(`relative bg-white`)}>
              <Quote className={tw(`w-16 md:w-12 left-0 md:-left-2 absolute top-0 pl-4 md:pl-0 text-black-300 fill="#CBD5E0"`)} />
              <div className={tw(`pt-20 px-6 md:px-0`)}>
                <p className={tw(`text-black-600 text-base pb-6`)}>{socialProofs[currentIndex].text}</p>
                <div className={tw(`flex items-center justify-between`)}>
                  <div className={tw(`flex items-center pb-12`)}>
                    <div className={tw(`h-12 w-12`)}>
                      <img
                        src={socialProofs[currentIndex].image}
                        alt={socialProofs[currentIndex].name}
                        className={tw(`h-full w-full object-cover overflow-hidden rounded-full`)}
                        height={48}
                        width={48}
                      />
                    </div>
                    <p className={tw(`text-black-600 font-bold ml-3`)}>
                      {socialProofs[currentIndex].name} <br />
                      <span className={tw(`text-black-600 text-base font-light`)}>
                        {socialProofs[currentIndex].company}
                      </span>
                    </p>
                  </div>
                  <div className={tw(`cursor-pointer flex pb-12`)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={44}
                      height={44}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#CBD5E0"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      onClick={previous}
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <polyline points="15 6 9 12 15 18" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={44}
                      height={44}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#CBD5E0"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      onClick={next}
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <polyline points="9 6 15 12 9 18" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </figure>
        </section>
      </div>
    </div>
  );
};

export default SocialProof;