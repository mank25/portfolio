import Socials from "./Socials";
import siteData from "../pages/siteData.json";

const Contact = () => {
  const { contact } = siteData;

  return (
    <div className="" id="contact">
      <div className="contact-heading text-xl md:text-3xl font-semibold mb-8">
        {contact.heading}
      </div>
      <div className="mb-8 max-w-2xl">
        <form action="https://formsubmit.co/workwithmayanksharma@gmail.com" method="POST" className="space-y-4">
          <div className="flex md:flex-row max-sm:flex-col gap-4">
            {contact.formFields.slice(0, 2).map((field, index) => (
              <input
                key={index}
                type={field.type}
                name={field.name}
                placeholder={field.placeholder}
                required={field.required}
                className="form-input flex-1 text-sm md:text-base"
              />
            ))}
          </div>
          {contact.formFields
            .filter((field) => field.type === "textarea")
            .map((field, index) => (
              <textarea
                key={index}
                name={field.name}
                placeholder={field.placeholder}
                rows={field.rows}
                required={field.required}
                className="form-textarea resize-none w-full text-sm md:text-base"
              />
            ))}
          <button
            type="submit"
            className="btn-primary px-6 py-3 font-medium text-sm md:text-base w-full md:w-auto"
          >
            Send Message
          </button>
        </form>
      </div>
      <div className="md:hidden">
        <Socials />
      </div>
      <div className="footer border-t border-gray-200 flex flex-row justify-between md:py-6 max-sm:py-4 text-xs md:text-sm mt-8">
        <span className="flex items-center">
          {contact.copyrightText} {new Date().getFullYear()} • Made with care
        </span>
      </div>
    </div>
  );
};

export default Contact;
