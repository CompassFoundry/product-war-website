import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Target, Users, Zap, Brain, Compass, Shield, Sparkles, Database, Share } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import logo from "@/assets/logo.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-[var(--gradient-hero)]">
      {/* Navigation Header */}
      <nav className="relative z-10 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img src={logo} alt="Product War" className="h-10 w-10" />
              <span className="text-xl font-bold text-foreground">Product War</span>
            </div>
            <Button variant="outline" size="sm" className="animate-glow-pulse">
              Contact Us
            </Button>
          </div>
        </div>
      </nav>

      {/* Enhanced Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src={heroImage} 
            alt="" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Animated floating elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-4 h-4 bg-primary/30 rounded-full animate-float"></div>
          <div className="absolute top-40 right-20 w-6 h-6 bg-primary/20 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-40 left-20 w-3 h-3 bg-primary/40 rounded-full animate-float" style={{animationDelay: '4s'}}></div>
          <div className="absolute bottom-20 right-10 w-5 h-5 bg-primary/25 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="relative container mx-auto px-6 py-24 lg:py-32 text-center">
          <div className="max-w-5xl mx-auto">
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-8">
                <Sparkles className="h-4 w-4 text-primary" />
                <span className="text-sm text-primary font-medium">Powered by AI</span>
              </div>
            </div>
            
            <h1 className="text-5xl lg:text-8xl font-bold text-hero-text mb-6 leading-tight animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              Product War
              <span className="block text-primary text-4xl lg:text-6xl mt-2">
                Market Intelligence for Teams
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-hero-subtitle mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              A collaborative platform that combines human insight with AI-powered research 
              to keep your team's view of the market always sharp.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{animationDelay: '0.6s'}}>
              <Button size="lg" className="bg-primary text-primary-foreground border border-primary/20 hover:bg-primary/90 hover:shadow-[var(--shadow-glow)] transition-all duration-300 transform hover:scale-105">
                Explore the Vision <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-primary/30 text-primary hover:bg-primary/10 transition-all duration-300">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-8 animate-fade-in">
              The Problem
            </h2>
            <p className="text-xl text-hero-subtitle leading-relaxed animate-fade-in-up" style={{animationDelay: '0.2s'}}>
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
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-8 animate-fade-in">
              The Solution
            </h2>
            <p className="text-xl text-hero-subtitle leading-relaxed mb-12 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              A single hub for market intelligence. Product War brings everything together — 
              competitors, market reports, press releases, and analyst notes — into one shared workspace. 
              Every team member can log, edit, and reference insights in real time.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-8 bg-[var(--gradient-card)] border-border shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-glow)] transition-all duration-300 transform hover:scale-105 animate-slide-in-left">
                <Target className="h-12 w-12 text-primary mx-auto mb-4 animate-float" />
                <h3 className="text-xl font-semibold text-foreground mb-3">Centralized</h3>
                <p className="text-hero-muted">All market intelligence in one place</p>
              </Card>
              
              <Card className="p-8 bg-[var(--gradient-card)] border-border shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-glow)] transition-all duration-300 transform hover:scale-105 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                <Users className="h-12 w-12 text-primary mx-auto mb-4 animate-float" style={{animationDelay: '1s'}} />
                <h3 className="text-xl font-semibold text-foreground mb-3">Collaborative</h3>
                <p className="text-hero-muted">Real-time team sharing and editing</p>
              </Card>
              
              <Card className="p-8 bg-[var(--gradient-card)] border-border shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-glow)] transition-all duration-300 transform hover:scale-105 animate-slide-in-right">
                <Zap className="h-12 w-12 text-primary mx-auto mb-4 animate-float" style={{animationDelay: '2s'}} />
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
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground text-center mb-16 animate-fade-in">
              How It Works
            </h2>
            
            <div className="space-y-12">
              <div className="flex flex-col lg:flex-row items-center gap-8 animate-slide-in-left">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-[var(--shadow-glow)] animate-glow-pulse">
                    <Database className="h-8 w-8 text-primary-foreground" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-foreground mb-3">Capture</h3>
                  <p className="text-xl text-hero-subtitle">
                    Add competitors, insights, and links to reports or articles.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col lg:flex-row items-center gap-8 animate-slide-in-right" style={{animationDelay: '0.2s'}}>
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-[var(--shadow-glow)] animate-glow-pulse" style={{animationDelay: '1s'}}>
                    <Share className="h-8 w-8 text-primary-foreground" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-foreground mb-3">Collaborate</h3>
                  <p className="text-xl text-hero-subtitle">
                    Share and organize findings across your team in a central hub.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col lg:flex-row items-center gap-8 animate-slide-in-left" style={{animationDelay: '0.4s'}}>
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-[var(--shadow-glow)] animate-glow-pulse" style={{animationDelay: '2s'}}>
                    <Brain className="h-8 w-8 text-primary-foreground" />
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
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground text-center mb-16 animate-fade-in">
              Why Product War is Different
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-8 bg-[var(--gradient-card)] border-border shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-glow)] transition-all duration-300 transform hover:scale-105 animate-fade-in-up">
                <Users className="h-12 w-12 text-primary mx-auto mb-6 animate-float" />
                <h3 className="text-xl font-semibold text-foreground mb-4">Team-First</h3>
                <p className="text-hero-muted">
                  Unlike static databases, Product War is designed for collaboration, not just individual research.
                </p>
              </Card>
              
              <Card className="p-8 bg-[var(--gradient-card)] border-border shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-glow)] transition-all duration-300 transform hover:scale-105 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                <Brain className="h-12 w-12 text-primary mx-auto mb-6 animate-float" style={{animationDelay: '1s'}} />
                <h3 className="text-xl font-semibold text-foreground mb-4">Dynamic</h3>
                <p className="text-hero-muted">
                  Insights are enriched by Product War AI, ensuring your intelligence is always current.
                </p>
              </Card>
              
              <Card className="p-8 bg-[var(--gradient-card)] border-border shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-glow)] transition-all duration-300 transform hover:scale-105 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                <Compass className="h-12 w-12 text-primary mx-auto mb-6 animate-float" style={{animationDelay: '2s'}} />
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
            <Shield className="h-16 w-16 text-primary mx-auto mb-8 animate-float" />
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-8 animate-fade-in">
              Your Autonomous Market Analyst
            </h2>
            <p className="text-xl text-hero-subtitle leading-relaxed animate-fade-in-up" style={{animationDelay: '0.2s'}}>
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
          <p className="text-hero-muted animate-fade-in">
            Product War is a concept product, created to showcase modern approaches to market intelligence.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;