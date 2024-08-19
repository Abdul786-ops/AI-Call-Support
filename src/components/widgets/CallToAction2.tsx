import { IconChevronRight } from '@tabler/icons-react';
import { CallToActionProps, Item } from '~/shared/types';

const Card = ({ title, description, href, form }: Item) => (
  <div className="mb-6 overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
    <div className="px-5 py-4 bg-white">
      <div className="flex items-center justify-between">
        <div className="w-full">
          <h3 className="mb-2 text-xl font-semibold text-gray-800">{title}</h3>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
        {href && (
          <div className="flex h-10 w-10 items-center justify-center ml-4">
            <IconChevronRight className="h-6 w-6 text-blue-600" />
          </div>
        )}
      </div>
    </div>
    {form && (
      <div className="mt-4 px-5 py-4 bg-gray-50">
        <form className="rounded-md shadow-sm">
          <div className="flex items-center">
            {form.icon && (
              <span className="inline-flex items-center justify-center rounded-l-md border border-r-0 border-gray-300 bg-gray-200 px-3">
                <form.icon className="h-5 w-5 text-blue-600" />
              </span>
            )}
            <input
              type={form.input.type}
              name={form.input.name}
              autoComplete={form.input.autocomplete}
              placeholder={form.input.placeholder}
              className="flex-1 min-w-0 block w-full px-3 py-2 rounded-none rounded-r-md border border-gray-300 focus:border-blue-500 focus:ring-blue-500"
            />
            <button
              type={form.btn.type}
              className="ml-2 inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              {form.btn.title}
            </button>
          </div>
        </form>
      </div>
    )}
  </div>
);

const CallToAction2 = ({ title, subtitle, items }: CallToActionProps) => (
  <section className="bg-[#151617] text-white" id="callToActionTwo">
    <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:pt-20">
      <div className="row-gap-10 grid gap-6 md:grid-cols-2">
        <div className="mx-auto md:my-auto md:ml-0 md:pb-6 md:pr-24">
          <h2 className="mb-3 flex justify-center text-6xl font-bold md:justify-start">{title}</h2>
          <p className="text-center text-xl text-white md:text-left">{subtitle}</p>
        </div>
        <div className="relative -mb-6">
          {items &&
            items.map(({ title, description, href, form }, index) => (
              <div key={`call-to-action-item-${index}`}>
                {href ? (
                  <a
                    href={href}
                    className="w-full sm:mb-0"
                    target="_blank"
                    rel="noopener noreferrer"
                    key={`item-cta-${index}`}
                  >
                    <Card title={title} description={description} href={href} form={form} />
                  </a>
                ) : (
                  <Card title={title} description={description} href={href} form={form} />
                )}
              </div>
            ))}
        </div>
      </div>
    </div>
  </section>
);

export default CallToAction2;
