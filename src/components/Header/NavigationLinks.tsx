import { useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

const NavigationLinks = ({ navigation, onClick }: { navigation: { name: string; href: string; }[], onClick?: () => void }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const handleNavClick = (e, href) => {
        if (href.startsWith("/#")) {
            e.preventDefault();
            const sectionId = href.replace("/#", "");
            if (location.pathname !== "/") {
                navigate("/", { state: { scrollTo: sectionId } });
                if (onClick) {
                    setTimeout(() => onClick(), 400);
                }
            } else {
                const section = document.getElementById(sectionId);
                if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                    const onScrollEnd = () => {
                        if (onClick) onClick();
                        window.removeEventListener("scrollend", onScrollEnd);
                    };
                    window.addEventListener("scrollend", onScrollEnd);
                }
            }
        } else {
            if (onClick) onClick();
        }
    };

    useEffect(() => {
        if (location.state?.scrollTo) {
            const sectionId = location.state.scrollTo;
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: "smooth" });

            }
        }
    }, [location.state]);


    return (
        <>
            {navigation.map((item) => (
                <div key={item.name} className="relative group">
                    <NavLink
                        to={item.href}
                        onClick={(e) => handleNavClick(e, item.href)}
                        className={({ isActive }) =>
                            `flex items-center gap-x-1 text-sm font-medium transition-smooth ${isActive && !item.href.includes("#")
                                ? "text-white max-lg:text-accent  max-lg:font-bold border-b-2 border-white"
                                : "text-primary-foreground max-lg:text-accent/80 max-lg:hover:text-accent"
                            }`
                        }
                    >
                        <span>{item.name}</span>
                    </NavLink>
                </div>
            ))}
        </>
    );
};

export default NavigationLinks;
