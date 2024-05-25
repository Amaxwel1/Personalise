import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Signin from "../pages/Signin";
import Signup from "../pages/SignupAluno";
import SignupProfessor from "../pages/SignupProfessor";
import useAuth from "../hooks/useAuth";
import TelaMateria from "../pages/Professor/TelaMateria";
import QuestionarioPre from "../pages/Professor/QuestionarioPre";
import TelaInicio from "../pages/TelaInicio";
import MinhaConta from "../pages/MinhaConta";
import Turmas from "../pages/Professor/SPAmaterias";
import Sessao from "../pages/Professor/Sessão";
import EnviadoSucesso from "../pages/Professor/EnviadoSucesso";
import DeletadoSucesso from "../pages/Professor/DeletadoSucesso";
import OpcoesQuest from "../pages/Professor/OpcoesQuest";
import EditarQuest from "../pages/Professor/EditarQuest";


const Private = ({ Item }) => {
  const { currentUser } = useAuth();

  return !currentUser ? <TelaInicio /> : <Item />;
};

const RouteApp = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route exact path="/home" element={<Private Item={Home} />} />
          <Route path="/preQuest" element={<QuestionarioPre />} />
          <Route path="/signin" element={<Signin />} />
          <Route exact path="/cadastroAluno" element={<Signup />} />
          <Route
            exact
            path="/cadastroProfessor"
            element={<SignupProfessor />}
          />
          <Route path="/minha-conta" element={<MinhaConta />} />
          <Route path="*" element={<TelaInicio />} />
          <Route path="/materiasP" element={<TelaMateria />} />
          <Route path="/turmas/:idDisc" element={<Turmas />} />
          <Route path="/turmas/:idDisc/:idturma" element={<Sessao />} />
          <Route
            path="/sessao/:idTurma/preQuest"
            element={<QuestionarioPre />}
          />
          <Route path="/enviado" element={<EnviadoSucesso />} />
          <Route path="/deletado" element={<DeletadoSucesso />} />
          <Route path="/opcoesQuest" element={<OpcoesQuest />} />
          <Route path="/preQuest/editar" element={<EditarQuest />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
};

export default RouteApp;
