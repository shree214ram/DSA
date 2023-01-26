https://www.freecodecamp.org/news/how-to-create-react-hooks/
# custom hook
function  myCustomHook = () => {
    const [count,setCount] = useState(0)
    const myHook = () => {
        return (
            <div>Hello</div>
        )
    }
    return [count,myHook]
}
export default myCustomHook;
