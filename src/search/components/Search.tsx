import React from "react"

import { FlexCol, FlexRow } from "../../shared/components/Flex"
import { Input } from "../../shared/components/Input"
import { Button } from "../../shared/components/Button"
import { SearchResultList } from "./SearchResultList"
import { search } from "../../shared/api"

type ResultList = { items: [] }

type TSearchState = {
    searchQuery?: string
    searchResults?: {
        albums: ResultList
        artists: ResultList
        tracks: ResultList
    }
}
type TSearchProps = { token: string }

export class Search extends React.Component<TSearchProps, TSearchState> {
    constructor(props: TSearchProps) {
        super(props)

        this.state = {}
    }

    onSearch = (): void => {
        if (this.state.searchQuery) return

        this.state.searchQuery &&
            search(this.props.token, this.state.searchQuery).then(
                (response) => {
                    this.setState({ searchResults: response })
                },
            )
    }

    onSearchQueryChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        this.setState({ searchQuery: e.target.value })
    }

    render(): JSX.Element {
        return (
            <FlexCol style={{ flexGrow: 1 }}>
                <FlexRow justifyContent="center" style={{ marginBottom: 25 }}>
                    <Input
                        placeholder="Artist/Album/Song"
                        value={this.state.searchQuery}
                        onChange={this.onSearchQueryChange}
                        onEnter={this.onSearch}
                        autoFocus
                    />
                    <Button onClick={this.onSearch} title="Search" />
                </FlexRow>
                <FlexRow
                    justifyContent="space-around"
                    style={{ flexFlow: "wrap" }}
                >
                    <SearchResultList
                        title="Artists"
                        items={this.state.searchResults?.artists?.items}
                    />
                    <SearchResultList
                        title="Albums"
                        items={this.state.searchResults?.albums?.items}
                    />
                    <SearchResultList
                        title="Tracks"
                        items={this.state.searchResults?.tracks?.items}
                    />
                </FlexRow>
            </FlexCol>
        )
    }
}
