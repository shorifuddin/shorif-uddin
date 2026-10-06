import {Title, Icon, Clients} from '../site';

const services = [
  ['code', 'Web Development', '#3b8cf0', 'pink', 'Scalable web platforms with Laravel, React, Vue.js and TypeScript — RESTful APIs, ERP modules and cloud SaaS products.'],
  ['group', 'App Development', '#e0a42b', 'blue', 'React Native mobile apps in production, including a grocery delivery app live on Google Play with real-time tracking and rewards.'],
  ['briefcase', 'ERP & SaaS Systems', '#c75cf6', 'blue', 'Large-scale ERP for e-commerce and hotels: inventory, invoicing, payroll, attendance, HR workflows and logistics optimisation.'],
  ['cap', 'AI / NLP Research', '#ef5a7e', 'pink', 'Published researcher — IEEE ICCIT 2025 paper on LLMs for Bangla healthcare paraphrasing and the BIDWESH Bangla hate-speech dataset.']
];

export default function Home() {
  return <>
    <div className="content-section">
      <Title>About</Title>
      <p>I'm a Software Engineer from Dhaka, Bangladesh with 4+ years of experience building software that runs real businesses — large-scale ERP systems, cloud SaaS platforms and mobile apps used by real customers every day.</p>
      <p>My stack is PHP (Laravel), React, TypeScript, React Native, Vue.js, MySQL and PostgreSQL. I'm also a published AI/NLP researcher with an IEEE conference paper on Bangla healthcare paraphrasing and the BIDWESH Bangla hate-speech detection dataset.</p>
      <div className="research-links">
        <span>Research profiles:</span>
        <a href="https://scholar.google.com/citations?user=7HQvzWkAAAAJ&hl=en" target="_blank" rel="noreferrer">Google Scholar</a>
        <a href="https://orcid.org/0009-0000-9444-024X" target="_blank" rel="noreferrer">ORCID</a>
        <a href="https://www.researchgate.net/profile/Md-Uddin-253" target="_blank" rel="noreferrer">ResearchGate</a>
        <a href="https://ieeexplore.ieee.org/author/714440223929229" target="_blank" rel="noreferrer">IEEE Xplore</a>
        <a href="https://www.semanticscholar.org/author/MD.-Shorif-Uddin/2364700811" target="_blank" rel="noreferrer">Semantic Scholar</a>
      </div>
      <h3 className="what-title">What I Do!</h3>
      <div className="services">
        {services.map(([icon, title, color, tone, desc]) =>
          <article className={'service ' + tone} key={title}>
            <Icon name={icon} size={35} sw={1.4} style={{color, flex: 'none'}} />
            <div><h3>{title}</h3><p>{desc}</p></div>
          </article>)}
      </div>
    </div>
    {/* <Clients /> — client logos section hidden per owner request */}
  </>;
}
