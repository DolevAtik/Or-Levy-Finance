const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
          <div className="flex flex-col items-center gap-2 text-center">
            <p className="text-muted-foreground text-sm">האתר נבנה ע"י דולב עתיק</p>
            <a
              href="https://www.linkedin.com/in/dolev-atik"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors duration-300"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.026-3.037-1.85-3.037-1.852 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.049c.476-.901 1.637-1.85 3.369-1.85 3.602 0 4.269 2.371 4.269 5.455v6.286zM5.337 7.433c-1.144 0-2.069-.926-2.069-2.069 0-1.143.925-2.069 2.069-2.069 1.143 0 2.069.926 2.069 2.069 0 1.143-.926 2.069-2.069 2.069zm1.777 13.019H3.56V9h3.554v11.452zM22.225 0H1.771C.792 0 0 .771 0 1.723v20.554C0 23.229.792 24 1.771 24h20.451C23.2 24 24 23.229 24 22.277V1.723C24 .771 23.2 0 22.225 0z"/>
              </svg>
              <span>LinkedIn</span>
            </a>
          </div>

          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} כל הזכויות שמורות
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
