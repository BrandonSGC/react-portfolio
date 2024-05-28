import { Container, Heading, TestimonialsList } from "../components";
import { testimonials } from "../data/testimonials";

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-10 bg-slate-100 dark:bg-slate-900">
      <Container>
        <Heading
          title="Testimonials"
          subtitle="Nice things people have said about me:"
        />
        <TestimonialsList testimonials={testimonials} />
      </Container>
    </section>
  );
};
