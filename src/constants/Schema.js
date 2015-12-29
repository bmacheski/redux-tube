import { Schema } from 'normalizr'

let video = new Schema('videos')
let category = new Schema('categories')

export const videoSchema = video
export const categorySchema = category
