import Alert from "@/components/shared/Alert";
import { useGetSingleBlog } from "@/hooks/fetch-hooks";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

export default function BlogDetails() {
    const { id } = useParams<{ id: string }>();
    const { i18n } = useTranslation();
    const lang = i18n.language;
    const { data } = useGetSingleBlog(Number(id), lang);
    const blog = data?.data
    if (!blog) return <Alert message="No blog found" type="warning" />;


    return (
        <article className="container mx-auto p-4 lg:p-12 bg-white rounded-2xl ">
            <header className="mb-10 border-b pb-6">
                <h1 className="text-3xl lg:text-5xl font-extrabold text-white bg-accent/90 p-2 w-fit mb-3">
                    {blog.title}
                </h1>
                <p className="text-sm text-gray-500">
                    {blog.published_at} • <span className="capitalize">{blog.article_type.name}</span>
                </p>
            </header>

            <section className="mb-10">
                <p className="text-lg text-gray-700 leading-relaxed">{blog.description}</p>
            </section>

            <section className="grid gap-12 lg:grid-cols-2">
                {blog?.article_contents.map((sec, i) => (
                    <div key={i} className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                        <h2 className="text-2xl font-semibold text-accent mb-4">{sec.title}</h2>
                        {sec.features && (
                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                {sec.features.map((it, idx) => (
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
