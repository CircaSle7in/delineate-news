import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Badge } from '@/components/ui/badge';
import { Calendar, ArrowRight, Scale } from 'lucide-react';

// News analysis data - in production, this would come from the data files
const newsAnalyses = [
  {
    slug: 'ice-minneapolis-raid',
    title: 'ICE Minneapolis Shooting',
    excerpt: 'An ICE agent killed a US citizen during an immigration operation. The government says self-defense. Video evidence complicates that claim. We examine the verified facts, contested claims, and what different perspectives emphasize.',
    date: '2025-01-14',
    readTime: '5 min',
    tags: ['Immigration', 'Law Enforcement', 'Civil Rights'],
    published: true,
    sourcesCount: 51,
    claimsCount: 29,
  },
];

const Analysis = () => {
  const publishedAnalyses = newsAnalyses.filter(item => item.published);

  return (
    <Layout>
      <Helmet>
        <title>Analysis Archive - Delineate</title>
        <meta name="description" content="Multi-perspective news analysis separating facts from framing. No ads, no engagement optimization - just clarity and intellectual honesty." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-16">
          {/* Header */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="flex items-center gap-3 mb-6">
              <Scale className="h-8 w-8 text-primary" />
              <h1 className="text-4xl md:text-5xl font-playfair font-bold">
                Analysis Archive
              </h1>
            </div>
            <p className="text-xl text-muted-foreground leading-relaxed mb-6">
              Multi-perspective analysis of current events. We separate factual claims from interpretation,
              show how different perspectives frame the same stories, and identify what's missing from coverage.
            </p>
            <div className="bg-muted/30 rounded-lg p-4 border border-border/40">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Our approach:</strong> No ads. No engagement metrics. No manufactured certainty.
                Each analysis examines sources across the ideological spectrum, extracts verifiable claims,
                maps competing narratives, and poses genuine questions for readers to consider.
              </p>
            </div>
          </div>

          {/* News Analyses */}
          <div className="max-w-4xl mx-auto space-y-12">
            {publishedAnalyses.length === 0 ? (
              <div className="text-center py-16">
                <h2 className="text-2xl font-semibold mb-4">No analyses yet</h2>
                <p className="text-muted-foreground">
                  Check back soon for in-depth news analysis.
                </p>
              </div>
            ) : (
              publishedAnalyses.map((analysis) => (
                <article
                  key={analysis.slug}
                  className="group border border-border/40 rounded-lg p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-md"
                >
                  <div className="flex flex-col space-y-4">
                    {/* Meta information */}
                    <div className="flex items-center flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Calendar size={14} />
                        <time dateTime={analysis.date}>
                          {new Date(analysis.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </time>
                      </div>
                      <span>·</span>
                      <span>{analysis.readTime}</span>
                      <span>·</span>
                      <span>{analysis.sourcesCount} sources</span>
                      <span>·</span>
                      <span>{analysis.claimsCount} claims analyzed</span>
                    </div>

                    {/* Title and excerpt */}
                    <div className="space-y-3">
                      <h2 className="text-2xl font-playfair font-bold group-hover:text-primary transition-colors">
                        <Link to={`/analysis/${analysis.slug}`} className="block">
                          {analysis.title}
                        </Link>
                      </h2>
                      <p className="text-muted-foreground leading-relaxed">
                        {analysis.excerpt}
                      </p>
                    </div>

                    {/* Tags and read more */}
                    <div className="flex items-center justify-between pt-4">
                      <div className="flex flex-wrap gap-2">
                        {analysis.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <Link
                        to={`/analysis/${analysis.slug}`}
                        className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors group-hover:translate-x-1 transform duration-300"
                      >
                        Read analysis
                        <ArrowRight size={14} className="ml-1" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))
            )}
          </div>

          {/* Methodology note */}
          <div className="max-w-4xl mx-auto mt-16 text-center">
            <div className="border border-border/40 rounded-lg p-8 bg-muted/20">
              <h3 className="text-xl font-playfair font-bold mb-4">
                About This Project
              </h3>
              <p className="text-muted-foreground mb-4">
                Modern news media optimizes for engagement—clicks, views, emotional reactions.
                This creates an environment where nuance is flattened and facts blur with opinion.
              </p>
              <p className="text-muted-foreground">
                Delineate offers an alternative: curated analysis that separates factual claims from interpretation,
                shows how different perspectives frame the same events, and leaves readers with genuine questions rather than manufactured certainty.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Analysis;
