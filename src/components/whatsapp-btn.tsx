import { Button, Card } from "antd";
import { useTranslations } from "next-intl";
import { WhatsAppOutlined } from "@ant-design/icons";

const WhatsAppButton = () => {
    const phoneNumber = '8107091860325';
    const message = 'Olá Eike, vi o seu portfólio e gostaria de falar com você!';
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    const t = useTranslations('home');
    return (
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <Button type="primary">
                {t('send-whatsapp')} <WhatsAppOutlined />
            </Button>
        </a>
    );
};

export default WhatsAppButton;