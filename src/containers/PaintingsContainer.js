import React from 'react';
import { connect } from 'react-redux';
import { fetchPaintingsStart } from '../actions/paintingActions';
import PaintingList from '../components/PaintingList/PaintingList'

class PaintingsContainer extends React.Component {

  componentDidMount = () => {
    this.props.fetchPaintingsStart()
  }

  render() {
    return (
      <div>
        <PaintingList paintings={this.props.paintings} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    paintings: state.paintings.paintings,
    status: state.paintings.status,
    errors: state.paintings.error
  }
}

export default connect(mapStateToProps, {fetchPaintingsStart})(PaintingsContainer)