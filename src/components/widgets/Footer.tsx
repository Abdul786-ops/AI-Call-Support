import { footerData } from '~/shared/data/global.data';

const Footer = () => {
  const { links, columns, socials, footNote } = footerData;

  return (
    <section className="bg-primary-50" id="heroTwo">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 text-red color-white">
        <div className="xs:gap-8 grid grid-cols-4 gap-4 gap-y-8 py-8 md:py-12">
          {columns.map(({ title, texts }, index) => (
            <div
              key={`item-column-${index}`}
              className="col-span-4 sm:col-span-2 md:col-span-2 lg:col-span-1 xl:col-span-1"
            >
              <div className="mb-2 font-medium text-black">{title}</div>
              {texts &&
                texts.map((text, index2) => (
                  <p key={`item-text-${index2}`} className="text-black">
                    {text}
                  </p>
                ))}
            </div>
          ))}
          <div className="col-span-4 sm:col-span-2 md:col-span-2 lg:col-span-1 xl:col-span-1">
            <div className="mb-2 font-medium text-black">Social</div>
            <ul className="mb-4 -ml-2 flex md:order-1 md:mb-0">
              {socials.map(({ label, icon: Icon, href }, index) => (
                <li key={`item-social-${index}`}>
                  <a
                    className="text-muted text-black inline-flex items-center rounded-lg p-2.5 text-sm hover:text-black focus:outline-none focus:ring-4 focus:text-white"
                    aria-label={label}
                    href={href}
                  >
                    {Icon && <Icon className="h-5 w-5" />}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="text-muted py-6 text-sm text-black md:flex md:items-center md:justify-between md:py-8">
          <ul className="mb-4 -ml-2 flex pl-2 md:order-1 md:mb-0">
            {links &&
              links.map(({ label, href }, index) => (
                <li key={`item-link-${index}`}>
                  <a
                    className="duration-150 ease-in-out placeholder:transition hover:text-black hover:underline"
                    aria-label={label}
                    href={href}
                  >
                    {label}
                  </a>
                  {links.length - 1 !== index && <span className="mr-1"> · </span>}
                </li>
              ))}
          </ul>
          {footNote}
        </div>
      </div>
    </section>
    
  );
};

export default Footer;