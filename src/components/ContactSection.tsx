import { Phone, Mail, MessageCircle, Instagram, MapPin } from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Phone,
      label: "טלפון",
      value: "054-614-2426",
      href: "tel:0546142426"
    },
    {
      icon: MessageCircle,
      label: "וואטסאפ",
      value: "שלח הודעה",
      href: "https://wa.me/972546142426?text=%D7%94%D7%99%D7%99%20%D7%91%D7%90%D7%AA%D7%99%20%D7%9E%D7%94%D7%90%D7%AA%D7%A8%20%D7%A9%D7%9C%D7%9A%20%D7%95%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%A9%D7%9E%D7%95%D7%A2%20%D7%A4%D7%A8%D7%98%D7%99%D7%9D"
    },
    {
      icon: Instagram,
      label: "אינסטגרם",
      value: "@orlevy.finance",
      href: "https://www.instagram.com/orlevy.finance?igsh=dmFtNjAwaGxqdGR0"
    },
    {
      icon: Mail,
      label: "אימייל",
      value: "or@atidbary.co.il",
      href: "mailto:or@atidbary.co.il"
    }
  ];

  const mobileContactInfo = contactInfo;

  return (
    <section id="contact" className="py-24 bg-card relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            צור קשר
          </h2>
          <div className="w-24 h-1 bg-gradient-gold mx-auto rounded-full" />
          <p className="text-muted-foreground mt-6 text-lg">
            מוזמנים לפנות אליי בכל שאלה או לתיאום פגישת ייעוץ
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-4 gap-4 sm:gap-6 mb-6 md:hidden">
            {mobileContactInfo.map((item, index) => (
              <a
                key={index}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group bg-background border border-border rounded-2xl p-4 flex items-center justify-center hover:border-primary hover:shadow-gold transition-all duration-300 aspect-square"
                aria-label={item.label}
              >
                <item.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </a>
            ))}
          </div>

          <div className="hidden md:grid md:grid-cols-2 gap-6 mb-6">
            {mobileContactInfo.map((item, index) => (
              <a
                key={index}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group bg-background border border-border rounded-3xl p-6 flex items-center gap-5 hover:border-primary hover:shadow-gold transition-all duration-300"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <item.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                  <p className="text-foreground font-medium group-hover:text-primary transition-colors duration-300">
                    {item.value}
                  </p>
                </div>
              </a>
            ))}
          </div>

          <a
            href="https://maps.google.com/?q=%D7%90%D7%9C%D7%99+%D7%94%D7%95%D7%A8%D7%95%D7%91%D7%99%D7%A5+12"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-background border border-border rounded-3xl p-6 mb-8 flex items-center gap-5 hover:border-primary hover:shadow-gold transition-all duration-300 md:mx-auto md:max-w-xl"
          >
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">כתובת המשרד</p>
              <p className="text-foreground font-medium">
                אלי הורוביץ 12, קומה 4 - עתיד בריא
              </p>
            </div>
          </a>

          {/* Main CTA */}
          <div className="mt-12 text-center">
            <a
              href="https://wa.me/972546142426?text=%D7%94%D7%99%D7%99%20%D7%90%D7%95%D7%A8%2C%20%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%A9%D7%9E%D7%95%D7%A2%20%D7%A4%D7%A8%D7%98%D7%99%D7%9D%20%D7%A0%D7%95%D7%A1%D7%A4%D7%99%D7%9D%20%D7%A2%D7%9C%20%D7%94%D7%A9%D7%99%D7%A8%D7%95%D7%AA%D7%99%D7%9D%20%D7%A9%D7%9C%D7%9A"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-gold text-primary-foreground px-10 py-5 rounded-2xl font-bold text-xl shadow-gold hover:scale-105 transition-transform duration-300"
            >
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              בואו נדבר על העתיד הפיננסי שלכם
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
