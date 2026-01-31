import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { loadTopicWithPerspectives, estimateReadTime, TopicData } from '@/lib/utils';

const Home = () => {
  const [topic, setTopic] = useState<TopicData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTopic = async () => {
      const topicData = await loadTopicWithPerspectives('ice-minneapolis-raid');
      setTopic(topicData);
      setLoading(false);
    };

    loadTopic();
  }, []);

  return (
    <Layout fullWidth>
      <Helmet>
        <title>Delineate | Multi-Perspective News Analysis</title>
        <meta name="description" content="Understand why people think differently. Multi-perspective analysis of contested news topics. No ads. No agenda. Free forever." />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="pt-32 pb-24 px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-playfair font-semibold mb-6 leading-tight">
              Understand why people think differently
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-12 font-serif-pro">
              Multi-perspective analysis of contested news topics. No ads. No agenda. Free forever.
            </p>
          </div>
        </section>

        {/* Topics Listing */}
        <section className="py-20 px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-12">
              Analysis
            </h2>

            {loading ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground">Loading...</p>
              </div>
            ) : topic ? (
              <article className="border border-border rounded-sm p-8 bg-card hover:border-primary/50 transition-colors">
                <Link
                  to={`/analysis/${topic.slug}`}
                  className="block group"
                >
                  <h3 className="text-2xl md:text-3xl font-playfair font-semibold mb-3 group-hover:text-primary transition-colors">
                    {topic.title}
                  </h3>
                </Link>

                <p className="text-base text-muted-foreground mb-8 leading-relaxed font-serif-pro">
                  {topic.subtitle}
                </p>

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-sm text-muted-foreground border-t border-border pt-6">
                  <div className="flex flex-col gap-2">
                    <span>Published {new Date(topic.dateRange.start).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                    <span>{estimateReadTime()} read</span>
                    <span>{topic.perspectiveCount} perspective{topic.perspectiveCount !== 1 ? 's' : ''}</span>
                  </div>

                  <Link
                    to={`/analysis/${topic.slug}`}
                    className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all font-medium"
                  >
                    Read analysis
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No topics available yet.</p>
              </div>
            )}
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-24 px-4 bg-muted/20">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-playfair font-semibold mb-6">
              What Delineate does
            </h2>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6 font-serif-pro">
              Delineate separates fact from frame. We present the strongest version of each perspective—not strawmen—showing you what different communities see in contested news stories and why they interpret events the way they do.
            </p>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8 font-serif-pro">
              No ads. No engagement metrics. We're a civic service project that optimizes for understanding, not outrage.
            </p>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
            >
              Learn more about our approach
              <ArrowRight size={16} />
            </Link>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-lg font-semibold text-foreground mb-4">
              Ready to explore multiple perspectives?
            </h2>
            <Link
              to={topic ? `/analysis/${topic.slug}` : '/analysis'}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-sm font-medium hover:bg-primary/90 transition-colors"
            >
              {topic ? 'Start reading' : 'View analysis'}
              <ArrowRight size={18} />
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Home;
