type AlertType = 'success' | 'error' | 'warning';

interface AlertProps {
    message: string;
    type?: AlertType;
    className?: string;
}

const typeStyles: Record<AlertType, string> = {
    success: 'bg-green-100 border-green-400 text-green-800',
    error: 'bg-red-100 border-red-400 text-red-800',
    warning: 'bg-yellow-100 border-yellow-400 text-yellow-800',
};

const typeIcons: Record<AlertType, React.ReactNode> = {
    success: (
        <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
    ),
    error: (
        <svg className="w-5 h-5 mr-2 text-red-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
    ),
    warning: (
        <svg className="w-5 h-5 mr-2 text-yellow-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M12 5a7 7 0 100 14 7 7 0 000-14z" />
        </svg>
    ),
};

const Alert: React.FC<AlertProps> = ({ message, type = 'success', className = '' }) => {
    return (
        <div className="container mt-20">

            <div
                className={`flex items-center  border-l-4 p-4 rounded-md mb-4 ${typeStyles[type]} ${className}`}
                role="alert"
            >
                {typeIcons[type]}
                <span className="font-medium ms-2">{message}</span>
            </div>
        </div>
    );
};

export default Alert;