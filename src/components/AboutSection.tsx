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
 return (
    <section id="about" className="py-24 bg-card relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            אודות
          </h2>
          <div className="w-24 h-1 bg-gradient-gold mx-auto rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto text-center mb-12">
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-6">
            אני אור לוי מנכ״ל חברת <span className="text-primary font-semibold">InvestPoint</span> ומנהל הפיננסים בסוכנות הביטוח <span className="text-primary font-semibold">עתיד בריא</span>.
          </p>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-6">
            בשנים האחרונות אני ליוויתי ומלווה אישית מאות יחידים ומשפחות מהרגע הראשון עד התוצאות בפועל, וגם הרבה לאחר מכן.
          </p>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-6">
            הגישה שלי פשוטה - להיות שותף לדרך, מישהו שנמצא שם יחד איתך.
          </p>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
            כי בסוף, כסף זה לא רק מספרים - זה שקט נפשי, <span className="font-bold">וזה בדיוק המקום שבו אתה ראוי להיות</span>.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-secondary/50 border border-border rounded-2xl p-6 text-center hover:border-primary transition-colors duration-300"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );