import Project from "../model/project.model.js";
import { errorHandler } from "../utils/error.js";

// create a project
export const createProject = async (req, res, next) => {
  try {
    const { name, userId } = req.body;
    const project = new Project({ name, userId }); // Assign userId to the project

    // Check if the current user is the owner of the project
    if (!project.userId || project.userId.toString() !== userId) {
      return res.status(403).json({ error: 'Unauthorized access' });
    }

    const savedProject = await project.save();
    return res.status(201).json(savedProject);
  } catch (error) {
    next(error);
  }
};
 

// get all projects
export const getProjects = async (req, res, next) => {
  try {
    const projects = await Project.find();
    return res.status(201).json(projects);
  } catch (error) {
    next(error);
  }
};

// get a product by id
export const getProject = async (req, res, next) => {
  try {
    
    const project = await Project.findById(req.params.projectId);

    return res.status(201).json(project);
  } catch (error) {
    next(error);
  }
};

// create a upload
export const createUpload = async (req, res, next) => {
  try {
    const projectId = req.params.projectId;
    const { name, description } = req.body;
    const project = await Project.findById(projectId);
    if (!project) {
      return res.status(404).json({ error: "Project not found" });
    }
    const newUpload = { name, description };
    project.uploads.push(newUpload);
    await project.save();
    return res.status(201).json(newUpload);
  } catch (error) {
    next(error);
  }
};

// delete a project
export const deleteUpload = async (req, res, next) => {
  try {
    const projectId = req.params.projectId;
    const uploadId = req.params.uploadId;

    const project = await Project.findById(projectId);
    if (!project) {
      return res.status(404).json({ error: "Project not found" });
    }
    project.uploads.pull({ _id: uploadId });
    await project.save();
    res.status(200).json("Upload has been deleted!");
  } catch (error) {
    next(error);
  }
};

// updateUploads
export const updateUpload = async (req, res, next) => {
  try {
    const projectId = req.params.projectId;
    const uploadId = req.params.uploadId;
    const { description } = req.body;

    const project = await Project.findById(projectId);
    if (!project) {
      return res.status(404).json({ error: "Project not found" });
    }
    // Find the index of the upload with the given ID
    const uploadIndex = project.uploads.findIndex(
      (upload) => upload._id == uploadId
    );

    if (uploadIndex === -1) {
      return res.status(404).json({ error: "Upload not found" });
    }

    // Update the description of the found upload
    project.uploads[uploadIndex].description = description;

    await project.save();

    res.status(200).json(project.uploads[uploadIndex]);
  } catch (error) {
    next(error);
  }
};

// single uploads
export const getUpload = async (req, res, next) => {
  try {
    const projectId = req.params.projectId;
    const uploadId = req.params.uploadId;

    const project = await Project.findById(projectId);
    if (!project) {
      return res.status(404).json({ error: "Project not found" });
    }

    const upload = project.uploads.id(uploadId);
    if (!upload) {
      return res.status(404).json({ error: "Upload not found" });
    }

    res.status(200).json(upload);
  } catch (error) {
    next(error);
  }
};

// get all uploads
export const getUploads = async (req, res, next) => {
  try {
    const projectId = req.params.projectId;
    const project = await Project.findById(projectId);

    if (!project) {
      return res.status(404).json({ error: "Project not found" });
    }
    return res.status(200).json(project.uploads);
  } catch (error) {
    next(error);
  }
};
