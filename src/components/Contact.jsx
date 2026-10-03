import { useState } from "react";
import Socials from "./Socials";
import siteData from "../pages/siteData.json";

const fieldClass =
  "w-full px-4 py-3 rounded-lg bg-surface-1 border border-line text-[15px] text-ink placeholder:text-ink-subtle hover:border-line-strong focus:outline-none focus:border-accent-hover focus:ring-2 focus:ring-accent/30 transition-[border-color,box-shadow] duration-200";

const Contact = () => {
  const { contact } = siteData;
  const email = "workwithmayanksharma@gmail.com";
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  // FormSubmit emails every submission to `email`; AJAX keeps the visitor on the page.
  const onSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${email}`, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      const data = await res.json();
      if (!res.ok || data.success === "false") throw new Error();
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact">
      <div className="grid lg:grid-cols-12 gap-x-12 gap-y-12">
        <div className="lg:col-span-5">
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-display leading-[1.05]">
            Let&apos;s work together.
          </h2>
          <p className="mt-5 max-w-[42ch] text-base text-ink-subtle leading-relaxed">
            Have a project in mind, a role to fill, or just want to connect? I usually reply within 24 hours.
          </p>
          <a
            href={`mailto:${email}`}
            className="mt-8 inline-block text-lg text-ink underline decoration-line-strong hover:decoration-accent-hover transition-colors break-all"
          >
            {email}
          </a>
          <p className="mt-2 text-sm text-ink-subtle">New Delhi, India</p>
          <Socials className="mt-8" />
        </div>

        <form
          action={`https://formsubmit.co/${email}`}
          method="POST"
          onSubmit={onSubmit}
          className="lg:col-span-7 lg:pl-8 space-y-4"
        >
          <input type="hidden" name="_subject" value="New message from your portfolio" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="text" name="_honey" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
          <div className="grid sm:grid-cols-2 gap-4">
            {contact.formFields
              .filter((f) => f.type !== "textarea")
              .map((field) => (
                <div key={field.name}>
                  <label htmlFor={`f-${field.name}`} className="sr-only">
                    {field.placeholder}
                  </label>
                  <input
                    id={`f-${field.name}`}
                    type={field.type}
                    name={field.name}
                    placeholder={field.placeholder}
                    required={field.required}
                    autoComplete={field.type === "email" ? "email" : "name"}
                    className={fieldClass}
                  />
                </div>
              ))}
          </div>

          {contact.formFields
            .filter((f) => f.type === "textarea")
            .map((field) => (
              <div key={field.name}>
                <label htmlFor={`f-${field.name}`} className="sr-only">
                  {field.placeholder}
                </label>
                <textarea
                  id={`f-${field.name}`}
                  name={field.name}
                  placeholder={field.placeholder}
                  rows={field.rows}
                  required={field.required}
                  className={`${fieldClass} resize-none`}
                />
              </div>
            ))}

          <button
            type="submit"
            disabled={status === "sending"}
            className="h-11 px-6 disabled:opacity-60 disabled:cursor-not-allowed rounded-lg bg-accent text-canvas text-sm font-medium hover:bg-accent-hover active:scale-[0.98] transition-[background-color,transform] duration-200"
          >
            {status === "sending" ? "Sending..." : "Send message"}
          </button>

          <p role="status" aria-live="polite" className="min-h-5 text-sm text-ink-subtle">
            {status === "sent" && "Thanks, your message is on its way. I'll reply soon."}
            {status === "error" && `Something went wrong. Please try again or email ${email}.`}
          </p>
        </form>
      </div>

      <footer className="mt-24 pt-6 border-t border-line flex flex-col sm:flex-row justify-between gap-2 text-xs text-ink-subtle">
        <p>
          {contact.copyrightText} {new Date().getFullYear()} Mayank Sharma
        </p>
        <a href="#about" className="hover:text-ink transition-colors">
          Back to top
        </a>
      </footer>
    </section>
  );
};

export default Contact;
