var React = require('react');
var TrekStore = require('../stores/trek_store.js');
var ApiUtil = require('../util/apiUtil.js');
var TrekIndexItem = require('./trek_item.jsx');

module.exports = React.createClass({
  getInitialState: function () {
    return { pokemons: PokemonStore.all() };
  },

  _onChange: function () {
    this.setState({ pokemons: PokemonStore.all() });
  },

  componentDidMount: function () {
    this.pokemonListener = PokemonStore.addListener(this._onChange);
    ApiUtil.fetchAllPokemons();
  },

  compomentWillUnmount: function () {
    this.pokemonListener.remove();
  },

  render: function () {
    return(
      <ul>
        {this.state.pokemons.map(function (pokemon, index) {
          return <PokemonIndexItem key={index} pokemon={pokemon} />;
        })}
      </ul>
    );
  }
});
