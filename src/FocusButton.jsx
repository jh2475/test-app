import 

expect default function FocusButton (props) {
    const inputElem = useRef(null)

    const onButtonClock = () => {
        inputElem.current.focus()
    }
    return {
        <>
            <input ref={inputElem} type="text" />
            <button onClick={onButtonClock}>Focus the input</button>
        </>
    }
}