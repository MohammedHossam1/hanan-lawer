import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslation } from "react-i18next";
const ServiceDetails = ({ openDialog = true, setOpenDialog, service }: { openDialog: boolean; setOpenDialog: (open: boolean) => void; service: any }) => {
    const { t } = useTranslation();
    if (!service) return <p className="text-center mt-10">Service not found</p>;
    return (
        <section className="relative container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 place-items-center h-full gap-5 max-lg:pb-5 min-h-[calc(100dvh-64px)]">

            {/* Decorative shapes */}
            {/* <div className="absolute top-10 left-10 w-32 h-32 bg-accent/20 rounded-full mix-blend-multiply animate-pulse"></div>
            <div className="absolute - bottom-40 right-40 w-32 h-32 border-2 border-accent/20 rounded-full mix-blend-multiply animate-pulse"></div> */}

            {/* Text content */}


            {/* Image */}
            {/* <div className="relative rounded-xl overflow-hidden z-10">
                <img src={serviceImage} alt={service.title} className="w-full" />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-accent/20 to-color-main/20 mix-blend-overlay pointer-events-none"></div>
            </div> */}
            <Dialog
                open={openDialog}

                modal
                onOpenChange={(open) => setOpenDialog(open)}
            >
                <DialogContent className="overflow-hidden" >
                    <DialogHeader >
                        <DialogTitle>{service.title}</DialogTitle>
                    </DialogHeader>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key="form"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="relative p-8 rounded-2xl z-10">
                                <h1 className="text-xl lg:text-3xl font-bold mb-4 text-subtle">{service.title}</h1>
                                <p className="text-muted-foreground mb-6">{service.description}</p>
                                <h2 className="text-xl font-semibold mb-4 text-color-main">{t("services.features")} :</h2>
                                <ul className="list-disc list-inside space-y-2 ">
                                    {service.features.map((f: string, idx: number) => (
                                        <li key={idx} className="text-card-foreground">
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </DialogContent>
            </Dialog>
        </section >
    );
};

export default ServiceDetails;

