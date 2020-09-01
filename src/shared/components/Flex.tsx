import React, { CSSProperties } from "react"
import { Property } from "csstype"

interface FlexProps {
    flexDirection: Property.FlexDirection
    flexGrow?: Property.FlexGrow
    flexWrap?: Property.FlexWrap
    justifyContent?: Property.JustifyContent
    alignSelf?: Property.AlignSelf
    style?: CSSProperties
    id?: string
}

const Flex: React.FC<FlexProps> = ({ children, id, style, ...flexProps }) => (
    <div
        style={{
            display: "flex",
            ...flexProps,
            ...style,
        }}
        id={id}
    >
        {children}
    </div>
)

type FlexColRowProps = Omit<FlexProps, "flexDirection">

export const FlexRow: React.FC<FlexColRowProps> = (props) => (
    <Flex flexDirection="row" {...props} />
)

export const FlexCol: React.FC<FlexColRowProps> = (props) => (
    <Flex flexDirection="column" {...props} />
)
