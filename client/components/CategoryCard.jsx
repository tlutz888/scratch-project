import React from 'react';
import ProjectList from './ProjectList';

const CategoryCard = (props) => {
  const { info, user, projects, startTimer, endTimer, id} = props;

  const projectList = [];
  for (let i = 0; i < projects.length; i++) {
    projectList.push(
      <ProjectList
        key = {"project"+i}
        projectName = {projects[i].title}
        projectId = {projects[i]._id}
        categoryName = {info.title}
        categoryId = {info._id}
        startTimer = {startTimer}
        endTimer={endTimer}
        user = {user}
      />
    );
  }
  return (
    <div className="categoryCard" id={id}>
      <h2>{info.title}</h2>
      {projectList}
    </div>
  );
};

export default CategoryCard;
