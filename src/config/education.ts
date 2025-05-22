
// education 
export type EducationItemType = {
    school: string
    major: string
    image?: string
    logo: string
    start: string
    end: string
  }
  
  
  
  export const educationList: Array<EducationItemType> = [
    {
      school: 'University of Rochester',
      major: 'Computer Science B.A. and Applied Mathematics B.S.',
      logo: 'college',
      start: '2023',
      end: '2027'
    },
    {
      school: 'Shanghai Starriver Bilingual School',
      major: 'Middle school & high school student',
      logo: 'college',
      start: '2016',
      end: '2023'
    },
    {
      school: 'Shanghai Qibao Foreign Language School',
      major: 'Primary school student',
      logo: 'college',
      start: '2010',
      end: '2016'
    },
  ]
