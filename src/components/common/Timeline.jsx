import { TagsList } from "./TagsList";

const events = [
  {
    id: 1,
    year: "2021",
    logoURL: "/img/cuc-logo.svg",
    institute: "Colegio Universitario Cartago",
    title: "",
    description:
      "Information technology diploma whose focus is software engineering. I acquired knowledge about different programming languages, relational databases, operating systems, networking and more skills for web development.",
    skills: [
      "Software Engineering",
      "Web Development",
      "Version Control",
      "Relational Databases",
      "Operating Systems",
      "Cybersecurity",
      "Agile Methodologies",
      "Teamwork",
      "Leadership",
      "Best Practices",
    ],
  },
  {
    id: 2,
    year: "2022",
    logoURL: "/img/udemy-logo.png",
    institute: "Udemy",
    title: "",
    description:
      "Expanding my web development skills through self-directed learning on Udemy, I keep completing the following comprehensive courses such as “ReactJS de cero a experto” by Fernando Herrera, “JavaScript Moderno ES6+ Guía Definitiva” and “HTML, CSS: La Guía Completa” by Juan Pablo de la Torre and more, so I always stay updated with the latest web technologies and best practices.",
    skills: ["ReactJS", "PERN Stack", "MERN Stack", "Testing"],
  },
  {
    id: 3,
    year: "2023",
    logoURL: "/img/uned-logo.png",
    institute: "UNED",
    title: "",
    description:
      "English program for adults advanced level B2+ According to MCE with an effective duration of 600 hours.",
    skills: ["English", " Teamwork", "Leadership"],
  },
  {
    id: 4,
    year: "2022",
    logoURL: "/img/",
    institute: "VLA Academy",
    title: "",
    description:
      "Learning to understand and control the configuration of telecommunications equipment such as routers and switches, how to internet works, as well as all the topics included in the Cisco CCNA 200-301.",
    skills: ["Cisco Systems Products", "Information Technology", "CCNA"],
  },
  {
    id: 5,
    year: "2020",
    logoURL: "/img/sykes-logo.png",
    institute: "Sykes Academy",
    title: "",
    description: "",
    skills: ["English", "Teamwork", "Leadership"],
  },
  {
    id: 6,
    year: "2017",
    logoURL: "/img/",
    institute: "American Business Academy",
    title: "",
    description:
      "Basic management of the Windows Operating System and office 365 with an effective duration of 144 hours.",
    skills: [
      "Office 365",
      "Leadership",
      "Teamwork",
      "Information Technology",
      "Windows",
    ],
  },
];

import { Chrono } from "react-chrono";

export const Timeline = () => {
  const customContent = [
    <div>
      <h3>Custom Card 1</h3>
      <p>This is the first custom card</p>
    </div>,
    <div>
      <h3>Custom Card 2</h3>
      <p>This is the second custom card</p>
    </div>,
  ];
  
  return (
    <Chrono
      items={[
        {
          title: "May 1940",
          cardTitle: "Dunkirk",
          url: "http://google.com",
          cardSubtitle:
            "Men of the British Expeditionary Force (BEF) wade out to a destroyer during the evacuation from Dunkirk.",
          cardDetailedText: `On 10 May 1940, Hitler began his long-awaited offensive in the west by invading neutral Holland and Belgium and attacking northern France. Holland capitulated after only five days of fighting, and the Belgians surrendered on 28 May. With the success of the German ‘Blitzkrieg’, the British Expeditionary Force and French troops were in danger of being cut off and destroyed.`,
        },
        {
          title: "25 July 1940",
          cardTitle: "The Battle of Britain",
          cardSubtitle: `RAF Spitfire pilots scramble for their planes`,
          cardDetailedText: `After France’s surrender in June 1940, Churchill told the British people, “Hitler knows that he will have to break us in this island or lose the war”. To mount a successful invasion, the Germans had to gain air superiority. The first phase of the battle began on 10 July with Luftwaffe attacks on shipping in the Channel.
        The following month, RAF Fighter Command airfields and aircraft factories came under attack. Under the dynamic direction of Lord Beaverbrook, production of Spitfire and Hurricane fighters increased, and despite its losses in pilots and planes, the RAF was never as seriously weakened as the Germans supposed.`,
        },
        {
          title: "June 1941",
          cardTitle: "Operation Barbarossa",
          cardSubtitle: `A column of Red Army prisoners taken during the first days of the German invasion`,
          cardDetailedText: `Since the 1920s, Hitler had seen Russia, with its immense natural resources, as the principal target for conquest and expansion. It would provide, he believed, the necessary ‘Lebensraum’, or living space, for the German people. And by conquering Russia, Hitler would also destroy the “Jewish pestilential creed of Bolshevism”. His non-aggression pact with Stalin in August 1939 he regarded as a mere temporary expedient.
        Barely a month after the fall of France, and while the Battle of Britain was being fought, Hitler started planning for the Blitzkrieg campaign against Russia, which began on 22 June 1941. Despite repeated warnings, Stalin was taken by surprise, and for the first few months the Germans achieved spectacular victories, capturing huge swathes of land and hundreds of thousands of prisoners. But they failed to take Moscow or Leningrad before winter set in.
        On 5/6 December, the Red Army launched a counter-offensive which removed the immediate threat to the Soviet capital. It also brought the German high command to the brink of a catastrophic military crisis. Hitler stepped in and took personal command. His intervention was decisive and he later boasted, “That we overcame this winter and are today in a position again to proceed victoriously… is solely attributable to the bravery of the soldiers at the front and my firm will to hold out…”`,
        },
      ]}
      mode="VERTICAL_ALTERNATING"
      
    />
  );
};