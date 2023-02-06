import Link from 'next/link'

const Card = ({name, muscles, instructions, key}) => {
    return ( 
        <Link href={`details/${name}`} key={key}>
            <div className="bg-[rgba(255,255,255,0.2)] px-[10px] py-[15px] rounded-lg">
                <h1 className='text-[20px] mb-[10px] bg-clip-text text-transparent bg-gradient-to-r from-[#ef536d] to-[#e10fe1]'>{name}</h1>
                <p className='text-[#31c7ed] mb-[10px]'>{muscles}</p>
                <div className="h-[200px] overflow-hidden">
                    <p className='w-[100%] h-[100%] text-sm leading-6'>{instructions}</p>
                </div>
            </div>
        </Link>
     );
}
 
export default Card;