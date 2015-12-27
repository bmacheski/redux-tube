import { Schema, arrayOf } from 'normalizr'

let video = new Schema('videos')
let trending = new Schema('trending')

video.define({
  trending: trending
})

trending.define({
  trendingVideos: arrayOf(video)
})

export const videoSchema = video
