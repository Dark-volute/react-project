import React, { memo } from 'react';

type propsType = any

const Memo: React.FC<propsType> = function (props) {
  console.log('emit')
  return (
    <div>
      {props.data.name}
    </div>
  );
}


export default memo(Memo)

