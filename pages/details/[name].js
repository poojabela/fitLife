import Loader from "../../components/Loader"

const apikey = process.env.API_KEY

export const getServerSideProps = async ({ params }) => {
    const data = await fetch(`https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?name=${params.name}&difficulty=beginner`, {
      method: 'GET',
      headers: {
          'X-RapidAPI-Key': apikey,
          'X-RapidAPI-Host': 'exercises-by-api-ninjas.p.rapidapi.com'
      }
    })
  
    const exercises = await data.json();
  
    return {
      props: {
        exercise: exercises[0]
      }
    }
  }
  
const Details = ({ exercise }) => {

    return ( 
        <div className="mt-[60px]">
            <h1 className="text-[30px] mb-[10px] bg-clip-text text-transparent bg-gradient-to-r from-[#ef536d] to-[#e10fe1] text-center">{exercise.name}</h1>
            <p className="text-center mb-[20px] text-[#31c7ed]">Muscles: {exercise.muscle}</p>
            <p className="px-[20px] leading-8">{exercise.instructions}</p>
            {!exercise && <Loader />}
        </div>
     );
}
 
export default Details;