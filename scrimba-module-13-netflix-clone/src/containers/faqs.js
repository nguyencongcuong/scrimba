import React from "react";
import { Accordion, OptForm } from "../components";
import faqsData from "../fixtures/faqs.json";
import { VscChevronRight } from "react-icons/vsc";

export function FaqsContainer() {
	return (
		<Accordion>
			<Accordion.Title>
				Frequently Asked Questions
			</Accordion.Title>
			<Accordion.Frame>
				{faqsData.map((item, index) => (
					<Accordion.Item key={`${item}-${index}`}>
						<Accordion.Header>
							{item.header}
						</Accordion.Header>
						<Accordion.Body>{item.body}</Accordion.Body>
					</Accordion.Item>
				))}
			</Accordion.Frame>

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
		</Accordion>
	);
}
