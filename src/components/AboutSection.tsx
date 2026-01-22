const AboutSection = () => {
  const highlights = [{
    title: "מנכ״ל InvestPoint",
    description: "ניהול חברת השקעות מובילה"
  }, {
    title: "עתיד בריא",
    description: "מנהל פיננסים בסוכנות הביטוח"
  }, {
    title: "שותפויות",
    description: "עבודה עם כל בתי ההשקעות וחברות הביטוח"
  }];
  return <section id="about" className="py-24 bg-card relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            אודות
          </h2>
          <div className="w-24 h-1 bg-gradient-gold mx-auto rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto">
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed text-center mb-12">
            אני מנכ״ל חברת <span className="text-primary font-semibold">InvestPoint</span> ומנהל פיננסים בסוכנות הביטוח 
            <span className="text-primary font-semibold"> עתיד בריא</span>. 
            עובד עם כל בתי ההשקעות וחברות הביטוח המובילות בישראל, 
            ומתמחה בניהול סיכונים, ניתוח תיקי השקעות וביטוחי פרט.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((item, index) => <div key={index} className="bg-secondary/50 border border-border rounded-2xl p-6 text-center hover:border-primary transition-colors duration-300" style={{
            animationDelay: `${index * 150}ms`
          }}>
                <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;