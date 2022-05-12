import {BiCodeAlt} from 'react-icons/bi'
import {CgWebsite} from 'react-icons/cg'

export default function ({ image, name, description, code_url, deployed_at }) {
  return (
    <div className="md:max-w-xs max-w-screen-xs w-fit mx-auto  h-fit bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mx-8 mb-8">

      <a href={deployed_at}>
        <img className="rounded-t-lg" src={image} alt={name + code_url} />
      </a>
      <div>
        <span>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>
        </span>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
        <span className='max-w-full flex justify-between'>
        <a
          href={code_url}
          className="inline-flex pl-[20%] text-center items-center py-2 px-3 maxtext-xm font-medium text-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-gray-700 dark:focus:ring-blue-800 min-w-[50%]"
        >
          <BiCodeAlt className='text-3xl'/>
        </a>
        <a
          href={deployed_at}
          className="inline-flex pl-[20%] items-center py-2 text-center px-3 text-sm font-medium text-center text-white bg-blue-700  hover:bg-blu  e-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-gray-700 dark:focus:ring-blue-800 min-w-[50%]"
        >
          <CgWebsite className='text-3xl'/>
        </a>
        </span>
      </div>
    </div>
  );
}
