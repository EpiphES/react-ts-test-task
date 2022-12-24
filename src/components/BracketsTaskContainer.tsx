import { useState } from 'react';
import { Button, Card, Divider, Empty, Input, Tooltip } from 'antd';
import { IResult } from '../types/data';
import { checkBrackets, getRusEnding } from '../utils/utils';
import TaskTextCollapse from './TaskTextCollapse';

const BracketsTaskContainer: React.FC = () => {
  const [testString, setTestString] = useState<string>('');
  const [showResult, setShowResult] = useState<boolean>(false);
  const [result, setResult] = useState<IResult>({ correctCount: 0, falseCount: 0});
  const [inputError, setInputError] = useState<string>('');

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setTestString(e.target.value);
    setShowResult(false);
    setInputError('');
  }

  function handleCheck() {
    if(testString.length === 0) {
      return setInputError('строка не может быть пустой');
    }
    const res = checkBrackets(testString);
    setResult(res);
    setShowResult(true);
  }

  return (
    <>
      <TaskTextCollapse header='Условие задачи #1'>
        <p>
          Дана строка, содержащая скобки трёх видов (круглые, квадратные и фигурные) и любые другие символы. Посчитайте сколько скобок расставлено корректно а сколько нет.
        </p>
        <p>
          Например, в строке ([]&#123;&#125;)[] скобки расставлены корректно, а в строке ([]] — нет. В первом случае правильно расставлено 8 скобок. Во втором случае указаны 2 скобки правильно, и 2 не правильно.
        </p>
      </TaskTextCollapse>
      <Divider orientation='center'>Проверка расстановки скобок в строке</Divider>
      <Tooltip title={inputError} color={'red'} open={!!inputError} placement='bottom'>
        <Input.Group compact >
          <Input
            style={{ width: 'calc(100% - 112px)' }}
            value={testString}
            onChange={handleInputChange}
            type='text'
            size='large'
            placeholder='введите строку'
            status={inputError && 'error'}
            allowClear
          />
          <Button type='primary' size='large' onClick={handleCheck}>Проверить</Button>
        </Input.Group>
      </Tooltip>
      <br />
      { showResult
        ? <Card title='Результат:' style={{ width: 300, margin: 'auto' }}>
            { result.correctCount === 0 && result.falseCount === 0
              ? <p>В строке нет скобок</p>
              : <>
                <p>
                  Правильно: {result.correctCount} скоб{getRusEnding(result.correctCount)({forOne: 'ка', forTwo: 'ки', forFive: 'ок'})}
                </p>
                <p>
                  Неправильно: {result.falseCount} скоб{getRusEnding(result.falseCount)({forOne: 'ка', forTwo: 'ки', forFive: 'ок'})}
                </p>
              </> }
          </Card>
        : <Empty />
      }
    </>
  );
}

export default BracketsTaskContainer;