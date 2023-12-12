import React from 'react'

export default function Loading({loading}) {
    return (
        <div>
            <div class="spinner-grow text-primary" role="status">
                <span class="sr-only">{loading}</span>
            </div>
        </div>
    )
}
