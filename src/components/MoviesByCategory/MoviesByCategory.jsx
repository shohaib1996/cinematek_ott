"use client"
import useMovies from "@/hooks/useMovies";
import { FaArrowRight } from "react-icons/fa";
import MoviesCard from "../MoviesCard/MoviesCard";
import Container from "@/utils/Container/Container";


const MoviesByCategory = () => {
    const [movies] = useMovies()
    // console.log(movies);
    const comedyMovies = movies.filter(movie => movie.genre === "Comedy")
    const actionMovies = movies.filter(movie => movie.genre === "Action")
    const animationMovies = movies.filter(movie => movie.genre === "Animation")
    const romanceMovies = movies.filter(movie => movie.genre === "Romance")
    const horrorMovies = movies.filter(movie => movie.genre === "Horror")
    // console.log(comedyMovies);
    return (
        <Container>
            <div >
                <div>
                    <div className="flex justify-between mt-12 mb-5">
                        <h1 className="text-3xl font-bold font-kanit">Comedy</h1>
                        <button className="btn btn-sm">More <FaArrowRight></FaArrowRight></button>
                    </div>
                    <div className="grid grid-cols-4 gap-5 pb-12">
                        {
                            comedyMovies.slice(0, 4).map(movie => <MoviesCard key={movie._id} movie={movie}></MoviesCard>)
                        }
                    </div>
                </div>
                <div>
                    <div className="flex justify-between mt-12 mb-5">
                        <h1 className="text-3xl font-bold font-kanit">Action</h1>
                        <button className="btn btn-sm">More <FaArrowRight></FaArrowRight></button>
                    </div>
                    <div className="grid grid-cols-4 gap-5 pb-12">
                        {
                            actionMovies.slice(0, 4).map(movie => <MoviesCard key={movie._id} movie={movie}></MoviesCard>)
                        }
                    </div>
                </div>
                <div>
                    <div className="flex justify-between mt-12 mb-5">
                        <h1 className="text-3xl font-bold font-kanit">Romance</h1>
                        <button className="btn btn-sm">More <FaArrowRight></FaArrowRight></button>
                    </div>
                    <div className="grid grid-cols-4 gap-5 pb-12">
                        {
                            romanceMovies.slice(0, 4).map(movie => <MoviesCard key={movie._id} movie={movie}></MoviesCard>)
                        }
                    </div>
                </div>
                <div>
                    <div className="flex justify-between mt-12 mb-5">
                        <h1 className="text-3xl font-bold font-kanit">Animation</h1>
                        <button className="btn btn-sm">More <FaArrowRight></FaArrowRight></button>
                    </div>
                    <div className="grid grid-cols-4 gap-5 pb-12">
                        {
                            animationMovies.slice(0, 4).map(movie => <MoviesCard key={movie._id} movie={movie}></MoviesCard>)
                        }
                    </div>
                </div>
                <div>
                    <div className="flex justify-between mt-12 mb-5">
                        <h1 className="text-3xl font-bold font-kanit">Horror</h1>
                        <button className="btn btn-sm">More <FaArrowRight></FaArrowRight></button>
                    </div>
                    <div className="grid grid-cols-4 gap-5 pb-12">
                        {
                            horrorMovies.slice(0, 4).map(movie => <MoviesCard key={movie._id} movie={movie}></MoviesCard>)
                        }
                    </div>
                </div>

            </div>
        </Container>
    );
};

export default MoviesByCategory;