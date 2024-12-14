import { Divider } from 'antd';
import { projects } from 'data/Projects';
import { works } from 'data/Works';
import { useTranslations } from 'next-intl';
import SkillList from 'src/components/skill-list';
import WorkHistory from 'src/components/work-history';
import ProjectList from '../../components/project-list';

export default function Page() {
  const t = useTranslations('home');
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        <p>{t('greeting')}</p>
        <p>{t('welcome')}</p>
      </h1>
      <Divider style={{ borderColor: '#FFFFFF' }} />
      <p className="mb-4">
        {t('introduction')}
      </p>
      <div className="my-8">
      </div>
      <Divider style={{ borderColor: '#FFFFFF' }} />
      <SkillList />
      <Divider style={{ borderColor: '#FFFFFF' }} />
      <ProjectList />
      <Divider style={{ borderColor: '#FFFFFF' }} />
      <WorkHistory works={works} />
      <Divider style={{ borderColor: '#FFFFFF' }} />
    </section>
  )
}