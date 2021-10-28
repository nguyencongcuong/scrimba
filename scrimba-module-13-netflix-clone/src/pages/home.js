import React from "react";
import {JumbotronContainer} from "../containers/jumbotron";
import {FooterContainer} from "../containers/footer";
import {FaqsContainer} from "../containers/faqs";
import {HeaderContainer} from "../containers/header";
import { OptForm } from "../components";
import {FeatureContainer} from "../containers/feature";
import { VscChevronRight } from "react-icons/vsc";

export default function Home() {
	return (
		<>
			<HeaderContainer>
				<FeatureContainer />
				<OptForm>
					<OptForm.Input placeholder="Email Address" />
					<OptForm.Button>
						Get started
						<VscChevronRight />
					</OptForm.Button>
					<OptForm.Break />
					<OptForm.Text>
						Ready to watch? Enter your membership.
					</OptForm.Text>
				</OptForm>
			</HeaderContainer>
			<JumbotronContainer />
			<FaqsContainer />
			<FooterContainer />
		</>
	);
}
