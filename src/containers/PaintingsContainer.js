import React from 'react';
import { connect } from 'react-redux';
import { fetchPaintingsStart } from '../actions/paintingActions';
import PaintingList from '../components/PaintingList/PaintingList';
import Loading from '../components/Loading/Loading';
// import PaintingFilter from '../components/PaintingFilter/PaintingFilter';

class PaintingsContainer extends React.Component {

  componentDidMount = () => {
    this.props.fetchPaintingsStart()
  }

  render() {
    const { paintings, status, errors } = this.props
    return (
      <div>
        {/* <PaintingFilter /> */}
        {status === "idle" || status === "pending" ? <Loading message="Loading" /> : <PaintingList paintings={paintings} />  }
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