import { Container, Heading } from "../components/";
import { education } from '../data/studies'
export const Education = () => {
  return (
    <section className="py-10 my-10 bg-slate-100 dark:bg-slate-900">
      <Container>
        <Heading title="Education" subtitle="This is my Education Journey" />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {education.map((edu) => (
            <div
              key={edu.id}
              className="p-6 bg-white rounded-lg shadow-md dark:bg-slate-800"
            >
              <img
                src={edu.logoURL}
                alt={edu.institute}
                className="h-12 mb-4"
              />
              <h3 className="mb-2 text-xl font-semibold">{edu.institute}</h3>
              <p className="mb-2 text-sm text-gray-600 dark:text-gray-400">
                {edu.year}
              </p>
              <p className="mb-4">{edu.description}</p>
              <h4 className="text-lg font-medium">Skills:</h4>
              <ul className="mt-2 ml-4 list-disc list-inside">
                {edu.skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
