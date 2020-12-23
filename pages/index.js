import { FaFacebookF, FaInstagram, FaTwitter, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

export default function Home() {
  return (
    <div className='p-16 border-l-10 border-gray-300 h-full '>
      <nav className='flex items-center'>
        <h2 className='text-brand-brown font-bold text-xl h-full'>
          Peng <br />
          Models
        </h2>

        <ul className='flex items-center ml-20 uppercase text-brand-brown relative'>
          <li className='pr-10'>men</li>
          <li className='pr-10'>women</li>
          <li className='pr-10'>children</li>
          <li className='pr-10'>contact</li>
          <li className='pr-10'>about us</li>
        </ul>
      </nav>

      <div className='flex'>
        <div className='w-2/6 text-brand-brown mt-20' >
          <h1 className=' font-bold text-8xl'>Black&amp; Beautiful</h1>
          <p className='mt-4'>
            do you need amazing melanin models for you photoshoots <br/> modelling
            events or outing, you just got them waiting right<br/> for you.
          </p>
          <div className='border-l-2 border-brand-brown h-24 my-6'></div>
          <div className='flex'>
            <div className='mr-10 -ml-2 '>
              <div className='text-brand-brown'>
                <div>
                  <FaFacebookF />
                </div>
                <div className='py-4'>
                  <FaInstagram />
                </div>
                <div>
                  <FaTwitter />
                </div>
              </div>
            </div>
            <div className='-mt-8 relative '>
              <img
                className='h-64 relative z-10 '
                src='/joyce/bottom.png'
                alt=''
              />
              <div className='w-56 h-full  bg-gray-100 absolute -top-20 left-16 '></div>
            </div>
          </div>
        </div>
        <div className='w-1/6 -mt-32'>
          <div className='bg-gray-200 pb-48 w-80'>
            <img className='h-100 w-100 pt-24 ' src='/joyce/joyce.png' alt='' />
          </div>
        </div>
        <div className='w-3/6 h-screen'>
          <div className='bg-gray-200 w-2/3 ml-64 -mt-40 pt-14 h-screen'>
            <div className='px-12 py-14'>
              <h1 className='text-brand-brown text-opacity-30 text-5xl font-bold'>
                Profile
              </h1>
              <div className='border-b border-brand-brown border-opacity-40 text-brand-brown text-xl mt-4'>
                <p>Igna</p>
                <h2 className='text-4xl font-semibold -mt-2'>Joyce</h2>
              </div>
              <div className='flex border-b border-brand-brown border-opacity-40 text-brand-brown py-2'>
                <div>
                  <p className='text-sm'>Height</p>
                  <div className='flex items-center'>
                    <p>
                      <span className='text-2xl'>6</span>
                      <span className='mt-2'>ft</span>
                    </p>
                    <p className='ml-2'>
                      <span className='text-2xl'>1</span>
                      <span className='mt-2'>in</span>
                    </p>
                  </div>
                </div>
                <div className='ml-36'>
                  <p className='text-sm '>Weight</p>
                  <p>
                   <span className='font-normal text-2xl'>80</span>
                   <span className='mt-2'>kg</span>
                  </p>
                </div>
              </div>
              <div className="flex text-brand-brown py-2">
                <div>
                  <p className="mb-2">CURRENT STATUS</p>
                  <p className="mb-2">BIRTH DATE</p>
                  <p className="mb-2">NATIONALITY</p>
                  <p className="mb-2">EXPERIENCE</p>
                </div>
                <div className="ml-20">
                  <p className="mb-2 capitalize">available</p>
                  <p className="mb-2 ">15/08/94</p>
                  <p className="mb-2 capitalize">liberian</p>
                  <p className="mb-2">Intermediate</p>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-brand-brown">Gallery</h3>
                <div className="grid grid-cols-4 gap-4 my-4">
                  <img src="joyce/gallery-3.png"/>
                  <img src="joyce/gallery-5.png"/>
                  <img src="joyce/gallery-1.png"/>
                  <img src="joyce/gallery-4.png"/>
                </div>
              </div>
              <div className="text-brand-brown">
                 <h3 className="text-xl font-semibold">Gallery</h3>
              <div className="flex my-4">
                
                <div>
                  <p className="mb-2">BUDAPEST FASHION SHOW</p>
                  <p className="mb-2">EKO FASHION SHOW</p>
                  <p className="mb-2">ASHANTE GROUP FASHION SHOW</p>
                </div>
                <div className="ml-20">
                  <p className="mb-2 ">2019</p>
                  <p className="mb-2 ">2015</p>
                  <p className="mb-2 capitalize">2013</p>
                </div>
              </div>
             </div>
            </div>
          </div>
          <div className="bg-yellow-200 ml-20 ">
            <div className="grid grid-cols-7 gap-4 py-5 px-5 -mt-28 -mr-6">
            <div className="mt-8 text-4xl ml-8"><FaArrowLeft/></div>
            <img className="w-24" src="/joyce/side-4.png"/>
            <img className="w-24" src="/joyce/side-1.png"/>
            <img className="w-24" src="/joyce/side-2.png"/>
            <img className="w-24" src="/joyce/side-3.png"/>
            <img className="w-24" src="/joyce/side-5.png"/>
            <div className="mt-8 text-4xl mr-8"><FaArrowRight/></div>
        </div>
          </div>
        </div>
      </div>
    </div>
  );
}
