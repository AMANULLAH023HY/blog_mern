import { Button } from 'flowbite-react';

export default function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
        <div className="flex-1 justify-center flex flex-col">
            <h2 className='text-2xl'>
            One of the best cold places to visit in India, Dharamshala pleases with its nature’s mystique, scenic charm, and mesh of Hindu and Tibetan culture. Though the place is blessed with lovely weather all year round, winters in Dharamshala have its own distinctive charm.
            </h2>
            <p className='text-gray-500 my-2'>
                Explore more 
            </p>
            
        </div>
        <div className="p-7 flex-1">
            <img src="https://img.traveltriangle.com/blog/wp-content/uploads/2017/10/Triund-Trek.jpg" />
        </div>
    </div>
  )
}