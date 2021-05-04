import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, NavbarText } from 'reactstrap';
import { GoMarkGithub } from 'react-icons/go';
import { FaWhatsapp } from 'react-icons/fa';

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);

	const urlencodedtext = `HelloVaccine is a notifier that sends you an email whenever the slots for vaccination get empty. Enroll for your email, it hardly takes a minute!`;

	return (
		<Navbar color="light" light expand="md">
			<NavbarBrand href="/">
				<h2>HelloVaccine</h2>
			</NavbarBrand>
			<NavbarToggler onClick={toggle} />
			<Collapse isOpen={isOpen} navbar>
				<Nav className="mr-auto" navbar>
					<NavItem>
						<NavLink target="_blank" href="https://github.com/mehtaAnsh/HelloVaccine-frontend">
							<GoMarkGithub style={{ color: 'black' }} />
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink target="_blank" href={`https://wa.me?text=${urlencodedtext}`}>
							<FaWhatsapp style={{ color: 'black' }} />
						</NavLink>
					</NavItem>
				</Nav>

				{/* How it works page */}
				<NavLink href="https://github.com/reactstrap/reactstrap"></NavLink>
			</Collapse>
		</Navbar>
	);
};

export default Header;
