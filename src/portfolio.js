const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: '#',
  title: 'Portfolio',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Jarwonozt',
  role: 'Laravel Fullstack Developer',
  description:
    'Saya sangat tertarik dengan dunia pemrogramman, khusunya website. Bagi saya menciptakan program yang bermanfaat adalah hal paling menyenangkan. Mengubah kesulitan menjadi kemudahan adalah impian saya setiap menciptakan aplikasi.',
  resume: 'https://jarwonozt.com/files/resume.pdf',
  social: {
    linkedin: 'https://linkedin.com/jarwonozt',
    github: 'https://github.com/jarwonozt',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Gosmart Academy',
    description:
      'Situs kursus online bersertifikat dengan fitur gratis dan premium.',
    stack: ['Laravel', 'PHP', 'HTML', 'Javascript'],
    // sourceCode: 'https://github.com',
    livePreview: 'https://gosmart.id',
  },
  {
    name: 'Pendis Kemenag',
    description:
      'Websie Portal Direktorat Jenderal Pendidikan Islam Kemenag RI | PENDIS',
    stack: ['Laravel', 'PHP', 'HTML', 'Javascript'],
    livePreview: 'https://pendis.kemenag.go.id',
  },
  {
    name: 'CSRC UIN Jakarta',
    description:
      'Center For The Study Of Religion And Culture/CSRC (Pusat Kajian Agama dan Budaya)',
    stack: ['Laravel', 'PHP', 'HTML', 'Javascript'],
    livePreview: 'https://crsc.or.id',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Laravel',
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'PHP',
  'Git',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'jarwonoztaveiro@gmail.com',
}

export { header, about, projects, skills, contact }
