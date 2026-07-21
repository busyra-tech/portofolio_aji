import { FunctionComponent } from "react";
import Image from "next/image";
import { Certification } from "types";

interface CertificateCardProps {
	certification: Certification;
}

const CertificateCard: FunctionComponent<CertificateCardProps> = ({
	certification,
}) => {
	const { title, subtitle, logo_path, certificate_link } = certification;

	return (
		<div
			className="text-center group cursor-pointer p-4"
			onClick={() => window.open(certificate_link, "_blank")}
			title="View Certificate"
		>
			<div className="flex justify-center mb-6">
				<div className="relative w-24 h-24 bg-white dark:bg-dark-800 rounded-full p-3 shadow-md border border-gray-100 dark:border-dark-600 group-hover:shadow-lg group-hover:scale-110 transition-all duration-300 flex items-center justify-center overflow-hidden">
					<Image
						src={logo_path}
						alt={`${title} - ${subtitle}`}
						fill
						className="object-contain p-3"
					/>
				</div>
			</div>
			<h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-accent-400 transition-colors">
				{title}
			</h3>
			<p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
				{subtitle}
			</p>
		</div>
	);
};

export default CertificateCard;
