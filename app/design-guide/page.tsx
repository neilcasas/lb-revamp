import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { SectionHeader } from "@/components/SectionHeader";
import { PageHeader } from "@/components/PageHeader";
import SpotlightCard from "@/components/SpotlightCard";

export default function DesignGuidePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Hero */}
        <div className="mb-16 text-center">
          <h1 className="text-6xl font-bold mb-4">Design Guide</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The Louvreblanc Consulting design system featuring dark, sleek,
            premium aesthetics with glassmorphism and classical mythology
            influences.
          </p>
        </div>

        {/* Typography Section */}
        <section className="mb-16">
          <SectionHeader
            title="Typography"
            description="Teachers for headings, Montserrat for body text"
          />

          <div className="space-y-6">
            <div>
              <h1 className="text-6xl font-bold mb-2">Heading 1</h1>
              <code className="text-sm text-muted-foreground">
                text-6xl font-bold
              </code>
            </div>
            <div>
              <h2 className="text-5xl font-bold mb-2">Heading 2</h2>
              <code className="text-sm text-muted-foreground">
                text-5xl font-bold
              </code>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-2">Heading 3</h3>
              <code className="text-sm text-muted-foreground">
                text-4xl font-bold
              </code>
            </div>
            <div>
              <h4 className="text-3xl font-semibold mb-2">Heading 4</h4>
              <code className="text-sm text-muted-foreground">
                text-3xl font-semibold
              </code>
            </div>
            <div>
              <h5 className="text-2xl font-semibold mb-2">Heading 5</h5>
              <code className="text-sm text-muted-foreground">
                text-2xl font-semibold
              </code>
            </div>
            <div>
              <h6 className="text-xl font-semibold mb-2">Heading 6</h6>
              <code className="text-sm text-muted-foreground">
                text-xl font-semibold
              </code>
            </div>
            <div>
              <p className="text-base mb-2">
                Body text uses Montserrat for excellent readability. A powerful
                strategic mechanism for the powerful.
              </p>
              <code className="text-sm text-muted-foreground">
                text-base (Montserrat)
              </code>
            </div>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Colors Section */}
        <section className="mb-16">
          <SectionHeader
            title="Colors"
            description="Dark gray background with white text and subtle accents"
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <div className="h-24 rounded-lg bg-background border border-border" />
              <p className="text-sm font-medium">Background</p>
              <code className="text-xs text-muted-foreground">#131617</code>
            </div>
            <div className="space-y-2">
              <div className="h-24 rounded-lg bg-foreground" />
              <p className="text-sm font-medium">Foreground</p>
              <code className="text-xs text-muted-foreground">#ffffff</code>
            </div>
            <div className="space-y-2">
              <div className="h-24 rounded-lg bg-primary" />
              <p className="text-sm font-medium">Primary</p>
              <code className="text-xs text-muted-foreground">White</code>
            </div>
            <div className="space-y-2">
              <div className="h-24 rounded-lg bg-secondary" />
              <p className="text-sm font-medium">Secondary</p>
              <code className="text-xs text-muted-foreground">Subtle Gray</code>
            </div>
            <div className="space-y-2">
              <div className="h-24 rounded-lg bg-accent" />
              <p className="text-sm font-medium">Accent</p>
              <code className="text-xs text-muted-foreground">
                Lighter Gray
              </code>
            </div>
            <div className="space-y-2">
              <div className="h-24 rounded-lg bg-muted" />
              <p className="text-sm font-medium">Muted</p>
              <code className="text-xs text-muted-foreground">Muted Gray</code>
            </div>
            <div className="space-y-2">
              <div className="h-24 rounded-lg glass" />
              <p className="text-sm font-medium">Glass</p>
              <code className="text-xs text-muted-foreground">
                Glassmorphism
              </code>
            </div>
            <div className="space-y-2">
              <div className="h-24 rounded-lg glass-strong" />
              <p className="text-sm font-medium">Glass Strong</p>
              <code className="text-xs text-muted-foreground">
                Enhanced Glass
              </code>
            </div>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Buttons Section */}
        <section className="mb-16">
          <SectionHeader
            title="Buttons"
            description="Multiple button variants for different use cases"
          />

          <div className="space-y-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">Standard Variants</h4>
              <div className="flex flex-wrap gap-4">
                <Button>Default</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="link">Link</Button>
                <Button variant="destructive">Destructive</Button>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Sizes</h4>
              <div className="flex flex-wrap items-center gap-4">
                <Button size="sm">Small</Button>
                <Button size="default">Default</Button>
                <Button size="lg">Large</Button>
                <Button size="icon">→</Button>
              </div>
            </div>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Cards Section */}
        <section className="mb-16">
          <SectionHeader
            title="Cards"
            description="Standard and spotlight card variants"
          />

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Standard Card</CardTitle>
                <CardDescription>
                  A standard card with default styling
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  This is a standard card component with dark background and
                  subtle borders. Perfect for content sections.
                </p>
              </CardContent>
            </Card>

            <SpotlightCard className="p-6">
              <h3 className="text-2xl font-bold mb-2">Spotlight Card</h3>
              <p className="text-sm text-muted-foreground mb-4">
                A card with interactive spotlight effect
              </p>
              <p className="text-sm">
                This card uses a dynamic spotlight that follows your cursor,
                creating an engaging interactive effect. Ideal for featured
                content and premium sections.
              </p>
            </SpotlightCard>

            <Card>
              <CardHeader>
                <CardTitle>Service Card</CardTitle>
                <CardDescription>
                  Public Relations & Strategic Communications
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-4">
                  Comprehensive PR services with strict confidentiality
                  protocols.
                </p>
                <div className="flex gap-2">
                  <Badge>Premium</Badge>
                  <Badge variant="outline">Confidential</Badge>
                </div>
              </CardContent>
            </Card>

            <SpotlightCard
              className="p-6"
              spotlightColor="rgba(147, 197, 253, 0.3)"
            >
              <h3 className="text-2xl font-bold mb-2">Client Metrics</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Our impact by the numbers
              </p>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">
                    Global Clients
                  </span>
                  <span className="text-2xl font-bold">21</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">
                    Direct Engagements
                  </span>
                  <span className="text-2xl font-bold">190K</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">
                    Projects Awarded
                  </span>
                  <span className="text-2xl font-bold">$1.7M</span>
                </div>
              </div>
            </SpotlightCard>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Form Elements Section */}
        <section className="mb-16">
          <SectionHeader
            title="Form Elements"
            description="Inputs, labels, and form components"
          />

          <div className="max-w-md space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="inquire@thelouvreblanc.com"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" type="text" placeholder="Enter your name" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Input
                id="message"
                type="text"
                placeholder="How can we assist you?"
                className="h-24"
              />
            </div>

            <Button className="w-full">Submit Inquiry</Button>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Badges Section */}
        <section className="mb-16">
          <SectionHeader
            title="Badges"
            description="Labels and status indicators"
          />

          <div className="flex flex-wrap gap-3">
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge variant="destructive">Destructive</Badge>
            <Badge>Premium</Badge>
            <Badge variant="outline">Confidential</Badge>
            <Badge variant="secondary">NDA Required</Badge>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Custom Components Section */}
        <section className="mb-16">
          <SectionHeader
            title="Custom Components"
            description="Reusable project-specific components"
          />

          <div className="space-y-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">Page Header</h4>
              <PageHeader
                title="Strategic Consulting"
                subtitle="A powerful strategic mechanism for the powerful"
              />
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Spotlight Card</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <SpotlightCard className="p-6">
                  <h3 className="text-xl font-bold mb-2">Default Spotlight</h3>
                  <p className="text-sm text-muted-foreground">
                    Hover to see the interactive spotlight effect that follows
                    your cursor.
                  </p>
                </SpotlightCard>
                <SpotlightCard
                  className="p-6"
                  spotlightColor="rgba(167, 139, 250, 0.3)"
                >
                  <h3 className="text-xl font-bold mb-2">Custom Color</h3>
                  <p className="text-sm text-muted-foreground">
                    Spotlight with custom purple color for different themes.
                  </p>
                </SpotlightCard>
              </div>
            </div>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Usage Guidelines */}
        <section className="mb-16">
          <SectionHeader
            title="Usage Guidelines"
            description="Best practices for using this design system"
          />

          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Typography Hierarchy</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-sm">
                  • Use Teachers font for all headings (h1-h6)
                </p>
                <p className="text-sm">
                  • Use Montserrat for body text and UI elements
                </p>
                <p className="text-sm">
                  • Maintain clear size hierarchy from h1 (largest) to h6
                </p>
                <p className="text-sm">
                  • Keep line height comfortable for readability
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Color Usage</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-sm">• Background: #131617 (dark gray)</p>
                <p className="text-sm">• Text: White for primary content</p>
                <p className="text-sm">
                  • Use glassmorphism for premium/hero sections
                </p>
                <p className="text-sm">
                  • Maintain high contrast for accessibility
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Component Guidelines</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-sm">
                  • Use SpotlightCard for interactive featured content
                </p>
                <p className="text-sm">
                  • Apply standard Cards for content sections
                </p>
                <p className="text-sm">
                  • Badges for status, labels, and categories
                </p>
                <p className="text-sm">
                  • PageHeader for hero sections and major page titles
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}
