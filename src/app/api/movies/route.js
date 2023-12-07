import connectToDB from "../../../../Db/connectToDb"
import Movie from "../../../../models/Movies"

import { NextRequest, NextResponse } from "next/server"

export const GET = async() => {
    await connectToDB()
    const result = await Movie.find()
    return NextResponse.json(result)
}



