import { BLOGS } from '@/data';
import BlogCard from './BlogCard';
import { useTranslation } from 'react-i18next';
import SectionHeader from '../SectionHeader';

const Blogs = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language
  const sectionHeader = {
    subtitle: t("blogs.sectionHeader.subtitle"),
    title: t("blogs.sectionHeader.title"),
    description: t("blogs.sectionHeader.description"),
  };
  return (
    <section dir={"rtl"} className=" container mx-auto px-4 lg:px-8 bg-white" id='blogs'>
      <div className="mx-auto  px-4 py-10">
        <SectionHeader
          title={sectionHeader.title}
          subTitle={sectionHeader.subtitle}
          desc={sectionHeader.description}
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {BLOGS.map((post) => (
            <BlogCard key={post.id} post={post} lang={lang} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
