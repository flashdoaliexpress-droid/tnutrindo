const socialLinks = [
  {
    label: 'Instagram',
    icon: 'photo_camera',
    href: 'https://instagram.com/',
  },
  {
    label: 'LinkedIn',
    icon: 'work',
    href: 'https://linkedin.com/',
  },
  {
    label: 'WhatsApp',
    icon: 'chat',
    href: 'https://wa.me/5500000000000',
  },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#111C16' }} className="py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
          <div className="flex flex-col items-center sm:items-start gap-1">
            <span className="font-headline italic text-2xl font-bold text-on-primary">
              TNutrindo
            </span>
            <span className="text-xs text-on-primary/50 font-label">
              CRN 3 - 45892 / SP
            </span>
          </div>

          <div className="flex items-center gap-5">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="text-on-primary/50 hover:text-on-primary transition-colors"
              >
                <span className="material-symbols-outlined text-2xl">{link.icon}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10">
          <p className="text-center text-xs text-on-primary/40 font-label">
            © 2026 TNutrindo. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
