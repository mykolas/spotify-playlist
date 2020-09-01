import React, { MouseEventHandler } from "react"

import { COLORS } from "../constants/colors"

export const Button: React.FC<{
    onClick?: MouseEventHandler
    title: string
}> = ({ onClick, title }) => (
    <a
        onClick={onClick}
        style={{
            backgroundColor: "transparent",
            cursor: "pointer",
            border: `2px solid ${COLORS.DARK_BACKGROUND}`,
            color: COLORS.TEXT,
            padding: "15px 32px",
            textAlign: "center",
            textDecoration: "none",
            display: "inline-block",
            fontSize: "16px",
            fontWeight: "bold",
            borderRadius: "4px",
            boxShadow: "2px 2px",
            marginBottom: 4,
        }}
    >
        {title}
    </a>
)
