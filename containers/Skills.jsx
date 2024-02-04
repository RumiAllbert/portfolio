import React, { Fragment } from "react";

import { Fade } from "react-reveal";
import DisplayLottie from "../components/DisplayLottie";
import { Container, Row, Col, UncontrolledTooltip } from "reactstrap";

import { skillsSection } from "../portfolio";

const Skills = () => {
	return (
		<Fade bottom duration={1000} distance="40px">
			<Container className="text-center my-4 section section-lg">
				<h1 className="h1">{skillsSection.title}</h1>
				<p className="lead">{skillsSection.subTitle}</p>
				<br />
				<Row>
					<Col lg="6">
						<DisplayLottie animationPath="/lottie/coding3.json" />
					</Col>
					<Col lg="6">
						<div className="d-flex justify-content-center flex-wrap mb-5">
							{skillsSection.softwareSkills.map((skill) => {
								return (
									<Fragment key={skill.skillName}>
										<div
											className="icon icon-lg icon-shape shadow rounded-circle mb-4"
											id={skill.skillName}
										>
											<span
												className="iconify"
												data-icon={
													skill.fontAwesomeClassname
												}
												data-inline="false"
											 />
										</div>
										<UncontrolledTooltip
											delay={0}
											placement="bottom"
											target={skill.skillName}
										>
											{skill.skillName}
										</UncontrolledTooltip>
									</Fragment>
								);
							})}
						</div>
						<div>
							{skillsSection.skills.map((skill) => {
								return <p key={skill}>{skill}</p>;
							})}
						</div>
					</Col>
				</Row>
			</Container>
		</Fade>
	);
};

export default Skills;
