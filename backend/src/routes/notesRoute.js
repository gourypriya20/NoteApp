import express from "express";
import { createNote, deleteNote, getAllNotes, getNoteById, updateNote } from "../controller/notesController.js";
const router = express.Router();

//controllers
router.get("/",getAllNotes);
router.get("/:id",getNoteById);
router.post("/",createNote);
router.put("/:id",updateNote); // id - note id
router.delete("/:id",deleteNote);

export default router;