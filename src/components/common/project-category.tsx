import { $, QRL, component$, useSignal } from '@builder.io/qwik';

const on = 'py-3 px-6 font-medium bg-yellow-400 dark:bg-emerald-500 border border-yellow-400 dark:border-emerald-500 rounded-full shadow-md dark:shadow-gray-500/60';
const off = 'py-3 px-6 hover:bg-gray-200 dark:hover:bg-gray-700 border border-gray-400 dark:border-gray-500 rounded-full';
const categories = ['All projects', 'Web Apps', 'Libraries'];

type ProjectCategoryProps = {
  onSelected: QRL<(category: number) => void>
};

export default component$<ProjectCategoryProps>(props => {
  const selected = useSignal(0);

  const select = $((index: number) => {
    selected.value = index;
    props.onSelected(index);
  });

  return (
    <section class="flex flex-col md:flex-row gap-2 md:gap-6 justify-center mt-8">
      {categories.map((category, index) =>
        <button
          key={`group-${index}`}
          onClick$={() => select(index)}
          class={selected.value === index ? on : off}
        >
          {category}
        </button>
      )}
    </section>
  );
});
