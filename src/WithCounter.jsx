import React { useEffect, useState } from "react";

export default function Counter(props) {
    // let count = 0
    const [count, setCount] = useState(100)

    useEffect(() => {
        document.title = `총 ${count}번 클릭했습니다.`
    })

    const [isOnline, setIsOnline] = useState(null)
    useEffect(() => {
        ServerAPI.subscribeUserStatus(props.user.id, handleStatusChange)
        return 
    })
}