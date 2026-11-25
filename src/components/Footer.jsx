import { useLanguage } from '../LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <p className="footer-line">
        {t.footer} - {new Date().getFullYear()}
      </p>
      <p className="footer-tech" dir="ltr">
        {t.footerTech}
      </p>
    </footer>
  );
}
