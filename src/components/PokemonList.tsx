import PokemonCard from "./PokemonCard";

type pokemonProps = {
  pokemons: Pokemons[]
}
type Pokemons = {
  name: string,
  sprites: {
    front_default: string
  }
  types: [],
  id: number,
  favorite: boolean,
};

const PokemonList = ({ pokemons }: pokemonProps ) => {
  return (
    <div className="pokemont-list">
      {pokemons.map((pokemon, index) => 
        <PokemonCard
          key={index}
          name={pokemon.name}
          image={pokemon.sprites.front_default}
          types={pokemon.types}
          id={pokemon.id}
          favorite={pokemon.favorite}
        />)}
    </div>
  )
}

PokemonList.defaultProps = {
  pokemons: Array(10).fill(''),
}

export default PokemonList;