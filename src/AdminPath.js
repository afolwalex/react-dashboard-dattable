import React, { useState } from "react"
import { FullScreen, useFullScreenHandle } from "react-full-screen"
import NavHeader from "./components/NavHeader"
import Navigation from "./components/Navigation"
import BreadCrumb from "./components/BreadCrumb"
import { Redirect, Switch } from "react-router"

const AdminPath = ({ location }) => {
	const handle = useFullScreenHandle()

	const [openMenu, setOpenMenu] = useState(false)

	const toggleMenu = (e) => {
		e.preventDefault()
		setOpenMenu(!openMenu)
	}

	const outsideClick = (e) => {
		setOpenMenu(false)
	}

	return (
		<FullScreen handle={handle}>
			<Navigation openMenu={openMenu} toggleMenu={outsideClick} />
			<NavHeader
				openMenu={openMenu}
				toggleMenu={toggleMenu}
				handle={() => handle.enter}
			/>
			<div className="pcoded-main-container">
				<div className="pcoded-wrapper">
					<div className="pcoded-content">
						<div className="pcoded-inner-content">
							<BreadCrumb loc={location} />
							<div className="main-body">
								<div className="page-wrapper">
									<Switch>
										<Redirect
											from="/"
											to={"/dashboard/home"}
										/>
									</Switch>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</FullScreen>
	)
}

export default AdminPath
