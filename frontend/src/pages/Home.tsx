import React from 'react';
import Hero from '../components/Hero';
import Card from '../components/Card';

export default function Home() {
  return (
    <div>
      {/* hero section */}
      <Hero />

      {/* section one */}
      <section className='py-12'>
        <div className='container mx-auto'>
          <div className='text-center'>
            <h2 className='text-4xl font-bold md:text-5xl lg:text-6xl'>
              How Compare Banks Works
            </h2>
            <p className='py-2 text-base md:text-lg'>
              Simplify your bank package comparisons effortlessly with Compare
              Banks
            </p>
          </div>
          <div className='flex flex-col items-center gap-6 md:flex-row md:flex-wrap md:justify-evenly md:space-y-2 lg:gap-2'>
            <Card
              index={1}
              title='Select Your Package'
              description='Choose multiple banks to compare their packages side-by-side with ease.'
            />
            <Card
              index={2}
              title='Compare Features'
              description='Evaluate monthly fees, interest rates, and additional charges with
              clear comparisons.'
            />
            <Card
              index={3}
              title='Filter Your Options'
              description='Evaluate monthly fees, interest rates, and additional charges with
              clear comparisons.'
            />
            <Card
              index={4}
              title='Make Informed Decisions'
              description='Empower yourself with essential information to choose the best
              bank package for your needs.'
            />
          </div>
        </div>
      </section>

      {/* section 3 */}
      <section className='container mx-auto py-7'>
        <div className='flex flex-col space-y-5 text-balance md:items-center md:justify-around lg:flex-row lg:justify-evenly lg:space-y-0'>
          {/* image */}
          <div className='flex h-80 w-full justify-center overflow-hidden px-2 md:h-96 md:w-[700px] lg:w-[600px]'>
            <img
              src='https://placehold.co/700x700'
              alt='section 3 image'
              className='w-full border-4 border-black bg-blue-100 object-cover'
            />
          </div>
          {/* body */}
          <div className='w-full px-2 md:pl-24 lg:w-1/2 lg:p-6'>
            <h3 className='text-3xl font-bold md:text-4xl'>
              Simplify Your Bank Comparisons
            </h3>
            <h5 className='py-3'>
              Compare Banks empowers you to find the best banking options
              effortlessly
            </h5>
            <ul className='mx-2 list-disc space-y-3 pl-6 text-black/70'>
              <li>
                Select multiple banks and compare their packages side-by-side
              </li>
              <li>
                Filter comparisons by location, interest rates, and other
                criteria
              </li>
              <li>
                View clear comparisons of monthly fees and additional charges
              </li>
              <li>
                Make informed decisions with our detailed insights and
                comparisons
              </li>
            </ul>
            <button className='my-8 rounded bg-blue-600 px-4 py-3 text-white'>
              Start Your Free Comparison!
            </button>
          </div>
        </div>
      </section>

      {/* section 4 */}
      <section className='container mx-auto py-7'>
        <div className='flex flex-col space-y-5 text-balance md:items-center md:justify-around lg:flex-row lg:justify-evenly lg:space-y-0'>
          <div className='order-2 flex h-80 w-full justify-center overflow-hidden px-2 md:h-96 md:w-[700px] lg:w-[600px]'>
            <img
              src='https://placehold.co/700x700'
              alt='Hero Image-2'
              className='w-full border-4 border-black bg-blue-100 object-cover'
            />
          </div>
          <div className='order-1 w-full px-2 md:pl-24 lg:w-1/2 lg:p-6'>
            <h3 className='text-3xl font-bold md:text-4xl'>
              Simplify Your Banking Experience with Compare Banks
            </h3>
            <h5 className='py-3'>
              Easily compare bank packages based on interest rates, monthly
              fees, and additional charges, empowering you to make informed
              decisions effortlessly.
            </h5>
            <ul className='mx-2 list-disc space-y-3 pl-6 text-black/70'>
              <li>Select multiple banks and compare packages side-by-side</li>
              <li>Filter comparisons by location and interest rates</li>
              <li>Get clear visuals of monthly fees and charges</li>
              <li>Make smarter banking choices with comprehensive insights</li>
            </ul>
            <button className='my-8 rounded bg-blue-600 px-4 py-3 text-white'>
              Start Your Free Comparison!
            </button>
          </div>
        </div>
      </section>

      {/* section 5 */}
      <section className='container mx-auto mb-48'>
        <div className='py-7 bg-blue-100 rounded-2xl'>
          <div className='text-center'>
            <h1 className='text-4xl font-bold md:text-5xl lg:text-6xl'>
              Simplify Your Bank Comparisons with Compare Banks
            </h1>
            <h3 className='py-2 text-base md:text-lg'>
              Easily compare bank packages side-by-side based on location, interest rates, and fees.
            </h3>
          </div>
          <div className='flex -mb-48 items-center flex flex-col gap-6 md:flex-row md:flex-wrap md:justify-evenly md:space-y-2 lg:gap-2'>
          <Card
              index={1}
              title='Select'
              description='Choose multiple banks to compare packages tailored to your needs.'
            />
            <Card
              index={2}
              title='Compare'
              description='View side-by-side comparisons of monthly fees, interest rates, and more.'
            />
            <Card
              index={3}
              title='Make Informed Decisions'
              description='Empower yourself with clear insights to choose the best bank package.'
            />
          </div>
        </div>
      </section>

      {/* section 6 */}
      <section></section>

      {/* section 7 */}
      <section>
        <div className='bg-blue-100'>
          <div className='container mx-auto flex flex-col space-y-4 py-8 md:flex-row md:items-center md:justify-center md:px-2 lg:py-32'>
            <div className='flex h-52 w-full items-center justify-center overflow-hidden md:h-60 md:w-1/2 lg:h-96 xl:w-[600px]'>
              <img
                src='https://placehold.co/1900x1280'
                alt='Section 7 image'
                className='w-full object-cover'
              />
            </div>
            <div className='w-full text-balance p-2 px-8 md:w-1/2'>
              <h1 className='text-4xl font-bold lg:text-6xl'>
                Discover the Benefits of Comparing Banks with Compare Banks
              </h1>
              <p className='my-4 md:text-base lg:text-lg'>
                Not sure how to compare bank packages? Get in touch with us! 
                Our team is ready to assist you, even before you create an account.
              </p>
              <button className='my-4 rounded bg-blue-600 px-4 py-2 text-sm text-white lg:px-5 lg:py-4 lg:text-base'>
                Start Comparing Now!
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
