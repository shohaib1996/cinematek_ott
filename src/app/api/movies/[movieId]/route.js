import connectToDB from "../../../../../Db/connectToDb";
import Movie from "../../../../../models/Movies";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";


export const GET = async (req, res) => {
    await connectToDB();
    const id = req.url.split("/movies/")[1]
    console.log('hello');
    console.log(id);
    const objectId = new mongoose.Types.ObjectId(id);
    const result = await Movie.findOne({ _id: objectId });
    console.log("Result:", result);
    return NextResponse.json(result)
};
