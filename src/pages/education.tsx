import Head from "next/head";
import CertificateCard from "components/CertificateCard";
import EducationCard from "components/EducationCard";
import { certifications, educations } from "data";
import { siteConfig } from "config/site";

const Education = () => {
	return (
		<>
			<Head>
				<title>
					{siteConfig.pages.education.title} | {siteConfig.name}
				</title>
				<meta
					name="description"
					content={siteConfig.pages.education.description}
				/>
			</Head>

			<section className="section-wide pt-40">
				<h1 className="heading-section text-center mb-6">
					Education & Certifications
				</h1>
				<p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto text-center mb-16">
					My academic background and professional certifications.
				</p>

				<div className="mb-16">
					<h2 className="heading-subsection mb-8">Degrees Received</h2>
					<div className="space-y-6">
						{educations.map((education) => (
							<div key={education.universitas} className="card-elevated">
								<EducationCard education={education} />
							</div>
						))}
					</div>
				</div>

				<div>
					<h2 className="heading-subsection mb-8">Certifications</h2>
					<div className="grid-auto">
						{certifications.map((certification) => (
							<div key={certification.title} className="card-elevated">
								<CertificateCard certification={certification} />
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	);
};

export default Education;
