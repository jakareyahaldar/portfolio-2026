import mongoose from "mongoose";

const schema = new mongoose.Schema({
    title: {required: true, type: String},
    description: {required: true, type: String},
    githubUrl: String,
    liveUrl: String,
    logo: {required: true, type: String},
    preview: {required: true, type: String}
})

export const ProjectModel = mongoose.model("project", schema)