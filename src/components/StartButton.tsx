import { StarFilled, StarOutlined } from "@ant-design/icons";
import { Button } from "antd";

const StartButton = ({ isFavorite, onClick }:any) => {
  const Icon =  isFavorite ? StarFilled : StarOutlined;
  return <Button icon={<Icon />} onClick={onClick} />
}

export default StartButton;