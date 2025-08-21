type School = {
  readonly image: string;
  readonly name: string;
  readonly diploma: string;
  readonly description: string;
  readonly date: string;
};

type EducationData = {
  readonly shell: string;
  readonly schools: School[];
};

export const EDUCATION: EducationData = {
  shell: "$ cat /Firas/education.txt",
  schools: [
    {
      image: "/education/insat.png",
      name: "INSAT",
      diploma: "Software Engineering Diploma",
      date: "09/2022 - 09/2025",
      description:
        "Completed a Software Engineering diploma at INSAT, where I am specializing in advanced software development, system architecture, and DevSecOps practices. My coursework and projects cover full-stack development, distributed systems, cloud computing, and secure software design.",
    },
    {
      image: "/education/insat.png",
      name: "INSAT",
      diploma: "Preparatory Studies in Mathematics and Informatics",
      date: "09/2020 - 06/2022",
      description:
        "Completed a demanding two-year preparatory cycle focusing on Mathematics, Informatics, and foundational engineering sciences. This program strengthened my skills in algorithms, data structures, logic, and applied mathematics, while fostering critical thinking and discipline. The experience provided the intellectual and technical background required to pursue specialized engineering studies.",
    },
    {
      image: "/education/baccalaureat.png",
      name: "Tunisian Baccalaureate",
      diploma: "Baccalaureate in Mathematics",
      date: "07/2020",
      description:
        "Achieved the Tunisian national Baccalaureate in Mathematics, a highly rigorous program emphasizing problem solving, abstract reasoning, and analytical thinking. Developed a strong foundation in algebra, geometry, calculus, and statistics, along with complementary scientific subjects, which prepared me for advanced studies in engineering and computer science.",
    },
  ],
};
