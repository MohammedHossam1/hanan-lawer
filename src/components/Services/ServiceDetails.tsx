import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import serviceImage from "../../assets/service.jpg";

const ServiceDetails = () => {
    const { slug } = useParams();
    const { t } = useTranslation();

    const services = t("services.items", { returnObjects: true }) as any[];
    const service = services.find((s) => s.slug === slug);

    if (!service) return <p className="text-center mt-10">Service not found</p>;

    return (
        <section className="relative container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 place-items-center h-full gap-5 max-lg:pb-5 min-h-[calc(100dvh-64px)]">

            {/* Decorative shapes */}
            <div className="absolute top-10 left-10 w-32 h-32 bg-accent/20 rounded-full mix-blend-multiply animate-pulse"></div>
            <div className="absolute - bottom-40 right-40 w-32 h-32 border-2 border-accent/20 rounded-full mix-blend-multiply animate-pulse"></div>

            {/* Text content */}
            <div className="relative p-8 rounded-2xl z-10">
                <h1 className="text-xl lg:text-3xl font-bold mb-4 text-subtle">{service.title}</h1>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <h2 className="text-xl font-semibold mb-4 text-color-main">الخصائص :</h2>
                <ul className="list-disc list-inside space-y-2">
                    {service.features.map((f: string, idx: number) => (
                        <li key={idx} className="text-card-foreground">
                            {f}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Image */}
            <div className="relative rounded-xl overflow-hidden z-10">
                <img src={serviceImage} alt={service.title} className="w-full"/>
                {/* Shape overlay on image */}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-accent/20 to-color-main/20 mix-blend-overlay pointer-events-none"></div>
            </div>
        </section>
    );
};

export default ServiceDetails;
