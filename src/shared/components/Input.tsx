import React, { ChangeEventHandler, KeyboardEventHandler } from "react"
import { COLORS } from "../constants/colors"

export const Input: React.FC<{
    onChange: ChangeEventHandler
    onEnter: () => void
    placeholder?: string
    value?: string
    autoFocus?: boolean
}> = ({ placeholder, value, autoFocus, onChange, onEnter }) => {
    const onKeyUp: KeyboardEventHandler = (event) => {
        if (event.key === "Enter") {
            onEnter()
        }
    }

    return (
        <input
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            onKeyUp={onKeyUp}
            style={{
                border: "none",
                borderBottom: `2px dotted ${COLORS.DARK_BACKGROUND}`,
                width: "100%",
                padding: "12px 20px",
                marginLeft: "12px",
                fontStyle: "italic",
                letterSpacing: 2,
            }}
            autoFocus={autoFocus}
        />
    )
}
