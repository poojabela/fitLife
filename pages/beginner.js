import Card from "../components/Card";
import Loader from '../components/Layout'

const apikey = process.env.API_KEY

export const getServerSideProps = async () => {
  const data = await fetch('https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?difficulty=beginner', {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': apikey,
      'X-RapidAPI-Host': 'exercises-by-api-ninjas.p.rapidapi.com'
    }
  })

  const exercises = await data.json();

  return {
    props: {
      exercises
    }
  }

}

const Beginner = ({ exercises }) => {

    console.log(exercises)

    return ( 
        <div className="px-[20px]">
          <h1 className="text-center mb-[25px] text-xl bg-clip-text text-transparent bg-gradient-to-b from-[#ef536d] to-[#e10fe1]">Exercises for Begginers</h1>
          <div className="grid grid-cold-1 md:grid-cols-2 xl:grid-cols-3 gap-[20px]">
            {exercises.map((exercise, index) => (
              <Card name={exercise.name} muscles={exercise.muscle} instructions={exercise.instructions} key={index} id={index} />
            ))}
          </div>
          {!exercises && <Loader />}
        </div>
     );
}
 
export default Beginner;