const AboutMe = () => {
  return (
    <section
      id="about"
      className="mt-10 grid grid-cols-1 gap-4 scroll-mt-26 lg:grid-cols-2"
    >
      <div>
        <h1 className="text-lg lg:text-2xl font-bold">About Me</h1>
        <p className="text-foreground/60">A little context about my work.</p>
      </div>

      <div className="mb-10 space-y-4 leading-relaxed text-foreground/75">
        <p>
          I&apos;m a full-stack developer based in Jakarta, Indonesia. I work
          across web and mobile products, from customer-facing interfaces to
          backend services and integrations.
        </p>
        <p>
          I graduated from vocational high school in 2023 with a focus on
          software engineering. Since then, I&apos;ve continued learning by
          building production products and working with teams on practical
          business problems.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
