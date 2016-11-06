import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.spots = this.spots.bind(this);
    this.mapContainer = this.mapContainer.bind(this);
    this.filters = this.filters.bind(this);
  }

  componentDidMount() {
    this.props.requestSpots();
  }

  spots() {
    let spotIds = Object.keys(this.props.spots);

    if (spotIds.length === 0) { return; }
    let allSpots = spotIds.map(spotId => {
      let spot = this.props.spots[spotId];
      return (
        <div key={spot.id} className="spot-item">
          { spot.title }
        </div>
      );
    });

    return allSpots;
  }

  mapContainer() {
    return (
      <div className="map-container">

      </div>
    );
  }

  filters() {
    return (
      <div className="filters">

      </div>
    );
  }

  render() {
    return (
      <div className='search-container'>
        <div className='results'>
          {this.filters()}
          {this.spots()}
        </div>
        {this.mapContainer()}
      </div>
    );
  }
}

export default Search;
