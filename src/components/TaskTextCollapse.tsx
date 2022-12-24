import { ReactNode } from 'react';
import { Collapse } from 'antd';

interface ITaskTextProps {
  children: ReactNode,
  header: string,
}

const TaskTextCollapse: React.FC<ITaskTextProps> = (props) => {
  const{header, children} = props;

  return (
    <Collapse >
        <Collapse.Panel header={header} key='1'>
          {children}
        </Collapse.Panel>
      </Collapse>
  );
}

export default TaskTextCollapse;
