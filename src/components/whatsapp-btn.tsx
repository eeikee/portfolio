import { WhatsAppOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useTranslations } from "next-intl";

const WhatsAppButton = () => {
    const phoneNumber = '8107091860325';
    const message = 'Olá Eike, vi o seu portfólio e gostaria de falar com você!';
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    const t = useTranslations('home');
    return (
        <Button color="green" variant="solid" icon={<WhatsAppOutlined />} href={whatsappLink}>
            {t('send-whatsapp')}
        </Button>
    );
};

export default WhatsAppButton;