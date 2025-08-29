import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Target, Users, Zap, Brain, Compass, Shield } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-[var(--gradient-hero)]">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img 
            src={heroImage} 
            alt="" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative container mx-auto px-6 py-24 lg:py-32 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-7xl font-bold text-hero-text mb-6 leading-tight">
              Product War: Market Intelligence for Teams
            </h1>
            <p className="text-xl lg:text-2xl text-hero-subtitle mb-8 max-w-3xl mx-auto leading-relaxed">
              A collaborative platform that combines human insight with AI-powered research 
              to keep your team's view of the market always sharp.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[var(--gradient-primary)] text-primary-foreground hover:shadow-[var(--shadow-glow)] transition-all duration-300">
                Learn More <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-8">
              The Problem
            </h2>
            <p className="text-xl text-hero-subtitle leading-relaxed">
              Market research is fragmented. Competitive intelligence often ends up scattered across 
              spreadsheets, slide decks, PDFs, and emails. Teams struggle to stay aligned, data goes 
              stale quickly, and valuable insights get lost in the shuffle.
            </p>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-8">
              The Solution
            </h2>
            <p className="text-xl text-hero-subtitle leading-relaxed mb-12">
              A single hub for market intelligence. Product War brings everything together — 
              competitors, market reports, press releases, and analyst notes — into one shared workspace. 
              Every team member can log, edit, and reference insights in real time.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-8 bg-[var(--gradient-card)] border-border shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-glow)] transition-all duration-300">
                <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">Centralized</h3>
                <p className="text-hero-muted">All market intelligence in one place</p>
              </Card>
              
              <Card className="p-8 bg-[var(--gradient-card)] border-border shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-glow)] transition-all duration-300">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">Collaborative</h3>
                <p className="text-hero-muted">Real-time team sharing and editing</p>
              </Card>
              
              <Card className="p-8 bg-[var(--gradient-card)] border-border shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-glow)] transition-all duration-300">
                <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">Dynamic</h3>
                <p className="text-hero-muted">Always up-to-date with AI enrichment</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground text-center mb-16">
              How It Works
            </h2>
            
            <div className="space-y-12">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-[var(--gradient-primary)] rounded-full flex items-center justify-center text-2xl font-bold text-primary-foreground">
                    1
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-foreground mb-3">Capture</h3>
                  <p className="text-xl text-hero-subtitle">
                    Add competitors, insights, and links to reports or articles.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-[var(--gradient-primary)] rounded-full flex items-center justify-center text-2xl font-bold text-primary-foreground">
                    2
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-foreground mb-3">Collaborate</h3>
                  <p className="text-xl text-hero-subtitle">
                    Share and organize findings across your team in a central hub.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-[var(--gradient-primary)] rounded-full flex items-center justify-center text-2xl font-bold text-primary-foreground">
                    3
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-foreground mb-3">Enrich</h3>
                  <p className="text-xl text-hero-subtitle">
                    Enable Product War AI to continuously scan public sources, flagging new developments 
                    and updating your intelligence base in real time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Product War is Different */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground text-center mb-16">
              Why Product War is Different
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-8 bg-[var(--gradient-card)] border-border shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-glow)] transition-all duration-300">
                <Users className="h-12 w-12 text-primary mx-auto mb-6" />
                <h3 className="text-xl font-semibold text-foreground mb-4">Team-First</h3>
                <p className="text-hero-muted">
                  Unlike static databases, Product War is designed for collaboration, not just individual research.
                </p>
              </Card>
              
              <Card className="p-8 bg-[var(--gradient-card)] border-border shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-glow)] transition-all duration-300">
                <Brain className="h-12 w-12 text-primary mx-auto mb-6" />
                <h3 className="text-xl font-semibold text-foreground mb-4">Dynamic</h3>
                <p className="text-hero-muted">
                  Insights are enriched by Product War AI, ensuring your intelligence is always current.
                </p>
              </Card>
              
              <Card className="p-8 bg-[var(--gradient-card)] border-border shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-glow)] transition-all duration-300">
                <Compass className="h-12 w-12 text-primary mx-auto mb-6" />
                <h3 className="text-xl font-semibold text-foreground mb-4">Contextual</h3>
                <p className="text-hero-muted">
                  Instead of drowning in raw data, Product War helps teams focus on what matters most to their business strategy.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Shield className="h-16 w-16 text-primary mx-auto mb-8" />
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-8">
              Your Autonomous Market Analyst
            </h2>
            <p className="text-xl text-hero-subtitle leading-relaxed">
              Product War is not another database. It's a team intelligence platform — a living system 
              where human expertise and AI work together to keep organizations informed, aligned, 
              and ahead of the competition.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-secondary border-t border-border">
        <div className="container mx-auto px-6 text-center">
          <p className="text-hero-muted">
            Product War is a concept product, created to showcase modern approaches to market intelligence.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;