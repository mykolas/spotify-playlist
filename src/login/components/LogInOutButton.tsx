import React from "react"

import { Button } from "../../shared/components/Button"

export const LogInOutButton: React.SFC<{
    hasToken: boolean
    onLogOut(): void
}> = ({ hasToken, onLogOut }) => {
    const scopes = "user-read-private user-read-email"

    const clientId = "941bb25faca745389398181d68b6c96c"
    const authUrl = `https://accounts.spotify.com/authorize?response_type=token&client_id=${clientId}&scope=${encodeURIComponent(
        scopes,
    )}&redirect_uri=${encodeURIComponent("http://localhost:3000")}`

    const text = hasToken ? "Logout" : "Login"

    const onClick = (e: React.MouseEvent) => {
        if (!hasToken) {
            window.location.href = authUrl
        }

        onLogOut()
        e.preventDefault()
    }

    return <Button onClick={onClick} title={text} />
}
