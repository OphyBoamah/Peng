import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

export default function Home() {
  return (
    <div className='p-16 border-l-10 border-gray-300 h-screen '>
      <nav className='flex items-center'>
        <h2 className='text-brand-brown font-black text-lg'>
          Peng <br />
          Models
        </h2>

        <ul className='flex items-center ml-32 uppercase text-brand-brown'>
          <li className='pr-16'>men</li>
          <li className='pr-16'>women</li>
          <li className='pr-16'>children</li>
          <li className='pr-16'>contact</li>
          <li className='pr-16'>about us</li>
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
                className='h-64 relative z-10'
                src='/joyce/bottom.png'
                alt=''
              />
              <div className='w-56 h-full bg-gray-100 absolute -top-20 left-16'></div>
            </div>
          </div>
        </div>
        <div className='w-1/6'>
          <div className='bg-gray-200'>
            <img className='h-100 w-98' src='/joyce/joyce.png' alt='' />
          </div>
        </div>
        <div className='w-3/6'>
          <div className='bg-gray-200 w-2/3 ml-52 h-full'>
            <div className='px-12 py-14'>
              <h1 className='text-brand-brown text-opacity-30 text-5xl font-bold'>
                Profile
              </h1>
              <div className='border-b border-brand-brown border-opacity-40 text-brand-brown text-xl'>
                <p>Igna</p>
                <h2 className='text-4xl font-semibold -mt-2'>Joyce</h2>
              </div>
              <div className='flex border-b border-brand-brown border-opacity-40 text-brand-brown py-4'>
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
              <div className="flex text-brand-brown my-4">
                <div>
                  <p className="mb-4">CURRENT STATUS</p>
                  <p className="mb-4">BIRTH DATE</p>
                  <p className="mb-4">NATIONALITY</p>
                  <p className="mb-4">EXPERIENCE</p>
                </div>
                <div className="ml-20">
                  <p className="mb-4 capitalize">available</p>
                  <p className="mb-4 ">15/08/94</p>
                  <p className="mb-4 capitalize">liberian</p>
                  <p className="mb-4">Intermediate</p>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
