import { useRouter } from "next/router";

const LandingPage = () => {

    const router = useRouter();

    const handleSignin = () => {
        router.push('/sign-in')
    } 

    const handleStart = () => {
        router.push('/workout')
    }

    return ( 
       <div className="container mt-[100px]">
         <div className="block lg:flex justify-between px-[70px] items-center">
            <div className="text-container flex flex-col items-center justify-center text-center lg:block lg:text-left">
                <p className="text-[#7f7d7d] text-[14px] md:text-[18px]">Achieve Your Fitness Goals</p>
                <h1 className="text-[20px] lg:max-w-[700px] md:text-[30px] lg:text-[40px] ">Transform Your Body and Mind with Our Expert Workouts</h1>
                <div className="buttons my-[20px]">
                    <button onClick={handleSignin} className="bg-gradient-to-br from-[#ef536d] to-[#e10fe1] px-[10px] py-[7px] rounded-lg text-[#fff] hover:bg-gradient-to-tl">Sign-up</button>
                    <button onClick={handleStart} className="ml-[20px] border-[2px] border-solid border-[#31c7ed] px-[10px] py-[7px] rounded-lg  hover:bg-[rgb(49,199,237)] hover:text-[#fff] hover:shadow-[4px_4px_20px_5px_rgba(49,199,237)] hover:duration-200 hover:ease-in">Lets start</button>
                </div>
            </div>
            <div className="image-container flex justify-center">
                <img src="banner.png" alt="" />
            </div>
        </div>

        <div className="design">
            <div className="w-[200px] h-[200px] bg-[#e0418d] blur-[100px] fixed top-0 z-[-1]"></div>
            <div className="w-[200px] h-[200px] bg-[#d253e8] blur-[100px] fixed bottom-0 right-0 "></div>
        </div>
       </div>
     );
}
 
export default LandingPage;