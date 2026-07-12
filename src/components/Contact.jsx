import Socials from "./Socials";
import siteData from "../pages/siteData.json";

const infoItems = [
  {
    label: "Email",
    value: "workwithmayanksharma@gmail.com",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    ),
  },
  {
    label: "Location",
    value: "New Delhi, India",
    icon: (
      <>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </>
    ),
  },
  {
    label: "Response Time",
    value: "Usually within 24 hours",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    ),
  },
];

const Contact = () => {
  const { contact } = siteData;

  return (
    <section id="contact">
      <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-2">
        Contact
      </p>
      <h2 className="text-2xl font-bold text-slate-900 mb-3">Let&apos;s Work Together</h2>
      <p className="text-slate-500 text-sm mb-10 max-w-md">
        Have a project in mind or just want to connect? I&apos;d love to hear from you.
      </p>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Form */}
        <form
          action="https://formsubmit.co/workwithmayanksharma@gmail.com"
          method="POST"
          className="space-y-4"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            {contact.formFields
              .filter((f) => f.type !== "textarea")
              .map((field, i) => (
                <input
                  key={i}
                  type={field.type}
                  name={field.name}
                  placeholder={field.placeholder}
                  required={field.required}
                  className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-slate-400 transition-colors"
                />
              ))}
          </div>

          {contact.formFields
            .filter((f) => f.type === "textarea")
            .map((field, i) => (
              <textarea
                key={i}
                name={field.name}
                placeholder={field.placeholder}
                rows={field.rows}
                required={field.required}
                className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-slate-400 transition-colors resize-none"
              />
            ))}

          <button
            type="submit"
            className="w-full py-3 bg-slate-900 text-white text-sm font-medium rounded-lg hover:bg-slate-800 transition-colors"
          >
            Send Message
          </button>
        </form>

        {/* Info */}
        <div className="space-y-8">
          <div className="space-y-5">
            {infoItems.map(({ icon, label, value }) => (
              <div key={label} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center shrink-0">
                  <svg
                    className="w-5 h-5 text-slate-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {icon}
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-900">{label}</p>
                  <p className="text-sm text-slate-500 mt-0.5">{value}</p>
                </div>
              </div>
            ))}
          </div>

          <div>
            <p className="text-sm font-medium text-slate-900 mb-3">Connect</p>
            <Socials />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-20 pt-8 border-t border-slate-100 text-center">
        <p className="text-sm text-slate-400">
          {contact.copyrightText} {new Date().getFullYear()} Mayank Sharma. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Contact;
