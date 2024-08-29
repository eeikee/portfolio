import { Divider } from 'antd';
import { projects } from 'data/Projects';
import { works } from 'data/Works';
import { useTranslations } from 'next-intl';
import SkillList from 'src/components/skill-list';
import WorkHistory from 'src/components/work-history';
import ProjectCardList from '../../components/projects-card-list';

export default function Page() {
  const t = useTranslations('Page');
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        {t('title')}
      </h1>
      <Divider style={{ borderColor: '#FFFFFF' }} />
      <p className="mb-4">
        {`I'm a Vim enthusiast and tab advocate, finding unmatched efficiency in
        Vim's keystroke commands and tabs' flexibility for personal viewing
        preferences. This extends to my support for static typing, where its
        early error detection ensures cleaner code, and my preference for dark
        mode, which eases long coding sessions by reducing eye strain.`}
      </p>
      <div className="my-8">
      </div>
      <Divider style={{ borderColor: '#FFFFFF' }} />
      <ProjectCardList projects={projects} />
      <Divider style={{ borderColor: '#FFFFFF' }} />
      <SkillList />
      <Divider style={{ borderColor: '#FFFFFF' }} />
      <WorkHistory works={works} />
      <Divider style={{ borderColor: '#FFFFFF' }} />
    </section>
  )
}
