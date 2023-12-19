import mongoose from "mongoose";

const uploadSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  status: {
    type:String,
    default: "Done"
  }
});

const projectSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    
    uploads: [uploadSchema],
  },
  { timestamps: true }
);

const Project = mongoose.model("Project", projectSchema);

export default Project;
