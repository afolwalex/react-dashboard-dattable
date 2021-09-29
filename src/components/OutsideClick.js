import React, { useRef, useEffect } from "react"

const OutsideClick = (props) => {
	const ref = useRef(null)

	useEffect(() => {
		function handleClickOutside(event) {
			if (ref.current && !ref.current.contains(event.target)) {
				props.handleToggle()
			}
		}

		document.addEventListener("mousedown", handleClickOutside)

		return () => {
			document.removeEventListener("mousedown", handleClickOutside)
		}
	}, [ref, props])

	return (
		<div className="nav-outside" ref={ref}>
			{props.children}
		</div>
	)
}

export default OutsideClick
