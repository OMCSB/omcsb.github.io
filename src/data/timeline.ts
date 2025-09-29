import type { TimelineItem } from "@/types/portfolio";

export const timelineData: TimelineItem[] = [
  {
    id: "2024",
    year: "2024",
    title: "Full-stack Developer",
    role: "Full-stack Developer",
    company: "CareDoct",
    location: "Remote",
    excerpt:
      "Leading scalable architecture for healthcare systems.",
    details: `Architected and implemented a comprehensive platform for healthcare that processes over 10+ consultations daily. Led a team of 2 engineers in designing fault-tolerant systems with 90% uptime.

Key achievements:
• Built automated RPA system with AWS ECS integration reducing manual healthcare document processing by 80% 
• Implemented Redis job queuing, parallel processing, and fuzzy matching algorithms achieving 85% accuracy in patient billing verification  
• Established complete CI/CD infrastructure using GitHub Actions, Docker containerization, and AWS services`,
    tech: ["FastAPI", "MongoDB", "Redis", "GCP", "AWS", "React"],
   //  link: "https://github.com/example/healthcare-billing",
  },
  {
    id: "2024",
    year: "2024",
    title: "Shopify Developer",
    role: "Shopify Developer",
    company: "Optimization.my",
    location: "Remote",
    excerpt:
      "Sole App Developer",
    details: `Developed a high-availability Shopify POS app deployed on Linode and drove major improvements to a GTO reporting system by fixing critical bugs to enhance data accuracy.

Key achievements:
• Built a price-rounding Shopify POS app deployed on Linode clusters using PM2 for high availability. 
• Improved a GTO reporting system used by Malaysian malls, fixed major bugs and improved data accuracy. 
• Conducted full-cycle debugging, support, and deployment across multiple Shopify properties.`,
    tech: ["PHP", "Shopify", "Linode", "PM2"],
   //  link: "https://github.com/example/healthcare-billing",
  },
  {
    id: "2023",
    year: "2023",
    title: "Quality Assurance Core Intern",
    role: "Quality Assurance Core Intern",
    company: "MoneyLion Sdn. Bhd.",
    location: "Hybrid",
    excerpt:
      "Intern",
    details: `Drove software reliability and efficiency by automating deployment processes, implementing proactive monitoring, and maintaining rigorous quality assurance.

Key achievements:
• Automated CI/CD workflows with GitHub Actions, reducing manual package intervention by 50%.
• Built a Slack-integrated monitoring system via Embrace, surfacing real-time insights from 500k+ datapoints. 
• Conducted end-to-end manual testing cycles to improve production stability with a defect rate below 5%.`,
    tech: ["Jira", "Confluence", "Github Actions", "Python"],
   //  link: "https://github.com/example/healthcare-billing",
  },
];
