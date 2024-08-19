'use client';

import { IconChevronDown, IconChevronUp } from '@tabler/icons-react';
import useCollapse from '~/hooks/useCollapse';
import { CollapseProps } from '~/shared/types';

const Collapse = ({ items, classCollapseItem, iconUp, iconDown }: CollapseProps) => {
  const { activeIndex, handleSetIndex } = useCollapse();

  return (
    <div className="mx-auto max-w-3xl p-4">
      {items.map(({ title, description }, index) => (
        <div
          key={`accordion-${index}`}
          onClick={() => handleSetIndex(index)}
          className="mb-4 cursor-pointer rounded-lg border border-blue-200 bg-white shadow-md transition-transform transform hover:scale-105 hover:shadow-2xl"
        >
          <div className={`p-4 ${classCollapseItem}`}>
            <div
              className="flex justify-between items-center"
              id={`accordion__heading-${index}`}
              aria-disabled="false"
              aria-expanded={activeIndex === index}
              aria-controls={`accordion__panel-${index}`}
              role="button"
            >
              <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
              {iconDown && iconUp ? (
                activeIndex === index ? (
                  iconUp
                ) : (
                  iconDown
                )
              ) : activeIndex === index ? (
                <IconChevronUp className="h-6 w-6 text-primary-600 transition-transform transform rotate-180" />
              ) : (
                <IconChevronDown className="h-6 w-6 text-primary-600 transition-transform transform rotate-0" />
              )}
            </div>
            {activeIndex === index && (
              <div
                className="mt-3 overflow-hidden transition-max-height duration-500 ease-in-out"
                aria-labelledby={`accordion__heading-${index}`}
                id={`accordion__panel-${index}`}
                style={{ maxHeight: activeIndex === index ? '500px' : '0' }}
              >
                <p className="text-gray-700">{description}</p>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Collapse;
