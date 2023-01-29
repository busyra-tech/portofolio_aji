import Image from "next/image";
import { FunctionComponent } from "react";
import { Certification } from "types";

const CertificateCard: FunctionComponent<{
	certification: Certification;
}> = ({ certification: { title, subtitle, logo_path, certificate_link } }) => {
	return (
		<div>
			<div className="flex justify-center">
				<img
					src={logo_path}
					alt={title}
					className="cursor-pointer transition duration-150 ease-in-out"
					data-bs-toggle="tooltip"
					title="Show Certificate"
					onClick={() => window.open(certificate_link, "_blank")}
					height="100"
					width="100"
				/>
			</div>
			<h5 className="my-2 text-center font-bold">{title}</h5>
			<p className="my-2 text-center text-gray">{subtitle}</p>
		</div>
	);
};

export default CertificateCard;
