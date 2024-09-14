import React from "react"

export const Mp3Btn = () => {
    return (
        <form>
            <label>
                Upload file:
                <input type="file" name="file" />
            </label>
            <button type="submit"></button>
        </form>
    )
}