import { useState, useEffect } from 'react';
import { Typography } from 'antd';
import { getRusEnding } from '../utils/utils';
import { IItem } from '../types/data';

interface IItemProps {
  item: IItem,
  index: number,
  handleDelete: Function,
}

const Item: React.FC<IItemProps> = (props) => {
  const {item, index, handleDelete} = props;
  const [counter, setCounter] = useState(item.time);

  useEffect(() => {
    if(counter > 0) {
      setTimeout(() => setCounter(counter - 1), 1000);
      return;
    }
    handleDelete(item.id);
  }, [counter, item, handleDelete]);

  return (
    <Typography.Text>
      {`${index}. Исчезнет через ${counter} секунд${getRusEnding(counter)({forOne: 'у', forTwo: 'ы', forFive: ''})}`}
    </Typography.Text>
  );
}

export default Item;
