import { useState } from 'react';
import { Button, Divider, List } from 'antd';
import { IItem } from '../types/data';
import { getRandomIntFromInterval } from '../utils/utils';
import Item from "./Item";
import TaskTextCollapse from './TaskTextCollapse';

const ListTaskContainer: React.FC = () => {
  const [items, setItems] = useState<IItem[]>([]);

  function generateItem() {
    const time = getRandomIntFromInterval(10, 30);
    const newItem = {
      id: Date.now(),
      time,
    }
    setItems((prevVal) => [...prevVal, newItem]);
  }

  function removeItem(id: number) {
    setItems(items.filter((item) => item.id !== id));
  }

  const itemElements = items.map((item, ind) => (
    <List.Item key={item.id}>
      <Item item={item} index={ind + 1} handleDelete={removeItem}/>
    </List.Item>
  ));

  return (
    <>
      <TaskTextCollapse header='Условие задачи #2'>
        <p>
          На странице есть список и кнопка добавления в этот список нового элемента.
          Каждый элемент списка отображает свой порядковый номер и обратный отсчет в секундах до его автоматического удаления из списка.
          Каждый добавленный элемент, должен находится в нем случайное количество секунд от 10 до 30. При исчезновении во всем списке пересчитывается порядковый номер.
        </p>
        <p><b>Пример:</b></p>
        <p>Пользователь нажал на кнопку добавить три раза. В списке появилось три элемента.</p>
        <ol>
          <li>Исчезнет через 13 секунд</li>
          <li>Исчезнет через 25 секунд</li>
          <li>Исчезнет через 15 секунд.</li>
        </ol>
        <p>По истечению 13 секунд, из списка будет удален 1 элемент. И он станет вот таким:</p>
        <ol>
          <li>Исчезнет через 12 секунд</li>
          <li>Исчезнет через 2 секунды</li>
        </ol>
      </TaskTextCollapse>
      <div>
      <Divider orientation='center'>Список исчезающих элементов</Divider>
      <List
        header={
          <Button type='primary' onClick={generateItem} style={{ display: 'block', margin: 'auto' }}>
            Добавить элемент
          </Button>}
        bordered
        dataSource={itemElements}
        renderItem={(element) => element}
      />
      </div>
    </>
  );
}

export default ListTaskContainer;
