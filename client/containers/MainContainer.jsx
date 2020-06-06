import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

// const mapStateToProps = state => ({
//     totalMarkets: state.markets.totalMarkets,
//     totalCards: state.markets.totalCards,
// });

class MainContainer extends Component {
  constructor(props) {
    super(props);
  }


  // openModal(type, position, name) {
  //   this.setState({
  //     modalState: {
  //       ...this.state.modalState,
  //       open: true,
  //       type,
  //       position,
  //       name
  //     }
  //   })
  // }

  render() {

    const { allData } = this.state;

    const categoryElems = allData.cards.map((info, key) => {
      return (
        <CategoryCard
        key={key}
        info={info}
        allData={this.props.allData}
        />
      );
    });

    return (
      <NavBar
      allData={this.props.allData}
    />
      <section className="mainSection">
        <div className="cardsContainer">
          {categoryElems}
          <TimerMotal
            allData={this.props.allData}
          />
        </div>
      </section>
    );
  }
}

export default MainContainer;