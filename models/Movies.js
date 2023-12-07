import { Schema, mongoose, models } from "mongoose";

const MovieSchema = new Schema({
    name: {
        type: String,
        required: true,
      },
      thumbnail: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
      starring: {
        type: [String],
        required: true,
      },
      plot: {
        type: String,
        required: true,
      },
      genre: {
        type: String,
        required: true,
      },
      
})

const Movie = models.Movie || mongoose.model("Movie", MovieSchema)

module.exports = Movie