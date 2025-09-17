import { Card, CardContent } from "@/components/ui/card";

export default function Team() {
  const teamMembers = [
    {
      name: "Jasvinder Sethi",
      position: "Co-Founder & CEO",
      experience: "10+ years in data engineering",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300"
    },
    {
      name: "Geetika Kour",
      position: "Co-Founder & CTO",
      experience: "7+ years in digital transformation",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300"
    },
    {
      name: "Seerath Sethi",
      position: "Chief Design Officer",
      experience: "5+ years in design strategy",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300"
    }
  ];

  const stats = [
    { number: "150+", label: "Projects Completed" },
    { number: "8+", label: "Years Experience" },
    { number: "50+", label: "Calgary Clients" }
  ];

  return (
    <section id="about" className="py-20" data-testid="team-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-primary" data-testid="team-title">About CAPLEO Sage Solutions</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Based in Calgary, Alberta, CAPLEO Sage Solutions is a premier consulting firm that combines deep technical expertise with strategic business acumen to deliver transformational outcomes for our clients.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-secondary mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <h4 className="font-semibold text-foreground">Calgary-Based Expertise</h4>
                  <p className="text-muted-foreground">Deep understanding of Western Canadian business landscape and regulatory environment.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-secondary mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <h4 className="font-semibold text-foreground">Proven Methodologies</h4>
                  <p className="text-muted-foreground">Structured 3-stage approach that minimizes risk and maximizes value delivery.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-secondary mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <h4 className="font-semibold text-foreground">Measurable Results</h4>
                  <p className="text-muted-foreground">Track record of delivering 20-50% efficiency improvements and ROI within 12 months.</p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-6 text-center" data-testid="team-stats">
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className={`text-3xl font-bold ${
                    index === 0 ? 'text-primary' : 
                    index === 1 ? 'text-secondary' : 
                    'text-accent'
                  }`}>{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center" data-testid={`team-member-${index}`}>
                <CardContent className="p-4">
                  <img 
                    src={member.image}
                    alt={`${member.name} - ${member.position}`}
                    className="w-full h-48 object-cover rounded-xl mb-4"
                    data-testid={`team-member-image-${index}`}
                  />
                  <h4 className="font-semibold text-foreground">{member.name}</h4>
                  <p className="text-sm text-muted-foreground">{member.position}</p>
                  <p className="text-xs text-muted-foreground mt-1">{member.experience}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
