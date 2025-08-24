import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import serviceImage from "../../assets/hero-lawyer.jpg";

const ServiceDetails = () => {
    const { slug } = useParams();
    const { t } = useTranslation();

    const services = t("services.items", { returnObjects: true }) as any[];
    const service = services.find((s) => s.slug === slug);

    if (!service) return <p className="text-center mt-10">Service not found</p>;

    return (
        <section className="container mx-auto px-4 flex flex-wrap items-center gap-5 max-lg:pb-5 min-h-[calc(100dvh-64px)]">
       
            <div className="bg-card p-8 rounded-2xl ">
                <h1 className="text-xl lg:text-3xl font-bold mb-4 text-subtle">{service.title}</h1>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <h2 className="text-xl font-semibold mb-4  text-accent">الخصائص :</h2>
                <ul className="list-disc list-inside space-y-2">
                    {service.features.map((f: string, idx: number) => (
                        <li key={idx} className="text-card-foreground">
                            {f}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="w-full lg:w-1/2 rounded-xl overflow-hidden">
                <img src={serviceImage} alt={service.title} />
            </div>
        </section>
    );
};

export default ServiceDetails;
