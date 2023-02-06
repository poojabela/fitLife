import Link from 'next/link'

const Traning = () => {
    return ( 
        <div className="flex flex-col mt-[30px] xl:flex-row justify-evenly items-center">
            <Link href='/beginner'>
                <div className="e1 mb-[10px] bg-[rgba(255,255,255,0.07)] rounded-xl overflow-hidden  hover:shadow-[4px_4px_20px_5px_rgba(255,255,255,0.5)] hover:duration-[0.5s] hover:ease-in hover:scale-[110%]">
                    <div className="image h-[200px] w-[300px] xl:h-[300px] xl:w-[400px]">
                        <img src="exercise.jpg" alt="" className="h-[100%] w-[100%]" />
                    </div>
                    <h1 className='px-[10px] py-[15px] text-[#31c7ed]'>Beginner Exercises</h1>
                </div>
            </Link>

            <Link href='/sign-in'>
                <div className="e2 mb-[10px] bg-[rgba(255,255,255,0.07)] rounded-xl overflow-hidden hover:shadow-[4px_4px_20px_5px_rgba(255,255,255,0.5)] hover:duration-[0.5s] hover:ease-in hover:scale-[110%]">
                    <div className="image h-[200px] w-[300px] xl:h-[300px] xl:w-[400px] ">
                        <img src="exercise2.jpg" alt="" className="h-[100%] w-[100%]" />
                    </div>
                    <h1 className='px-[10px] py-[15px] text-[#31c7ed]'>Intermediate Exercises</h1>
                </div>
            </Link>

            <Link href='/sign-in'>
                <div className="e3 mb-[10px] bg-[rgba(255,255,255,0.07)] rounded-xl overflow-hidden hover:shadow-[4px_4px_20px_5px_rgba(255,255,255,0.5)] hover:duration-[0.5s] hover:ease-in hover:scale-[110%]">
                    <div className="image h-[200px] w-[300px] xl:h-[300px] xl:w-[400px]">
                        <img src="exercise3.jpg" alt="" className="h-[100%] w-[100%] " />
                    </div>
                    <h1 className='px-[10px] py-[15px] text-[#31c7ed]'>Expert Exercises</h1>
                </div>
            </Link>
        </div>
     );
}
 
export default Traning;