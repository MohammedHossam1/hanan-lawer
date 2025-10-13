import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header/Header';
import { useGetHomePage } from './hooks/fetch-hooks';
import { useTranslation } from 'react-i18next';



const Layout = () => {
    const { i18n } = useTranslation();
    const lang = i18n.language
    const { data } = useGetHomePage(lang)
    return (
        <div className="min-h-screen flex flex-col">
            <Header data={data?.data?.settings}  />
            <main className="flex-1">
                <Outlet />
            </main>
            <Footer data={data?.data?.settings} />
        </div>
    );
};

export default Layout;
