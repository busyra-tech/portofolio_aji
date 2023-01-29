import Image from "next/image";
import { FunctionComponent } from "react";
import { Education } from "types";

const EducationCard: FunctionComponent<{ education: Education }> = ({
	education: {
		universitas,
		logo_path,
		universitas_url,
		jurusan,
		tahun,
		description,
	},
}) => {
	function createMarkup() {
		return {
			__html: description,
		};
	}

	return (
		<div className="flex flex-col md:flex-row items-center p-2 space-x-4 ">
			<img
				src={logo_path}
				alt={universitas}
				className="cursor-pointer transition duration-150 ease-in-out"
				data-bs-toggle="tooltip"
				title="Visit to Universitas"
				onClick={() => window.open(universitas_url, "_blank")}
				height="100"
				width="100"
			/>
			<div className="flex-col">
				<div className="flex justify-between mb-2">
					<div>
						<h5 className="font-bold">{universitas}</h5>
						<h6 className="">{jurusan}</h6>
					</div>
					<div>
						<p className="text-sm text-gray-500 dark:text-gray-100">{tahun}</p>
					</div>
				</div>
				<p className="font-xs" dangerouslySetInnerHTML={createMarkup()} />
			</div>
		</div>
	);
};

export default EducationCard;
