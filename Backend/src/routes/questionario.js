import express from "express";
import {
  getQuestionarioByDiscTurmaProfessor,
  getQuestionarios,
  deleteQuestionarioByDiscTurmaProfessor,
  getQuestionario,
} from "../controllers/questionario.js";

const router = express.Router();

router.get("/", getQuestionarios);

router.get("/:idquestionario", getQuestionario);

router.get(
  "/byDiscTurmaProfessor/:idProfessor/:idDisc/:idTurma",
  getQuestionarioByDiscTurmaProfessor
);
router.delete(
  "/byDiscTurmaProfessor/:idProfessor/:idDisc/:idTurma",
  deleteQuestionarioByDiscTurmaProfessor
);

export default router;