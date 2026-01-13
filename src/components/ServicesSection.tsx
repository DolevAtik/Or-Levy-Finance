import { Shield, TrendingUp, PieChart, Users, Search, Receipt, Home, FileCheck } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Shield,
      title: "ניהול סיכונים",
      description: "זיהוי, הערכה וניהול סיכונים פיננסיים וביטוחיים להגנה מקסימלית על ההון שלך"
    },
    {
      icon: PieChart,
      title: "ניתוח תיקי השקעות",
      description: "ניתוח מעמיק של תיקי השקעות קיימים ובניית אסטרטגיה מותאמת אישית"
    },
    {
      icon: TrendingUp,
      title: "ניהול השקעות הון",
      description: "ניהול מקצועי של תיק ההשקעות שלך למיקסום התשואות לאורך זמן"
    },
    {
      icon: Users,
      title: "ליווי פיננסי מלא",
      description: "ליווי אישי ומקיף בכל ההחלטות הפיננסיות שלך - מביטוח ועד השקעות"
    },
    {
      icon: Search,
      title: "איתור כספים והוזלת דמי ניהול",
      description: "איתור כספים אבודים והוזלת דמי ניהול בקופות פנסיוניות וחסכונות אישיים"
    },
    {
      icon: Receipt,
      title: "החזרי מס",
      description: "טיפול מקצועי בהחזרי מס ומיצוי מלוא הזכויות המגיעות לך"
    },
    {
      icon: Home,
      title: "ייעוץ ומחזור משכנתא",
      description: "ייעוץ מקצועי למחזור משכנתא וחיסכון משמעותי בהחזרים החודשיים"
    },
    {
      icon: FileCheck,
      title: "טיפול בתביעות",
      description: "טיפול מקצועי בתביעות ביטוח ותביעות ביטוח לאומי"
    }
  ];

  return (
    <section id="services" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            השירותים שלי
          </h2>
          <div className="w-24 h-1 bg-gradient-gold mx-auto rounded-full" />
          <p className="text-muted-foreground mt-6 text-lg max-w-2xl mx-auto">
            מגוון שירותים פיננסיים מקצועיים לניהול ההון והביטוח שלך
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card border border-border rounded-2xl p-8 hover:border-primary hover:shadow-gold transition-all duration-500"
            >
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300 shrink-0">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Insurance types */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold text-foreground mb-6">ביטוחי פרט</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {["ביטוח חיים", "ביטוח בריאות", "ביטוח סיעודי", "ביטוח אובדן כושר עבודה", "ביטוח משכנתא"].map((item) => (
              <span
                key={item}
                className="bg-secondary border border-border px-5 py-2.5 rounded-full text-muted-foreground hover:border-primary hover:text-primary transition-colors duration-300"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
