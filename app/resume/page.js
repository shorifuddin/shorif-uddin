import {Title, Icon} from '../site';

const education = [
  ['2022 - 2026', 'BSc in Computer Science & Engineering', 'Southeast University', 'Dhaka'],
  ['2017 - 2022', 'Diploma in Computer Technology', 'Feni Engineering Institute', 'Feni'],
  ['2016 - 2017', 'Secondary School Certificate (SSC)', 'Feni Govt. Pilot High School', 'Feni']
];
export const experience = [
  ['Aug 2022 - Present', 'Software Engineer', 'KuiperZ, Dhaka', [
    'Designed & developed large-scale ERP systems for e-commerce and hotel management — inventory, invoicing, HR, attendance, logistics.',
    'Built & launched Lotus Food Stores, a grocery delivery app on Google Play (Sydney) — referral bonuses, coin rewards, real-time order tracking.',
    'Developed RyseNova, a cloud HR & Payroll platform — employee management, attendance & leave, payroll processing.',
  ]],
  ['Feb 2022 - Jul 2022', 'Software Developer', 'Bdcalling IT Ltd, Dhaka', [
    'Installed and configured WordPress environments for client websites.',
    'Customised themes and plugins based on specific business requirements.',
    'Maintained frontend and backend of WordPress-based applications.',
  ]],
];
export const skills = [['Laravel', 92, '#ed6e69', 'laravel'], ['PHP', 90, '#8d73ce', 'php'], ['PostgreSQL', 88, '#4169E1', 'postgresql'], ['Vue.js', 85, '#4FC08D', 'vuedotjs'], ['React.js', 84, '#ed6e69', 'react'], ['TypeScript', 80, '#5d84ce', 'typescript']];
export const knowledges = ['RESTful APIs', 'ERP Systems', 'Mobile App Development', 'Database Design', 'Eloquent ORM', 'NLP', 'LLMs', 'Bangla NLP', 'Testing & Debugging', 'Performance Tuning', 'Agile', 'Problem Solving'];

function Column({icon, title, items, col}) {
  return <div>
    <h3 className="col-title"><Icon name={icon} size={26} sw={1.5} style={{color: 'var(--blue)'}} /> {title}</h3>
    {items.map(([date, name, rest, sub], i) =>
      <div className={'resume-item ' + ((col + i) % 2 === 0 ? 'pink' : 'blue')} key={name}>
        <small>{date}</small>
        <h4>{name}{rest ? <span> - {rest}</span> : null}</h4>
        {Array.isArray(sub)
          ? <ul className="resp">{sub.map((b, j) => <li key={j}>{b}</li>)}</ul>
          : <p>{sub}</p>}
      </div>)}
  </div>;
}

export default function Resume() {
  return <>
    <div className="content-section">
      <Title>Resume</Title>
      <div className="two-col">
        <Column icon="cap" title="Education" items={education} col={0} />
        <Column icon="briefcase" title="Experience" items={experience} col={1} />
      </div>
    </div>
    <div className="skills-band">
      <div className="two-col">
        <div>
          <h3 className="col-title plain">Working Skills</h3>
          {skills.map(([n, v, c]) => <div className="skill" key={n}>
            <div><span>{n}</span><span>{v}%</span></div>
            <div className="bar"><i style={{width: v + '%', background: c}} /></div>
          </div>)}
        </div>
        <div>
          <h3 className="col-title plain">Knowledges</h3>
          <div className="tags">{knowledges.map(k => <span key={k}>{k}</span>)}</div>
        </div>
      </div>
    </div>
  </>;
}
