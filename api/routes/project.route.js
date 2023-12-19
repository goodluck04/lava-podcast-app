import express from "express";
import { createProject,getProjects, getProject, getUploads, getUpload, createUpload, updateUpload, deleteUpload } from "../controllers/project.controller.js";

const router = express.Router();

router.post("/createProject", createProject);
router.get("/projects", getProjects);
router.get("/project/:projectId", getProject);

router.post("/createUpload/:projectId", createUpload);
router.get("/uploads/:projectId", getUploads);
router.get("/upload/:projectId/:uploadId", getUpload);
router.put("/upload/:projectId/:uploadId", updateUpload);
router.delete("/upload/:projectId/:uploadId", deleteUpload);

// router.delete("/delete/:id", verifyToken, deleteListing);
// router.post("/update/:id", verifyToken, updateListing);


export default router;
