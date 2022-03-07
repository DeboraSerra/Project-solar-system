import React from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage, handleClick, handleKeyUp } = this.props;
    return (
      <div
        data-testid="planet-card"
        onClick={ () => handleClick(planetName) }
        onKeyUp={ (e) => handleKeyUp(planetName, e) }
        role="presentation"
        className="planet-card"
      >
        <p data-testid="planet-name" className="planet-name">
          {planetName}
        </p>
        <img src={ planetImage } alt={ `Planeta ${planetName}` } />
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetImage: PropTypes.string.isRequired,
  planetName: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  handleKeyUp: PropTypes.func.isRequired,
};

export default PlanetCard;
