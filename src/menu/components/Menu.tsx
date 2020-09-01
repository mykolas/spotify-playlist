import React from "react"

import { Button } from "../../shared/components/Button"
import { FlexCol } from "../../shared/components/Flex"
import { LogInOutButton } from "../../login/components/LogInOutButton"
import { COLORS } from "../../shared/constants/colors"

export const Menu: React.SFC<{ token?: string; logOut: () => void }> = ({
    token,
    logOut,
}) => (
    <FlexCol
        style={{
            maxWidth: 250,
            flexGrow: 1,
            backgroundColor: COLORS.OTHER,
        }}
    >
        {token && <Button title="Search" />}
        {token && <Button title="Playlist" />}
        {token && <Button title="Preferred items" />}
        <LogInOutButton hasToken={!!token} onLogOut={logOut} />
    </FlexCol>
)
