import Image from "next/image";
import { FaPlay } from "react-icons/fa";
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

 

const MoviesCard = ({ movie }) => {
    const {name, thumbnail, rating} = movie
    return (
        <div className="group transform hover:scale-105 transition-transform duration-400 card bg-base-100 shadow-xl cursor-pointer">
            <figure className="relative">
                <Image className="w-[380px] h-[500px] rounded-md" src={thumbnail} alt="movie" width={380} height={500} />
                <p className="absolute bg-black w-full h-full bg-opacity-0 group-hover:bg-opacity-40"></p>
                <p className="absolute opacity-0 group-hover:opacity-100"><FaPlay className="text-3xl text-white"></FaPlay></p>
                <div className="absolute bottom-0 h-[100px] w-full p-5 transition-all duration-300 transform translate-y-full bg-black bg-opacity-70 group-hover:translate-y-0">
                    <p className="text-2xl font-bold font-kanit">{name}</p>
                    <p><Rating style={{ maxWidth: 100 }} readOnly halfFillMode='svg' value={rating} /></p>
                </div>
            </figure>
        </div>
    );
};

export default MoviesCard;