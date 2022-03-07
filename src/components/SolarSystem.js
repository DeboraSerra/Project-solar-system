import React from 'react';
import PropTypes from 'prop-types';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    const { handleClick, handleKeyUp } = this.props;
    return (
      <div data-testid="solar-system">
        <Title headline="Planets" />
        <div className="planets-parent">
          {planets.map(({ name, image }) => (
            <PlanetCard
              key={ name }
              handleClick={ handleClick }
              handleKeyUp={ handleKeyUp }
              planetName={ name }
              planetImage={ image }
            />
          ))}
        </div>
        <h2
          onClick={ () => handleClick(null) }
          className="show-missions"
          onKeyUp={ (e) => handleKeyUp(null, e) }
          role="presentation"
        >
          All missions
        </h2>
      </div>
    );
  }
}

SolarSystem.propTypes = {
  handleClick: PropTypes.func.isRequired,
  handleKeyUp: PropTypes.func.isRequired,
};

export default SolarSystem;
