import React, { useEffect, useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import logo from "../../assets/logo.svg";

export default function Logo(props) {
	return (
		<div
			className={`logo_start animate__animated ${
				props.animateLogoRemove ? "animate__backOutDown" : "animate__backInDown"
			}`}
		>
			{/* <div className="logo_start animate__animated animate__flash"> */}
			<img src={logo} className="Logo" alt="Logo" />
		</div>
	);
}
