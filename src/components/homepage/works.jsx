import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";
import smartAngel from './../../assets/images/smart-angel.png'
import virtualCompany from './../../assets/images/v_w.png'
const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src={smartAngel}
								alt="Smart Angel"
								className="work-image"
							/>
							<div className="work-title">Smart Angel</div>
							<div className="work-subtitle">
								Back-end Web Developer
							</div>
							<div className="work-duration">2020 - 2022</div>
						</div>

						<div className="work">
							<img
								src={virtualCompany}
								alt="The Virtual World Company"
								className="work-image"
							/>
							<div className="work-title">The Virtual World Company</div>
							<div className="work-subtitle">
							Back-end Web Developer
							</div>
							<div className="work-duration">2022 - 2023</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
