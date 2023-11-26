// axiosを使ってリクエストを扱う
import axios from "axios";
import { useEffect, useState } from "react";
import AlertBanner from "../common/AlertBanner";
import Row from "react-bootstrap/Row";
import ScoopOption from "./ScoopOption";

export default function Options({ optionType }) {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(false);

  // optionTypeが変化するたびに実行させる
  useEffect(() => {
    axios
      .get(`http://localhost:3030/${optionType}`)
      .then((response) => setItems(response.data))
      .catch((error) => setError(true));
  }, [optionType]);

  if (error) {
    // @ts-ignore
    return <AlertBanner />;
  }

  // TODO: replace `null` with ToppingOption when available
  const ItemComponent = optionType === "scoops" ? ScoopOption : null;

  const optionItems = items.map((item) => (
    <ItemComponent
      key={item.name}
      name={item.name}
      imagePath={item.imagePath}
    />
  ));

  return <Row>{optionItems}</Row>;
}
