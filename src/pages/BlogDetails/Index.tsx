import { BLOGS } from "@/data";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

export default function BlogDetails() {
    const { id } = useParams<{ id: string }>();
    const { i18n } = useTranslation();
    const lang = i18n.language

    const blog = BLOGS.find((b) => b.id === id);

    if (!blog) return <div className="p-10">Blog not found</div>;

    const t = blog[lang];

    return (
        <article  className="container mx-auto p-4 lg:p-8">
            <header className="mb-6">
                <h1 className="text-3xl font-bold text-accent mb-2">{t.title}</h1>
                <p className="text-sm opacity-70">
                    {blog.date} • {blog.tag}
                </p>
            </header>

            <p className="mb-6 leading-relaxed">{t.intro}</p>

            <div className=" flex flex-wrap gap-10 items-start justify-between">
                {t.sections.map((sec, i) => (
                    <div key={i}>
                        <h2 className="mb-2 text-xl font-semibold text-accent">{sec.heading}</h2>
                        {sec.body && <p className="mb-2 leading-relaxed">{sec.body}</p>}
                        {sec.items && (
                            <ul className="list-disc pr-5 space-y-1">
                                {sec.items.map((it, idx) => (
                                    <li key={idx} className="leading-relaxed">
                                        {it}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
            </div>
        </article>
    );
}
