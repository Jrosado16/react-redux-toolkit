import { Input } from 'antd';
import { useDispatch } from 'react-redux';
import { setPokemonsFiltered } from '../slices/dataSlice';

const Searcher = () => {
  const dispatch = useDispatch();
  const handleFiltered = (e:any) => {
    dispatch(setPokemonsFiltered(e.target.value));
  };
  return <Input.Search
    onChange={handleFiltered}
    placeholder='Buscar...'
    style={{ marginBottom: '3rem' }}
  />
}

export default Searcher;