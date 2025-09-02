import { BLOGS } from "@/data";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

export default function BlogDetails() {
    const { id } = useParams<{ id: string }>();
    const { i18n } = useTranslation();
    const lang = i18n.language;

    const blog = BLOGS.find((b) => b.id === id);

    if (!blog)
        return (
            <div className="p-10 text-center text-gray-500 text-lg">
                Blog not found
            </div>
        );

    const t = blog[lang];

    return (
        <article className="container mx-auto p-4 lg:p-12 bg-white rounded-2xl ">
            <header className="mb-10 border-b pb-6">
                <h1 className="text-3xl lg:text-5xl font-extrabold text-white bg-accent/90 p-2 w-fit mb-3">
                    {t.title}
                </h1>
                <p className="text-sm text-gray-500">
                    {blog.date} • <span className="capitalize">{blog.tag}</span>
                </p>
            </header>

            <section className="mb-10">
                <p className="text-lg text-gray-700 leading-relaxed">{t.intro}</p>
            </section>

            <section className="grid gap-12 lg:grid-cols-2">
                {t.sections.map((sec, i) => (
                    <div key={i} className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                        <h2 className="text-2xl font-semibold text-accent mb-4">{sec.heading}</h2>
                        {sec.body && <p className="mb-4 text-gray-700 leading-relaxed">{sec.body}</p>}
                        {sec.items && (
                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                {sec.items.map((it, idx) => (
                                    <li key={idx}>{it}</li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
            </section>
        </article>
    );
}
