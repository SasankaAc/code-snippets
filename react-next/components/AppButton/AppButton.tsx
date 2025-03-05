import React from "react"
import { Button, ButtonProps } from "@mui/material"
import style from "./AppButton.module.scss"

export interface AppButtonProps extends ButtonProps {
    label: string;
}

export default function AppButton({ label, ...props }: AppButtonProps) {
	return (
		<Button className={style.appButton} {...props} data-testid="app-button">
			{label}
		</Button>
	)
}