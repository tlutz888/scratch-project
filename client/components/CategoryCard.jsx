import React, { Component, useState, useEffect } from 'react';
import { playTimer, stopTimer } from '../actions/actions';
import { useDispatch } from 'react-redux';

const CategoryCard = (props) => {
  const { info, user, projects, startTimer } = props;

  const dispatch = useDispatch();

  // using all of these because reducer is expecting all of them
  const [buttonStatus, setButtonStatus] = useState('Play');
  const [isClicked, setIsClicked] = useState(false);
  const [isProject, setIsProject] = useState('');
  const [isProjectId, setIsProjectId] = useState('');

  function handleOnClickPlay(projectTitle, projectId) {
    setIsProject(projectTitle);
    setIsProjectId(projectId);
    setIsClicked(true)
    setButtonStatus('Stop');
  }

  function handleOnClickStop() {
    setIsProject('');
    setIsProjectId('');
    setButtonStatus('Play');

  }

  function fetchStop() {
    const reqData = {
      time_spent: Date.now() - startTimer,
      updated_at: new Date().toString(),
      category_id: info._id,
      project_id: isProjectId,
      user_id: user._id,
    };
    fetch('/api/', {
      method: 'POST',
      header: { 'content-type': 'application/json' },
      body: JSON.stringify(reqData),
    }).then((data) => {
      //dummy data
      return reqData;
      
    });
  }

  useEffect(() => {
    if (isClicked === true && buttonStatus === 'Stop' && startTimer === 0) {
      let payload = {
        currentProjectName: isProject,
        currentCategoryName: info.title,
        currentProjectId: isProjectId,
        currentCategoryId: info._id,
      };
      dispatch(playTimer(payload));
      setIsClicked(false);
    } else if (isClicked === true && buttonStatus === 'Stop' && startTimer !== 0) {
      let payloadStop = fetchStop(isProject, isProjectId);
      dispatch(stopTimer(payloadStop));
      let payload = {
        currentProjectName: isProject,
        currentCategoryName: info.title,
        currentProjectId: isProjectId,
        currentCategoryId: info._id,
      };
      dispatch(playTimer(payload));
      setIsClicked(false);
    } else if(isClicked === true && buttonStatus === 'Play' && startTimer !== 0){
      let payloadStop = fetchStop(isProject, isProjectId);
      dispatch(stopTimer(payloadStop));
      setIsClicked(false);
    }
  });

  const projectList = [];
  for (let i = 0; i < projects.length; i++) {
    projectList.push(
      <div className="project">
        {projects[i].title}
          <button className="stop" onClick={() => {buttonStatus === 'Stop' ? handleOnClickStop() : handleOnClickPlay(projects[i].title, projects[i]._id)}}>
          {buttonStatus}
          </button>
      </div>
    );
  }
  return (
    <div className="categoryCard">
      <h2>{info.title}</h2>
      {projectList}
    </div>
  );
};

export default CategoryCard;
