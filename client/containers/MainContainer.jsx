import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import CategoryCard from './components/CategoryCard.jsx';
import NavBar from './components/NavBar.jsx';
import TimerModal from './components/TimerModal.jsx';

const mapStateToProps = (state) => ({
  user: state.user,
  projects: state.projects,
  categories: state.categories,
  currentProjectId: state.currentProjectId,
  currentCategoryId: state.currentCategoryId,
  startTimer: state.startTimer,
  endTimer: state.endTimer,
  lastInterval: state.lastInterval,
});

class MainContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const categoryElems = categories.map((info, key) => {
      return (
        <CategoryCard
          key={key}
          info={info}
          user={this.props.user}
          projects={this.props.projects}
          currentProjectId={this.props.currentProjectId}
          currentCategoryId={this.props.currentCategoryId}
          startTimer={this.props.startTimer}
          endTimer={this.props.endTimer}
          lastInterval={this.props.lastInterval}
        />
      );
    });

    return (
      <div>
        <NavBar user={this.props.user} />
        <section className="mainSection">
          <div className="cardsContainer">
            {categoryElems}
            <TimerModal
              user={this.props.user}
              projects={this.props.projects}
              categories={this.props.categories}
              currentProjectId={this.props.currentProjectId}
              currentCategoryId={this.props.currentCategoryId}
              startTimer={this.props.startTimer}
              endTimer={this.props.endTimer}
              lastInterval={this.props.lastInterval}
            />
          </div>
        </section>
      </div>
    );
  }
}

export default connect(mapStateToProps, null)(MainContainer);
