type ContactProps = {};

const Contact = ({}: ContactProps) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const message = formData.get("message") as string;

    const myEmail: string = import.meta.env.VITE_MY_EMAIL;

    const subject = `Portfolio - Contact from ${name}`;
    const body = `
    Name: ${name}
    Email: ${email}
    Phone: ${phone}
    
    Message:
    ${message}
    `;

    const mailtoLink = `mailto:${myEmail}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.open(mailtoLink, "_blank");
  };

  return (
    <section className="mt-16 px-2">
      <header>
        <h1 className="text-4xl font-bold text-center py-2 border-y-2 border-(--primary-color)">
          <i className="fa-solid fa-envelope mr-2"></i> Contact
        </h1>
      </header>

      <main className="mt-5">
        <p className="text-gray-400 text-center mb-4">
          If you'd like to discuss a project, or have a question, feel free to
          reach out!
        </p>

        <form
          onSubmit={(e) => handleSubmit(e)}
          className="flex flex-col items-center gap-4"
        >
          <div className="floating-label-effect w-[50vw]">
            <input
              type="text"
              id="name"
              name="name"
              placeholder=""
              autoComplete="name"
              autoFocus
              required
            />
            <label htmlFor="name">
              Name<span className="text-red-500">*</span>
            </label>
          </div>
          <div className="floating-label-effect w-[50vw]">
            <input
              type="email"
              id="email"
              name="email"
              placeholder=""
              autoComplete="email"
              required
            />
            <label htmlFor="email">
              Email<span className="text-red-500">*</span>
            </label>
          </div>
          <div className="floating-label-effect w-[50vw]">
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder=""
              autoComplete="tel"
            />
            <label htmlFor="phone">Phone</label>
          </div>
          <div className="floating-label-effect w-[50vw]">
            <textarea id="message" name="message" placeholder="" required />
            <label htmlFor="message">
              Message <span className="text-red-500">*</span>
            </label>
          </div>

          <button
            type="submit"
            className="mt-2 flex items-center justify-center gap-2 py-4 px-16 text-xl border-2 border-(--primary-color) bg-(--primary-color) text-(--bg-color) rounded-full shadow-[0_0_25px_0px_var(--primary-color)] hover:shadow-[0_0_25px_10px_var(--primary-color)] hover:scale-105"
          >
            Let's Talk{" "}
            <i className="fa-solid fa-paper-plane animate-bounce"></i>
          </button>
        </form>
      </main>
    </section>
  );
};

export default Contact;
