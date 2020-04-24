/*eslint-disable*/
import React from 'react';

function EsLint() {
  const [value, setValue] = useState('');
  useEffect(() => {
    console.log(value);
  }, []);

  return (
    <div>
      <p>와우</p>
    </div>
  );
}

export default EsLint;
