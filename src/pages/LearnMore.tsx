import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, CheckCircle, Target, Users, Zap, Brain, Shield, Globe, Clock, BarChart } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const LearnMore = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-background/80 backdrop-blur-md border-b border-border sticky top-0 z-10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-3">
              <img src={logo} alt="Product War" className="h-10 w-10" />
              <span className="text-xl font-bold text-foreground">Product War</span>
            </Link>
            <Link to="/">
              <Button variant="outline" size="sm">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 bg-[var(--gradient-hero)]">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-7xl font-bold text-hero-text mb-6 leading-tight animate-fade-in-up">
              Learn More About
              <span className="block text-primary">Product War</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-hero-subtitle mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              Everything you need to know about revolutionizing your team's market intelligence capabilities.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground text-center mb-16 animate-fade-in">
              Comprehensive Market Intelligence Platform
            </h2>
            
            <div className="grid lg:grid-cols-3 gap-8">
              <Card className="p-8 bg-[var(--gradient-card)] border-border shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-glow)] transition-all duration-300 animate-fade-in-up">
                <Target className="h-12 w-12 text-primary mb-6" />
                <h3 className="text-xl font-semibold text-foreground mb-4">Competitive Intelligence</h3>
                <ul className="space-y-2 text-hero-muted">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <span>Real-time competitor monitoring</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <span>Product launch tracking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <span>Pricing strategy analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <span>Market positioning insights</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-8 bg-[var(--gradient-card)] border-border shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-glow)] transition-all duration-300 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                <Users className="h-12 w-12 text-primary mb-6" />
                <h3 className="text-xl font-semibold text-foreground mb-4">Team Collaboration</h3>
                <ul className="space-y-2 text-hero-muted">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <span>Shared intelligence workspace</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <span>Real-time annotations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <span>Team-wide notifications</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <span>Access control & permissions</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-8 bg-[var(--gradient-card)] border-border shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-glow)] transition-all duration-300 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                <Brain className="h-12 w-12 text-primary mb-6" />
                <h3 className="text-xl font-semibold text-foreground mb-4">AI-Powered Analysis</h3>
                <ul className="space-y-2 text-hero-muted">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <span>Automated data enrichment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <span>Trend pattern recognition</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <span>Predictive market insights</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <span>Natural language summaries</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground text-center mb-16 animate-fade-in">
              Perfect for Every Team
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="animate-slide-in-left">
                <h3 className="text-3xl font-semibold text-foreground mb-8">Who Benefits?</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Target className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Product Teams</h4>
                      <p className="text-hero-subtitle">Stay ahead of feature releases and product positioning in your market.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <BarChart className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Strategy Teams</h4>
                      <p className="text-hero-subtitle">Make informed decisions with comprehensive competitive intelligence.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Globe className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Market Research</h4>
                      <p className="text-hero-subtitle">Streamline research workflows and enhance analysis quality.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Shield className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Executive Teams</h4>
                      <p className="text-hero-subtitle">Get high-level market insights for strategic planning.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="animate-slide-in-right">
                <h3 className="text-3xl font-semibold text-foreground mb-8">Common Use Cases</h3>
                <div className="bg-[var(--gradient-card)] rounded-lg p-8 border border-border shadow-[var(--shadow-card)]">
                  <div className="space-y-6">
                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5 text-primary" />
                      <span className="text-foreground font-medium">Competitive Launch Monitoring</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Zap className="h-5 w-5 text-primary" />
                      <span className="text-foreground font-medium">Market Trend Analysis</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Target className="h-5 w-5 text-primary" />
                      <span className="text-foreground font-medium">Strategic Planning Support</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="h-5 w-5 text-primary" />
                      <span className="text-foreground font-medium">Team Alignment</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Globe className="h-5 w-5 text-primary" />
                      <span className="text-foreground font-medium">Market Entry Research</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <BarChart className="h-5 w-5 text-primary" />
                      <span className="text-foreground font-medium">Quarterly Business Reviews</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-16 animate-fade-in">
              Transform Your Market Intelligence
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 bg-[var(--gradient-card)] border-border shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-glow)] transition-all duration-300 animate-slide-in-left text-left">
                <h3 className="text-2xl font-semibold text-foreground mb-4">Before Product War</h3>
                <ul className="space-y-3 text-hero-muted">
                  <li>• Scattered data across multiple tools</li>
                  <li>• Manual research taking hours each week</li>
                  <li>• Insights lost in email chains</li>
                  <li>• Reactive competitive responses</li>
                  <li>• Team misalignment on market trends</li>
                </ul>
              </Card>
              
              <Card className="p-8 bg-[var(--gradient-card)] border-border shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-glow)] transition-all duration-300 animate-slide-in-right text-left">
                <h3 className="text-2xl font-semibold text-foreground mb-4">With Product War</h3>
                <ul className="space-y-3 text-hero-muted">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>Centralized intelligence hub</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>Automated data collection & analysis</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>Persistent team knowledge base</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>Proactive market alerts</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>Shared strategic understanding</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground mb-6 animate-fade-in">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-hero-subtitle mb-8 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              Product War is currently in development. Contact us to learn more about early access 
              and consulting opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              <Link to="/vision">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300">
                  Explore the Vision <ArrowLeft className="ml-2 h-5 w-5 rotate-180" />
                </Button>
              </Link>
              <Link to="/">
                <Button variant="outline" size="lg">
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LearnMore;