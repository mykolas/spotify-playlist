import React from "react"
import { FlexCol, FlexRow } from "./shared/components/Flex"
import { Search } from "./search/components/Search"
import { Player } from "./player/components/Player"
import { Menu } from "./menu/components/Menu"
import "./styles.css"

class App extends React.Component<void, { token?: string; error?: string }> {
    constructor(props: never) {
        super(props)

        const token = window.location.hash
            ?.slice(1)
            ?.split("&")
            ?.find((s) => s.startsWith("access_token"))
            ?.split("=")[1]

        this.state = {
            token,
        }
    }

    logOut = (): void => this.setState({ token: undefined })

    render(): JSX.Element {
        const { token } = this.state

        return (
            <FlexCol flexGrow={1} id="app">
                <FlexRow style={{ flexGrow: 1 }}>
                    <Menu token={token} logOut={this.logOut} />
                    {token && <Search token={token} />}
                </FlexRow>
                <Player />
            </FlexCol>
        )
    }
}

export default App
