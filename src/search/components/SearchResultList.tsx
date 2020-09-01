import React, { MouseEventHandler } from "react"
import styled from "styled-components"

import { FlexCol } from "../../shared/components/Flex"
import { COLORS } from "../../shared/constants/colors"

export const SearchResultList: React.FC<{ title: string; items?: [] }> = ({
    title,
    items = null,
}) =>
    items && (
        <FlexCol
            style={{
                minWidth: 250,
                alignItems: "center",
                borderLeft: `2px dotted ${COLORS.DARK_BACKGROUND}`,
                borderBottom: `2px dotted ${COLORS.DARK_BACKGROUND}`,
            }}
        >
            <Title>{title}</Title>
            <ul>
                {items?.map(({ id, name }) => (
                    <ItemLi key={id}>
                        <Icon content="✅" /> /
                        <Icon content="❌" /> / ▶{name}{" "}
                    </ItemLi>
                ))}
            </ul>
        </FlexCol>
    )

const Title = styled.div`
    font-weight: bold;
`

export const ItemLi = styled.li`
    &::before {
        display: inline-block;
        margin-right: 0.2rem;
    }
`

const IconLink = styled.a`
    cursor: "pointer";
`

export const Icon: React.FC<{
    onClick?: MouseEventHandler
    content: string
}> = ({ onClick, content }) => <IconLink onClick={onClick}>{content}</IconLink>
