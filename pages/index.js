import dynamic from "next/dynamic";
import PropTypes from "prop-types";
const Navigation = dynamic(() => import("../components/Navigation"));
const Greetings = dynamic(() => import("../containers/Greetings"));
const Skills = dynamic(() => import("../containers/Skills"));
const Proficiency = dynamic(() => import("../containers/Proficiency"));
const Education = dynamic(() => import("../containers/Education"));
const Experience = dynamic(() => import("../containers/Experience"));
const Projects = dynamic(() => import("../containers/Projects"));
const Feedbacks = dynamic(() => import("../containers/Feedbacks"));
const GithubProfileCard = dynamic(() =>
	import("../components/GithubProfileCard")
);
import { openSource } from "../portfolio";
import SEO from "../components/SEO";

export default function Home({ githubProfileData }) {
	return (
		<div>
			<SEO
				data={{
					title: "Rumi Allbert",
					description:
						"A passionate data science student.",
					image: "",
					url: "https://raaec-portfolio.herokuapp.com/",
					keywords: [
						"Rumi",
						"Rumi Allbert",
						"@RumiAllbert",
						"RumiAllbert",
						"Portfolio",
						"Rumi Portfolio ",
						"Rumim Allbert Portfolio",
						"web developer",
						"data science",
						"data analytics",
						"lamp developer",
						"python developer",
						"mysql",
						"Rstudio",
						"mongodb",
						"java",
					],
				}}
			/>
			<Navigation />
			<Greetings />
			<Skills />
			{/* <Proficiency /> */}
			<Education />
			<Experience />
			{/* <Feedbacks /> */}
			<Projects />
			<GithubProfileCard prof={githubProfileData} />
		</div>
	);
}

Home.prototype = {
	githubProfileData: PropTypes.object.isRequired,
};

export async function getStaticProps(_) {
	const githubProfileData = await fetch(
		`https://api.github.com/users/${openSource.githubUserName}`
	).then((res) => res.json());

	return {
		props: { githubProfileData },
	};
}
