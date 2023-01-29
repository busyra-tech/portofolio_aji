import CertificateCard from "components/CertificateCard";
import EducationCard from "components/EducationCard";
import { certifications, educations } from "data";

const Education = () => {
	return (
		<div className="px-6 overflow-y-scroll" style={{ height: "75vh" }}>
			<div>
				<h5 className="mt-3 text-2xl font-bold">Degrees Received</h5>
				<div className="grid gap-6 my-3 md:grid-cols-1">
					{educations.map((education) => (
						<div
							className="col-span-2 p-2 bg-gray-200 rounded-lg dark:bg-dark-200 md:col-span-1 "
							key={education.universitas}
						>
							<EducationCard education={education} />
						</div>
					))}
				</div>
			</div>
			<div>
				<h5 className="my-3 text-2xl font-bold">Certifications</h5>
				<div className="px-2 py-2 ">
					<div className="relative grid grid-cols-12 gap-4 ">
						{certifications.map((certification) => (
							<div
								className="col-span-12 p-2 bg-gray-200 rounded-lg sm:col-span-6 lg:col-span-4 dark:bg-dark-200"
								key={certification.title}
							>
								<CertificateCard
									certification={certification}
									key={certification.title}
								/>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Education;
