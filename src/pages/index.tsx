import ServiceCard from "components/ServiceCard";
import { services } from "data";
import { NextPage } from "next";

const About: NextPage = () => {
	return (
		<div className="flex flex-col flex-grow px-6 pt-1 ">
			<h6 className="my-3 text-base font-medium">
				A passionate individual who always thrive to work on end to end products
				which develop sustainable and scalable social and technical systems to
				create impact.
			</h6>
			<div
				className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100 "
				style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
			>
				<h4 className="my-3 text-xl font-semibold tracking-wide">
					What I am doing
				</h4>
				<div className="grid gap-6 my-3 md:grid-cols-1">
					{services.map((service) => (
						<div
							className="col-span-2 p-2 bg-gray-200 rounded-lg dark:bg-dark-200 md:col-span-1 "
							key={service.title}
						>
							<ServiceCard service={service} />
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default About;
