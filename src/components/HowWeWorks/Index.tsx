
import { useTranslation } from "react-i18next";
import SectionHeader from "../SectionHeader";

const HowWeWork = () => {
    const { t } = useTranslation();

    const steps = [
        {
            id: 1,
            title: t("howWeWork.steps.1.title"),
            desc: t("howWeWork.steps.1.desc"),
        },
        {
            id: 2,
            title: t("howWeWork.steps.2.title"),
            desc: t("howWeWork.steps.2.desc"),
        },
        {
            id: 3,
            title: t("howWeWork.steps.3.title"),
            desc: t("howWeWork.steps.3.desc"),
        },
        {
            id: 4,
            title: t("howWeWork.steps.4.title"),
            desc: t("howWeWork.steps.4.desc"),
        },
    ];

    return (
        <section className="py-12 bg-accent/10">
            <div className="container mx-auto px-4 lg:px-8 text-center">
                <SectionHeader
                    title={t("howWeWork.title")}
                    subTitle={t("howWeWork.subtitle")}
                    desc={t("howWeWork.description")}
                />

                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {steps.map((step) => (
                        <div
                            key={step.id}
                            className="bg-white shadow-md rounded-2xl p-6 text-start border-l-4 border-accent"
                        >
                            <h3 className="text-xl font-semibold text-accent mb-2">
                                {step.title}
                            </h3>
                            <p className="text-gray-700">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowWeWork;
