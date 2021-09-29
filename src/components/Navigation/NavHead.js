import React from "react"

const NavHead = (props) => {
	let toggleClass = ["mobile-menu"]
	if (props.collapseMenu) {
		toggleClass = [...toggleClass, "on"]
	}

	return (
		<div className="navbar-brand header-logo">
			<a href={"#/"} className="b-brand">
				<div className="b-bg">
					<i className="feather icon-trending-up" />
				</div>
				<span className="b-title">Datta Able</span>
			</a>
			<a
				href={"#/"}
				className={toggleClass.join(" ")}
				id="mobile-collapse"
				onClick={props.onToggleNavigation}
			>
				<span />
			</a>
		</div>
	)
}

export default NavHead
