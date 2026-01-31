import { Helmet } from 'react-helmet-async';
import Layout from '@/components/Layout';
import { Mail, Github, MessageSquare } from 'lucide-react';

const Contact = () => {
  return (
    <Layout>
      <Helmet>
        <title>Contact - Delineate</title>
        <meta name="description" content="Get in touch with Delineate. Report errors, suggest topics, or contribute to multi-perspective news analysis." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <div className="max-w-2xl mx-auto px-4 py-16">
          {/* Header */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Have feedback, found an error, or want to contribute? We'd love to hear from you.
            </p>
          </div>

          {/* Contact Options */}
          <div className="space-y-6 mb-16">
            <a
              href="mailto:hello@delineate.news"
              className="flex items-center gap-4 p-6 border border-border/40 rounded-lg hover:border-primary/50 transition-colors group"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  Email
                </h2>
                <p className="text-muted-foreground">hello@delineate.news</p>
              </div>
            </a>

            <a
              href="https://github.com/sterlingblood/delineate"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 border border-border/40 rounded-lg hover:border-primary/50 transition-colors group"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                <Github className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  GitHub
                </h2>
                <p className="text-muted-foreground">Report issues or contribute</p>
              </div>
            </a>
          </div>

          {/* What to Contact About */}
          <div className="mb-16">
            <h2 className="text-2xl font-playfair font-bold mb-6">
              We especially want to hear about:
            </h2>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-start gap-3">
                <MessageSquare className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>
                  <strong className="text-foreground">Errors or corrections</strong> — If we got something wrong, we want to fix it.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MessageSquare className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>
                  <strong className="text-foreground">Missing perspectives</strong> — Did we fail to steelman a viewpoint fairly?
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MessageSquare className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>
                  <strong className="text-foreground">Topic suggestions</strong> — What news stories need this kind of analysis?
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MessageSquare className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>
                  <strong className="text-foreground">Contributions</strong> — Want to help with research, writing, or development?
                </span>
              </li>
            </ul>
          </div>

          {/* Response Time */}
          <div className="bg-muted/20 border border-border/40 rounded-lg p-6 text-center">
            <p className="text-muted-foreground">
              This is a volunteer project, so response times may vary. But we read everything and appreciate your feedback.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
