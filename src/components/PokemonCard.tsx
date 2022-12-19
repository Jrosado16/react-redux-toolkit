import { Card } from "antd"
import Meta from "antd/es/card/Meta"
import { useDispatch } from "react-redux";
import { setFavorite } from "../slices/dataSlice";
import StartButton from "./StartButton";

type Pokemon = {
  name: string,
  image: string,
  types: [],
  id: number,
  favorite: boolean,
}

const PokemonCard = ({ name, image, types, id, favorite }: Pokemon) => {
  const dispatch = useDispatch();

  const handleOnFavorite = () => {
    dispatch(setFavorite({ pokemonId: id }))
  }

  const getTypes = () => {
    return types.map((type:any) => type.type.name).join(', ')
  }
  return <Card
    style={{ width: 250 }}
    title={name}
    cover={<img src={image} alt={name} />}
    extra={<StartButton isFavorite={favorite} onClick={handleOnFavorite} />}
  >
    <Meta description={getTypes()} />
  </Card>
}

export default PokemonCard;