const SignIn = () => {
    return ( 
        <div className="flex flex-col justify-center items-center h-[50vh]">
            <h1 className="text-lg mb-[15px] bg-clip-text text-transparent bg-gradient-to-r from-[#ef536d] to-[#e10fe1]">Sign-in for more exercises</h1>
            <form action="" className="flex flex-col w-[500px] items-center">
                <input 
                type="email"
                placeholder="Email"
                className="mb-[10px] py-[10px] px-[25px] rounded-3xl"
                />
                <input 
                type="password"
                placeholder="Passsword"
                className="mb-[15px] py-[10px] px-[25px] rounded-3xl"
                />
                <button type="submit" className="ml-[20px] border-[2px] border-solid border-[#31c7ed] px-[25px] py-[10px] rounded-lg  hover:bg-[rgb(49,199,237)] hover:text-[#fff] hover:shadow-[4px_4px_20px_5px_rgba(49,199,237)] hover:duration-200 hover:ease-in">Lets Start ❤</button>
            </form>
        </div>
     );
}
 
export default SignIn;