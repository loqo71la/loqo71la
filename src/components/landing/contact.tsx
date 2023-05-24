import { component$ } from '@builder.io/qwik';
import { Form } from '@builder.io/qwik-city';
import { sendContact } from '~/routes';
import { Spinner } from '../common/icons';

export default component$(() => {
  const action = sendContact();

  return (
    <section id="contact" class="py-28 container mx-auto px-6 md:px-10 text-center">
      <h2 class="text-3xl md:text-5xl">Have an Project in Mind?</h2>
      <p class="md:text-lg mt-10 opacity-80">
        If you have an exciting project where you need some help, feel free to get in touch.
      </p>
      <Form
        action={action}
        class="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4"
        onSubmitCompleted$={() => alert(action.value?.message)}
      >
        <input
          required
          name="name"
          type="text"
          title="Please enter at least 3 characters"
          pattern=".{3,}"
          placeholder="Your Name*"
          class="p-3 text-sm bg-gray-100 dark:bg-gray-600 border-none text-gray-900 dark:text-gray-200 focus:outline focus:outline-yellow-400 dark:focus:outline-emerald-500"
        />
        <input
          required
          type="email"
          name="email"
          placeholder="Your Email*"
          class="p-3 text-sm bg-gray-100 dark:bg-gray-600 border-none text-gray-900 dark:text-gray-200 focus:outline focus:outline-yellow-400 dark:focus:outline-emerald-500"
        />
        <textarea
          rows={5}
          name="message"
          placeholder="How can I help you?"
          class="md:col-span-2 p-3 text-sm bg-gray-100 dark:bg-gray-600 border-none text-gray-900 dark:text-gray-200 focus:outline focus:outline-yellow-400 dark:focus:outline-emerald-400"
        />

        <div class={action.isRunning ? 'md:col-span-2 opacity-75' : 'md:col-span-2'}>
          <button
            disabled={action.isRunning}
            class="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium shadow-md shadow-gray-300/60 dark:shadow-gray-500/60 bg-yellow-400 dark:bg-emerald-500"
          >
            {action.isRunning && <Spinner class="animate-spin h-5 w-5 fill-white" />}
            Send Message
          </button>
        </div>
      </Form>
      <p class="mt-20 mb-6">You can also just send me an email</p>
      <a
        href="mailto:hello@loqo71la.dev"
        class="text-xl text-shadow text-yellow-500 dark:text-emerald-600 hover:font-medium"
      >
        hello@loqo71la.dev
      </a>
    </section>
  );
});
