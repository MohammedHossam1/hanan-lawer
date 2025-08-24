import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { ChevronDown } from "lucide-react";

const NavigationLinks = ({ navigation, onClick }: { navigation: { name: string; href: string; hasDropdown: boolean }[], onClick?: () => void }) => {
    const location = useLocation();
    const navigate = useNavigate();

    const handleNavClick = (e, href) => {
        if (href.startsWith("/#")) {
            e.preventDefault();
            const sectionId = href.replace("/#", "");
            if (location.pathname !== "/") {
                navigate("/", { state: { scrollTo: sectionId } });
            } else {
                const section = document.getElementById(sectionId);
                if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                }
            }
            if (onClick) onClick();
        }
    };

    return (
        <>
            {navigation.map((item) => (
                <div key={item.name} className="relative group">
                    <NavLink
                        to={item.href}
                        onClick={(e) => handleNavClick(e, item.href)}
                        className={({ isActive }) =>
                            `flex items-center gap-x-1 font-medium transition-smooth ${isActive && !item.href.includes("#")
                                ? "text-accent border-b-2 border-accent"
                                : "text-primary-foreground hover:text-accent"
                            }`
                        }
                    >
                        <span>{item.name}</span>
                        {item.hasDropdown && <ChevronDown size={16} />}
                    </NavLink>
                </div>
            ))}
        </>
    );
};

export default NavigationLinks;
