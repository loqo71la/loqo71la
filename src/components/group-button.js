import React, { useState } from 'react';

const on = 'py-2 px-6 bg-blue-600 dark:bg-indigo-500 text-white border border-blue-600 dark:border-indigo-500 rounded-full';
const off = 'py-2 px-6 hover:bg-blue-300 dark:hover:bg-indigo-400 border border-blue-300 dark:border-indigo-400 rounded-full';

function GroupButton({ data = [], onSelected }) {
  const [selected, setSelected] = useState(0);

  const select = index => {
    setSelected(index);
    onSelected(index);
  }

  return (
    <section className="flex gap-6 justify-center mt-8">
      {data.map((item, index) =>
        <button
          key={`group-${index}`}
          onClick={() => select(index)}
          className={selected === index ? on : off}
        >
          {item}
        </button>
      )}
    </section>
  );
}

export default GroupButton;
