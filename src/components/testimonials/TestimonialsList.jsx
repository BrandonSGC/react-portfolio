import { TestimonialCard } from "..";

export const TestimonialsList = ({ testimonials }) => {
  return (
    <div className="grid gap-4 mt-10 md:grid-cols-3 md:gap-4 lg:gap-14">
      {testimonials?.map((testimonial) => (
        <TestimonialCard key={testimonial.id} {...testimonial} />
      ))}
    </div>
  );
};
