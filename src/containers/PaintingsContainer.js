import React from 'react';
import { connect } from 'react-redux';
import { fetchPaintingsStart } from '../actions/paintingActions';
import PaintingList from '../components/PaintingList/PaintingList';
import Loading from '../components/Loading/Loading';
import PaintingFilter from '../components/PaintingFilter/PaintingFilter';
import { Switch, Route } from 'react-router-dom';
import Pagination from '../components/Pagination/Pagination';
import NotFound from '../components/NotFound';

class PaintingsContainer extends React.Component {

  componentDidMount() {
    const search = new URLSearchParams(this.props.location.search)
    const query = search.get("q") || ""
    let page = parseInt(search.get("page")) || 1

    this.props.fetchPaintingsStart(query, page)
  }

  render() {

    const { paintings, status, query, current, total, fetchPaintingsStart } = this.props
    return (
      <div>
        {(status === "resolved" && paintings.length === 0) && this.props.fetchPaintingsStart(query, 1) }
        <PaintingFilter fetch={fetchPaintingsStart} currentQuery={query} />

        <Switch> 
          <Route exact path="/gallery">
            {status === "idle" || status === "pending" ?
             <Loading message="Loading" /> : <PaintingList paintings={paintings} />  }
          </Route>
          <Route exact path="/gallery?q=:query&page=:page">
            {status === "idle" || status === "pending" ?
             <Loading message="Loading" /> : <PaintingList paintings={paintings}/> }
          </Route> 
          <Route render={(props) => <NotFound {...props} redirect={"/gallery"} />} />
        </Switch> 

        <Pagination 
          current={current} 
          total={total}
          currentQuery={query}
          fetch={fetchPaintingsStart}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    paintings: state.paintings.paintings,
    status: state.paintings.status,
    current: state.paintings.currentPage,
    total: state.paintings.totalPages,
    query: state.paintings.query
  }
}

export default connect(mapStateToProps, {fetchPaintingsStart})(PaintingsContainer)