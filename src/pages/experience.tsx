import ExperienceCard from "components/ExperienceCard";
import { experiences } from "data";

const Experience = () => {
	return (
		<div className="px-6 py-2">
			<h6 className="my-3 text-base font-medium">
				I’m a Programmer, I’ve 5 years experience in Web and Mobile Programming,
				I’m fully able to develop application android in Kotlin, Flutter, Java,
				and other application based on Client interest. In Web Application, I’m
				using Javascript Framework ExpressJS, ReactJS, VueJS and PHP Framemwork
				Laravel, CodeIgniter and kind of DBMS for SQL like MySQL, Postgress and
				No SQL Firebase or MongoDb. I can work as a team, or individual to
				develop system.
			</h6>
			<div
				className="grid gap-6 my-3 md:grid-cols-1 overflow-y-scroll"
				style={{ height: "55vh" }}
			>
				{experiences.map((experience) => (
					<div
						className="col-span-2 p-2 bg-gray-200 rounded-lg dark:bg-dark-200 md:col-span-1 "
						key={experience.title}
					>
						<ExperienceCard experience={experience} />
					</div>
				))}
			</div>
		</div>
	);
};

export default Experience;
