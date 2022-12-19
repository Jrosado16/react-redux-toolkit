import Searcher from './components/Searcher';
import './App.css';
import { Col, Spin } from 'antd';
import PokemonList from './components/PokemonList';
import logo from './statics/logo.svg';
import { Dispatch, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPokemonsWithDetails } from './slices/dataSlice';

function App() {
  const pokemons = useSelector((state:any) => state.data.pokemonsFiltered);
  const loading = useSelector((state:any) => state.ui.loading);
  // const dispatch = useDispatch();
  const dispatch = useDispatch<Dispatch<any>>();

  useEffect(() => {
    dispatch(fetchPokemonsWithDetails())
  }, []);

  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src={logo} alt="logo" />
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      {
        loading ? <Col offset={12}>
          <Spin size='large' />
        </Col>
        : <PokemonList pokemons={pokemons} />
      }
    </div>
  )
}
// const mapStateToProps = (state:any) => ({
//   pokemons: state.pokemons,
// });
// const mapDispatchToProps = (dispatch:any) => ({
//   setPokemons: (value:any) => dispatch(setPokemonsActions(value)),
// });

// se dejaron de usar los action y los reducer: fueron remplazados por redux toolkit

export default App;
