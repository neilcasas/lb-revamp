import { PageHero } from "@/components/PageHero";
import { LeadershipCard } from "@/components/LeadershipCard";

export default function LeadershipPage() {
  const leaders = [
    {
      name: "Pau E.P.D.",
      title: "Board Director & Head of Research",
      bio: `Pau is an agripreneur, researcher, and sustainability advocate at the forefront of advocacy research initiatives in the areas of Circular Economy, Sustainable Agriculture, and the Legalization of Medical Cannabis and Cannabis Byproducts for Agricultural Use.

Rooted in humble beginnings as an Indigenous Yvanag, E.P.D. acquired their degree in Philosophy at the University of Santo Tomas and became a ritualized member of the Alpha Phi Omega Fraternity & Sorority. With a strong foundation in Operations, Supply Chain Management, Logistics, and Customer Success, Pau has worked extensively to optimize agricultural value chains, ensuring sustainable and efficient systems that empower both local farmers and indigenous communities. Pau has collaborated with key institutions, including the Department of Agriculture, National Commission on Indigenous Peoples, and the Philippine Drug Enforcement Agency.`,
    },
    {
      name: "Zoe Abella, R.N.",
      title: "Healthcare & Operations Lead",
      bio: `Zoe is a registered nurse and an essential professional in healthcare, occupational health and safety, telehealth, and emergency response. An alumna of St. Paul University Quezon City, she earned her Bachelor of Science in Nursing from Far Eastern University and was board certified in 2023.

With a strong background in administration and project management, Zoe integrates her expertise in healthcare with strategic leadership, digital health innovation, and crisis management, ensuring efficient operations and impactful health solutions.

Today, Zoe has contributed efforts to projects with the Center for Migrant Advocacy and PhilHealth.`,
    },
    {
      name: "Iya Claudio Salmorin",
      title: "Chief Marketing Officer & Design Lead",
      bio: `Iya is an exceptional artist and designer with a degree in architecture from the Pamantasan ng Lungsod ng Maynila. She has a diverse background in Multimedia Arts, Marketing, Economics, Urban Planning, and Animal Welfare.

Iya effectively leads strategic efforts to help startups, small businesses, and corporations in enhancing their content, visibility, reach, product, and branding. Her impressive portfolio includes collaborations with The Office Designer Singapore, BLN Architecture & Design, BhanArt, Mortabond, Synersign, Cocotel, and Shelterluv.

Iya also actively contributes to impactful advocacy projects with the International Labour Organization, Philippine Young Entrepreneurs Association, and Philippine Chamber of Commerce and Industry.`,
    },
    {
      name: "Lex Garchitorena",
      title: "Officer for International Policy & Governance",
      bio: `Lex is an entrepreneur, finance analyst, and political strategist with expertise in the areas of compliance, anti-money laundering, counter-terrorist financing, WMD non-proliferation, and defense.

A prolific writer from a family of public servants and law enforcers, Lex has been featured in Business Mirror at a young age for her ideas on modern patriotism. Lex pursued Diplomacy and International Relations at the Ateneo de Manila University, and has worked with the Philippine Chamber of Commerce and Industry, House of Representatives, Philippine Air Force, and the Center for International Private Enterprise.

Lex currently serves as the Officer for International Policy and Governance at the Philippine Young Entrepreneurs Association, leading policy efforts geared toward young entrepreneurs, startups, and MSMEs.`,
    },
    {
      name: "Carmen Garchitorena, C.P.A.",
      title: "Finance Auditor",
    },
    {
      name: "Miguel Flores",
      title: "Business Development Manager",
    },
    {
      name: "Nikka Jamero",
      title: "Strategic Growth Manager",
    },
    {
      name: "Atty. Karl Montesa",
      title: "Consultant",
    },
    {
      name: "Atty. Suzanne Roces",
      title: "Consultant",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <PageHero
        title="Leadership"
        description="Meet the visionaries behind The Louvreblanc. A team of strategists, designers, and innovators committed to delivering excellence and driving transformative results for every client."
      />
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col gap-8 max-w-5xl mx-auto">
          {leaders.map((leader, index) => (
            <LeadershipCard
              key={index}
              name={leader.name}
              title={leader.title}
              bio={leader.bio}
              delay={index * 0.1}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
