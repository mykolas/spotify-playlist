import React from "react"

import { FlexCol, FlexRow } from "../../shared/components/Flex"
import { COLORS } from "../../shared/constants/colors"

export const Player: React.SFC = () => (
    <FlexCol
        style={{
            backgroundColor: COLORS.OTHER,
            minHeight: 100,
        }}
        justifyContent="space-around"
    >
        <FlexRow justifyContent="center">
            Currently playing : Led Zeppelin - No Quarter
        </FlexRow>
        <FlexRow justifyContent="center">{"<< [] |> || >>"}</FlexRow>
    </FlexCol>
)
