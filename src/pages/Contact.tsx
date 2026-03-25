import { useForm } from "@tanstack/react-form";
import { motion } from "motion/react";
import z from "zod";
import FormInputField from "../components/FormInputField";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.email(),
  phone: z.string(),
  message: z.string().min(1, "Message is required"),
});

type ContactProps = {};

const Contact = ({}: ContactProps) => {
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    validators: {
      onChange: contactSchema,
      onSubmit: contactSchema,
    },
    onSubmit: async ({ value }) => {
      const myEmail: string = import.meta.env.VITE_MY_EMAIL;

      const subject = `Portfolio - Contact from ${value.name}`;
      const body = `
    Name: ${value.name}
    Email: ${value.email}
    Phone: ${value.phone}
    
    Message:
    ${value.message}
    `;

      const mailtoLink = `mailto:${myEmail}?subject=${encodeURIComponent(
        subject,
      )}&body=${encodeURIComponent(body)}`;

      window.open(mailtoLink, "_blank");
    },
  });

  return (
    <motion.section
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="px-2"
    >
      <header>
        <h1 className="text-4xl font-bold text-center py-2 border-y-2 border-(--primary-color)">
          <i className="fa-solid fa-envelope mr-2"></i> Contact
        </h1>
      </header>

      <main className="mt-5">
        <p className="text-(--text-color)/60 text-center mb-4">
          If you'd like to discuss a project, or have a question, feel free to
          reach out!
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            form.handleSubmit();
          }}
          className="flex flex-col items-center gap-4"
        >
          <form.Field name="name">
            {(field) => (
              <FormInputField
                field={field}
                type="text"
                label="Name"
                autoComplete="name"
                autoFocus={true}
              />
            )}
          </form.Field>

          <form.Field name="email">
            {(field) => (
              <FormInputField
                field={field}
                type="email"
                label="Email"
                autoComplete="email"
              />
            )}
          </form.Field>

          <form.Field name="phone">
            {(field) => (
              <FormInputField
                field={field}
                type="tel"
                label="Phone"
                autoComplete="phone"
              />
            )}
          </form.Field>

          <form.Field name="message">
            {(field) => (
              <div className="flex flex-col gap-1">
                <div className="floating-label-effect w-[50vw]">
                  <textarea
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                    onBlur={field.handleBlur}
                    placeholder=""
                    required
                  />
                  <label htmlFor={field.name}>
                    Message <span className="text-red-500">*</span>
                  </label>
                </div>
                {field.state.meta.isTouched &&
                  field.state.meta.errors.length > 0 && (
                    <em className="text-red-500 text-sm">
                      {field.state.meta.errors
                        .map((err) => err?.message)
                        .join(", ")}
                    </em>
                  )}
              </div>
            )}
          </form.Field>

          <form.Subscribe
            selector={(state) => [state.canSubmit, state.isSubmitting]}
          >
            {([canSubmit, isSubmitting]) => (
              <button
                type="submit"
                disabled={!canSubmit || isSubmitting}
                className="mt-2 flex items-center justify-center gap-2 py-4 px-16 text-xl border-2 border-(--primary-color) bg-(--primary-color) text-(--bg-color) rounded-full shadow-[0_0_25px_0px_var(--primary-color)] hover:shadow-[0_0_25px_10px_var(--primary-color)] hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Let's Talk{" "}
                <i className="fa-solid fa-paper-plane animate-[bounce_2s_linear_infinite]"></i>
              </button>
            )}
          </form.Subscribe>
        </form>
      </main>
    </motion.section>
  );
};

export default Contact;
