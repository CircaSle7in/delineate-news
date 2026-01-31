import { Helmet } from 'react-helmet-async';
import Layout from '@/components/Layout';
import { Scale, Lightbulb, AlertCircle } from 'lucide-react';

const About = () => {
  return (
    <Layout>
      <Helmet>
        <title>About & Methodology - Delineate</title>
        <meta name="description" content="How Delineate approaches multi-perspective news analysis. Our methodology, editorial standards, and mission." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <div className="max-w-3xl mx-auto px-4 py-16">
          {/* Header */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <Scale className="h-8 w-8 text-primary" />
              <h1 className="text-4xl md:text-5xl font-playfair font-bold">
                About Delineate
              </h1>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We help you understand <em>why</em> people think differently, not just <em>that</em> they do. Through careful analysis of claims—verified, speculated, or disputed—we explore how reasonable people reach different conclusions from the same facts.
            </p>
          </div>

          {/* Mission */}
          <section className="mb-16">
            <h2 className="text-3xl font-playfair font-bold mb-6">Why Delineate Exists</h2>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Partisan media profits from division. We don't.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-4">
              Modern news media optimizes for engagement—clicks, views, emotional reactions. This creates an environment where nuance is flattened, facts blur with opinion, and understanding across ideological divides becomes nearly impossible. The system rewards outrage, not understanding.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Delineate exists to break that cycle. We're a free public resource designed to help people understand the reasoning behind different perspectives. Our goal is not to convince you that everyone is right, or that disagreement doesn't matter. It's to make it possible for you to see the world through someone else's eyes—to understand what a reasonable, caring person might see when they look at the same facts you do and reach a different conclusion.
            </p>

            <div className="bg-muted/20 border border-border/40 rounded-lg p-6">
              <p className="text-muted-foreground italic leading-relaxed">
                "Someone thinks this way—why do they think this way? Don't just label them as 'the other' and crazy. Seek understanding. You may not even have to tolerate it. It may be truly wrong. But real dialogue can only start once beliefs and reasons are examined and understood."
              </p>
            </div>
          </section>

          {/* How It Works */}
          <section id="methodology" className="mb-16">
            <h2 className="text-3xl font-playfair font-bold mb-6">How It Works</h2>

            <p className="text-muted-foreground leading-relaxed mb-8">
              The core of everything we do rests on one question: <strong>Why would a reasonable, caring person believe this?</strong>
            </p>

            {/* The Three Categories */}
            <div className="mb-10">
              <h3 className="text-xl font-playfair font-bold mb-6">The Three Categories</h3>

              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-6 py-2">
                  <h4 className="font-semibold text-foreground mb-2">VERIFIED</h4>
                  <p className="text-muted-foreground">
                    Multiple independent sources confirm the claim. This represents factual common ground—the foundation on which different perspectives are built.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-6 py-2">
                  <h4 className="font-semibold text-foreground mb-2">SPECULATED</h4>
                  <p className="text-muted-foreground">
                    A claim comes from a single source or remains unconfirmed by multiple independent outlets. This is where legitimate interpretation begins—people may weigh uncertain information differently based on their values and prior experience.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-6 py-2">
                  <h4 className="font-semibold text-foreground mb-2">DISPUTED</h4>
                  <p className="text-muted-foreground">
                    Multiple credible sources directly contradict the claim. We show both versions and explain the disagreement, but we don't pretend false balance serves understanding.
                  </p>
                </div>
              </div>
            </div>

            {/* The Steelmanning Standard */}
            <div className="bg-muted/20 border border-border/40 rounded-lg p-6">
              <div className="flex gap-4">
                <Lightbulb className="h-6 w-6 text-primary shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">The Steelmanning Standard</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    When we present a perspective, we ask ourselves: would someone who actually holds this view say "yes, that's fair"? We show the strongest version of each argument—the nuanced reasoning, not the caricature. We identify what each perspective emphasizes, what it minimizes, and the language it uses. This isn't false balance; it's intellectual honesty.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* What We're Not */}
          <section className="mb-16">
            <h2 className="text-3xl font-playfair font-bold mb-6">What We're Not</h2>

            <div className="space-y-4">
              <div className="flex gap-4">
                <AlertCircle className="h-5 w-5 text-primary shrink-0 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Not a News Organization</h3>
                  <p className="text-muted-foreground">
                    We don't report new events or break news. We take stories that are already in public conversation and analyze the different ways reasonable people are interpreting them.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <AlertCircle className="h-5 w-5 text-primary shrink-0 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Not Fact-Checkers</h3>
                  <p className="text-muted-foreground">
                    We show you what's verifiable, speculated, and disputed—but we don't render verdicts. We're not here to tell you what to think. We're here to help you understand the reasoning behind different views.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <AlertCircle className="h-5 w-5 text-primary shrink-0 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Not Neutral</h3>
                  <p className="text-muted-foreground">
                    We have a method, not an absence of perspective. We believe in understanding over agreement, in steelmanning over strawmanning, in transparency over false balance. That's not neutrality—it's our perspective made explicit.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Values */}
          <section className="mb-16">
            <h2 className="text-3xl font-playfair font-bold mb-6">Our Values</h2>

            <div className="bg-card border border-border/40 rounded-lg p-8">
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Understanding Over Agreement</h3>
                  <p className="text-muted-foreground text-sm">
                    Our goal isn't for everyone to agree with each other. It's for people to understand each other well enough to have real conversations about their disagreements.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">Steelman, Never Strawman</h3>
                  <p className="text-muted-foreground text-sm">
                    We present the strongest version of perspectives we analyze, not caricatures designed to be easy to dismiss.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">Free and Open</h3>
                  <p className="text-muted-foreground text-sm">
                    This is a public resource, not a product. No ads, no paywalls, no engagement metrics driving our decisions.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">Direct and Clear</h3>
                  <p className="text-muted-foreground text-sm">
                    We say what we mean without jargon or manipulation. If something is verified, we say so. If it's speculated, we say so. If it's disputed, we show both sides.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">Transparent Methodology</h3>
                  <p className="text-muted-foreground text-sm">
                    Every analysis includes a full audit trail—all sources used, their bias ratings, all claims extracted, and verification status. You can see exactly how we reached our conclusions.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">Humility</h3>
                  <p className="text-muted-foreground text-sm">
                    No analysis is perfectly objective. We acknowledge our blind spots and limitations. We correct errors promptly and transparently.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Contact/Feedback */}
          <section className="text-center bg-muted/20 border border-border/40 rounded-lg p-8">
            <h2 className="text-2xl font-playfair font-bold mb-4">
              Have feedback? See something we got wrong?
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              We're constantly working to improve. If you spot an error, have a topic suggestion, or just want to share your thoughts, we'd like to hear from you.
            </p>
            <a
              href="mailto:hello@delineate.news"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Send Us a Message
            </a>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default About;
