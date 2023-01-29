import Bar from "components/Bar";
import { languages, infra } from "data";

const Skills = () => {
	return (
		<div className="px-6 py-2">
			<div className="grid gap-9 md:grid-cols-2">
				<div>
					<h5 className="my-3 text-2xl font-bold">Language & Framework</h5>
					<div className="my-2">
						{languages.map((language, i) => (
							<Bar value={language} key={i} />
						))}
					</div>
				</div>

				<div>
					<h5 className="my-3 text-2xl font-bold">Cloud Infra-Architecture</h5>
					<div className="my-2">
						{infra.map((tool, i) => (
							<Bar value={tool} key={i} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Skills;
