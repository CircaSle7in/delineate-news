import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { useMeta } from '@/hooks/useMeta';
import { Badge } from '@/components/ui/badge';
import { Calendar, ArrowLeft, ExternalLink, ChevronDown, ChevronUp, Info, AlertCircle } from 'lucide-react';

interface Metadata {
  slug: string;
  title: string;
  subtitle: string;
  dateRange: { start: string; end: string };
  status: string;
  createdAt: string;
  updatedAt: string;
  keywords: string[];
}

interface Perspective {
  id: string;
  label: string;
  coreFraming: string;
  keyEmphases: string[];
  minimizedAspects: string[];
  emotionalTone: string;
  loadedLanguage: string[];
  impliedNarrative: string;
  representativeQuotes: Array<{ quote: string; outlet: string; sourceId: string }>;
  representativeOutlets: string[];
}

interface Gap {
  id: string;
  category: string;
  description: string;
  whyItMatters: string;
  whoWouldCare: string;
  possibleReasons: string;
}

interface Question {
  id: string;
  question: string;
  derivedFrom: string[];
  questionType: string;
}

interface Source {
  id: string;
  url: string;
  title: string;
  outlet: string;
  outletBias: string;
  biasSource: string;
  author: string | null;
  publishedDate: string;
  accessedDate: string;
  contentType: string;
  paywall: boolean;
  fullTextAvailable: boolean;
  summary: string;
  manuallyProvided: boolean;
}

