import { useGetHomePage } from "@/hooks/fetch-hooks";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

type slugTpe = "privacy" | "terms" | "faq" | "disclaimer";

const FooterLegalPage = () => {
    const { slug } = useParams<{ slug: slugTpe }>();
    const { t, i18n } = useTranslation();
    const lang = i18n.language;
    const { data } = useGetHomePage(lang);

    // Map slug to translated title and content key
    const slugTitleMap: Record<slugTpe, string> = {
        privacy: t("footer.legal.privacy"),
        terms: t("footer.legal.terms"),
        faq: t("footer.legal.faq"),
        disclaimer: t("footer.legal.disclaimer"),
    };

    let finalData = "";
    if (slug === "privacy") {
        finalData = data?.data?.settings?.legal_documents?.privacy_policy;
    } else if (slug === "terms") {
        finalData = data?.data?.settings?.legal_documents?.terms_conditions;
    } else if (slug === "faq") {
        finalData = data?.data?.settings?.legal_documents?.faq;
    } else if (slug === "disclaimer") {
        finalData = data?.data?.settings?.legal_documents?.disclaimer;
    }

    const pageTitle = slug && slugTitleMap[slug] ? slugTitleMap[slug] : t("footer.legal.privacy");

    return (
        <section className="container mx-auto px-4 lg:px-8 py-10 min-h-[calc(100dvh-64px)] ">
            <h1 className="text-3xl font-bold mb-6">{pageTitle}</h1>
            <div dangerouslySetInnerHTML={{ __html: finalData || "" }} />
        </section>
    );
};

export default FooterLegalPage;