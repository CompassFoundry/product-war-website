import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import {
  ArrowLeft,
  Brain,
  Sparkles,
  Zap,
  Globe,
  TrendingUp,
  Users,
  Shield,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import logo from '@/assets/logo.png'

const Vision = () => {
  return (
    <div className='min-h-screen bg-background'>
      {/* Navigation */}
      <nav className='bg-background/80 backdrop-blur-md border-b border-border sticky top-0 z-10'>
        <div className='container mx-auto px-6 py-4'>
          <div className='flex items-center justify-between'>
            <Link to='/' className='flex items-center space-x-3'>
              <img src={logo} alt='Product War' className='h-10 w-10' />
              <span className='text-xl font-bold text-foreground'>
                Product War
              </span>
            </Link>
            <Link to='/'>
              <Button variant='outline' size='sm'>
                <ArrowLeft className='mr-2 h-4 w-4' />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className='py-20 bg-[var(--gradient-hero)]'>
        <div className='container mx-auto px-6 text-center'>
          <div className='max-w-4xl mx-auto'>
            <div className='inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-8 animate-fade-in'>
              <Sparkles className='h-4 w-4 text-primary' />
              <span className='text-sm text-primary font-medium'>
                The Future of Market Intelligence
              </span>
            </div>

            <h1 className='text-5xl lg:text-7xl font-bold text-hero-text mb-6 leading-tight animate-fade-in-up'>
              Explore the
              <span className='block text-primary'>Vision</span>
            </h1>

            <p
              className='text-xl lg:text-2xl text-hero-subtitle mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up'
              style={{ animationDelay: '0.2s' }}
            >
              Discover how Product War can revolutionize the way your team
              understands, analyzes, and acts on market intelligence.
            </p>
          </div>
        </div>
      </section>

      {/* The Future of Intelligence */}
      <section className='py-20 bg-secondary'>
        <div className='container mx-auto px-6'>
          <div className='max-w-6xl mx-auto'>
            <h2 className='text-4xl lg:text-5xl font-bold text-foreground text-center mb-16 animate-fade-in'>
              The Future of Intelligence
            </h2>

            <div className='grid lg:grid-cols-2 gap-12 items-center'>
              <div className='animate-slide-in-left'>
                <h3 className='text-3xl font-semibold text-foreground mb-6'>
                  Beyond Traditional Research
                </h3>
                <p className='text-lg text-hero-subtitle mb-6 leading-relaxed'>
                  Imagine a world where market intelligence flows seamlessly
                  through your organization. Where competitive insights are not
                  buried in documents, but living, breathing data that evolves
                  with your market landscape.
                </p>
                <p className='text-lg text-hero-subtitle leading-relaxed'>
                  Product War represents a fundamental shift from reactive
                  research to proactive intelligence. It's not just about
                  collecting data—it's about creating organizational wisdom.
                </p>
              </div>

              <div className='grid grid-cols-2 gap-6 animate-slide-in-right'>
                <Card className='p-6 bg-[var(--gradient-card)] border-border shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-glow)] transition-all duration-300'>
                  <Brain className='h-10 w-10 text-primary mb-4' />
                  <h4 className='font-semibold text-foreground mb-2'>
                    AI-Native
                  </h4>
                  <p className='text-sm text-hero-muted'>
                    Built from the ground up with artificial intelligence at its
                    core
                  </p>
                </Card>

                <Card className='p-6 bg-[var(--gradient-card)] border-border shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-glow)] transition-all duration-300'>
                  <Users className='h-10 w-10 text-primary mb-4' />
                  <h4 className='font-semibold text-foreground mb-2'>
                    Team-Centric
                  </h4>
                  <p className='text-sm text-hero-muted'>
                    Designed for collective intelligence and shared
                    understanding
                  </p>
                </Card>

                <Card className='p-6 bg-[var(--gradient-card)] border-border shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-glow)] transition-all duration-300'>
                  <Globe className='h-10 w-10 text-primary mb-4' />
                  <h4 className='font-semibold text-foreground mb-2'>
                    Global Reach
                  </h4>
                  <p className='text-sm text-hero-muted'>
                    Monitors markets and competitors across all regions and
                    languages
                  </p>
                </Card>

                <Card className='p-6 bg-[var(--gradient-card)] border-border shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-glow)] transition-all duration-300'>
                  <TrendingUp className='h-10 w-10 text-primary mb-4' />
                  <h4 className='font-semibold text-foreground mb-2'>
                    Predictive
                  </h4>
                  <p className='text-sm text-hero-muted'>
                    Anticipates market shifts before they happen
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Autonomous Analyst */}
      <section className='py-20 bg-background'>
        <div className='container mx-auto px-6'>
          <div className='max-w-4xl mx-auto text-center'>
            <Shield className='h-16 w-16 text-primary mx-auto mb-8 animate-float' />
            <h2 className='text-4xl lg:text-5xl font-bold text-foreground mb-8 animate-fade-in'>
              Your Autonomous Market Analyst
            </h2>
            <p
              className='text-xl text-hero-subtitle leading-relaxed mb-12 animate-fade-in-up'
              style={{ animationDelay: '0.2s' }}
            >
              Product War doesn't just store information—it actively works for
              your team, 24/7, continuously learning and adapting to your market
              focus.
            </p>

            <div className='grid md:grid-cols-3 gap-8'>
              <Card className='p-8 bg-[var(--gradient-card)] border-border shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-glow)] transition-all duration-300 animate-fade-in-up'>
                <Zap className='h-12 w-12 text-primary mx-auto mb-6' />
                <h3 className='text-xl font-semibold text-foreground mb-4'>
                  Real-Time Monitoring
                </h3>
                <p className='text-hero-muted'>
                  Continuously scans thousands of sources for relevant market
                  developments and competitor activities.
                </p>
              </Card>

              <Card
                className='p-8 bg-[var(--gradient-card)] border-border shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-glow)] transition-all duration-300 animate-fade-in-up'
                style={{ animationDelay: '0.2s' }}
              >
                <Brain className='h-12 w-12 text-primary mx-auto mb-6' />
                <h3 className='text-xl font-semibold text-foreground mb-4'>
                  Intelligent Analysis
                </h3>
                <p className='text-hero-muted'>
                  Automatically identifies patterns, trends, and anomalies that
                  human analysts might miss.
                </p>
              </Card>

              <Card
                className='p-8 bg-[var(--gradient-card)] border-border shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-glow)] transition-all duration-300 animate-fade-in-up'
                style={{ animationDelay: '0.4s' }}
              >
                <Users className='h-12 w-12 text-primary mx-auto mb-6' />
                <h3 className='text-xl font-semibold text-foreground mb-4'>
                  Contextual Insights
                </h3>
                <p className='text-hero-muted'>
                  Delivers relevant intelligence based on your team's current
                  projects and strategic priorities.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Timeline */}
      <section className='py-20 bg-secondary'>
        <div className='container mx-auto px-6'>
          <div className='max-w-4xl mx-auto'>
            <h2 className='text-4xl lg:text-5xl font-bold text-foreground text-center mb-16 animate-fade-in'>
              The Road Ahead
            </h2>

            <div className='space-y-12'>
              <div className='flex items-start gap-8 animate-slide-in-left'>
                <div className='flex-shrink-0'>
                  <div className='w-12 h-12 bg-primary rounded-full flex items-center justify-center text-sm font-bold text-primary-foreground'>
                    Q1
                  </div>
                </div>
                <div>
                  <h3 className='text-2xl font-semibold text-foreground mb-3'>
                    Foundation Phase
                  </h3>
                  <p className='text-lg text-hero-subtitle'>
                    Core platform development with basic collaboration features
                    and AI-powered data ingestion.
                  </p>
                </div>
              </div>

              <div
                className='flex items-start gap-8 animate-slide-in-right'
                style={{ animationDelay: '0.2s' }}
              >
                <div className='flex-shrink-0'>
                  <div className='w-12 h-12 bg-primary rounded-full flex items-center justify-center text-sm font-bold text-primary-foreground'>
                    Q2
                  </div>
                </div>
                <div>
                  <h3 className='text-2xl font-semibold text-foreground mb-3'>
                    Intelligence Phase
                  </h3>
                  <p className='text-lg text-hero-subtitle'>
                    Advanced AI analysis, predictive insights, and automated
                    competitive monitoring.
                  </p>
                </div>
              </div>

              <div
                className='flex items-start gap-8 animate-slide-in-left'
                style={{ animationDelay: '0.4s' }}
              >
                <div className='flex-shrink-0'>
                  <div className='w-12 h-12 bg-primary rounded-full flex items-center justify-center text-sm font-bold text-primary-foreground'>
                    Q3
                  </div>
                </div>
                <div>
                  <h3 className='text-2xl font-semibold text-foreground mb-3'>
                    Autonomy Phase
                  </h3>
                  <p className='text-lg text-hero-subtitle'>
                    Full autonomous operation with proactive alerts, strategic
                    recommendations, and market forecasting.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className='py-20 bg-background'>
        <div className='container mx-auto px-6 text-center'>
          <div className='max-w-3xl mx-auto'>
            <h2 className='text-4xl font-bold text-foreground mb-6 animate-fade-in'>
              Ready to Transform Your Market Intelligence?
            </h2>
            <p
              className='text-xl text-hero-subtitle mb-8 animate-fade-in-up'
              style={{ animationDelay: '0.2s' }}
            >
              Join the future of collaborative market research and stay ahead of
              the competition.
            </p>
            <div
              className='flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up'
              style={{ animationDelay: '0.4s' }}
            >
              <Link to='/learn-more'>
                <Button
                  size='lg'
                  className='bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300'
                >
                  Learn More <ArrowLeft className='ml-2 h-5 w-5 rotate-180' />
                </Button>
              </Link>
              <Link to='/'>
                <Button variant='outline' size='lg'>
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Vision
