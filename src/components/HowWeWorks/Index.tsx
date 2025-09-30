
import { useTranslation } from "react-i18next";
import SectionHeader from "../SectionHeader";
import { IWhyChooseUs } from "@/types/Index";

const HowWeWork = ({ data }: { data: IWhyChooseUs[] }) => {
    const { t } = useTranslation();


    return (
        <section className="py-12 bg-accent/10 mt-10 xl:mt-20">
            <div className="container mx-auto px-4 lg:px-8 text-center">
                <SectionHeader
                    title={t("howWeWork.title")}
                    subTitle={t("howWeWork.subtitle")}
                    desc={t("howWeWork.description")}
                />

                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {data?.map((step) => (
                        <div
                            key={step.id}
                            className="bg-white shadow-md rounded-2xl p-6 text-start border-l-4 border-accent"
                        >
                            <h3 className="text-xl font-semibold text-accent mb-2">
                                {step.title}
                            </h3>
                            <p className="text-gray-700">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowWeWork;