const NewsArticle = () => {
  const { slug } = useParams<{ slug: string }>();
  const [metadata, setMetadata] = useState<Metadata | null>(null);
  const [perspectives, setPerspectives] = useState<Perspective[]>([]);
  const [gaps, setGaps] = useState<Gap[]>([]);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [sources, setSources] = useState<Source[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) {
      setError('No topic specified');
      setLoading(false);
      return;
    }

    const loadData = async () => {
      try {
        const [metaRes, perspectivesRes, gapsRes, questionsRes, sourcesRes] = await Promise.all([
          fetch(`/topics/${slug}/metadata.json`),
          fetch(`/topics/${slug}/perspectives.json`),
          fetch(`/topics/${slug}/gaps.json`),
          fetch(`/topics/${slug}/questions.json`),
          fetch(`/topics/${slug}/sources.json`),
        ]);

        if (!metaRes.ok) throw new Error('Topic not found');

        const metaData = await metaRes.json();
        const perspectivesData = await perspectivesRes.json();
        const gapsData = await gapsRes.json();
        const questionsData = await questionsRes.json();
        const sourcesData = await sourcesRes.json();

        setMetadata(metaData);
        setPerspectives(perspectivesData.perspectives || []);
        setGaps(gapsData.gaps || []);
        setQuestions(questionsData.questions || []);
        setSources(sourcesData.sources || []);
        setLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load topic');
        setLoading(false);
      }
    };

    loadData();
  }, [slug]);

  const meta = useMeta({
    title: metadata ? `${metadata.title} - Delineate` : 'Analysis - Delineate',
    desc: metadata?.subtitle || 'Multi-perspective news analysis'
  });

  if (loading) {
    return (
      <>
        {meta}
        <Layout>
          <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
              <p className="text-muted-foreground">Loading analysis...</p>
            </div>
          </div>
        </Layout>
      </>
    );
  }

  if (error || !metadata) {
    return (
      <>
        {meta}
        <Layout>
          <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-2xl font-bold mb-4">Analysis not found</h1>
              <p className="text-muted-foreground mb-4">{error}</p>
              <Link to="/analysis" className="text-primary hover:underline">
                Return to Analysis Archive
              </Link>
            </div>
          </div>
        </Layout>
      </>
    );
  }

  return (
    <>
      {meta}
      <Layout>
        <div className="min-h-screen bg-background">
          <div className="max-w-4xl mx-auto px-4 py-12 md:py-16">
            {/* Back link */}
            <Link
              to="/analysis"
              className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8 md:mb-12 transition-colors"
            >
              <ArrowLeft size={14} className="mr-1" />
              Analysis Archive
            </Link>

            {/* TIER 1: AT A GLANCE - 7 seconds */}
            <section className="mb-12 md:mb-16">
              <header className="mb-8">
                <h1 className="text-4xl md:text-5xl font-playfair font-bold leading-tight mb-4">
                  {metadata.title}
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
                  {metadata.subtitle}
                </p>
                <div className="flex items-center gap-3 text-sm text-muted-foreground flex-wrap">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <time dateTime={metadata.updatedAt}>
                      {new Date(metadata.updatedAt).toLocaleDateString('en-US', {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </time>
                  </div>
                  <span>·</span>
                  <span>{sources.length} sources</span>
                </div>
              </header>

              {/* Quick context banner */}
              <div className="bg-muted/30 border border-border/40 rounded-lg p-5 md:p-6 mb-8">
                <div className="flex items-start gap-3">
                  <Info size={16} className="text-muted-foreground shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground">
                      This analysis shows different perspectives on the same events. We map factual claims, track which ones are disputed, and identify what's missing from coverage.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-sm text-muted-foreground/70 italic">
                Start here. The rest is optional—each section stands on its own.
              </p>
            </section>

            {/* TIER 2: THE PERSPECTIVES - 60 seconds */}
            <section className="mb-12 md:mb-16">
              <SectionHeader title="The Perspectives" />
              <div className="space-y-6">
                {perspectives.map((perspective) => (
                  <PerspectiveCard
                    key={perspective.id}
                    perspective={perspective}
                  />
                ))}
              </div>
            </section>

            {/* Breathing room */}
            <div className="my-12 md:my-16 flex items-center gap-4">
              <div className="flex-1 h-px bg-border/40"></div>
              <span className="text-xs text-muted-foreground/60 italic">Scroll for deeper analysis</span>
              <div className="flex-1 h-px bg-border/40"></div>
            </div>

            {/* TIER 3: DEEP DIVE - 5+ minutes */}

            {/* What's Missing From Coverage */}
            {gaps.length > 0 && (
              <section className="mb-12 md:mb-16">
                <SectionHeader title="What's Missing From Coverage" />
                <div className="space-y-4">
                  {gaps.map((gap) => (
                    <GapCard key={gap.id} gap={gap} />
                  ))}
                </div>
              </section>
            )}

            {/* Questions for Reflection */}
            {questions.length > 0 && (
              <section className="mb-12 md:mb-16 bg-muted/10 rounded-xl p-8 border border-border/20">
                <SectionHeader title="Questions for Reflection" />
                <p className="text-sm text-muted-foreground/70 italic mb-8">
                  Not a quiz. These questions help you think through the different ways to interpret what happened.
                </p>
                <div className="space-y-8">
                  {questions.map((question, index) => (
                    <div key={question.id} className="flex gap-5">
                      <span className="text-3xl font-bold text-primary/30 shrink-0 leading-none">
                        {index + 1}
                      </span>
                      <p className="text-muted-foreground leading-relaxed pt-1 text-base">
                        {question.question}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Expandable: How We Analyzed This */}
            <AnalysisMethodology slug={slug} sourcesCount={sources.length} />

            {/* Expandable: All Sources */}
            {sources.length > 0 && (
              <section className="mb-12 md:mb-16">
                <details className="border border-border/40 rounded-lg overflow-hidden">
                  <summary className="px-6 py-4 cursor-pointer bg-muted/20 hover:bg-muted/30 transition-colors flex items-center justify-between font-medium">
                    <span>All {sources.length} sources</span>
                    <ChevronDown size={18} className="summarychevron" />
                  </summary>
                  <div className="px-6 py-6 space-y-4 max-h-96 overflow-y-auto bg-card">
                    {sources.map((source) => (
                      <div key={source.id} className="flex items-start gap-3 pb-4 border-b border-border/20 last:pb-0 last:border-0">
                        <Badge variant="outline" className="shrink-0 text-xs">
                          {source.outletBias}
                        </Badge>
                        <div className="flex-1 min-w-0">
                          <a
                            href={source.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-primary hover:underline inline-flex items-center gap-1 break-words"
                          >
                            {source.title}
                            <ExternalLink size={12} className="shrink-0" />
                          </a>
                          <p className="text-xs text-muted-foreground mt-1">
                            {source.outlet} · {new Date(source.publishedDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </details>
              </section>
            )}

            {/* Footer */}
            <footer className="mt-16 md:mt-20 pt-10 border-t border-border/40 text-center text-sm text-muted-foreground">
              <p className="mb-2">
                This analysis was curated by <strong className="text-foreground">Delineate</strong>.
              </p>
              <p className="mb-4">
                We analyze coverage across the ideological spectrum. This analysis, like all analysis, reflects choices about what to emphasize and what to minimize.
              </p>
              <p>
                See something wrong?{' '}
                <Link to="/contact" className="text-primary hover:underline">
                  Contact us →
                </Link>
              </p>
            </footer>
          </div>
        </div>
      </Layout>
    </>
  );
};

/* SECTION HEADER */
const SectionHeader = ({ title }: { title: string }) => (
  <div className="mb-6 md:mb-8">
    <h2 className="text-2xl md:text-3xl font-playfair font-bold text-foreground">
      {title}
    </h2>
    <div className="h-1 w-16 bg-primary/30 mt-3 rounded-full"></div>
  </div>
);

/* GAP CARD - Shows what's missing from coverage */
const GapCard = ({ gap }: { gap: Gap }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="border border-border/40 rounded-lg bg-card overflow-hidden">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full text-left p-5 md:p-6 hover:bg-muted/5 transition-colors flex items-start justify-between gap-4"
      >
        <div className="flex-1">
          <h4 className="font-semibold text-foreground text-base">{gap.description}</h4>
          <p className="text-xs text-muted-foreground/70 mt-1 capitalize">{gap.category.replace('_', ' ')}</p>
        </div>
        {isExpanded ? (
          <ChevronUp size={18} className="shrink-0 text-muted-foreground mt-1" />
        ) : (
          <ChevronDown size={18} className="shrink-0 text-muted-foreground mt-1" />
        )}
      </button>

      {isExpanded && (
        <div className="px-5 md:px-6 pb-5 md:pb-6 pt-2 border-t border-border/40 bg-muted/5 space-y-4">
          <div>
            <h5 className="text-sm font-semibold text-foreground mb-2">Why this matters</h5>
            <p className="text-sm text-muted-foreground">{gap.whyItMatters}</p>
          </div>
          <div>
            <h5 className="text-sm font-semibold text-foreground mb-2">Who would care</h5>
            <p className="text-sm text-muted-foreground">{gap.whoWouldCare}</p>
          </div>
          <div>
            <h5 className="text-sm font-semibold text-foreground mb-2">Possible reasons it's missing</h5>
            <p className="text-sm text-muted-foreground">{gap.possibleReasons}</p>
          </div>
        </div>
      )}
    </div>
  );
};

/* PERSPECTIVE CARD - Equal visual treatment, no color coding */
const PerspectiveCard = ({ perspective }: { perspective: Perspective }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const previewEmphases = perspective.keyEmphases.slice(0, 2);
  const remainingEmphases = perspective.keyEmphases.length - 2;
  const previewMinimized = perspective.minimizedAspects.slice(0, 2);
  const remainingMinimized = perspective.minimizedAspects.length - 2;

  return (
    <div className="border border-border/40 rounded-lg overflow-hidden bg-card">
      <div className="p-6 md:p-7">
        <h3 className="text-lg font-semibold text-foreground mb-2">{perspective.label}</h3>
        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
          {perspective.coreFraming}
        </p>

        {perspective.representativeQuotes.length > 0 && (
          <div className="bg-muted/30 rounded-lg p-4 my-5 border-l-4 border-border">
            <blockquote className="text-base italic text-foreground leading-relaxed">
              "{perspective.representativeQuotes[0].quote}"
            </blockquote>
            <cite className="block text-sm text-muted-foreground mt-2 not-italic">
              — {perspective.representativeQuotes[0].outlet}
            </cite>
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-6 mt-5 pt-5 border-t border-border/40">
          <div>
            <h4 className="text-xs font-semibold text-foreground mb-3 uppercase tracking-wide">Emphasizes</h4>
            <ul className="space-y-2">
              {previewEmphases.map((point, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="text-green-600 dark:text-green-400 shrink-0 font-bold">+</span>
                  <span>{point}</span>
                </li>
              ))}
              {remainingEmphases > 0 && !isExpanded && (
                <li className="text-sm text-muted-foreground/60 italic pt-1">
                  +{remainingEmphases} more
                </li>
              )}
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold text-foreground mb-3 uppercase tracking-wide">Minimizes</h4>
            <ul className="space-y-2">
              {previewMinimized.map((point, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="text-muted-foreground/60 shrink-0 font-bold">−</span>
                  <span>{point}</span>
                </li>
              ))}
              {remainingMinimized > 0 && !isExpanded && (
                <li className="text-sm text-muted-foreground/60 italic pt-1">
                  +{remainingMinimized} more
                </li>
              )}
            </ul>
          </div>
        </div>

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-4 text-sm text-primary hover:underline flex items-center gap-1.5 font-medium"
        >
          {isExpanded ? (
            <>
              <ChevronUp size={16} />
              Show less
            </>
          ) : (
            <>
              <ChevronDown size={16} />
              Show full details
            </>
          )}
        </button>
      </div>

      {isExpanded && (
        <div className="px-6 md:px-7 pb-6 pt-2 border-t border-border/40 bg-muted/5 space-y-6">
          {perspective.keyEmphases.length > previewEmphases.length && (
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-3">All key emphases</h4>
              <ul className="space-y-2">
                {perspective.keyEmphases.map((point, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-green-600 dark:text-green-400 shrink-0 font-bold">+</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {perspective.minimizedAspects.length > previewMinimized.length && (
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-3">What it minimizes</h4>
              <ul className="space-y-2">
                {perspective.minimizedAspects.map((point, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-muted-foreground/60 shrink-0 font-bold">−</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {perspective.loadedLanguage.length > 0 && (
            <div className="pt-3 border-t border-border/40">
              <h4 className="text-sm font-semibold text-foreground mb-3">Language and framing</h4>
              <div className="space-y-2">
                <div className="flex flex-wrap gap-2">
                  {perspective.loadedLanguage.map((term, i) => (
                    <span key={i} className="text-xs bg-muted px-3 py-1.5 rounded-full text-muted-foreground">
                      "{term}"
                    </span>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground/70 italic pt-2">
                  These words reflect the perspective's emotional framing of events.
                </p>
              </div>
            </div>
          )}

          {perspective.emotionalTone && (
            <div className="pt-3 border-t border-border/40">
              <p className="text-xs text-muted-foreground">
                <strong className="text-foreground">Emotional tone:</strong> {perspective.emotionalTone}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

/* ANALYSIS METHODOLOGY - How We Analyzed This (Expandable) */
const AnalysisMethodology = ({ slug, sourcesCount }: { slug: string | undefined; sourcesCount: number }) => {
  return (
    <section className="mb-12 md:mb-16">
      <details className="border border-border/40 rounded-lg overflow-hidden">
        <summary className="px-6 py-4 cursor-pointer bg-muted/20 hover:bg-muted/30 transition-colors flex items-center justify-between font-medium">
          <span>How We Analyzed This</span>
          <ChevronDown size={18} className="summarychevron" />
        </summary>
        <div className="px-6 py-6 bg-card space-y-6">
          <div>
            <h4 className="font-semibold text-foreground mb-2">What We Did</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We identified different perspectives on this topic by analyzing coverage across major outlets
              representing different parts of the ideological spectrum. For each perspective, we mapped:
            </p>
            <ul className="text-sm text-muted-foreground leading-relaxed space-y-1 mt-2 ml-4">
              <li>• What each side emphasizes and minimizes</li>
              <li>• Key claims and how they're framed</li>
              <li>• Language choices that reveal emotional framing</li>
              <li>• What's treated as obvious vs. disputed</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-2">Our Sources</h4>
            <p className="text-sm text-muted-foreground">
              {sourcesCount} sources analyzed across left, center, and right perspectives. We selected outlets
              that genuinely represent how different communities understand these events—not strawman versions of those views.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-2">Our Limitations</h4>
            <p className="text-sm text-muted-foreground">
              Like all analysis, this reflects choices about what to include and what to emphasize. We try to be transparent
              about those choices. We don't claim objectivity—we claim intellectual honesty about our process.
            </p>
          </div>

          <div className="pt-2 border-t border-border/40">
            <Link to="/about" className="text-primary hover:underline text-sm font-medium inline-flex items-center gap-1">
              Full methodology →
            </Link>
          </div>
        </div>
      </details>
    </section>
  );
};

export default NewsArticle;
