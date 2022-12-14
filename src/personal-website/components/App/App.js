import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import Header from "../Header/Header";
import About from "../About/About";
import Footer from "../Footer/Footer";
import Projects from "../Projects/Projects";
import Contacts from "../Contacts/Contacts";
import Skills from "../Skills/Skills";
import {
  contactList,
  infoAboutMe,
  projectDetails,
  skillsDetails,
} from "../../utilities/utilities";
function App() {
  const [contactsList, setContactsList] = useState(contactList);
  const [projectsList, setProjectsList] = useState(projectDetails);
  const [skillsList, setSkillsList] = useState(skillsDetails);
  const [myInfo, setMyInfo] = useState(infoAboutMe);

  useEffect(() => {
    setContactsList(contactList);
  }, [contactsList]);
  useEffect(() => {
    setProjectsList(projectDetails);
  }, [projectsList]);
  useEffect(() => {
    setSkillsList(skillsDetails);
  }, [skillsList]);
  useEffect(() => {
    setMyInfo(infoAboutMe);
  }, [myInfo]);

  return (
    <Box data-testid="App" align="center" style={{ color: "white" }}>
      <Header name={myInfo.name} />
      <About myInfo={myInfo} />
      <Projects projectsInfo={projectsList} />
      <Skills skillsInfo={skillsList} />
      <Contacts contactsInfo={contactList} />
      <Footer footer={myInfo.footer} />
    </Box>
  );
}

export default App;
